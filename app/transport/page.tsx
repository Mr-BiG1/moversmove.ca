import { Metadata } from 'next'
import { TransportPageContent } from '@/components/TransportPageContent'

export const metadata: Metadata = {
  title: 'Transport Methods - Sea, Air, Road & Automotive Shipping | Movers Move',
  description: 'Comprehensive transportation solutions including sea freight, air freight, road freight, and automotive shipping services.',
  openGraph: {
    title: 'Transport Methods - Sea, Air, Road & Automotive Shipping | Movers Move',
    description: 'Comprehensive transportation solutions including sea freight, air freight, road freight, and automotive shipping services.',
  },
}

export default function TransportPage() {
  return <TransportPageContent />
}
