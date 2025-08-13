import { Metadata } from 'next'
import { PaymentCalculator } from '@/components/PaymentCalculator'

export const metadata: Metadata = {
  title: 'Moving Cost Calculator - Get an Estimate',
  description: 'Use our free moving cost calculator to get an instant estimate for your move. Calculate costs based on distance, size, and services.',
  openGraph: {
    title: 'Moving Cost Calculator - Get an Estimate',
    description: 'Use our free moving cost calculator to get an instant estimate for your move.',
  },
}

export default function PaymentCalculatorPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Moving Cost Calculator
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Get an instant estimate for your move. Our calculator considers distance, home size, and additional services to provide you with a realistic cost range.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Calculate Your Moving Costs
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Fill in the details below to get an instant estimate. This calculator provides a range based on typical moving costs and can help you budget for your move.
                </p>
              </div>

              <PaymentCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Understanding Your Estimate
              </h2>
              <p className="text-lg text-gray-600">
                Our calculator provides estimates based on industry standards and typical moving costs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">What's Included</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Professional moving team</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Moving truck and equipment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Basic insurance coverage</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Loading and unloading</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Transportation to destination</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Additional Services</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-bold">+</span>
                    <span>Packing and unpacking services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-bold">+</span>
                    <span>Specialty item handling (piano, art)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-bold">+</span>
                    <span>Storage solutions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-bold">+</span>
                    <span>Furniture disassembly/reassembly</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent font-bold">+</span>
                    <span>Extended insurance coverage</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                Important Note
              </h3>
              <p className="text-blue-800">
                This calculator provides estimates only. Final pricing will be determined after a detailed assessment of your specific needs. 
                For an accurate quote, please contact us or use our <a href="/quote" className="underline font-semibold">quote request form</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
