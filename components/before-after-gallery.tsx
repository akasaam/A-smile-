"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { register } from "swiper/element/bundle"
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BeforeAfterGallery() {
  const transformations = [
    {
      before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=300&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?q=80&w=300&auto=format&fit=crop",
      title: "Smile Makeover",
      description: "Complete transformation with veneers and whitening",
    },
    {
      before: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=300&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?q=80&w=300&auto=format&fit=crop",
      title: "Braces Journey",
      description: "12-month transformation with clear aligners",
    },
    {
      before: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?q=80&w=300&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1570612861542-284f4c12e75f?q=80&w=300&auto=format&fit=crop",
      title: "Teeth Whitening",
      description: "Professional whitening for a brighter smile",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const sliderRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  // Register Swiper custom elements
  useEffect(() => {
    register()
  }, [])

  // Improved slider functionality for smoother operation
  const handleSliderMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    isDragging.current = true
    updateSliderPosition(e.clientX)

    // Add event listeners to window to handle mouse movements outside the slider
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseleave", handleMouseUp)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.current) {
      updateSliderPosition(e.clientX)
    }
  }

  const handleMouseUp = () => {
    isDragging.current = false
    window.removeEventListener("mousemove", handleMouseMove)
    window.removeEventListener("mouseup", handleMouseUp)
    window.removeEventListener("mouseleave", handleMouseUp)
  }

  // Touch support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true
    updateSliderPosition(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current) {
      updateSliderPosition(e.touches[0].clientX)
    }
  }

  const handleTouchEnd = () => {
    isDragging.current = false
  }

  const updateSliderPosition = (clientX: number) => {
    if (!sliderRef.current) return

    const rect = sliderRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const position = (x / rect.width) * 100

    // Constrain position between 0 and 100
    const constrainedPosition = Math.max(0, Math.min(100, position))
    setSliderPosition(constrainedPosition)
  }

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % transformations.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + transformations.length) % transformations.length)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-6 md:p-8 h-full transformation-section"
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center text-teal"
          >
            <Sparkles className="h-5 w-5" />
          </motion.div>
          <h2 className="text-xl md:text-2xl font-bold text-teal">Smile Transformations</h2>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-teal text-teal hover:bg-teal hover:text-white"
            onClick={prevSlide}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-teal text-teal hover:bg-teal hover:text-white"
            onClick={nextSlide}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative">
        {/* Before/After Slider with improved touch and mouse handling */}
        <div
          ref={sliderRef}
          className="before-after-slider h-[400px] md:h-[500px] mb-6"
          onMouseDown={handleSliderMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="before-image" style={{ width: `${sliderPosition}%` }}>
            <div className="relative w-full h-full">
              <Image
                src={transformations[activeIndex].before || "/placeholder.svg"}
                alt={`Before ${transformations[activeIndex].title}`}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">Before</div>
            </div>
          </div>
          <div className="after-image" style={{ width: `${100 - sliderPosition}%`, left: `${sliderPosition}%` }}>
            <div className="relative w-full h-full">
              <Image
                src={transformations[activeIndex].after || "/placeholder.svg"}
                alt={`After ${transformations[activeIndex].title}`}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-teal text-white text-xs px-3 py-1 rounded-full">After</div>
            </div>
          </div>
          <div className="slider-handle" style={{ left: `${sliderPosition}%` }}></div>
        </div>

        {/* Transformation Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={activeIndex}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto text-center relative z-10"
        >
          <h3 className="text-xl font-bold text-teal mb-2">{transformations[activeIndex].title}</h3>
          <p className="text-gray-600">{transformations[activeIndex].description}</p>

          <div className="mt-4 flex justify-center gap-2">
            {transformations.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-teal scale-125" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Simple curved line doodles */}
      <div className="absolute top-10 right-10 opacity-20">
        <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,50 C30,10 70,10 90,50" stroke="#00748d" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-10 opacity-20">
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,30 C25,10 55,10 70,30" stroke="#00748d" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    </motion.div>
  )
}
