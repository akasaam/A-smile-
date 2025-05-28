"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />

      <div className="relative bg-teal text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-white/80">
            We're here to answer your questions and help you schedule your visit
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl shadow-md p-8">
            <h2 className="text-2xl font-serif font-bold mb-6 text-teal">Get in Touch</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input id="phone" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input id="subject" placeholder="Appointment Request" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="How can we help you?" rows={5} />
              </div>
              <Button className="w-full bg-teal hover:bg-teal/90 text-white">Send Message</Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-md p-8">
              <h2 className="text-2xl font-serif font-bold mb-6 text-teal">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center text-teal flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-gray-600">
                      734001, Raja Rammohan Roy Rd, Ward 15, <br />
                      Hakim Para, Siliguri, West Bengal 734001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center text-teal flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-600">+91 9733253000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center text-teal flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600">info@asmilesdentalclinic.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center text-teal flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9am - 7pm <br />
                      Saturday: 10am - 5pm <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-md p-8">
              <h2 className="text-2xl font-serif font-bold mb-6 text-teal">Quick Connect</h2>
              <div className="space-y-4">
                <Button
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => window.open("https://wa.me/919733253000", "_blank")}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-teal text-teal hover:bg-teal hover:text-white"
                  onClick={() => (window.location.href = "tel:+919733253000")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.0598810257!2d88.4309!3d26.7205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44180ab5be363%3A0x2e5c5544f827b7a!2sRaja%20Rammohan%20Roy%20Rd%2C%20Hakim%20Para%2C%20Siliguri%2C%20West%20Bengal%20734001!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="A-Smiles Dental Clinic Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
