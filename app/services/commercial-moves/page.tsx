import { Metadata } from 'next'
import { CommercialMovesContent } from '@/components/CommercialMovesContent'

export const metadata: Metadata = {
  title: 'Commercial Moving Services | Office & Business Relocation',
  description: 'Professional commercial moving services for offices, retail stores, and businesses. Minimal disruption, efficient moves, and complete setup services.',
  openGraph: {
    title: 'Commercial Moving Services | Office & Business Relocation',
    description: 'Professional commercial moving services for offices, retail stores, and businesses. Minimal disruption, efficient moves, and complete setup services.',
  },
}

export default function CommercialMovesPage() {
  return <CommercialMovesContent />
}
