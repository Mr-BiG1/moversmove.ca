import { Metadata } from 'next'
import { SeaFreightContent } from '@/components/SeaFreightContent'

export const metadata: Metadata = {
  title: 'Sea Freight Services - International Shipping Solutions',
  description: 'Professional sea freight services for international shipping. Container shipping, bulk cargo, and worldwide logistics solutions with competitive rates.',
  openGraph: {
    title: 'Sea Freight Services - International Shipping Solutions',
    description: 'Professional sea freight services for international shipping.',
  },
}

export default function SeaFreightPage() {
  return <SeaFreightContent />
}
