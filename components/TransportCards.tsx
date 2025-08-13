'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Ship, Plane, Truck, Car } from 'lucide-react'

const transportMethods = [
  {
    title: 'Sea Freight',
    description: 'Flexible and cost-effective sea freight solutions',
    href: '/transport/sea-freight',
    icon: Ship,
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: ['Container shipping', 'Bulk cargo', 'International routes', 'Cost-effective']
  },
  {
    title: 'Air Freight',
    description: 'Worldwide air freight services',
    href: '/transport/air-freight',
    icon: Plane,
    image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: ['Express delivery', 'Global network', 'Priority handling', 'Fast transit']
  },
  {
    title: 'Road Freight',
    description: 'Overland logistics and cross-border',
    href: '/transport/road-freight',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: ['Cross-border', 'LTL & FTL', 'Real-time tracking', 'Flexible scheduling']
  },
  {
    title: 'Automotive Shipping',
    description: 'International auto transport with documentation',
    href: '/transport/automotive-shipping',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: ['Vehicle protection', 'Customs clearance', 'Door-to-door', 'Insurance included']
  }
]

export function TransportCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {transportMethods.map((method, index) => (
        <motion.div
          key={method.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="group relative"
        >
          <Link href={method.href}>
            <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-white/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={method.image}
                  alt={method.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 text-white">
                {/* Top Section */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {method.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {method.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-white/70">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <div className="inline-flex items-center space-x-2 text-accent font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
