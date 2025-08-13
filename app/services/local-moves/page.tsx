import { Metadata } from 'next'
import { LocalMovesContent } from '@/components/LocalMovesContent'

export const metadata: Metadata = {
  title: 'Local Moves - Professional Local Moving Services | Movers Move',
  description: 'Professional local moving services within the GTA and surrounding areas. Same-day service, professional packing, furniture protection, and local expertise.',
  openGraph: {
    title: 'Local Moves - Professional Local Moving Services | Movers Move',
    description: 'Professional local moving services within the GTA and surrounding areas.',
  },
}

export default function LocalMovesPage() {
  return <LocalMovesContent />
}
