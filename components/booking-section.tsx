"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Mail, CalendarIcon } from "lucide-react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function BookingSection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [service, setService] = useState("")

  const handleWhatsAppBooking = () => {
    const text = `Hello, I would like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nPreferred Date: ${date}\nPreferred Time: ${time}\nMessage: ${message}`
    window.open(`https://wa.me/919733253000?text=${encodeURIComponent(text)}`, "_blank")
  }

  const handleEmailBooking = () => {
    const subject = "Appointment Request"
    const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nPreferred Date: ${date}\nPreferred Time: ${time}\nMessage: ${message}`
    window.location.href = `mailto:info@asmilesdentalclinic.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-6 md:p-8 h-full"
    >
      <h2 className="text-xl md:text-2xl font-serif font-bold mb-6 text-teal">Book Your Appointment</h2>

      <Tabs defaultValue="whatsapp" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="whatsapp" className="data-[state=active]:bg-teal data-[state=active]:text-white">
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </TabsTrigger>
          <TabsTrigger value="email" className="data-[state=active]:bg-teal data-[state=active]:text-white">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </TabsTrigger>
          <TabsTrigger value="calendar" className="data-[state=active]:bg-teal data-[state=active]:text-white">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Calendar
          </TabsTrigger>
        </TabsList>

        <TabsContent value="whatsapp" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">Select Service</option>
              <option value="Scaling">Scaling & Cleaning</option>
              <option value="Braces">Braces & Aligners</option>
              <option value="Smile Makeover">Smile Makeover</option>
              <option value="Implants">Dental Implants</option>
              <option value="Whitening">Teeth Whitening</option>
            </select>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="">Select Time</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
            </select>
          </div>
          <Textarea
            placeholder="Additional information or questions"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button className="w-full bg-teal hover:bg-teal/90 text-white" onClick={handleWhatsAppBooking}>
            <MessageCircle className="mr-2 h-4 w-4" />
            Book via WhatsApp
          </Button>
        </TabsContent>

        <TabsContent value="email" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <Input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">Select Service</option>
              <option value="Scaling">Scaling & Cleaning</option>
              <option value="Braces">Braces & Aligners</option>
              <option value="Smile Makeover">Smile Makeover</option>
              <option value="Implants">Dental Implants</option>
              <option value="Whitening">Teeth Whitening</option>
            </select>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <Textarea
            placeholder="Additional information or questions"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button className="w-full bg-teal hover:bg-teal/90 text-white" onClick={handleEmailBooking}>
            <Mail className="mr-2 h-4 w-4" />
            Book via Email
          </Button>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <p className="text-sm text-gray-600">
            Our online calendar booking system allows you to see real-time availability and book your preferred slot
            instantly.
          </p>
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <CalendarIcon className="h-12 w-12 mx-auto text-teal mb-2" />
            <p className="text-sm text-gray-600 mb-4">Click the button below to open our online booking calendar</p>
            <Button
              className="bg-teal hover:bg-teal/90 text-white"
              onClick={() => window.open("https://calendly.com/asmilesdentalclinic", "_blank")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              Open Booking Calendar
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
