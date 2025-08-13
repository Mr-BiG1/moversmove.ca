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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { quoteSchema, type QuoteFormData } from '@/lib/schemas'
import { SERVICE_TYPES } from '@/lib/constants'

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [turnstileToken, setTurnstileToken] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      pickupAddress: '',
      dropOffAddress: '',
      description: '',
      preferredDate: '',
      serviceType: 'Local Moves',
      turnstileToken: '',
    },
  })

  const onSubmit = async (data: QuoteFormData) => {
    if (!turnstileToken) {
      setErrorMessage('Please complete the security check')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value.toString())
      })
      formData.append('turnstileToken', turnstileToken)
      formData.append('pageSource', '/quote')

      const response = await fetch('/api/quote', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        reset()
        setTurnstileToken('')
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleTurnstileSuccess = (token: string) => {
    setTurnstileToken(token)
    setValue('turnstileToken', token)
  }

  const handleTurnstileError = () => {
    setTurnstileToken('')
    setValue('turnstileToken', '')
  }

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Quote Request Submitted!
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Thank you for your quote request. Our moving experts will review your information and get back to you within 24 hours with a personalized quote.
        </p>
        <Button
          onClick={() => {
            setSubmitStatus('idle')
            setErrorMessage('')
          }}
          className="bg-primary hover:bg-primary/90"
        >
          Submit Another Request
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Personal Information */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
          Personal Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name *
            </Label>
            <Input
              id="name"
              {...register('name')}
              className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

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
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone')}
            className={`mt-1 ${errors.phone ? 'border-red-500' : ''}`}
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Move Details */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
          Move Details
        </h3>

        <div>
          <Label htmlFor="serviceType" className="text-sm font-medium text-gray-700">
            Service Type *
          </Label>
          <Select
            onValueChange={(value) => setValue('serviceType', value as any)}
            defaultValue="Local Moves"
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select a service type" />
            </SelectTrigger>
            <SelectContent>
              {SERVICE_TYPES.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.serviceType && (
            <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="pickupAddress" className="text-sm font-medium text-gray-700">
            Pickup Address *
          </Label>
          <Textarea
            id="pickupAddress"
            {...register('pickupAddress')}
            className={`mt-1 ${errors.pickupAddress ? 'border-red-500' : ''}`}
            placeholder="Enter complete pickup address"
            rows={3}
          />
          {errors.pickupAddress && (
            <p className="mt-1 text-sm text-red-600">{errors.pickupAddress.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="dropOffAddress" className="text-sm font-medium text-gray-700">
            Drop-off Address
          </Label>
          <Textarea
            id="dropOffAddress"
            {...register('dropOffAddress')}
            className={`mt-1 ${errors.dropOffAddress ? 'border-red-500' : ''}`}
            placeholder="Enter complete drop-off address (if different from pickup)"
            rows={3}
          />
          {errors.dropOffAddress && (
            <p className="mt-1 text-sm text-red-600">{errors.dropOffAddress.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="preferredDate" className="text-sm font-medium text-gray-700">
              Preferred Move Date
            </Label>
            <Input
              id="preferredDate"
              type="date"
              {...register('preferredDate')}
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="description" className="text-sm font-medium text-gray-700">
            Move Description *
          </Label>
          <Textarea
            id="description"
            {...register('description')}
            className={`mt-1 ${errors.description ? 'border-red-500' : ''}`}
            placeholder="Describe your move, including number of rooms, special items, and any specific requirements"
            rows={4}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>
      </div>

      {/* Security Check */}
      <div className="space-y-4">
        <Label className="text-sm font-medium text-gray-700">
          Security Check *
        </Label>
        <div className="flex justify-center">
          <TurnstileWrapper
            onVerify={handleTurnstileSuccess}
            onExpire={handleTurnstileError}
            onError={handleTurnstileError}
            theme="light"
          />
        </div>
        {!turnstileToken && errorMessage && (
          <p className="text-sm text-red-600 text-center">{errorMessage}</p>
        )}
      </div>

      {/* Error Message */}
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3"
        >
          <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-red-800">Submission Error</h4>
            <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
          </div>
        </motion.div>
      )}

      {/* Submit Button */}
      <div className="pt-6">
        <Button
          type="submit"
          disabled={isSubmitting || !turnstileToken}
          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Quote Request'
          )}
        </Button>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          By submitting this form, you agree to our terms of service and privacy policy.
        </p>
      </div>
    </form>
  )
}
