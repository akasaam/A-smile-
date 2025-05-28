"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"
import { register } from "swiper/element/bundle"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya S.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=80&auto=format&fit=crop",
      text: "Dr. Ankita made my braces journey so comfortable. The clinic feels more like a spa than a dental office!",
      treatment: "Braces Treatment",
    },
    {
      name: "Rahul M.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=80&auto=format&fit=crop",
      text: "I was terrified of dental work until I found A-Smiles. Their gentle approach changed everything for me.",
      treatment: "Smile Makeover",
    },
    {
      name: "Aisha K.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=80&auto=format&fit=crop",
      text: "Got my teeth whitened before my wedding. The results were amazing and the experience was so relaxing!",
      treatment: "Teeth Whitening",
    },
  ]

  // Register Swiper custom elements
  useEffect(() => {
    // Register Swiper custom elements
    register()

    // Initialize Swiper with autoplay after a short delay to ensure DOM is ready
    const timeout = setTimeout(() => {
      const swiperEl = document.querySelector(".testimonials-swiper")
      if (swiperEl) {
        const swiperParams = {
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          on: {
            init() {
              // ...
            },
          },
        }

        // Assign the parameters to the Swiper element
        Object.assign(swiperEl, swiperParams)

        // Initialize Swiper
        swiperEl.initialize()
      }
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-6 md:p-8 h-full"
    >
      <div className="flex items-center gap-2 mb-6">
        <Quote className="h-5 w-5 text-teal" />
        <h2 className="text-xl md:text-2xl font-serif font-bold text-teal">Patient Stories</h2>
      </div>

      <swiper-container className="testimonials-swiper" slides-per-view="1" pagination="true" loop="true">
        {testimonials.map((testimonial, index) => (
          <swiper-slide key={index}>
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <div className="bg-secondary rounded-2xl p-6 relative">
                  <Quote className="absolute top-4 left-4 h-8 w-8 text-teal/20" />
                  <p className="text-gray-600 relative z-10 pl-6">{testimonial.text}</p>
                </div>

                <div className="flex items-center gap-4 mt-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative w-12 h-12 rounded-full overflow-hidden"
                  >
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.treatment}</p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </motion.div>
  )
}
