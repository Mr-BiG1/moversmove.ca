import { Metadata } from 'next'
import { LocalMovesContent } from '@/components/LocalMovesContent'

export const metadata: Metadata = {
  title: 'Local Moving Services in Brampton & GTA',
  description: 'Same-day local movers with packing & furniture protection.',
  openGraph: {
    title: 'Local Moving Services in Brampton & GTA',
    description: 'Same-day local movers with packing & furniture protection.',
  },
}

export default function LocalMovesPage() {
  return <LocalMovesContent />
}
