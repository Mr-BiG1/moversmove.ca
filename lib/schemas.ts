import { z } from 'zod';

// Base schemas
const emailSchema = z.string().email('Please enter a valid email address');
const phoneSchema = z.string().regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number').optional();

// Contact form schema
export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: emailSchema,
  address: z.string().min(10, 'Please enter a complete address').max(200, 'Address must be less than 200 characters'),
  inquiry: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
  turnstileToken: z.string().min(1, 'Please complete the security check'),
});

// Quote form schema
export const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: emailSchema,
  phone: phoneSchema,
  pickupAddress: z.string().min(10, 'Please enter a complete pickup address').max(200, 'Address must be less than 200 characters'),
  dropOffAddress: z.string().min(10, 'Please enter a complete drop-off address').max(200, 'Address must be less than 200 characters').optional(),
  description: z.string().min(10, 'Please describe what you need').max(1000, 'Description must be less than 1000 characters'),
  preferredDate: z.string().optional(),
  serviceType: z.enum(['Local Moves', 'International Moves', 'Residential Moves', 'Commercial Moves', 'Specialty Moves', 'Storage Solutions']),
  turnstileToken: z.string().min(1, 'Please complete the security check'),
});

// FAQ question form schema
export const faqQuestionSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: emailSchema,
  question: z.string().min(10, 'Question must be at least 10 characters').max(500, 'Question must be less than 500 characters'),
  turnstileToken: z.string().min(1, 'Please complete the security check'),
});

// Payment calculator schema
export const paymentCalculatorSchema = z.object({
  moveType: z.enum(['local', 'international']),
  bedrooms: z.enum(['studio', '1', '2', '3', '4', '5+']),
  distance: z.number().min(1, 'Distance must be at least 1 km').max(50000, 'Distance must be less than 50,000 km'),
  loadSize: z.number().min(1, 'Load size must be at least 1 m³').max(1000, 'Load size must be less than 1000 m³'),
  serviceLevel: z.enum(['basic', 'standard', 'premium']),
  options: z.object({
    packing: z.boolean().default(false),
    unpacking: z.boolean().default(false),
    storage: z.boolean().default(false),
    piano: z.boolean().default(false),
    fineArt: z.boolean().default(false),
  }),
});

// Time estimator schema
export const timeEstimatorSchema = z.object({
  distance: z.number().min(1, 'Distance must be at least 1 km').max(50000, 'Distance must be less than 50,000 km'),
  transportMethod: z.enum(['sea-freight', 'air-freight', 'road-freight', 'automotive-shipping']),
  loadSize: z.number().min(1, 'Load size must be at least 1 m³').max(1000, 'Load size must be less than 1000 m³').optional(),
});

// Newsletter signup schema
export const newsletterSchema = z.object({
  email: emailSchema,
});

// Type exports
export type ContactFormData = z.infer<typeof contactSchema>;
export type QuoteFormData = z.infer<typeof quoteSchema>;
export type FaqQuestionFormData = z.infer<typeof faqQuestionSchema>;
export type PaymentCalculatorData = z.infer<typeof paymentCalculatorSchema>;
export type TimeEstimatorData = z.infer<typeof timeEstimatorSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
