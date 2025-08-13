import { Metadata } from 'next'
import { ContactPageContent } from '@/components/ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch | Movers Move',
  description: 'Contact Movers Move for professional moving services. Get in touch for quotes, questions, or support. We\'re here to help with your moving needs.',
  openGraph: {
    title: 'Contact Us - Get in Touch | Movers Move',
    description: 'Contact Movers Move for professional moving services and support.',
  },
}

export default function ContactPage() {
  return <ContactPageContent />
}
