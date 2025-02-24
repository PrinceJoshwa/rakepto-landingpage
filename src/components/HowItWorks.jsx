import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const steps = [
  {
    title: 'Consultation & Assessment',
    content: 'Our expert counselors will understand your academic background, career aspirations, and budget to create a personalized study plan.'
  },
  {
    title: 'University Selection',
    content: "We'll help you choose the right universities based on your profile, preferences, and career goals."
  },
  {
    title: 'Application & Documentation',
    content: 'Get comprehensive support with application forms, documentation, and submission processes.'
  },
  {
    title: 'Visa Assistance',
    content: 'Expert guidance through the entire visa application process, including documentation and interview preparation.'
  },
  {
    title: 'Pre-Departure Orientation',
    content: 'Detailed briefing about your destination country, university, accommodation, and what to expect.'
  },
  {
    title: 'Post-Arrival Support',
    content: 'Continuous support even after you arrive, helping you settle into your new environment.'
  },
  {
    title: 'Scholarship Assistance',
    content: 'Information and guidance about available scholarships and how to apply for them.'
  }
]

function AccordionItem({ title, content, isOpen, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="border-b border-gray-200">
        <motion.button
          className="w-full py-4 flex justify-between items-center text-left"
          onClick={onClick}
          whileHover={{ scale: 1.01 }}
        >
          <span className="text-lg font-semibold text-blue-900">
            {index + 1}. {title}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-blue-900" />
          </motion.div>
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pb-4 text-gray-600">
                {content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

function HowItWorks() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="how-it-works" className="py-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your journey to studying abroad made simple with our step-by-step process
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6"
          whileHover={{ boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
        >
          {steps.map((step, index) => (
            <AccordionItem
              key={index}
              title={step.title}
              content={step.content}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* <motion.button
            className="bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks

