import { Metadata } from 'next'
import { InternationalMovesContent } from '@/components/InternationalMovesContent'

export const metadata: Metadata = {
  title: 'International Moving Services | Worldwide Shipping',
  description: 'Professional international moving and shipping services worldwide. Customs clearance, door-to-door delivery, and comprehensive global relocation solutions.',
  openGraph: {
    title: 'International Moving Services | Worldwide Shipping',
    description: 'Professional international moving and shipping services worldwide. Customs clearance, door-to-door delivery, and comprehensive global relocation solutions.',
  },
}

export default function InternationalMovesPage() {
  return <InternationalMovesContent />
}
