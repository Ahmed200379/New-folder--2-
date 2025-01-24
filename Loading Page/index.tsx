'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export default function LoadingPage() {
  const iconAnimation = {
    scale: [1, 1.2, 1],
    rotate: [0, 360, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.5, 1],
      repeat: Infinity,
    }
  }

  const textAnimation = {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <motion.div
          animate={iconAnimation}
          className="inline-block mb-8"
        >
          <GraduationCap className="w-24 h-24 text-primary" />
        </motion.div>
        <motion.h1
          animate={textAnimation}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          Academy Guide
        </motion.h1>
        <motion.p
          animate={textAnimation}
          className="text-lg text-gray-600"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  )
}