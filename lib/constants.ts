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
  description: 'World-wide freight and logistics solutions. Professional logistics, freight and logistics services across the globe. Brampton & GTA specialists. Get a free quote.',
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
