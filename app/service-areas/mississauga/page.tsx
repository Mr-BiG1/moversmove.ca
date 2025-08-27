import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, CheckCircle, Truck, Shield, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Movers in Mississauga | Local Moving & Logistics',
  description: 'Professional local movers in Mississauga. Same-day moves, packing and furniture protection.',
  openGraph: {
    title: 'Movers in Mississauga | Local Moving & Logistics',
    description: 'Professional local movers in Mississauga. Same-day moves, packing and furniture protection.',
  },
}

const features = [
  {
    icon: Truck,
    title: 'Same-Day Service',
    description: 'Quick and efficient local moves with same-day service available in Mississauga'
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Complete protection for your belongings during the move'
  },
  {
    icon: Users,
    title: 'Local Expertise',
    description: 'Deep knowledge of Mississauga neighborhoods and traffic patterns'
  }
]

const mississaugaAreas = [
  'Port Credit',
  'Streetsville',
  'Meadowvale',
  'Erin Mills',
  'Clarkson',
  'Lorne Park',
  'Malton',
  'Cooksville',
  'Hurontario',
  'Square One'
]

export default function MississaugaPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Movers in Mississauga
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Trusted local logistics services in Mississauga with same-day availability and professional packing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/quote">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:+12499792307">Call +1 (249) 979-2307</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Mississauga Logistics Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're your local Mississauga moving experts with years of experience serving the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mississauga Service Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide logistics services throughout all of Mississauga and surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {mississaugaAreas.map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="font-medium text-gray-900">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Mississauga Logistics Services
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p>
                As your trusted Mississauga moving company, we understand the unique needs of our local community. 
                Whether you're moving within Mississauga or to nearby areas like Brampton, Oakville, or Toronto, 
                our experienced team provides reliable, professional logistics services.
              </p>
              
              <h3>Our Mississauga Logistics Services Include:</h3>
              <ul>
                <li><strong>Residential Moves:</strong> Complete home logistics services with professional packing and unpacking</li>
                <li><strong>Commercial Moves:</strong> Office and business relocation throughout Mississauga</li>
                <li><strong>Same-Day Service:</strong> Quick local moves when you need them most</li>
                <li><strong>Packing Services:</strong> Professional packing with protective materials</li>
                <li><strong>Furniture Protection:</strong> Specialized equipment to protect your valuable items</li>
                <li><strong>Storage Solutions:</strong> Short and long-term storage options</li>
              </ul>

              <h3>Why Choose Movers Move in Mississauga?</h3>
              <p>
                With our office located in Brampton, we're conveniently positioned to serve Mississauga and the entire GTA. 
                We know the city's neighborhoods, traffic patterns, and local regulations. Our team has completed thousands 
                of successful moves in Mississauga and the surrounding area.
              </p>

              <h3>Local Mississauga Landmarks We Serve:</h3>
              <p>
                We provide logistics services near popular Mississauga locations including Square One Shopping Centre, 
                Mississauga City Hall, Celebration Square, Port Credit Marina, the Living Arts Centre, 
                and the Mississauga GO Station. No matter where you're moving in Mississauga, we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Move in Mississauga?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Get your free, no-obligation quote today. Our Mississauga moving experts are ready to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/quote">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:+12499792307">Call +1 (249) 979-2307</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
