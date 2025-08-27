'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Package, Truck, CheckCircle, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function TrackShipmentPage() {
  const [trackingId, setTrackingId] = useState('')
  const [trackingResult, setTrackingResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTrackShipment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingId.trim()) return

    setIsLoading(true)
    
    // Simulate API call delay
    setTimeout(() => {
      // Show "No data found" for any tracking ID
      setTrackingResult(null)
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Track Your Shipment
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Real-time tracking for all your freight and logistics shipments
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tracking Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enter Your Tracking ID
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Track your shipment status, location, and estimated delivery time
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handleTrackShipment} className="space-y-6">
              <div>
                <Label htmlFor="trackingId" className="text-lg font-semibold text-gray-900 mb-2 block">
                  Tracking ID
                </Label>
                <div className="flex gap-4">
                  <Input
                    id="trackingId"
                    type="text"
                    placeholder="Enter your tracking number (e.g., MM123456789)"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="flex-1 text-lg py-4"
                    required
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Tracking...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Search className="h-5 w-5" />
                        <span>Track</span>
                      </div>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Tracking Results */}
      {trackingResult === null && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
            >
              {/* No Data Found Message */}
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Package className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No Data Found</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  We couldn't find any tracking information for the provided tracking ID. Please check the number and try again.
                </p>
                <div className="text-sm text-gray-500">
                  <p>If you believe this is an error, please contact our support team.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

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
              Why Track with MoversMove?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced tracking technology for complete shipment visibility
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Updates</h3>
              <p className="text-gray-600">Get instant notifications about your shipment status and location</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accurate ETAs</h3>
              <p className="text-gray-600">Precise delivery estimates based on real-time logistics data</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Coverage</h3>
              <p className="text-gray-600">Track shipments across all our transportation methods worldwide</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
