import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type MotionCardProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function MotionCard({ children, className = '', delay = 0 }: MotionCardProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { type: 'spring', stiffness: 420, damping: 24 },
      }}
    >
      {children}
    </motion.div>
  )
}
