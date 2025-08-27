// Canadian cities and provinces
export const GTA_CITIES = [
  'Toronto', 'Mississauga', 'Brampton', 'Markham', 'Vaughan', 
  'Richmond Hill', 'Oakville', 'Burlington', 'Ajax', 'Pickering',
  'Whitby', 'Oshawa', 'Newmarket', 'Aurora', 'King City'
];

export const ONTARIO_CITIES = [
  'Ottawa', 'Hamilton', 'London', 'Windsor', 'Kitchener',
  'Waterloo', 'Cambridge', 'Guelph', 'Barrie', 'Kingston',
  'Niagara Falls', 'Thunder Bay', 'Sudbury', 'Sault Ste. Marie'
];

export const PROVINCES = [
  'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick',
  'Newfoundland and Labrador', 'Nova Scotia', 'Ontario',
  'Prince Edward Island', 'Quebec', 'Saskatchewan',
  'Northwest Territories', 'Nunavut', 'Yukon'
];

// Transport method speeds (km/h)
export const TRANSPORT_SPEEDS = {
  'sea-freight': 25, // Average container ship speed
  'air-freight': 800, // Average cargo plane speed
  'road-freight': 80, // Average truck speed
  'automotive-shipping': 25, // Same as sea freight for international
} as const;

// Price coefficients for payment calculator
export const PRICE_COEFFICIENTS = {
  moveType: {
    local: 1.0,
    international: 2.5,
  },
  bedrooms: {
    studio: 0.8,
    '1': 1.0,
    '2': 1.3,
    '3': 1.6,
    '4': 2.0,
    '5+': 2.5,
  },
  serviceLevel: {
    basic: 1.0,
    standard: 1.3,
    premium: 1.8,
  },
  options: {
    packing: 0.3,
    unpacking: 0.2,
    storage: 0.4,
    piano: 0.8,
    fineArt: 0.6,
  },
  basePrice: 500, // Base price in CAD
  distanceMultiplier: 0.5, // Per 100km
  loadSizeMultiplier: 0.3, // Per cubic meter
} as const;

// Service types
export const SERVICE_TYPES = [
  'Local Moves',
  'International Moves', 
  'Residential Moves',
  'Commercial Moves',
  'Specialty Moves',
  'Storage Solutions'
] as const;

// Transport methods
export const TRANSPORT_METHODS = [
  'Sea Freight',
  'Air Freight', 
  'Road Freight',
  'Automotive Shipping'
] as const;

// Company information
export const COMPANY_INFO = {
  name: 'Movers Move Freight & Logistics',
  domain: 'moversmove.ca',
  email: 'info@moversmove.ca',
  phone: '+1 (249) 979-2307',
  address: '2 County Court Blvd, Unit 333, Brampton, ON',
  description: 'World-wide freight and logistics solutions. Professional moving, freight and logistics services across Canada. Brampton & GTA specialists. Get a free quote.',
} as const;

// Trust badges
export const TRUST_BADGES = [
  'Licensed & Insured',
  'BBB Accredited',
  'Green Certified',
  '24/7 Support'
] as const;

// Stats for homepage
export const COMPANY_STATS = [
  { label: 'Years Experience', value: '15+' },
  { label: 'Successful Moves', value: '50,000+' },
  { label: 'Happy Customers', value: '98%' },
  { label: 'Service Areas', value: '100+' }
] as const;
