"use client"

import { MapPin, Clock, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function LocationSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-6 md:p-8 h-full"
      id="booking"
    >
      <h2 className="text-xl md:text-2xl font-serif font-bold mb-6 text-teal">Visit Our Clinic</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center text-teal icon-3d">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-sm text-gray-600">
                A-Smiles Dental Clinic
                <br />
                734001, Raja Rammohan Roy Rd, Ward 15,
                <br />
                Hakim Para, Siliguri, West Bengal 734001
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center text-teal icon-3d">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-medium">Hours</h3>
              <p className="text-sm text-gray-600">
                Monday - Friday: 9am - 7pm
                <br />
                Saturday: 10am - 5pm
                <br />
                Sunday: Closed
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center text-teal icon-3d">
              <Phone className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-medium">Contact</h3>
              <p className="text-sm text-gray-600">
                Phone: +91 9733253000
                <br />
                WhatsApp: +91 9733253000
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center text-teal icon-3d">
              <Mail className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-sm text-gray-600">info@asmilesdentalclinic.com</p>
            </div>
          </motion.div>
        </div>

        <div className="relative w-full h-[300px] md:h-full rounded-2xl overflow-hidden bg-gray-100">
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
    </motion.div>
  )
}
