'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Phone,
  Mail,
  MapPin,
  Truck,
  Shield,
  Clock,
  Users
} from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

const quickLinks = [
  { name: 'Local Moves', href: '/services/local-moves' },
  { name: 'International Moves', href: '/services/international-moves' },
  { name: 'Residential Moves', href: '/services/residential-moves' },
  { name: 'Commercial Moves', href: '/services/commercial-moves' },
  { name: 'Specialty Moves', href: '/services/specialty-moves' },
  { name: 'Storage Solutions', href: '/services/storage-solutions' },
]

const transportLinks = [
  { name: 'Sea Freight', href: '/transport/sea-freight' },
  { name: 'Air Freight', href: '/transport/air-freight' },
  { name: 'Road Freight', href: '/transport/road-freight' },
  { name: 'Automotive Shipping', href: '/transport/automotive-shipping' },
]

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Payment Calculator', href: '/payment-calculator' },
  { name: 'Get a Quote', href: '/quote' },
]

const trustFeatures = [
  { icon: Truck, title: 'Professional Service', description: 'Experienced team with 15+ years' },
  { icon: Shield, title: 'Fully Insured', description: 'Complete coverage for your peace of mind' },
  { icon: Clock, title: '24/7 Support', description: 'Round-the-clock customer service' },
  { icon: Users, title: '50,000+ Moves', description: 'Trusted by thousands of customers' },
]

export function Footer() {

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br  rounded-lg flex items-center justify-center">
                {/* <span className="text-white font-bold text-lg">M</span> */}
                {/* <Image
                  src="https://res.cloudinary.com/dflabr49y/image/upload/v1755112588/cropped-logo_tgjgt1.png"
                  alt="Movers Move logo"
                  width={200}
                  height={200}
                  priority

                /> */}
              </div>
              <div>
                <Image
                  src="https://res.cloudinary.com/dflabr49y/image/upload/v1755112588/cropped-logo_tgjgt1.png"
                  alt="Movers Move logo"
                  width={200}
                  height={200}
                  priority

                />
                <p className="text-sm text-gray-400">Professional Moving Services</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {COMPANY_INFO.description}
            </p>

            {/* Trust Features */}
            <div className="space-y-3 pt-4">
              {trustFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <feature.icon className="h-5 w-5 text-accent" />
                  <div>
                    <h4 className="text-sm font-semibold">{feature.title}</h4>
                    <p className="text-xs text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Transport Methods */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">Transport Methods</h3>
            <ul className="space-y-2">
              {transportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-sm text-gray-300">{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-sm text-gray-300">{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <span className="text-sm text-gray-300">{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 {COMPANY_INFO.name}. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="text-gray-400 hover:text-accent transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
