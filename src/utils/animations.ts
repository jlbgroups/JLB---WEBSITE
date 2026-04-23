import type { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 0.03, 0.26, 1.0] as [number, number, number, number],
    },
  }),
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.22, 0.03, 0.26, 1.0] as [number, number, number, number],
    },
  }),
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.22, 0.03, 0.26, 1.0] as [number, number, number, number],
    },
  }),
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.22, 0.03, 0.26, 1.0] as [number, number, number, number],
    },
  }),
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}
