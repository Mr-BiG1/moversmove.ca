import { Redis } from '@upstash/redis';
import { logger } from './utils';

// Rate limiting configuration
const RATE_LIMIT = {
  REQUESTS: 5,
  WINDOW: 10 * 60 * 1000, // 10 minutes in milliseconds
};

// Initialize Redis client if available
let redis: Redis | null = null;

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
}

// In-memory store for development
const memoryStore = new Map<string, { count: number; resetTime: number }>();

// Maximum number of entries to keep in memory store
const maxEntries = 10000;

// Atomic Redis Lua script for rate limiting
// INCRs the key, sets EXPIRE when count==1, ensures EXPIRE if TTL==-1, and returns {count, ttl}
const RATE_LIMIT_SCRIPT = `
  local count = redis.call('INCR', KEYS[1])
  local window = tonumber(ARGV[2])
  if count == 1 then
    redis.call('EXPIRE', KEYS[1], window)
  end
  local ttl = redis.call('TTL', KEYS[1])
  if ttl == -1 then
    redis.call('EXPIRE', KEYS[1], window)
    ttl = redis.call('TTL', KEYS[1])
  end
  return {count, ttl}
`;

// Cleanup function to remove expired entries
const cleanupExpiredEntries = (): void => {
  const now = Date.now();
  for (const [key, entry] of Array.from(memoryStore.entries())) {
    if (now > entry.resetTime) {
      memoryStore.delete(key);
    }
  }
};

// Evict oldest entries when store is full
const evictOldestEntries = (targetSize: number): void => {
  if (memoryStore.size <= targetSize) {
    return;
  }

  // Convert entries to array and sort by resetTime (oldest first)
  const entries = Array.from(memoryStore.entries())
    .sort((a, b) => a[1].resetTime - b[1].resetTime);

  // Delete oldest entries until we're under target size
  const entriesToDelete = entries.slice(0, memoryStore.size - targetSize);
  for (const [key] of entriesToDelete) {
    memoryStore.delete(key);
  }
};

// Start periodic background cleanup (runs every 5 minutes)
// Skip in serverless contexts to avoid timer persisting across cached invocations
const isServerless = 
  typeof process !== 'undefined' && (
    process.env.AWS_LAMBDA_FUNCTION_NAME !== undefined ||
    process.env.LAMBDA_TASK_ROOT !== undefined ||
    process.env.DISABLE_RATE_LIMIT_CLEANUP_TIMER !== undefined
  );

let cleanupInterval: NodeJS.Timeout | undefined;
if (typeof setInterval !== 'undefined' && !isServerless) {
  cleanupInterval = setInterval(() => {
    cleanupExpiredEntries();
  }, 5 * 60 * 1000); // 5 minutes
  
  // Unref the interval to avoid preventing Node.js exit
  if (cleanupInterval && typeof cleanupInterval.unref === 'function') {
    cleanupInterval.unref();
  }
}

// Rate limiting function
export const rateLimit = async (identifier: string): Promise<{
  success: boolean;
  remaining: number;
  resetTime: number;
  error?: string;
}> => {
  const now = Date.now();
  const key = `rate_limit:${identifier}`;

  // Try Redis first if configured
  if (redis) {
    try {
      // Use atomic Lua script to eliminate race conditions and reduce round trips
      const result = await redis.eval(
        RATE_LIMIT_SCRIPT,
        [key],
        [RATE_LIMIT.REQUESTS.toString(), Math.floor(RATE_LIMIT.WINDOW / 1000).toString()]
      ) as [number, number];
      
      const newCount = result[0];
      const ttl = result[1];
      
      // Calculate resetTime from TTL, handling edge cases:
      // -1 means key exists but has no expiry (shouldn't happen after script, but handle it)
      // -2 means key doesn't exist (shouldn't happen after INCR, but handle it)
      let resetTime: number;
      if (ttl === -1 || ttl === -2) {
        // Key has no expiry or doesn't exist, set resetTime based on window
        resetTime = now + RATE_LIMIT.WINDOW;
      } else {
        resetTime = now + ttl * 1000;
      }

      // Check limit after incrementing (atomic operation prevents race conditions)
      if (newCount > RATE_LIMIT.REQUESTS) {
        return {
          success: false,
          remaining: 0,
          resetTime,
          error: 'Rate limit exceeded. Please try again later.',
        };
      }

      return {
        success: true,
        remaining: RATE_LIMIT.REQUESTS - newCount,
        resetTime,
      };
    } catch (redisError) {
      // Log error but fall through to in-memory store
      // Use warn level so production logs clearly show that Redis is unavailable
      logger.warn('Redis rate limiting failed, falling back to in-memory store:', redisError);
      // Continue to in-memory store fallback
    }
  }

  // Use in-memory store as fallback
  try {
    const current = memoryStore.get(key);
    
    if (current && now < current.resetTime) {
      if (current.count >= RATE_LIMIT.REQUESTS) {
        return {
          success: false,
          remaining: 0,
          resetTime: current.resetTime,
          error: 'Rate limit exceeded. Please try again later.',
        };
      }
      
      current.count++;
      // Note: No need to call memoryStore.set() here because current is a reference
      // to the object stored in the Map, so mutating current.count++ already updates it
      
      return {
        success: true,
        remaining: RATE_LIMIT.REQUESTS - current.count,
        resetTime: current.resetTime,
      };
    } else {
      // Clean up expired entries before checking size
      cleanupExpiredEntries();
      
      // Evict oldest entries if store is full before inserting new key
      if (memoryStore.size >= maxEntries) {
        evictOldestEntries(maxEntries - 1);
      }
      
      // Reset or create new entry
      const newEntry = {
        count: 1,
        resetTime: now + RATE_LIMIT.WINDOW,
      };
      
      memoryStore.set(key, newEntry);
      
      return {
        success: true,
        remaining: RATE_LIMIT.REQUESTS - 1,
        resetTime: newEntry.resetTime,
      };
    }
  } catch (error) {
    // If all rate limiting fails, allow the request but log the error
    logger.error('Rate limiting error:', error);
    // Return success to not block users when rate limiting is unavailable
    return {
      success: true,
      remaining: RATE_LIMIT.REQUESTS,
      resetTime: Date.now() + RATE_LIMIT.WINDOW,
    };
  }
};

// Get client IP from request
export const getClientIP = (request: Request): string => {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  if (cfConnectingIP) {
    return cfConnectingIP;
  }
  
  // Fallback for development
  return '127.0.0.1';
};
