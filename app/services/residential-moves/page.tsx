import { Metadata } from 'next'
import { ResidentialMovesContent } from '@/components/ResidentialMovesContent'

export const metadata: Metadata = {
  title: 'Residential Logistics Services | Apartment & House Moves',
  description: 'Complete residential logistics services for apartments, houses, and condos. Professional packing, furniture protection, and stress-free home relocation.',
  openGraph: {
    title: 'Residential Logistics Services | Apartment & House Moves',
    description: 'Complete residential logistics services for apartments, houses, and condos. Professional packing, furniture protection, and stress-free home relocation.',
  },
}

export default function ResidentialMovesPage() {
  return <ResidentialMovesContent />
}
