interface TurnstileResponse {
  success: boolean;
  error?: string;
}

export async function verifyTurnstile(token: string): Promise<TurnstileResponse> {
  try {
    // Development mode bypass
    if (process.env.NODE_ENV === 'development' && token === 'dev-mode-bypass-token') {
      console.warn('Turnstile verification bypassed in development mode');
      return { success: true };
    }

    // Check if secret key is configured
    if (!process.env.TURNSTILE_SECRET_KEY) {
      console.error('Turnstile secret key not configured');
      return { 
        success: false, 
        error: 'Turnstile not configured on server' 
      };
    }

    // Validate token format
    if (!token || token.length < 10) {
      return { 
        success: false, 
        error: 'Invalid token format' 
      };
    }

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: process.env.NODE_ENV === 'production' ? undefined : '127.0.0.1',
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    // Log verification result for debugging (remove in production)
    if (process.env.NODE_ENV === 'development') {
      console.log('Turnstile verification result:', result);
    }

    if (result.success === true) {
      return { success: true };
    } else {
      const errorCodes = result['error-codes'] || ['unknown_error'];
      const errorMessages = errorCodes.map((code: string) => {
        switch (code) {
          case 'missing-input-secret':
            return 'Server configuration error';
          case 'invalid-input-secret':
            return 'Server configuration error';
          case 'missing-input-response':
            return 'Missing verification token';
          case 'invalid-input-response':
            return 'Invalid verification token';
          case 'bad-request':
            return 'Bad request format';
          case 'timeout-or-duplicate':
            return 'Token expired or already used';
          case 'internal-error':
            return 'Cloudflare service error';
          default:
            return `Verification failed: ${code}`;
        }
      });
      
      return { 
        success: false, 
        error: errorMessages.join(', ') 
      };
    }
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return { 
      success: false, 
      error: 'Verification service unavailable' 
    };
  }
}