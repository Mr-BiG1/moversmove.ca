import { Metadata } from 'next'
import { ServicesPageContent } from '@/components/ServicesPageContent'

export const metadata: Metadata = {
  title: 'Moving Services - Professional Canadian Logistics & Moving',
  description: 'Comprehensive moving services including local moves, international shipping, residential and commercial relocations, specialty moves, and storage solutions.',
  openGraph: {
    title: 'Moving Services - Professional Canadian Logistics & Moving',
    description: 'Comprehensive moving services including local moves, international shipping, residential and commercial relocations, specialty moves, and storage solutions.',
  },
}

export default function ServicesPage() {
  return <ServicesPageContent />
}
