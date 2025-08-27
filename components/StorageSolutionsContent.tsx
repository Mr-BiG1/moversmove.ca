'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Warehouse, 
  Shield, 
  Thermometer, 
  Clock, 
  Package, 
  MapPin, 
  CheckCircle,
  Truck,
  Users,
  Award,
  Phone,
  Lock,
  Eye,
  FileText,
  Calendar
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CtaQuote } from '@/components/CtaQuote'

const storageServices = [
  {
    icon: Warehouse,
    title: 'Climate-Controlled Storage',
    description: 'Temperature and humidity-controlled units for sensitive items',
    features: [
      'Temperature monitoring 24/7',
      'Humidity control systems',
      'Ideal for electronics and antiques',
      'Prevents mold and damage'
    ]
  },
  {
    icon: Shield,
    title: 'Secure Storage Facilities',
    description: 'State-of-the-art security with 24/7 monitoring',
    features: [
      '24/7 security surveillance',
      'Access control systems',
      'Fire suppression systems',
      'Insurance coverage included'
    ]
  },
  {
    icon: Clock,
    title: 'Flexible Storage Terms',
    description: 'Short-term and long-term storage solutions',
    features: [
      'Monthly, quarterly, or yearly terms',
      'No long-term commitments',
      'Easy access to your items',
      'Competitive pricing'
    ]
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Professional inventory tracking and management',
    features: [
      'Detailed item documentation',
      'Digital inventory system',
      'Regular status updates',
      'Easy item retrieval'
    ]
  }
]

const whyChooseStorage = [
  {
    icon: Shield,
    title: 'Maximum Security',
    description: 'Advanced security systems and 24/7 monitoring'
  },
  {
    icon: Thermometer,
    title: 'Climate Control',
    description: 'Temperature and humidity-controlled environments'
  },
  {
    icon: Clock,
    title: 'Flexible Access',
    description: '24/7 access to your stored items when needed'
  },
  {
    icon: Award,
    title: 'Professional Service',
    description: 'Experienced team with comprehensive insurance'
  }
]

const storageProcess = [
  {
    step: '1',
    title: 'Assessment & Planning',
    description: 'Evaluate your storage needs and create a custom plan'
  },
  {
    step: '2',
    title: 'Secure Transport',
    description: 'Professional pickup and secure delivery to storage facility'
  },
  {
    step: '3',
    title: 'Safe Storage',
    description: 'Climate-controlled storage with 24/7 security monitoring'
  },
  {
    step: '4',
    title: 'Easy Access',
    description: 'Convenient access to your items whenever you need them'
  }
]

const storageFeatures = [
  {
    icon: Lock,
    title: 'Access Control',
    description: 'Secure access with personalized entry codes and surveillance'
  },
  {
    icon: Eye,
    title: '24/7 Monitoring',
    description: 'Round-the-clock security cameras and monitoring systems'
  },
  {
    icon: FileText,
    title: 'Digital Inventory',
    description: 'Complete digital tracking of all stored items'
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Access your items on your schedule, not ours'
  }
]

export function StorageSolutionsContent() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Storage Solutions
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Professional storage solutions with climate-controlled units, 24/7 security, inventory management, and flexible terms for all your storage needs
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
                  Get Storage Quote
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

      {/* Storage Services */}
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
              Our Storage Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive storage solutions designed to keep your belongings safe, secure, and easily accessible
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {storageServices.map((service, index) => (
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

      {/* Why Choose Our Storage */}
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
              Why Choose Our Storage Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our professional storage logistics services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseStorage.map((feature, index) => (
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

      {/* Storage Process */}
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
              Our Storage Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple and secure process to get your items into safe storage
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {storageProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {index < storageProcess.length - 1 && (
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

      {/* Storage Features & Technology */}
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
                Advanced Storage Technology
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our storage facilities are equipped with the latest technology to ensure your belongings are always safe, secure, and easily accessible.
              </p>
              
              <div className="space-y-4">
                {storageFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <feature.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Storage Options</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Climate-controlled units (10°C - 25°C)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Standard storage units</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Vehicle storage (cars, boats, RVs)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Document storage with fire protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Business inventory storage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Flexible access hours</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Storage Benefits */}
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
              Benefits of Professional Storage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why professional storage solutions are the smart choice for your belongings
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Security & Protection</h3>
              <p className="text-gray-600">
                Your items are protected by advanced security systems, climate control, and comprehensive insurance coverage.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexibility & Convenience</h3>
              <p className="text-gray-600">
                Access your items whenever you need them with flexible storage terms and convenient facility locations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Service</h3>
              <p className="text-gray-600">
                Experienced professionals handle your items with care and provide excellent customer service throughout.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services & Areas */}
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
              Storage Solutions & Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional storage solutions throughout the GTA and beyond
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Service Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/service-areas/brampton" className="text-primary hover:text-accent transition-colors">
                  Storage in Brampton
                </Link>
                <Link href="/service-areas/mississauga" className="text-primary hover:text-accent transition-colors">
                  Storage in Mississauga
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
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Services</h3>
              <div className="space-y-3">
                <Link href="/transport/air-freight" className="block text-primary hover:text-accent transition-colors">
                  Air Freight Services
                </Link>
                <Link href="/transport/sea-freight" className="block text-primary hover:text-accent transition-colors">
                  Sea Freight Services
                </Link>
                <Link href="/services/specialty-moves" className="block text-primary hover:text-accent transition-colors">
                  Specialty Moves
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
