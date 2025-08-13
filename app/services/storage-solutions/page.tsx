import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Storage Solutions - Secure Short & Long-term Storage | Movers Move',
  description: 'Secure short-term and long-term storage options. Climate-controlled units, 24/7 security, inventory management, and flexible terms.',
  openGraph: {
    title: 'Storage Solutions - Secure Short & Long-term Storage | Movers Move',
    description: 'Secure short-term and long-term storage options.',
  },
}

export default function StorageSolutionsPage() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Storage Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Secure short-term and long-term storage options. Climate-controlled units, 24/7 security, inventory management, and flexible terms.
          </p>
          <p className="text-lg text-gray-500">
            This page is under construction. Please check back soon for complete details about our storage solutions.
          </p>
        </div>
      </div>
    </div>
  )
}
