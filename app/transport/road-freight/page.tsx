import { Metadata } from 'next'
import { RoadFreightContent } from '@/components/RoadFreightContent'

export const metadata: Metadata = {
  title: 'Road Freight Services - Overland Logistics & Cross-border | Movers Move',
  description: 'Overland logistics and cross-border transportation with flexible routes, real-time tracking, and reliable service.',
  openGraph: {
    title: 'Road Freight Services - Overland Logistics & Cross-border | Movers Move',
    description: 'Overland logistics and cross-border transportation services.',
  },
}

export default function RoadFreightPage() {
  return <RoadFreightContent />
}
