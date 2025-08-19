import { Metadata } from 'next'
import { RoadFreightContent } from '@/components/RoadFreightContent'

export const metadata: Metadata = {
  title: 'Road Freight Services Canada',
  description: 'LTL, FTL & cross-border trucking with real-time tracking and customs clearance.',
  openGraph: {
    title: 'Road Freight Services Canada',
    description: 'LTL, FTL & cross-border trucking with real-time tracking and customs clearance.',
  },
}

export default function RoadFreightPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Road Freight (LTL & FTL)",
            "provider": {
              "@type": "Organization",
              "name": "Movers Move Freight & Logistics",
              "url": "https://moversmove.ca"
            },
            "areaServed": "Canada",
            "brand": "Movers Move",
            "description": "Overland trucking, LTL/FTL, cross-border freight, tracking and customs clearance."
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://moversmove.ca/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Transport",
                "item": "https://moversmove.ca/transport"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Road Freight",
                "item": "https://moversmove.ca/transport/road-freight"
              }
            ]
          })
        }}
      />
      <RoadFreightContent />
    </>
  )
}
