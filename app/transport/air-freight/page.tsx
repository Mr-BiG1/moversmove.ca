import { Metadata } from 'next'
import { AirFreightContent } from '@/components/AirFreightContent'

export const metadata: Metadata = {
  title: 'Air Freight Services - Worldwide Air Freight Solutions | Movers Move',
  description: 'Worldwide Air Freight services with express delivery, global coverage, priority handling, and fast transit times.',
  openGraph: {
    title: 'Air Freight Services - Worldwide Air Freight Solutions | Movers Move',
    description: 'Worldwide Air Freight services with express delivery and global coverage.',
  },
}

export default function AirFreightPage() {
  return <AirFreightContent />
}
