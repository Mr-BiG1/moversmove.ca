'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Clock, MapPin, Package, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { timeEstimatorSchema, type TimeEstimatorData } from '@/lib/schemas'
import { TRANSPORT_SPEEDS } from '@/lib/constants'
import { formatDistance, formatDuration } from '@/lib/utils'

type TimeEstimateResult = {
  distance: number
  transportMethod: string
  averageSpeed: number
  transitTime: number
  additionalTime: number
  totalTime: number
  breakdown: Array<{
    label: string
    value: string
    description: string
  }>
}

export function TimeEstimator({ 
  defaultMethod 
}: { 
  defaultMethod: keyof typeof TRANSPORT_SPEEDS 
}) {
  const [result, setResult] = useState<TimeEstimateResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TimeEstimatorData>({
    resolver: zodResolver(timeEstimatorSchema),
    defaultValues: {
      distance: 100,
      transportMethod: defaultMethod,
      loadSize: 50,
    },
  })

  const watchedValues = watch()

  const calculateTime = (data: TimeEstimatorData): TimeEstimateResult => {
    const { distance, transportMethod, loadSize } = data
    const averageSpeed = TRANSPORT_SPEEDS[transportMethod]
    
    // Calculate transit time (hours)
    const transitTime = distance / averageSpeed
    
    // Additional time based on transport method and load size
    let additionalTime = 0
    
    switch (transportMethod) {
      case 'sea-freight':
        additionalTime = 24 + (loadSize ? loadSize * 0.1 : 0) // Port handling + load size factor
        break
      case 'air-freight':
        additionalTime = 6 + (loadSize ? loadSize * 0.05 : 0) // Airport handling + load size factor
        break
      case 'road-freight':
        additionalTime = 4 + (loadSize ? loadSize * 0.02 : 0) // Loading/unloading + load size factor
        break
      case 'automotive-shipping':
        additionalTime = 48 + (loadSize ? loadSize * 0.15 : 0) // Documentation + customs + load size factor
        break
    }
    
    const totalTime = transitTime + additionalTime

    const breakdown = [
      {
        label: 'Transit Time',
        value: formatDuration(transitTime),
        description: `${formatDistance(distance)} at ${averageSpeed} km/h average speed`,
      },
      {
        label: 'Handling Time',
        value: formatDuration(additionalTime),
        description: `Loading, unloading, and processing time`,
      },
      {
        label: 'Total Estimated Time',
        value: formatDuration(totalTime),
        description: `From pickup to delivery`,
      },
    ]

    return {
      distance,
      transportMethod,
      averageSpeed,
      transitTime,
      additionalTime,
      totalTime,
      breakdown,
    }
  }

  const onSubmit = (data: TimeEstimatorData) => {
    setIsCalculating(true)
    
    // Simulate calculation delay
    setTimeout(() => {
      const calculation = calculateTime(data)
      setResult(calculation)
      setIsCalculating(false)
    }, 500)
  }

  const getMethodDescription = (method: string) => {
    switch (method) {
      case 'sea-freight':
        return 'Container ships with regular schedules'
      case 'air-freight':
        return 'Express cargo flights worldwide'
      case 'road-freight':
        return 'Truck transport with real-time tracking'
      case 'automotive-shipping':
        return 'Specialized vehicle transport'
      default:
        return ''
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center">
          <Clock className="mr-2 h-6 w-6 text-accent" />
          Transit Time Estimator
        </h3>
        <p className="text-gray-600">
          Get an estimate of how long your shipment will take to reach its destination.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Distance */}
            <div>
              <Label htmlFor="distance" className="text-sm font-medium text-gray-700">
                Distance (km)
              </Label>
              <Input
                id="distance"
                type="number"
                {...register('distance', { valueAsNumber: true })}
                className={`mt-1 ${errors.distance ? 'border-red-500' : ''}`}
                placeholder="Enter distance in kilometers"
                min="1"
                max="50000"
              />
              {errors.distance && (
                <p className="mt-1 text-sm text-red-600">{errors.distance.message}</p>
              )}
            </div>

            {/* Transport Method */}
            <div>
              <Label htmlFor="transportMethod" className="text-sm font-medium text-gray-700">
                Transport Method
              </Label>
              <Select
                onValueChange={(value) => setValue('transportMethod', value as any)}
                defaultValue={defaultMethod}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sea-freight">Sea Freight</SelectItem>
                  <SelectItem value="air-freight">Air Freight</SelectItem>
                  <SelectItem value="road-freight">Road Freight</SelectItem>
                  <SelectItem value="automotive-shipping">Automotive Shipping</SelectItem>
                </SelectContent>
              </Select>
              <p className="mt-1 text-sm text-gray-500">
                {getMethodDescription(watchedValues.transportMethod)}
              </p>
            </div>

            {/* Load Size */}
            <div>
              <Label htmlFor="loadSize" className="text-sm font-medium text-gray-700">
                Load Size (m³) - Optional
              </Label>
              <Input
                id="loadSize"
                type="number"
                {...register('loadSize', { valueAsNumber: true })}
                className={`mt-1 ${errors.loadSize ? 'border-red-500' : ''}`}
                placeholder="Enter load size in cubic meters"
                min="1"
                max="1000"
              />
              {errors.loadSize && (
                <p className="mt-1 text-sm text-red-600">{errors.loadSize.message}</p>
              )}
            </div>

            {/* Calculate Button */}
            <Button
              type="submit"
              disabled={isCalculating}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              {isCalculating ? (
                <>
                  <Calculator className="mr-2 h-4 w-4 animate-spin" />
                  Calculating...
                </>
              ) : (
                <>
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate Transit Time
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-accent" />
              Time Estimate
            </h4>

            {result ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Total Time */}
                <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">Estimated Total Time</p>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {formatDuration(result.totalTime)}
                  </div>
                  <p className="text-sm text-gray-500">
                    From pickup to delivery
                  </p>
                </div>

                {/* Breakdown */}
                <div className="space-y-4">
                  <h5 className="font-semibold text-gray-900">Time Breakdown</h5>
                  <div className="space-y-3">
                    {result.breakdown.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex justify-between items-start p-3 bg-white rounded-lg border border-gray-200"
                      >
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{item.label}</div>
                          <div className="text-sm text-gray-500">{item.description}</div>
                        </div>
                        <div className="font-semibold text-primary ml-4">
                          {item.value}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Speed Info */}
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-3">
                    <Package className="h-5 w-5 text-blue-600" />
                    <div className="text-sm text-blue-800">
                      <p className="font-medium mb-1">Average Speed: {result.averageSpeed} km/h</p>
                      <p>Based on typical conditions for {watchedValues.transportMethod.replace('-', ' ')} transport</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <Clock className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Fill in the form and click "Calculate Transit Time" to see your estimate.</p>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div className="text-sm text-yellow-800">
                <p className="font-medium mb-1">Estimates only</p>
                <p>Actual transit times may vary due to weather, customs, and other factors. Contact us for precise timing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
