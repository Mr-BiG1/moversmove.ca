import { Metadata } from 'next'
import { HomePageContent } from '@/components/HomePageContent'

export const metadata: Metadata = {
  title: 'Movers Move Freight & Logistics',
  description: 'Professional moving, freight & logistics across Canada. Brampton & GTA specialists. Get a free quote.',
  openGraph: {
    title: 'Movers Move Freight & Logistics',
    description: 'Professional moving, freight & logistics across Canada. Brampton & GTA specialists. Get a free quote.',
  },
}

export default function HomePage() {
  return <HomePageContent />
}
