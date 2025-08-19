import { Metadata } from 'next'
import { FaqsPageContent } from '@/components/FaqsPageContent'

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Answers about pricing, service areas, estimates, and process.',
  openGraph: {
    title: 'FAQs',
    description: 'Answers about pricing, service areas, estimates, and process.',
  },
}

export default function FaqsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you provide free estimates?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer free, no-obligation estimates for all moving and freight services."
                }
              },
              {
                "@type": "Question",
                "name": "What areas do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve Brampton, GTA, Ontario and offer Canada-wide and cross-border services."
                }
              },
              {
                "@type": "Question",
                "name": "Are you licensed and insured?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all services are fully insured and we operate with licensed professionals."
                }
              }
            ]
          })
        }}
      />
      <FaqsPageContent />
    </>
  )
}
