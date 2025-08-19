import { Metadata } from 'next'
import { SeaFreightContent } from '@/components/SeaFreightContent'

export const metadata: Metadata = {
  title: 'Sea Freight Services Canada',
  description: 'Cost-effective container shipping (FCL/LCL), insurance & customs support.',
  openGraph: {
    title: 'Sea Freight Services Canada',
    description: 'Cost-effective container shipping (FCL/LCL), insurance & customs support.',
  },
}

export default function SeaFreightPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Sea Freight (FCL/LCL)",
            "provider": {
              "@type": "Organization",
              "name": "Movers Move Freight & Logistics",
              "url": "https://moversmove.ca"
            },
            "areaServed": "Worldwide",
            "brand": "Movers Move",
            "description": "Cost-effective container shipping, insurance and customs support for international freight."
          })
        }}
      />
      <SeaFreightContent />
    </>
  )
}
