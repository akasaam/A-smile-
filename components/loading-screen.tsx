"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem("hasVisited")

    if (hasVisited) {
      // If already visited, hide loading screen immediately
      setIsLoading(false)
    } else {
      // If first visit, show loading screen for 3 seconds
      const timer = setTimeout(() => {
        setIsLoading(false)
        localStorage.setItem("hasVisited", "true")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className={`loading-screen ${!isLoading ? "hidden" : ""}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
          className="loading-logo mb-6"
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="60" fill="white" />
            <path d="M30 40 L90 40 L90 80 L30 80 Z" fill="#00748d" />
            <path d="M45 50 L75 50 L75 70 L45 70 Z" fill="white" />
            <circle cx="60" cy="60" r="5" fill="#00748d" />
          </svg>
        </motion.div>
        <motion.h1
          className="text-3xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          A-Smiles Dental Clinic
        </motion.h1>
        <motion.p
          className="text-white/80 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Small Fixes. Big Transformations.
        </motion.p>
      </motion.div>
    </div>
  )
}
