import { Metadata } from 'next'
import { HomePageContent } from '@/components/HomePageContent'

export const metadata: Metadata = {
  title: 'Professional Canadian Logistics & Moving Services',
  description: 'Movers Move provides comprehensive moving services across Canada and internationally. Local moves, international shipping, residential and commercial relocations with 15+ years of experience.',
  openGraph: {
    title: 'Professional Canadian Logistics & Moving Services',
    description: 'Movers Move provides comprehensive moving services across Canada and internationally.',
  },
}

export default function HomePage() {
  return <HomePageContent />
}
