'use client'

import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export function StickyCallButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="tel:+12499792307"
        className="bg-accent hover:bg-accent/90 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Call us now"
      >
        <Phone className="h-6 w-6" />
      </a>
    </motion.div>
  )
}
