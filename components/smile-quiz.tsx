"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function SmileQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const questions = [
    {
      question: "What's your main smile concern?",
      options: ["Alignment", "Color", "Missing teeth", "Overall appearance"],
    },
    {
      question: "How soon are you looking to transform your smile?",
      options: ["ASAP", "Within 3 months", "Within 6 months", "Just exploring"],
    },
    {
      question: "Have you had dental work done before?",
      options: ["Yes, recently", "Yes, but long ago", "No, first time", "Prefer not to say"],
    },
  ]

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [step]: answer })
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      // Quiz completed
      setStep(questions.length)
    }
  }

  const resetQuiz = () => {
    setStep(0)
    setAnswers({})
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-6 md:p-8 h-full flex flex-col"
    >
      <div className="flex items-center gap-2 mb-4">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center text-teal icon-3d"
        >
          <Sparkles className="h-4 w-4" />
        </motion.div>
        <h2 className="text-xl font-serif font-bold text-teal">What's Your Smile Glow Score?</h2>
      </div>

      <div className="flex-1">
        <AnimatePresence mode="wait">
          {step < questions.length ? (
            <motion.div
              key={`question-${step}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <p className="text-gray-600">{questions[step].question}</p>
              <div className="space-y-2">
                {questions[step].options.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-3 border-teal/30 hover:bg-teal/10 hover:text-teal"
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </Button>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between items-center pt-4">
                <div className="text-xs text-gray-500">
                  Question {step + 1} of {questions.length}
                </div>
                {step > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setStep(step - 1)}
                    className="text-gray-500 hover:text-teal"
                  >
                    Back
                  </Button>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center space-y-4"
            >
              <motion.div
                initial={{ scale: 0.5, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center text-teal mx-auto"
              >
                <Sparkles className="h-8 w-8" />
              </motion.div>
              <h3 className="text-xl font-medium text-teal">Your Smile Glow Score: 85/100</h3>
              <p className="text-sm text-gray-600">
                Based on your answers, we recommend our Smile Makeover package. Book a consultation to discuss your
                personalized treatment plan.
              </p>
              <div className="pt-4">
                <Button
                  className="bg-teal hover:bg-teal/90 text-white"
                  onClick={() => window.open("https://wa.me/919733253000", "_blank")}
                >
                  Book Consultation
                </Button>
                <Button variant="link" className="mt-2 text-teal hover:text-teal/80" onClick={resetQuiz}>
                  Retake Quiz
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
