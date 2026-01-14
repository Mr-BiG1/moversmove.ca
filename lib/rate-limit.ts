import { Redis } from '@upstash/redis';

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
      const pipeline = redis.pipeline();
      
      // Get current count and reset time
      pipeline.get(key);
      pipeline.ttl(key);
      
      const [count, ttl] = await pipeline.exec();
      const currentCount = count ? parseInt(count as string) : 0;
      const resetTime = ttl ? now + (ttl as number) * 1000 : now + RATE_LIMIT.WINDOW;

      if (currentCount >= RATE_LIMIT.REQUESTS) {
        return {
          success: false,
          remaining: 0,
          resetTime,
          error: 'Rate limit exceeded. Please try again later.',
        };
      }

      // Increment counter
      await redis.incr(key);
      
      // Set expiry if key is new
      if (currentCount === 0) {
        await redis.expire(key, Math.floor(RATE_LIMIT.WINDOW / 1000));
      }

      return {
        success: true,
        remaining: RATE_LIMIT.REQUESTS - currentCount - 1,
        resetTime,
      };
    } catch (redisError) {
      // Log error but fall through to in-memory store
      // Use warn level so production logs clearly show that Redis is unavailable
      console.warn('Redis rate limiting failed, falling back to in-memory store:', redisError);
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
      memoryStore.set(key, current);
      
      return {
        success: true,
        remaining: RATE_LIMIT.REQUESTS - current.count,
        resetTime: current.resetTime,
      };
    } else {
      // Reset or create new entry
      const newEntry = {
        count: 1,
        resetTime: now + RATE_LIMIT.WINDOW,
      };
      
      memoryStore.set(key, newEntry);
      
      // Clean up old entries
      for (const [k, v] of Array.from(memoryStore.entries())) {
        if (now > v.resetTime) {
          memoryStore.delete(k);
        }
      }
      
      return {
        success: true,
        remaining: RATE_LIMIT.REQUESTS - 1,
        resetTime: newEntry.resetTime,
      };
    }
  } catch (error) {
    // If all rate limiting fails, allow the request but log the error
    console.error('Rate limiting error:', error);
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
