import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Sparkles, Smile, Heart, SmileIcon as Tooth, Star, Calendar } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "scaling",
      icon: <Sparkles className="h-6 w-6" />,
      name: "Scaling & Cleaning",
      description:
        "Professional cleaning to remove plaque and tartar buildup, leaving your teeth feeling fresh and looking brighter.",
      benefits: ["Prevents gum disease", "Removes stains", "Freshens breath", "Detects early issues"],
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "braces",
      icon: <Smile className="h-6 w-6" />,
      name: "Braces & Aligners",
      description:
        "Modern orthodontic solutions to straighten teeth and correct bite issues for a perfectly aligned smile.",
      benefits: ["Improves smile aesthetics", "Corrects bite issues", "Prevents dental problems", "Boosts confidence"],
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "makeover",
      icon: <Heart className="h-6 w-6" />,
      name: "Smile Makeover",
      description: "Comprehensive treatment plan combining multiple procedures to transform your smile completely.",
      benefits: [
        "Total smile transformation",
        "Customized treatment plan",
        "Long-lasting results",
        "Enhanced confidence",
      ],
      image: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "implants",
      icon: <Tooth className="h-6 w-6" />,
      name: "Dental Implants",
      description: "Permanent solution for missing teeth that look, feel, and function just like natural teeth.",
      benefits: ["Prevents bone loss", "Restores full function", "Natural appearance", "Long-term solution"],
      image: "https://images.unsplash.com/photo-1579033385971-a7bc8c5f4b75?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "whitening",
      icon: <Star className="h-6 w-6" />,
      name: "Teeth Whitening",
      description:
        "Professional whitening treatments that remove stains and discoloration for a brighter, whiter smile.",
      benefits: ["Immediate results", "Safe procedure", "Customized treatment", "Boosts confidence"],
      image: "https://images.unsplash.com/photo-1570612861542-284f4c12e75f?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "packages",
      icon: <Calendar className="h-6 w-6" />,
      name: "Bridal Packages",
      description: "Special dental packages designed for brides-to-be to ensure a perfect smile for your special day.",
      benefits: ["Pre-wedding timeline", "Customized treatments", "Quick results", "Photography-ready smile"],
      image: "https://images.unsplash.com/photo-1523264939339-c89f9dadde2e?q=80&w=600&auto=format&fit=crop",
    },
  ]

  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />

      <div className="relative bg-teal text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h1>
          <p className="max-w-2xl mx-auto text-white/80">
            Comprehensive dental care with a focus on comfort, quality, and transformative results
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48">
                <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center text-teal">
                    {service.icon}
                  </div>
                  <h2 className="text-xl font-serif font-bold">{service.name}</h2>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <h3 className="font-medium text-sm mb-2">Benefits:</h3>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-teal text-lg">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${service.id}`}>
                  <Button className="w-full bg-teal hover:bg-teal/90 text-white">Learn More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl shadow-md p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-teal">Ready to Transform Your Smile?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Book a consultation with our expert team to discuss your dental needs and create a personalized treatment
            plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-teal hover:bg-teal/90 text-white rounded-full">
              <Calendar className="mr-2 h-4 w-4" />
              Book Consultation
            </Button>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-teal text-teal hover:bg-teal hover:text-white rounded-full"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
