'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Truck,
  Shield,
  Clock,
  Users,
  ArrowRight,
  MapPin,
  Phone,
  Mail
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TransportCards } from '@/components/TransportCards'
import { CtaQuote } from '@/components/CtaQuote'
import { COMPANY_INFO, COMPANY_STATS } from '@/lib/constants'
import { Counter } from '@/components/Counter'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } },
}

const features = [
  {
    icon: Truck,
    title: 'Professional Equipment',
    description: 'Modern trucks and specialized equipment for safe transportation'
  },
  {
    icon: Shield,
    title: 'Full Insurance Coverage',
    description: 'Complete protection for your belongings during the entire move'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Reliable scheduling and punctual service guaranteed'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Trained professionals with years of moving experience'
  }
]

const howItWorks = [
  {
    step: '01',
    title: 'Plan',
    description: 'We assess your needs and create a customized moving plan',
    icon: '📋'
  },
  {
    step: '02',
    title: 'Move',
    description: 'Our professional team handles the entire moving process',
    icon: '🚚'
  },
  {
    step: '03',
    title: 'Settle',
    description: 'We help you settle in and ensure everything is perfect',
    icon: '🏠'
  }
]



export function HomePageContent() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent/80 text-white overflow-hidden">
        {/* Floating Background Shapes */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            rotate: [0, 15, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute top-10 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl pointer-events-none z-0"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl pointer-events-none z-0"
        />

        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dflabr49y/image/upload/v1755112335/freepik__expand__57915_po4jaa.jpg')] bg-cover bg-center opacity-10 z-0"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-10">
          <div className="text-center">
            {/* Staggered Text Reveal */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="mb-6"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold"
              >
                Professional Logistics Services
              </motion.h1>
              <motion.span
                variants={itemVariants}
                className="block text-4xl md:text-6xl font-bold text-accent mt-2"
              >
                Across the Globe
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md text-white/95"
            >
              Trusted logistics and moving solutions for local, national, and international relocations
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 hover:scale-105 active:scale-95 text-white px-8 py-4 text-lg shadow-lg shadow-accent/25 transition-all duration-300 group">
                <Link href="/quote">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 active:scale-95 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300">
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-gray-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {COMPANY_STATS.map((stat, index) => {
              // Parse the number from the value string (e.g., '50,000+' -> 50000, '+')
              const numStr = stat.value.replace(/[^0-9]/g, '')
              const num = parseInt(numStr, 10)
              const suffix = stat.value.replace(/[0-9,]/g, '')

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                    {num ? <Counter from={0} to={num} suffix={suffix} /> : stat.value}
                  </div>
                  <div className="text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Infinite Marquee Ribbon */}
        <div className="relative flex overflow-hidden border-t border-gray-200/50 bg-white/50 backdrop-blur-sm py-6 mt-8 shadow-inner">
          <div className="animate-marquee whitespace-nowrap flex shrink-0 items-center gap-12 text-sm font-semibold text-gray-400">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="flex items-center gap-12">
                <span>✦ LICENSED & INSURED</span>
                <span>✦ BBB ACCREDITED</span>
                <span>✦ GREEN CERTIFIED</span>
                <span>✦ 24/7 SUPPORT</span>
              </span>
            ))}
          </div>
          <div aria-hidden="true" className="animate-marquee whitespace-nowrap flex shrink-0 items-center gap-12 text-sm font-semibold text-gray-400 pl-12">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={`dup-${i}`} className="flex items-center gap-12">
                <span>✦ LICENSED & INSURED</span>
                <span>✦ BBB ACCREDITED</span>
                <span>✦ GREEN CERTIFIED</span>
                <span>✦ 24/7 SUPPORT</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transportation Methods
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive transportation solutions to meet all your moving needs
            </p>
          </motion.div>

          <TransportCards />
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose MoversMove?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our professional logistical services
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
                className="text-center p-6 bg-white rounded-lg shadow-lg"
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

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent process from start to finish
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <CtaQuote />

      {/* Contact Info */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <MapPin className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Service Areas</h3>
              <p className="text-primary-100">GTA, Ontario & Across the Globe</p>
            </motion.div>

            <motion.a
              href={`tel:${COMPANY_INFO.phone}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="hover:scale-105 transition-transform cursor-pointer"
            >
              <Phone className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-primary-100">{COMPANY_INFO.phone}</p>
            </motion.a>

            <motion.a
              href={`mailto:${COMPANY_INFO.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="hover:scale-105 transition-transform cursor-pointer"
            >
              <Mail className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-primary-100">{COMPANY_INFO.email}</p>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  )
}
