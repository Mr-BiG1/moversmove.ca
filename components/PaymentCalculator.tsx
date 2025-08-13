'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Calculator, DollarSign, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { paymentCalculatorSchema, type PaymentCalculatorData } from '@/lib/schemas'
import { PRICE_COEFFICIENTS } from '@/lib/constants'
import { formatCurrency, storage } from '@/lib/utils'

type CalculatorResult = {
  basePrice: number
  distanceCost: number
  loadSizeCost: number
  serviceLevelCost: number
  optionsCost: number
  totalMin: number
  totalMax: number
  breakdown: Array<{
    label: string
    value: number
    description: string
  }>
}

export function PaymentCalculator() {
  const [result, setResult] = useState<CalculatorResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<PaymentCalculatorData>({
    resolver: zodResolver(paymentCalculatorSchema),
    defaultValues: {
      moveType: 'local',
      bedrooms: '2',
      distance: 50,
      loadSize: 50,
      serviceLevel: 'standard',
      options: {
        packing: false,
        unpacking: false,
        storage: false,
        piano: false,
        fineArt: false,
      },
    },
  })

  const watchedValues = watch()

  // Load saved values from localStorage
  useEffect(() => {
    const savedValues = storage.get('payment-calculator-values')
    if (savedValues) {
      Object.entries(savedValues).forEach(([key, value]) => {
        if (key === 'options') {
          setValue('options', value as any)
        } else {
          setValue(key as keyof PaymentCalculatorData, value as any)
        }
      })
    }
  }, [setValue])

  // Save values to localStorage when they change
  useEffect(() => {
    storage.set('payment-calculator-values', watchedValues)
  }, [watchedValues])

  const calculatePrice = (data: PaymentCalculatorData): CalculatorResult => {
    const {
      moveType,
      bedrooms,
      distance,
      loadSize,
      serviceLevel,
      options,
    } = data

    // Base calculations
    const basePrice = PRICE_COEFFICIENTS.basePrice
    const moveTypeMultiplier = PRICE_COEFFICIENTS.moveType[moveType]
    const bedroomMultiplier = PRICE_COEFFICIENTS.bedrooms[bedrooms]
    const serviceLevelMultiplier = PRICE_COEFFICIENTS.serviceLevel[serviceLevel]

    // Distance cost (per 100km)
    const distanceCost = (distance / 100) * PRICE_COEFFICIENTS.distanceMultiplier * basePrice

    // Load size cost (per cubic meter)
    const loadSizeCost = loadSize * PRICE_COEFFICIENTS.loadSizeMultiplier * basePrice

    // Service level adjustment
    const serviceLevelCost = basePrice * (serviceLevelMultiplier - 1)

    // Options cost
    let optionsCost = 0
    Object.entries(options).forEach(([key, enabled]) => {
      if (enabled) {
        optionsCost += basePrice * PRICE_COEFFICIENTS.options[key as keyof typeof PRICE_COEFFICIENTS.options]
      }
    })

    // Calculate totals
    const subtotal = basePrice * moveTypeMultiplier * bedroomMultiplier + distanceCost + loadSizeCost + serviceLevelCost + optionsCost
    
    // Add variance for range (10% below and above)
    const variance = subtotal * 0.1
    const totalMin = Math.round(subtotal - variance)
    const totalMax = Math.round(subtotal + variance)

    const breakdown = [
      {
        label: 'Base Price',
        value: Math.round(basePrice * moveTypeMultiplier * bedroomMultiplier),
        description: `Base cost for ${bedrooms} bedroom ${moveType} move`,
      },
      {
        label: 'Distance Cost',
        value: Math.round(distanceCost),
        description: `${distance}km at ${PRICE_COEFFICIENTS.distanceMultiplier * 100}¢/km`,
      },
      {
        label: 'Load Size',
        value: Math.round(loadSizeCost),
        description: `${loadSize}m³ at ${PRICE_COEFFICIENTS.loadSizeMultiplier * 100}¢/m³`,
      },
      {
        label: 'Service Level',
        value: Math.round(serviceLevelCost),
        description: `${serviceLevel} service premium`,
      },
      {
        label: 'Additional Services',
        value: Math.round(optionsCost),
        description: Object.entries(options)
          .filter(([_, enabled]) => enabled)
          .map(([key]) => key)
          .join(', ') || 'None selected',
      },
    ]

    return {
      basePrice: Math.round(basePrice * moveTypeMultiplier * bedroomMultiplier),
      distanceCost: Math.round(distanceCost),
      loadSizeCost: Math.round(loadSizeCost),
      serviceLevelCost: Math.round(serviceLevelCost),
      optionsCost: Math.round(optionsCost),
      totalMin,
      totalMax,
      breakdown,
    }
  }

  const onSubmit = (data: PaymentCalculatorData) => {
    setIsCalculating(true)
    
    // Simulate calculation delay
    setTimeout(() => {
      const calculation = calculatePrice(data)
      setResult(calculation)
      setIsCalculating(false)
    }, 500)
  }

  const handleOptionChange = (option: keyof PaymentCalculatorData['options'], checked: boolean) => {
    setValue(`options.${option}`, checked)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Form Section */}
      <div className="space-y-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Move Type */}
          <div>
            <Label htmlFor="moveType" className="text-sm font-medium text-gray-700">
              Move Type
            </Label>
            <Select
              onValueChange={(value) => setValue('moveType', value as 'local' | 'international')}
              defaultValue="local"
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="local">Local Move</SelectItem>
                <SelectItem value="international">International Move</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Bedrooms */}
          <div>
            <Label htmlFor="bedrooms" className="text-sm font-medium text-gray-700">
              Number of Bedrooms
            </Label>
            <Select
              onValueChange={(value) => setValue('bedrooms', value as any)}
              defaultValue="2"
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="studio">Studio</SelectItem>
                <SelectItem value="1">1 Bedroom</SelectItem>
                <SelectItem value="2">2 Bedrooms</SelectItem>
                <SelectItem value="3">3 Bedrooms</SelectItem>
                <SelectItem value="4">4 Bedrooms</SelectItem>
                <SelectItem value="5+">5+ Bedrooms</SelectItem>
              </SelectContent>
            </Select>
          </div>

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

          {/* Load Size */}
          <div>
            <Label htmlFor="loadSize" className="text-sm font-medium text-gray-700">
              Load Size (m³)
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

          {/* Service Level */}
          <div>
            <Label htmlFor="serviceLevel" className="text-sm font-medium text-gray-700">
              Service Level
            </Label>
            <Select
              onValueChange={(value) => setValue('serviceLevel', value as any)}
              defaultValue="standard"
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic">Basic</SelectItem>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Additional Options */}
          <div className="space-y-4">
            <Label className="text-sm font-medium text-gray-700">
              Additional Services
            </Label>
            <div className="space-y-3">
              {Object.entries(watchedValues.options || {}).map(([key, value]) => (
                <div key={key} className="flex items-center space-x-3">
                  <Checkbox
                    id={key}
                    checked={value}
                    onCheckedChange={(checked) => handleOptionChange(key as any, checked as boolean)}
                  />
                  <Label htmlFor={key} className="text-sm text-gray-700 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </Label>
                </div>
              ))}
            </div>
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
                Calculate Estimate
              </>
            )}
          </Button>
        </form>
      </div>

      {/* Results Section */}
      <div className="space-y-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <DollarSign className="mr-2 h-5 w-5 text-accent" />
            Your Estimate
          </h3>

          {result ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Total Range */}
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Estimated Total</p>
                <div className="text-3xl font-bold text-primary mb-2">
                  {formatCurrency(result.totalMin)} - {formatCurrency(result.totalMax)}
                </div>
                <p className="text-sm text-gray-500">
                  Price range based on current inputs
                </p>
              </div>

              {/* Breakdown */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Cost Breakdown</h4>
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
                        {formatCurrency(item.value)}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-3">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">This is an estimate only</p>
                    <p>Final pricing will be determined after a detailed assessment. Contact us for an accurate quote.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <Calculator className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>Fill in the form and click "Calculate Estimate" to see your moving cost estimate.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
