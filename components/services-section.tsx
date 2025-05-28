"use client"

import { Sparkles, Smile, Heart, Cookie as Tooth } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function ServicesSection() {
  const services = [
    {
      icon: <Sparkles className="h-5 w-10" />,
      name: "Scaling",
      description: "Professional cleaning for a fresh smile",
    },
    {
      icon: <Smile className="h-5 w-10" />,
      name: "Braces",
      description: "Modern alignment solutions for all ages",
    },
    {
      icon: <Heart className="h-5 w-10" />,
      name: "Smile Makeover",
      description: "Complete transformation for your confidence",
    },
    {
      icon: <Tooth className="h-5 w-10" />,
      name: "Implants",
      description: "Permanent solutions for missing teeth",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="p-6 md:p-8 h-full"
    >
      <h2 className="text-xl md:text-2xl font-serif font-bold mb-4 text-teal">Our Signature Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <motion.div key={index} variants={item}>
            <Link
              href="/services"
              className="group p-4 rounded-2xl bg-secondary hover:bg-teal/10 transition-colors flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-colors icon-3d">
                {service.icon}
              </div>
              <div>
                <h3 className="font-medium">{service.name}</h3>
                <p className="text-sm text-gray-500">{service.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
