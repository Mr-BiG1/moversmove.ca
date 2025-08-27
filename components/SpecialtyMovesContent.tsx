'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Music, 
  Palette, 
  Shield, 
  Thermometer, 
  Package, 
  Clock, 
  MapPin, 
  CheckCircle,
  Truck,
  Users,
  Award,
  Phone
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CtaQuote } from '@/components/CtaQuote'

const specialtyServices = [
  {
    icon: Music,
    title: 'Piano Moving',
    description: 'Professional piano moving with specialized equipment and trained technicians',
    features: [
      'Grand piano and upright piano moving',
      'Climate-controlled transport',
      'Professional tuning after delivery',
      'Insurance coverage included'
    ]
  },
  {
    icon: Palette,
    title: 'Fine Art & Antiques',
    description: 'White-glove service for valuable artwork and antique collections',
    features: [
      'Custom crating and packaging',
      'Climate and humidity control',
      'Security escort service',
      'Museum-quality handling'
    ]
  },
  {
    icon: Shield,
    title: 'Fragile Items',
    description: 'Extra care for delicate and valuable possessions',
    features: [
      'Glass and ceramic protection',
      'Electronics and appliances',
      'Musical instruments',
      'Collectibles and memorabilia'
    ]
  },
  {
    icon: Thermometer,
    title: 'Climate Control',
    description: 'Temperature and humidity monitoring throughout transport',
    features: [
      'Real-time monitoring',
      'Climate-controlled vehicles',
      'Specialized storage facilities',
      'Documentation and reporting'
    ]
  }
]

const whyChooseSpecialty = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Trained specialists with years of experience in handling valuable items'
  },
  {
    icon: Shield,
    title: 'Full Insurance',
    description: 'Comprehensive coverage for all specialty items during transport'
  },
  {
    icon: Clock,
    title: 'Careful Planning',
    description: 'Detailed planning and coordination for every specialty move'
  },
  {
    icon: Award,
    title: 'Quality Guarantee',
    description: '100% satisfaction guarantee with our specialty moving services'
  }
]

const specialtyProcess = [
  {
    step: '1',
    title: 'Assessment & Planning',
    description: 'Detailed evaluation of your specialty items and custom moving plan'
  },
  {
    step: '2',
    title: 'Specialized Packing',
    description: 'Professional packing with custom materials and climate control'
  },
  {
    step: '3',
    title: 'Secure Transport',
    description: 'Climate-controlled transport with real-time monitoring'
  },
  {
    step: '4',
    title: 'Careful Delivery',
    description: 'White-glove delivery and setup at your new location'
  }
]

export function SpecialtyMovesContent() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Specialty Moving Services
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Professional moving services for pianos, fine art, antiques, and fragile items with climate-controlled transport and white-glove service
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/quote">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Get Specialty Quote
                </Button>
              </Link>
              <a href="tel:+12499792307">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300"
                >
                  Call for Consultation
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Specialty Moving Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional handling of your most valuable and delicate possessions with specialized equipment and expert care
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialtyServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Specialty Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Specialty Moving Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our professional specialty logistics services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseSpecialty.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Moving Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Specialty Moving Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A carefully planned and executed process to ensure your valuable items arrive safely
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialtyProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {index < specialtyProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Specialized Equipment & Technology
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We invest in the latest technology and equipment to ensure your specialty items are handled with the utmost care and precision.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Package className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Custom Crating</h3>
                    <p className="text-gray-600">Museum-quality crating for artwork and antiques</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Truck className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Climate-Controlled Vehicles</h3>
                    <p className="text-gray-600">Temperature and humidity monitoring throughout transport</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Security Systems</h3>
                    <p className="text-gray-600">GPS tracking and security monitoring for valuable items</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Thermometer className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Environmental Monitoring</h3>
                    <p className="text-gray-600">Real-time temperature and humidity tracking</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Specialty Moving Checklist</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Detailed item assessment and documentation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Custom packing materials and techniques</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Climate-controlled transport vehicles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Professional installation and setup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Post-move inspection and documentation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Comprehensive insurance coverage</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services & Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialty Logistics Services & Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional specialty logistics services throughout the GTA and beyond
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Service Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/service-areas/brampton" className="text-primary hover:text-accent transition-colors">
                  Movers in Brampton
                </Link>
                <Link href="/service-areas/mississauga" className="text-primary hover:text-accent transition-colors">
                  Movers in Mississauga
                </Link>
                <Link href="/transport/road-freight" className="text-primary hover:text-accent transition-colors">
                  Road Freight Services
                </Link>
                <Link href="/services/residential-moves" className="text-primary hover:text-accent transition-colors">
                  Residential Moves
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Services</h3>
              <div className="space-y-3">
                <Link href="/transport/air-freight" className="block text-primary hover:text-accent transition-colors">
                  Air Freight Services
                </Link>
                <Link href="/transport/sea-freight" className="block text-primary hover:text-accent transition-colors">
                  Sea Freight Services
                </Link>
                <Link href="/transport/automotive-shipping" className="block text-primary hover:text-accent transition-colors">
                  Automotive Shipping
                </Link>
                <Link href="/contact" className="block text-primary hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaQuote />
    </div>
  )
}
