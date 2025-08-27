import { Metadata } from 'next'
import { CommercialMovesContent } from '@/components/CommercialMovesContent'

export const metadata: Metadata = {
  title: 'Commercial Logistics Services | Office & Business Relocation',
  description: 'Professional commercial logistics services for offices, retail stores, and businesses. Minimal disruption, efficient moves, and complete setup services.',
  openGraph: {
    title: 'Commercial Logistics Services | Office & Business Relocation',
    description: 'Professional commercial logistics services for offices, retail stores, and businesses. Minimal disruption, efficient moves, and complete setup services.',
  },
}

export default function CommercialMovesPage() {
  return <CommercialMovesContent />
}
