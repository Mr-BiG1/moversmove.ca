import { Metadata } from 'next'
import { AutomotiveShippingContent } from '@/components/AutomotiveShippingContent'

export const metadata: Metadata = {
  title: 'Automotive Shipping - International Auto Transport | Movers Move',
  description: 'International auto transport with documentation, insurance, and door-to-door service for vehicles worldwide.',
  openGraph: {
    title: 'Automotive Shipping - International Auto Transport | Movers Move',
    description: 'International auto transport with documentation and insurance.',
  },
}

export default function AutomotiveShippingPage() {
  return <AutomotiveShippingContent />
}
