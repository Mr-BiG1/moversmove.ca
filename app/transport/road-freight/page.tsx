import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Road Freight Services - Overland Logistics & Cross-border | Movers Move',
  description: 'Overland logistics and cross-border transportation with flexible routes, real-time tracking, and reliable service.',
  openGraph: {
    title: 'Road Freight Services - Overland Logistics & Cross-border | Movers Move',
    description: 'Overland logistics and cross-border transportation services.',
  },
}

export default function RoadFreightPage() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Road Freight Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Overland logistics and cross-border transportation with flexible routes, real-time tracking, and reliable service.
          </p>
          <p className="text-lg text-gray-500">
            This page is under construction. Please check back soon for complete details about our road freight services.
          </p>
        </div>
      </div>
    </div>
  )
}
