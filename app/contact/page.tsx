import { Metadata } from 'next'
import { ContactPageContent } from '@/components/ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact Movers Move',
  description: 'Call +1 (249) 979‑2307 or email info@moversmove.ca. Office: 2 County Court Blvd, Unit 333, Brampton, ON.',
  openGraph: {
    title: 'Contact Movers Move',
    description: 'Call +1 (249) 979‑2307 or email info@moversmove.ca. Office: 2 County Court Blvd, Unit 333, Brampton, ON.',
  },
}

export default function ContactPage() {
  return <ContactPageContent />
}
