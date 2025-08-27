import { Metadata } from 'next'
import { SpecialtyMovesContent } from '@/components/SpecialtyMovesContent'

export const metadata: Metadata = {
  title: 'Specialty Moves - Piano, Fine Art & Fragile Items | Movers Move',
  description: 'Professional specialty moving services for pianos, fine art, antiques, and fragile items. Climate-controlled transport, white-glove service, and specialized equipment across the globe.',
  keywords: 'piano moving, fine art moving, fragile items, antique moving, specialty moving, climate controlled transport, white glove service',
  openGraph: {
    title: 'Specialty Moves - Piano, Fine Art & Fragile Items | Movers Move',
    description: 'Professional specialty moving services for pianos, fine art, antiques, and fragile items.',
    type: 'website',
    url: 'https://moversmove.ca/services/specialty-moves',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Specialty Moves - Piano, Fine Art & Fragile Items | Movers Move',
    description: 'Professional specialty moving services for pianos, fine art, antiques, and fragile items.',
  },
}

export default function SpecialtyMovesPage() {
  return <SpecialtyMovesContent />
}
