import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Air Freight Services - Worldwide Air Freight Solutions | Movers Move',
  description: 'Worldwide Air Freight services with express delivery, global coverage, priority handling, and fast transit times.',
  openGraph: {
    title: 'Air Freight Services - Worldwide Air Freight Solutions | Movers Move',
    description: 'Worldwide Air Freight services with express delivery and global coverage.',
  },
}

export default function AirFreightPage() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Air Freight Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Worldwide Air Freight services with express delivery, global coverage, priority handling, and fast transit times.
          </p>
          <p className="text-lg text-gray-500">
            This page is under construction. Please check back soon for complete details about our air freight services.
          </p>
        </div>
      </div>
    </div>
  )
}
