"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const phoneNumber = "919733253000"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message)
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
      setMessage("")
      setIsOpen(false)
    }
  }

  return (
    <>
      <motion.button
        className="whatsapp-button bg-green-500 text-white p-3 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl z-50 overflow-hidden"
          >
            <div className="bg-teal p-4 text-white flex justify-between items-center">
              <h3 className="font-medium">Chat with us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4 bg-gray-50 h-60 overflow-y-auto">
              <div className="bg-teal/10 p-3 rounded-lg inline-block max-w-[80%]">
                <p className="text-sm">
                  Hello! How can we help you today? Feel free to ask about our services or book an appointment.
                </p>
                <span className="text-xs text-gray-500 block mt-1">A-Smiles Team</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-3 border-t flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal/50"
              />
              <Button type="submit" size="sm" className="bg-teal hover:bg-teal/90">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
