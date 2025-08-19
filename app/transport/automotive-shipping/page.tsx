import { Metadata } from 'next'
import { AutomotiveShippingContent } from '@/components/AutomotiveShippingContent'

export const metadata: Metadata = {
  title: 'Automotive Shipping Services Canada',
  description: 'Insured vehicle transport in Canada & cross-border. Door-to-door.',
  openGraph: {
    title: 'Automotive Shipping Services Canada',
    description: 'Insured vehicle transport in Canada & cross-border. Door-to-door.',
  },
}

export default function AutomotiveShippingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Automotive Shipping",
            "provider": {
              "@type": "Organization",
              "name": "Movers Move Freight & Logistics",
              "url": "https://moversmove.ca"
            },
            "areaServed": "Canada",
            "brand": "Movers Move",
            "description": "Insured vehicle transport in Canada and cross-border with door-to-door service."
          })
        }}
      />
      <AutomotiveShippingContent />
    </>
  )
}
