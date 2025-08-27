import { Metadata } from 'next'
import { StorageSolutionsContent } from '@/components/StorageSolutionsContent'

export const metadata: Metadata = {
  title: 'Storage Solutions - Secure Short & Long-term Storage | Movers Move',
  description: 'Professional storage solutions with climate-controlled units, 24/7 security, inventory management, and flexible terms. Short-term and long-term storage across the globe.',
  keywords: 'storage solutions, climate controlled storage, secure storage, warehouse storage, inventory management, short term storage, long term storage',
  openGraph: {
    title: 'Storage Solutions - Secure Short & Long-term Storage | Movers Move',
    description: 'Professional storage solutions with climate-controlled units, 24/7 security, and inventory management.',
    type: 'website',
    url: 'https://moversmove.ca/services/storage-solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Storage Solutions - Secure Short & Long-term Storage | Movers Move',
    description: 'Professional storage solutions with climate-controlled units, 24/7 security, and inventory management.',
  },
}

export default function StorageSolutionsPage() {
  return <StorageSolutionsContent />
}
