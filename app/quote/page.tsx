import { Metadata } from 'next'
import { QuoteForm } from '@/components/forms/QuoteForm'

export const metadata: Metadata = {
  title: 'Free Moving Quote',
  description: 'Request a free, no-obligation quote. Transparent pricing.',
  openGraph: {
    title: 'Free Moving Quote',
    description: 'Request a free, no-obligation quote. Transparent pricing.',
  },
}

export default function QuotePage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your Free Quote
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Tell us about your move and we'll provide you with a detailed, no-obligation quote tailored to your needs.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Request Your Quote
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Fill out the form below and our moving experts will get back to you within 24 hours with a personalized quote.
                </p>
              </div>

              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Movers Move?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to providing you with the best moving experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Free Quotes</h3>
              <p className="text-gray-600">
                No hidden fees or surprises. Get a transparent, detailed quote upfront.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Response</h3>
              <p className="text-gray-600">
                Receive your personalized quote within 24 hours of submitting your request.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fully Insured</h3>
              <p className="text-gray-600">
                Complete protection for your belongings with comprehensive insurance coverage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
