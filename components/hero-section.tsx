"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-3xl">
      {/* Updated hero image */}
      <Image
        src="https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=1200&auto=format&fit=crop"
        alt="Beautiful smile transformation"
        fill
        className="object-cover"
        priority
      />

      {/* Animated grid background */}
      <div className="bg-grid"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Small Fixes. <br />
            <span className="text-teal">Big Transformations.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/90 text-lg md:text-xl max-w-md"
          >
            Experience premium dental care with a self-care lounge experience at A-Smiles Dental Clinic in Siliguri.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-teal hover:bg-teal/90 text-white rounded-full group"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Calendar className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              Book Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full"
              onClick={() => window.open("https://wa.me/919733253000", "_blank")}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Us
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Simple curved line doodles */}
      <div className="doodle doodle-1">
        <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,50 C30,10 70,10 90,50" stroke="#00748d" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      <div className="doodle doodle-2">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,80 C40,20 80,20 110,80" stroke="#00748d" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      <div className="doodle doodle-3">
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,30 C25,10 55,10 70,30" stroke="#00748d" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    </div>
  )
}
