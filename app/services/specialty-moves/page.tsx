import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Specialty Moves - Piano, Fine Art & Fragile Items | Movers Move',
  description: 'Specialized moving for pianos, fine art, and fragile items. Piano moving, fine art handling, climate control, and specialized equipment.',
  openGraph: {
    title: 'Specialty Moves - Piano, Fine Art & Fragile Items | Movers Move',
    description: 'Specialized moving for pianos, fine art, and fragile items.',
  },
}

export default function SpecialtyMovesPage() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Specialty Moving Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Specialized moving for pianos, fine art, and fragile items. Piano moving, fine art handling, climate control, and specialized equipment.
          </p>
          <p className="text-lg text-gray-500">
            This page is under construction. Please check back soon for complete details about our specialty moving services.
          </p>
        </div>
      </div>
    </div>
  )
}
