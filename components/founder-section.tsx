"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function FounderSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-6 md:p-8 h-full flex flex-col"
    >
      <div className="flex flex-col md:flex-row gap-6 items-center h-full">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 border-4 border-teal/30"
        >
          <Image
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=160&auto=format&fit=crop"
            alt="Dr. Ankita Debnath"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="flex-1 space-y-3">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-teal">Dr. Ankita Debnath</h2>
          <p className="text-sm text-gray-600">
            "I founded A-Smiles with a vision to transform dental visits from dreaded appointments into self-care
            experiences. Every smile tells a story, and I'm here to make yours shine."
          </p>
          <Button variant="link" className="p-0 h-auto text-teal hover:text-teal/80">
            Read My Story
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
