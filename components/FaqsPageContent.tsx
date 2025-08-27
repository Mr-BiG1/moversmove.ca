'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  HelpCircle, 
  MessageCircle, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  Send
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { CtaQuote } from '@/components/CtaQuote'
import { faqQuestionSchema, type FaqQuestionFormData } from '@/lib/schemas'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TurnstileWrapper } from '@/components/ui/TurnstileWrapper'

const faqs = [
  {
    category: 'General Services',
    questions: [
      {
        question: 'What moving services do you offer?',
        answer: 'We offer comprehensive moving services including local moves, international shipping, residential and commercial relocations, specialty moves (pianos, fine art), and storage solutions. Our services cover the entire Greater Toronto Area and beyond.'
      },
      {
        question: 'What areas do you serve?',
        answer: 'We serve the entire Greater Toronto Area (GTA) including Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, Burlington, Ajax, Pickering, Whitby, Oshawa, Newmarket, Aurora, and surrounding communities. We also provide long-distance and international moving services.'
      },
      {
        question: 'Are you licensed and insured?',
        answer: 'Yes, we are fully licensed and carry comprehensive insurance coverage to protect your belongings during the entire moving process. We also have additional coverage options available for high-value items.'
      }
    ]
  },
  {
    category: 'Pricing & Estimates',
    questions: [
      {
        question: 'Do you provide free estimates?',
        answer: 'Yes, we offer free, no-obligation estimates for all our moving services. We can provide quotes over the phone for basic moves or schedule an in-home consultation for more accurate estimates, especially for larger moves.'
      },
      {
        question: 'How do you calculate moving costs?',
        answer: 'Our pricing is based on several factors including distance, load size/weight, service level (basic, standard, premium), additional services (packing, unpacking, storage), and any special requirements. We provide transparent pricing with no hidden fees.'
      },
      {
        question: 'Do you offer any discounts?',
        answer: 'Yes, we offer discounts for seniors, military personnel, and off-season moves (October through April). We also provide package deals when combining multiple services like packing and storage.'
      }
    ]
  },
  {
    category: 'Moving Process',
    questions: [
      {
        question: 'How far in advance should I book my move?',
        answer: 'We recommend booking at least 2-4 weeks in advance for local moves and 6-8 weeks for international moves. During peak season (May-September), earlier booking is advised. We can often accommodate last-minute moves when possible.'
      },
      {
        question: 'What happens on moving day?',
        answer: 'Our team arrives at the scheduled time, conducts a final walkthrough, carefully loads your belongings using professional equipment, transports everything to your new location, and assists with unloading and basic setup. We ensure everything is handled with care.'
      },
      {
        question: 'Do you provide packing services?',
        answer: 'Yes, we offer full packing services including professional packing materials, careful wrapping of fragile items, furniture disassembly/reassembly, and unpacking at your new location. We can pack everything or just specific rooms/items.'
      }
    ]
  },
  {
    category: 'Special Items & Storage',
    questions: [
      {
        question: 'Can you move pianos and fine art?',
        answer: 'Absolutely! We specialize in moving delicate items like pianos, fine art, antiques, and musical instruments. Our team uses specialized equipment and techniques to ensure these valuable items are transported safely and securely.'
      },
      {
        question: 'Do you offer storage solutions?',
        answer: 'Yes, we provide both short-term and long-term storage solutions. Our facilities are climate-controlled, secure, and offer flexible terms. We can also coordinate storage with your move for seamless logistics.'
      },
      {
        question: 'What about appliances and electronics?',
        answer: 'We handle all types of appliances and electronics including refrigerators, washers, dryers, TVs, and computers. We properly disconnect, secure, and reconnect these items at your new location.'
      }
    ]
  },
  {
    category: 'International & Long Distance',
    questions: [
      {
        question: 'Do you handle international moves?',
        answer: 'Yes, we provide comprehensive international moving services including customs clearance, documentation assistance, door-to-door service, and coordination with our global network of partners. We handle moves to and from Canada.'
      },
      {
        question: 'How long do international moves take?',
        answer: 'International move timelines vary by destination and transport method. Sea freight typically takes 2-6 weeks, air freight 1-3 days, and road freight 1-7 days depending on distance. We provide detailed timelines during planning.'
      },
      {
        question: 'What documentation is required for international moves?',
        answer: 'Requirements vary by country but typically include passports, visas, customs declarations, inventory lists, and sometimes permits for specific items. Our international moving specialists guide you through all requirements.'
      }
    ]
  },
  {
    category: 'Insurance & Claims',
    questions: [
      {
        question: 'What insurance coverage do you provide?',
        answer: 'We provide comprehensive basic coverage for all moves. Additional coverage options are available for high-value items, full replacement value, and specialized items. We recommend reviewing your specific needs with our team.'
      },
      {
        question: 'What if something gets damaged during the move?',
        answer: 'While we take every precaution, if damage occurs, we have a straightforward claims process. Document the damage immediately, and we\'ll work quickly to resolve the issue. Our insurance coverage ensures you\'re protected.'
      },
      {
        question: 'Are my belongings insured during storage?',
        answer: 'Yes, items in our storage facilities are covered by our insurance. We also offer additional coverage options for high-value items and can work with your existing insurance provider if needed.'
      }
    ]
  }
]

export function FaqsPageContent() {
  const [openCategory, setOpenCategory] = useState<string | null>('General Services')
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set())
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FaqQuestionFormData>({
    resolver: zodResolver(faqQuestionSchema)
  })

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category)
  }

  const toggleQuestion = (questionId: string) => {
    const newOpenQuestions = new Set(openQuestions)
    if (newOpenQuestions.has(questionId)) {
      newOpenQuestions.delete(questionId)
    } else {
      newOpenQuestions.add(questionId)
    }
    setOpenQuestions(newOpenQuestions)
  }

  const onSubmit = async (data: FaqQuestionFormData) => {
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
      formData.append('question', data.question)
      formData.append('turnstileToken', turnstileToken)
      formData.append('pageSource', '/faqs')

      const response = await fetch('/api/faq-question', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        reset()
        setTurnstileToken(null)
      } else {
        console.error('FAQ submission failed:', result.error)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('FAQ question submission error:', error)
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
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <HelpCircle className="h-20 w-20 mx-auto mb-6 text-white/80" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Find answers to common questions about our moving services, pricing, and process
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our comprehensive FAQ organized by topic to find the information you need
            </p>
          </motion.div>

          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.category)}
                  className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {category.category}
                    </h3>
                    <div className={`transform transition-transform ${openCategory === category.category ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {openCategory === category.category && (
                  <div className="px-6 py-4 bg-white">
                    <div className="space-y-4">
                      {category.questions.map((faq, questionIndex) => (
                        <div key={questionIndex} className="border-b border-gray-100 last:border-b-0">
                          <button
                            onClick={() => toggleQuestion(`${category.category}-${questionIndex}`)}
                            className="w-full py-3 text-left hover:bg-gray-50 transition-colors rounded px-2"
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="text-lg font-medium text-gray-900 pr-4">
                                {faq.question}
                              </h4>
                              <div className={`transform transition-transform ${openQuestions.has(`${category.category}-${questionIndex}`) ? 'rotate-180' : ''}`}>
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </div>
                          </button>
                          
                          {openQuestions.has(`${category.category}-${questionIndex}`) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-2 pb-3"
                            >
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ask a Question Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Didn't Find Your Answer?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ask us directly! Fill out the form below and we'll get back to you within 2 hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <Label htmlFor="question" className="text-sm font-medium text-gray-700">
                  Your Question *
                </Label>
                <Textarea
                  id="question"
                  {...register('question')}
                  rows={4}
                  className={`mt-1 ${errors.question ? 'border-red-500' : ''}`}
                  placeholder="Ask us anything about our moving services..."
                />
                {errors.question && (
                  <p className="mt-1 text-sm text-red-600">{errors.question.message}</p>
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
                    Sending Question...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Ask Your Question
                  </>
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
                    Thank you! Your question has been sent successfully. We'll get back to you within 2 hours.
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
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Our team is here to help! Call us directly for immediate assistance or schedule a consultation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-3 text-2xl font-bold">
                <span>📞</span>
                                 <span>+1 (249) 979-2307</span>
              </div>
              <div className="flex items-center space-x-3 text-lg">
                <span>⏰</span>
                <span>Available 24/7</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <p className="text-primary-100">
                <strong>Expert Support:</strong> Our moving specialists have years of experience and can answer any question about our services, pricing, or moving process. Don't hesitate to reach out!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaQuote />
    </div>
  )
}
