import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Automotive Shipping - International Auto Transport | Movers Move',
  description: 'International auto transport with documentation, insurance, and door-to-door service for vehicles worldwide.',
  openGraph: {
    title: 'Automotive Shipping - International Auto Transport | Movers Move',
    description: 'International auto transport with documentation and insurance.',
  },
}

export default function AutomotiveShippingPage() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Automotive Shipping
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            International auto transport with documentation, insurance, and door-to-door service for vehicles worldwide.
          </p>
          <p className="text-lg text-gray-500">
            This page is under construction. Please check back soon for complete details about our automotive shipping services.
          </p>
        </div>
      </div>
    </div>
  )
}
