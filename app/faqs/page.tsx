import { Metadata } from 'next'
import { FaqsPageContent } from '@/components/FaqsPageContent'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Moving Services FAQ | Movers Move',
  description: 'Find answers to common questions about our moving services, pricing, insurance, and more. Can\'t find your answer? Ask us directly!',
  openGraph: {
    title: 'Frequently Asked Questions - Moving Services FAQ | Movers Move',
    description: 'Find answers to common questions about our moving services, pricing, insurance, and more.',
  },
}

export default function FaqsPage() {
  return <FaqsPageContent />
}
