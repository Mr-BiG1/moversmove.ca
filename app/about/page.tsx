import { Metadata } from 'next'
import { AboutPageContent } from '@/components/AboutPageContent'

export const metadata: Metadata = {
  title: 'About Movers Move',
  description: 'Brampton logistics & moving company with 15+ years experience and 50,000+ successful moves.',
  openGraph: {
    title: 'About Movers Move',
    description: 'Brampton logistics & moving company with 15+ years experience and 50,000+ successful moves.',
  },
}

export default function AboutPage() {
  return <AboutPageContent />
}
