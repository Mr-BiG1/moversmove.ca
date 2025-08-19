import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { COMPANY_INFO } from '@/lib/constants'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://moversmove.ca'),
  title: {
    default: 'Movers Move Freight & Logistics',
    template: '%s | Movers Move'
  },
  description: 'Professional moving, freight and logistics services across Canada. Brampton & GTA specialists. Get a free quote.',
  keywords: [
    'moving services',
    'logistics',
    'Canadian moving company',
    'residential moves',
    'commercial moves',
    'international shipping',
    'local moves',
    'storage solutions',
    'Brampton moving',
    'GTA moving services',
    'freight services',
    'road freight',
    'air freight',
    'sea freight',
    'automotive shipping'
  ],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: { 
    canonical: 'https://moversmove.ca' 
  },
  openGraph: {
    type: 'website',
    siteName: 'Movers Move',
    url: 'https://moversmove.ca',
    title: 'Movers Move Freight & Logistics',
    description: 'Professional moving, freight and logistics services across Canada.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: COMPANY_INFO.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Movers Move Freight & Logistics',
    description: 'Professional moving, freight and logistics services across Canada.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A5DB5" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* LocalBusiness Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              "name": "Movers Move Freight & Logistics",
              "url": "https://moversmove.ca",
              "telephone": "+1-249-979-2307",
              "email": "info@moversmove.ca",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2 County Court Blvd, Unit 333",
                "addressLocality": "Brampton",
                "addressRegion": "ON",
                "addressCountry": "CA"
              },
              "areaServed": ["Brampton", "GTA", "Ontario", "Canada"],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
