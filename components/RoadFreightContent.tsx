'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Truck, Globe, Clock, Shield, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TimeEstimator } from '@/components/TimeEstimator'
import { CtaQuote } from '@/components/CtaQuote'

const features = [
  {
    icon: Truck,
    title: 'Cross-border',
    description: 'Seamless transportation across international borders'
  },
  {
    icon: Globe,
    title: 'LTL & FTL',
    description: 'Less than truckload and full truckload options'
  },
  {
    icon: Clock,
    title: 'Real-time Tracking',
    description: 'Monitor your shipments with GPS tracking'
  },
  {
    icon: Shield,
    title: 'Flexible Scheduling',
    description: 'Customized delivery schedules to meet your needs'
  }
]

const services = [
  'Full Truckload (FTL)',
  'Less Than Truckload (LTL)',
  'Cross-border Transportation',
  'Intermodal Solutions',
  'Temperature Controlled',
  'Express Delivery',
  'Customs Clearance',
  'Door-to-Door Service'
]

export function RoadFreightContent() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-accent text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dflabr49y/image/upload/v1755116842/photo-1738868198588-c0cd34191917_bqspiv.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Road freight shipping"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Truck className="h-20 w-20 mx-auto mb-6 text-white/80" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Road Freight Services
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Overland logistics and cross-border transportation with flexible routes, 
                real-time tracking, and reliable service for your cargo.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/quote">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/transport">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300">
                  View All Transport Methods
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Reliable Overland Transportation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our road freight services provide reliable overland transportation solutions 
                across North America and beyond. With our extensive network of carriers and 
                modern fleet, we ensure your cargo reaches its destination safely and on time.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From full truckload to less than truckload shipments, we offer flexible 
                solutions to meet your specific requirements. Our experienced team handles 
                customs clearance and provides real-time tracking throughout the journey.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Tracking Available</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">48h</div>
                  <div className="text-sm text-gray-600">Average Transit</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dflabr49y/image/upload/v1755116842/photo-1738868198588-c0cd34191917_bqspiv.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Road freight operations"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose Road Freight?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of road freight transportation with our comprehensive services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Road Freight Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive road freight solutions tailored to your specific needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary/30 transition-colors"
              >
                <Truck className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Time Estimator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TimeEstimator defaultMethod="road-freight" />
        </div>
      </section>

      {/* CTA Section */}
      <CtaQuote />
    </div>
  )
}
