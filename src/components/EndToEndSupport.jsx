//v0
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, BookOpen, DollarSign, Plane, Home, Briefcase } from "lucide-react"
import FormPopup from "./FormPopup"

const supportItems = [
  { icon: FileText, title: "SOP", description: "Expert guidance on crafting a standout Statement of Purpose" },
  {
    icon: BookOpen,
    title: "Admission & Application",
    description: "Comprehensive support for university admissions and applications",
  },
  {
    icon: DollarSign,
    title: "Education Loan",
    description: "Assistance in securing financial support for your studies",
  },
  { icon: Plane, title: "Visa Support", description: "Expert help with visa application and documentation" },
  { icon: Home, title: "Accommodation", description: "Find the perfect place to stay during your studies" },
  { icon: Briefcase, title: "Part-time Job", description: "Guidance on finding part-time work opportunities" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

function EndToEndSupport() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  const openPopup = (service) => {
    setSelectedService(service)
    setIsPopupOpen(true)
  }

  return (
    <section className="py-8 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Get End-to-End Support</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're with you every step of the way, from application to graduation and beyond.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {supportItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    className="bg-orange-100 p-3 rounded-full mr-4 flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-6 h-6 text-orange-500" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-blue-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 flex-grow">{item.description}</p>
                <motion.button
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full font-medium inline-flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openPopup(item.title)}
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <FormPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} selectedService={selectedService} />
    </section>
  )
}

export default EndToEndSupport

