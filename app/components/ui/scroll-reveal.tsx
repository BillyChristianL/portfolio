"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  id?: string
  delay?: number
}

const ScrollReveal = ({ children, className, id, delay = 0 }: ScrollRevealProps) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      id={id}
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
