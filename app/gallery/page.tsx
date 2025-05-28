"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export default function GalleryPage() {
  const [filter, setFilter] = useState("all")

  const galleryItems = [
    {
      id: 1,
      category: "makeover",
      title: "Complete Smile Makeover",
      description: "Veneers and whitening treatment",
      before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=500&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "braces",
      title: "Braces Transformation",
      description: "12-month orthodontic treatment",
      before: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=500&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "whitening",
      title: "Professional Whitening",
      description: "In-office whitening procedure",
      before: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?q=80&w=500&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1570612861542-284f4c12e75f?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 4,
      category: "implants",
      title: "Dental Implant",
      description: "Single tooth replacement",
      before: "https://images.unsplash.com/photo-1606811841661-bb4169e14ee1?q=80&w=500&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1581591524399-5c1d799592a8?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 5,
      category: "makeover",
      title: "Full Mouth Reconstruction",
      description: "Comprehensive dental restoration",
      before: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=500&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 6,
      category: "whitening",
      title: "Zoom Whitening",
      description: "Advanced whitening technology",
      before: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?q=80&w=500&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1570612861542-284f4c12e75f?q=80&w=500&auto=format&fit=crop",
    },
  ]

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)

  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />

      <div className="relative bg-teal text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Smile Gallery</h1>
          <p className="max-w-2xl mx-auto text-white/80">
            Browse our collection of real patient transformations and success stories
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            className={filter === "all" ? "bg-teal text-white" : "border-teal text-teal hover:bg-teal hover:text-white"}
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant={filter === "makeover" ? "default" : "outline"}
            className={
              filter === "makeover" ? "bg-teal text-white" : "border-teal text-teal hover:bg-teal hover:text-white"
            }
            onClick={() => setFilter("makeover")}
          >
            Smile Makeovers
          </Button>
          <Button
            variant={filter === "braces" ? "default" : "outline"}
            className={
              filter === "braces" ? "bg-teal text-white" : "border-teal text-teal hover:bg-teal hover:text-white"
            }
            onClick={() => setFilter("braces")}
          >
            Braces
          </Button>
          <Button
            variant={filter === "whitening" ? "default" : "outline"}
            className={
              filter === "whitening" ? "bg-teal text-white" : "border-teal text-teal hover:bg-teal hover:text-white"
            }
            onClick={() => setFilter("whitening")}
          >
            Whitening
          </Button>
          <Button
            variant={filter === "implants" ? "default" : "outline"}
            className={
              filter === "implants" ? "bg-teal text-white" : "border-teal text-teal hover:bg-teal hover:text-white"
            }
            onClick={() => setFilter("implants")}
          >
            Implants
          </Button>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-2">Before:</p>
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={item.before || "/placeholder.svg"}
                        alt={`Before ${item.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-2">After:</p>
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={item.after || "/placeholder.svg"}
                        alt={`After ${item.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 bg-white rounded-3xl shadow-md p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-teal">
            Ready for Your Own Transformation?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Book a consultation with our expert team to discuss how we can help you achieve the smile of your dreams.
          </p>
          <Button
            size="lg"
            className="bg-teal hover:bg-teal/90 text-white rounded-full"
            onClick={() => window.open("https://wa.me/919733253000", "_blank")}
          >
            Book Your Consultation
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}
