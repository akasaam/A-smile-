"use client"

import { useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FounderSection } from "@/components/founder-section"
import { ServicesSection } from "@/components/services-section"
import { BeforeAfterGallery } from "@/components/before-after-gallery"
import { SmileQuiz } from "@/components/smile-quiz"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaBanner } from "@/components/cta-banner"
import { LocationSection } from "@/components/location-section"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"

export default function Home() {
  // Fix for scrolling issues - remove GSAP smooth scrolling which was causing problems
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Simple scroll to anchor links without GSAP
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()

        const targetId = this.getAttribute("href")
        if (targetId && targetId !== "#") {
          const targetElement = document.querySelector(targetId)
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            })
          }
        }
      })
    })

    // Add simple fade-in animations for tiles
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".bento-tile").forEach((tile) => {
      observer.observe(tile)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Remove the grid background
  return (
    <main ref={mainRef} className="min-h-screen bg-secondary relative">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="bento-grid">
          <div className="bento-tile-xl">
            <HeroSection />
          </div>

          <div className="bento-tile">
            <FounderSection />
          </div>

          <div className="bento-tile">
            <ServicesSection />
          </div>

          <div className="bento-tile-large">
            <BeforeAfterGallery />
          </div>

          <div className="bento-tile">
            <SmileQuiz />
          </div>

          <div className="bento-tile-large">
            <TestimonialsSection />
          </div>

          <div className="bento-tile-xl">
            <CtaBanner />
          </div>

          <div className="bento-tile-large">
            <LocationSection />
          </div>

          <div className="bento-tile-xl">
            <BookingSection />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
