import { Metadata } from 'next'
import { AboutPageContent } from '@/components/AboutPageContent'

export const metadata: Metadata = {
  title: 'About Us - Professional Canadian Moving & Logistics Company | Movers Move',
  description: 'Learn about Movers Move, a trusted Canadian moving and logistics company with 15+ years of experience in local, national, and international relocations.',
  openGraph: {
    title: 'About Us - Professional Canadian Moving & Logistics Company | Movers Move',
    description: 'Learn about Movers Move, a trusted Canadian moving and logistics company with 15+ years of experience.',
  },
}

export default function AboutPage() {
  return <AboutPageContent />
}
