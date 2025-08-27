import { Metadata } from 'next'
import { LocalMovesContent } from '@/components/LocalMovesContent'

export const metadata: Metadata = {
  title: 'Local Logistics Services in Brampton & GTA',
  description: 'Same-day local logistics with packing & furniture protection.',
  openGraph: {
    title: 'Local Logistics Services in Brampton & GTA',
    description: 'Same-day local logistics with packing & furniture protection.',
  },
}

export default function LocalMovesPage() {
  return <LocalMovesContent />
}
