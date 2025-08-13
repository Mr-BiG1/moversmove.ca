'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { COMPANY_INFO, SERVICE_TYPES } from '@/lib/constants'

const services = [
  { name: 'Local Moves', href: '/services/local-moves', description: 'Professional local moving services across the GTA and Ontario' },
  { name: 'International Moves', href: '/services/international-moves', description: 'Worldwide shipping and relocation services' },
  { name: 'Residential Moves', href: '/services/residential-moves', description: 'Complete residential moving solutions' },
  { name: 'Commercial Moves', href: '/services/commercial-moves', description: 'Office and business relocation services' },
  { name: 'Specialty Moves', href: '/services/specialty-moves', description: 'Piano, fine art, and fragile item moving' },
  { name: 'Storage Solutions', href: '/services/storage-solutions', description: 'Secure short and long-term storage options' },
]

const transportMethods = [
  { name: 'Sea Freight', href: '/transport/sea-freight', description: 'Flexible and cost-effective sea freight solutions' },
  { name: 'Air Freight', href: '/transport/air-freight', description: 'Worldwide air freight services' },
  { name: 'Road Freight', href: '/transport/road-freight', description: 'Overland logistics and cross-border' },
  { name: 'Automotive Shipping', href: '/transport/automotive-shipping', description: 'International auto transport with documentation' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}>
      {/* Top bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>{COMPANY_INFO.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>{COMPANY_INFO.email}</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Licensed & Insured</span>
            <span>•</span>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-25 h-10 bg-gradient-to-br rounded-lg flex items-center justify-center">
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
              {/* <h1 className="text-xl font-bold text-gray-900">{COMPANY_INFO.name}</h1> */}
              <p className="text-xs text-gray-600">Professional Moving Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors font-medium">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 p-6"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="group p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {service.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Transport Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('transport')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors font-medium">
                <span>Transport</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'transport' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-4"
                  >
                    <div className="space-y-2">
                      {transportMethods.map((method) => (
                        <Link
                          key={method.name}
                          href={method.href}
                          className="group p-3 rounded-lg hover:bg-gray-50 transition-colors block"
                        >
                          <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                            {method.name}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {method.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Contact
            </Link>
            <Link href="/faqs" className="text-gray-700 hover:text-primary transition-colors font-medium">
              FAQs
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/payment-calculator">
              <Button variant="outline" size="sm">
                Price Calculator
              </Button>
            </Link>
            <Link href="/quote">
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                Get a Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div className="space-y-2">
                <div className="font-medium text-gray-900 mb-2">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block py-2 pl-4 text-gray-600 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <div className="font-medium text-gray-900 mb-2">Transport</div>
                {transportMethods.map((method) => (
                  <Link
                    key={method.name}
                    href={method.href}
                    className="block py-2 pl-4 text-gray-600 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {method.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/about"
                className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/faqs"
                className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQs
              </Link>

              <div className="pt-4 space-y-3">
                <Link href="/payment-calculator" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Price Calculator
                  </Button>
                </Link>
                <Link href="/quote" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold">
                    Get a Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
