import { Metadata } from 'next'
import { AirFreightContent } from '@/components/AirFreightContent'

export const metadata: Metadata = {
  title: 'Air Freight Services Canada',
  description: 'Fast international shipping, priority handling & customs. Door-to-door options.',
  openGraph: {
    title: 'Air Freight Services Canada',
    description: 'Fast international shipping, priority handling & customs. Door-to-door options.',
  },
}

export default function AirFreightPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Air Freight",
            "provider": {
              "@type": "Organization",
              "name": "Movers Move Freight & Logistics",
              "url": "https://moversmove.ca"
            },
            "areaServed": "Worldwide",
            "brand": "Movers Move",
            "description": "Fast international shipping, priority handling and customs clearance with door-to-door options."
          })
        }}
      />
      <AirFreightContent />
    </>
  )
}
