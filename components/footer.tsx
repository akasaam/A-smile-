"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <motion.h3 whileHover={{ scale: 1.05 }} className="font-serif text-xl font-bold text-teal">
              A-Smiles
            </motion.h3>
            <p className="text-sm text-gray-600">
              A-Smiles Dental Clinic offers premium dental care with a self-care lounge experience in Siliguri, West
              Bengal.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-teal transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-teal transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-teal transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-teal transition-colors">
                  Smile Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-teal transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-teal transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-teal transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/scaling" className="text-gray-600 hover:text-teal transition-colors">
                  Scaling & Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/braces" className="text-gray-600 hover:text-teal transition-colors">
                  Braces & Aligners
                </Link>
              </li>
              <li>
                <Link href="/services/makeover" className="text-gray-600 hover:text-teal transition-colors">
                  Smile Makeover
                </Link>
              </li>
              <li>
                <Link href="/services/implants" className="text-gray-600 hover:text-teal transition-colors">
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link href="/services/whitening" className="text-gray-600 hover:text-teal transition-colors">
                  Teeth Whitening
                </Link>
              </li>
              <li>
                <Link href="/services/packages" className="text-gray-600 hover:text-teal transition-colors">
                  Bridal Packages
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <address className="not-italic text-sm text-gray-600 space-y-2">
              <p>A-Smiles Dental Clinic</p>
              <p>734001, Raja Rammohan Roy Rd, Ward 15,</p>
              <p>Hakim Para, Siliguri, West Bengal 734001</p>
              <p>Phone: +91 9733253000</p>
              <p>Email: info@asmilesdentalclinic.com</p>
            </address>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} A-Smiles Dental Clinic. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-teal transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-teal transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
