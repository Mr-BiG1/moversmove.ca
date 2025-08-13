'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Ship, Globe, Clock, Shield, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TimeEstimator } from '@/components/TimeEstimator'
import { CtaQuote } from '@/components/CtaQuote'

const features = [
  {
    icon: Ship,
    title: 'Container Shipping',
    description: 'Full container load (FCL) and less than container load (LCL) options'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Worldwide shipping routes with regular schedules'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Weekly departures to major ports worldwide'
  },
  {
    icon: Shield,
    title: 'Cargo Insurance',
    description: 'Comprehensive coverage for your shipments'
  }
]

const services = [
  'Full Container Load (FCL)',
  'Less Than Container Load (LCL)',
  'Bulk Cargo Shipping',
  'Project Cargo',
  'Refrigerated Containers',
  'Dangerous Goods Handling',
  'Customs Clearance',
  'Port-to-Port & Door-to-Door'
]

export function SeaFreightContent() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-accent text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Sea freight shipping"
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
              <Ship className="h-20 w-20 mx-auto mb-6 text-white/80" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sea Freight Services
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Flexible and cost-effective sea freight solutions for international shipping. 
                Connect with global markets through our comprehensive maritime logistics network.
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Sea Freight Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our sea freight services provide reliable, cost-effective transportation for international shipments. 
                Whether you're shipping full containers or consolidating smaller loads, we offer flexible solutions 
                that meet your timeline and budget requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Sea Freight Services
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive maritime logistics solutions tailored to your shipping needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {services.map((service, index) => (
                <div
                  key={service}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200"
                >
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Time Estimator Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <TimeEstimator defaultMethod="sea-freight" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaQuote />

      {/* Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Sea Freight Services?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global Coverage</h3>
                <p className="text-gray-600">
                  Extensive network of shipping routes connecting major ports worldwide.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Effective</h3>
                <p className="text-gray-600">
                  Competitive rates and flexible pricing options for all shipment sizes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Tracking</h3>
                <p className="text-gray-600">
                  Monitor your shipments with our advanced tracking and monitoring systems.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
