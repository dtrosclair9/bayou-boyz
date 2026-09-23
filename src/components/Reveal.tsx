'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Framer Motion whileInView rather than a scroll library. Scroll-library and
 * observer desync has stuck reveals at opacity 0 on past builds, and
 * whileInView fires off the element's own intersection so it cannot drift.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
