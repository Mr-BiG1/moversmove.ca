'use client'

import { useState, useEffect } from 'react'
import Turnstile from 'react-turnstile'

interface TurnstileWrapperProps {
  onVerify: (token: string) => void
  onExpire?: () => void
  onError?: () => void
  theme?: 'light' | 'dark'
  className?: string
}

export function TurnstileWrapper({ 
  onVerify, 
  onExpire, 
  onError, 
  theme = 'light',
  className = ''
}: TurnstileWrapperProps) {
  const [isClient, setIsClient] = useState(false)
  const [siteKey, setSiteKey] = useState<string | null>(null)

  useEffect(() => {
    setIsClient(true)
    setSiteKey(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || null)
  }, [])

  // Development mode bypass for testing
  const handleDevModeBypass = () => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Turnstile bypassed in development mode')
      onVerify('dev-mode-bypass-token')
    }
  }

  if (!isClient) {
    return (
      <div className={`p-4 bg-gray-100 border border-gray-200 rounded-lg text-center ${className}`}>
        <p className="text-gray-600 text-sm">Loading security check...</p>
      </div>
    )
  }

  if (!siteKey) {
    return (
      <div className={`p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center ${className}`}>
        <p className="text-yellow-800 text-sm mb-3">
          Turnstile is not configured. Please set NEXT_PUBLIC_TURNSTILE_SITE_KEY in your environment variables.
        </p>
        {process.env.NODE_ENV === 'development' && (
          <button
            onClick={handleDevModeBypass}
            className="px-4 py-2 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700 transition-colors"
          >
            Dev Mode: Bypass Security Check
          </button>
        )}
      </div>
    )
  }

  return (
    <Turnstile
      sitekey={siteKey}
      onVerify={onVerify}
      onExpire={onExpire}
      onError={onError}
      theme={theme}
      className={className}
      refreshExpired="auto"
      language="auto"
    />
  )
}
