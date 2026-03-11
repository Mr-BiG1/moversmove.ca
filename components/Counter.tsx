'use client'

import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface CounterProps {
    from?: number
    to: number
    suffix?: string
    prefix?: string
    duration?: number
}

export function Counter({ from = 0, to, suffix = '', prefix = '', duration = 2 }: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })
    const motionValue = useMotionValue(from)
    const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 })

    useEffect(() => {
        if (inView) {
            motionValue.set(to)
        }
    }, [inView, motionValue, to])

    useEffect(() => {
        return springValue.on('change', (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${Intl.NumberFormat('en-US').format(Math.floor(latest))}${suffix}`
            }
        })
    }, [springValue, prefix, suffix])

    return <span ref={ref}>{prefix}{from}{suffix}</span>
}
