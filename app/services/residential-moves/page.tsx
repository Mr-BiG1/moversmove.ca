import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Residential Moves - Home & Apartment Moving | Movers Move',
  description: 'Complete residential moving solutions for homes and apartments. Full-service packing, furniture disassembly, storage solutions, and settling-in assistance.',
  openGraph: {
    title: 'Residential Moves - Home & Apartment Moving | Movers Move',
    description: 'Complete residential moving solutions for homes and apartments.',
  },
}

export default function ResidentialMovesPage() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Residential Moving Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Complete residential moving solutions for homes and apartments. Full-service packing, furniture disassembly, storage solutions, and settling-in assistance.
          </p>
          <p className="text-lg text-gray-500">
            This page is under construction. Please check back soon for complete details about our residential moving services.
          </p>
        </div>
      </div>
    </div>
  )
}
