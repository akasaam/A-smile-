"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { X } from "lucide-react"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      // Show consent banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "all")
    setShowConsent(false)
  }

  const acceptEssential = () => {
    localStorage.setItem("cookieConsent", "essential")
    setShowConsent(false)
  }

  const decline = () => {
    localStorage.setItem("cookieConsent", "none")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white shadow-lg border-t"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-medium">We value your privacy</h3>
            <p className="text-sm text-gray-600 mt-1">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
              By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={decline} className="text-gray-500 border-gray-300">
              Decline
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={acceptEssential}
              className="text-teal border-teal hover:bg-teal/10"
            >
              Essential Only
            </Button>
            <Button size="sm" onClick={acceptAll} className="bg-teal hover:bg-teal/90 text-white">
              Accept All
            </Button>
          </div>
          <button
            onClick={() => setShowConsent(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
