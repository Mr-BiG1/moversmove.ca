import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'International Moves - Worldwide Shipping & Relocation | Movers Move',
  description: 'Worldwide shipping and relocation services with customs expertise. Door-to-door service, documentation assistance, and global network.',
  openGraph: {
    title: 'International Moves - Worldwide Shipping & Relocation | Movers Move',
    description: 'Worldwide shipping and relocation services with customs expertise.',
  },
}

export default function InternationalMovesPage() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            International Moving Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Worldwide shipping and relocation services with customs expertise. Door-to-door service, documentation assistance, and global network.
          </p>
          <p className="text-lg text-gray-500">
            This page is under construction. Please check back soon for complete details about our international moving services.
          </p>
        </div>
      </div>
    </div>
  )
}
