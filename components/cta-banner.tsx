"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MessageCircle, Mail } from "lucide-react"

export function CtaBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative w-full h-[300px] overflow-hidden rounded-3xl"
    >
      <Image
        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"
        alt="Dental clinic interior"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex flex-col justify-center p-8 md:p-12">
        <div className="max-w-xl space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-white"
          >
            Your Confidence Starts Here
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-white/90 max-w-md"
          >
            Take the first step towards the smile you've always wanted. Book your consultation today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            <Button
              size="lg"
              className="bg-teal hover:bg-teal/90 text-white rounded-full"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full"
              onClick={() => window.open("https://wa.me/919733253000", "_blank")}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full"
              onClick={() => (window.location.href = "mailto:info@asmilesdentalclinic.com")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Us
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
