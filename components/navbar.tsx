"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-md border-b transition-all duration-300 ${
          scrolled ? "bg-white/95 shadow-sm" : "bg-white/90"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <motion.span className="text-2xl font-bold text-teal" whileHover={{ scale: 1.05 }}>
                  A-Smiles
                </motion.span>
                <span className="hidden md:inline-block text-sm text-gray-500">Dental Clinic</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium hover:text-teal transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-sm font-medium hover:text-teal transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-teal transition-colors">
                About
              </Link>
              <Link href="/gallery" className="text-sm font-medium hover:text-teal transition-colors">
                Smile Gallery
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-teal transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-teal transition-colors">
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-teal text-teal hover:bg-teal hover:text-white"
              >
                <Phone className="mr-2 h-4 w-4" />
                +91 9733253000
              </Button>
            </div>

            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors relative z-[60]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6 text-teal" /> : <Menu className="h-6 w-6 text-teal" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-white z-[55] overflow-hidden"
            style={{ top: "80px" }} // Start below the header
          >
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="h-full flex flex-col justify-between p-6"
            >
              <div className="space-y-8 pt-8">
                <Link
                  href="/"
                  className="block text-2xl font-medium text-gray-900 hover:text-teal transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="block text-2xl font-medium text-gray-900 hover:text-teal transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="block text-2xl font-medium text-gray-900 hover:text-teal transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/gallery"
                  className="block text-2xl font-medium text-gray-900 hover:text-teal transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Smile Gallery
                </Link>
                <Link
                  href="/blog"
                  className="block text-2xl font-medium text-gray-900 hover:text-teal transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block text-2xl font-medium text-gray-900 hover:text-teal transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              <div className="pb-8">
                <Button
                  className="w-full bg-teal hover:bg-teal/90 text-white py-4 text-lg rounded-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call: +91 9733253000
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
