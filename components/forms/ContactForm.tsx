'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { TurnstileWrapper } from '@/components/ui/TurnstileWrapper'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { contactSchema, type ContactFormData } from '@/lib/schemas'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    if (!turnstileToken) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('address', data.address)
      formData.append('inquiry', data.inquiry)
      formData.append('turnstileToken', turnstileToken)
      formData.append('pageSource', '/contact')

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        reset()
        setTurnstileToken(null)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleTurnstileVerify = (token: string) => {
    setTurnstileToken(token)
  }

  const handleTurnstileExpire = () => {
    setTurnstileToken(null)
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
            Full Name *
          </Label>
          <Input
            id="name"
            type="text"
            {...register('name')}
            className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Address Field */}
        <div>
          <Label htmlFor="address" className="text-sm font-medium text-gray-700">
            Address *
          </Label>
          <Input
            id="address"
            type="text"
            {...register('address')}
            className={`mt-1 ${errors.address ? 'border-red-500' : ''}`}
            placeholder="Enter your address"
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <Label htmlFor="inquiry" className="text-sm font-medium text-gray-700">
            Message *
          </Label>
          <Textarea
            id="inquiry"
            {...register('inquiry')}
            rows={4}
            className={`mt-1 ${errors.inquiry ? 'border-red-500' : ''}`}
            placeholder="Tell us about your moving needs or ask any questions..."
          />
          {errors.inquiry && (
            <p className="mt-1 text-sm text-red-600">{errors.inquiry.message}</p>
          )}
        </div>

        {/* Turnstile */}
        <div className="flex justify-center">
          <TurnstileWrapper
            onVerify={handleTurnstileVerify}
            onExpire={handleTurnstileExpire}
            onError={() => {
              setTurnstileToken(null)
              setSubmitStatus('error')
            }}
            theme="light"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting || !turnstileToken}
          className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg font-semibold"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending Message...
            </>
          ) : (
            'Send Message'
          )}
        </Button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg"
          >
            <CheckCircle className="h-5 w-5 text-green-600" />
            <p className="text-green-800 font-medium">
              Thank you! Your message has been sent successfully. We'll get back to you within 2 hours.
            </p>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg"
          >
            <AlertCircle className="h-5 w-5 text-red-600" />
            <p className="text-red-800 font-medium">
              Something went wrong. Please try again later or call us directly.
            </p>
          </motion.div>
        )}

        {/* Form Note */}
        <p className="text-sm text-gray-500 text-center">
          * Required fields. We respect your privacy and will never share your information.
        </p>
      </form>
    </div>
  )
}
