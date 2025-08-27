import { Metadata } from 'next'
import { ServicesPageContent } from '@/components/ServicesPageContent'

export const metadata: Metadata = {
  title: 'Logistics Services - Professional Canadian Logistics & Moving',
  description: 'Comprehensive logistics services including local moves, international shipping, residential and commercial relocations, specialty moves, and storage solutions.',
  openGraph: {
    title: 'Logistics Services - Professional Canadian Logistics & Moving',
    description: 'Comprehensive logistics services including local moves, international shipping, residential and commercial relocations, specialty moves, and storage solutions.',
  },
}

export default function ServicesPage() {
  return <ServicesPageContent />
}
