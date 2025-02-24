"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

function FreeFlightPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000) // Show popup after 5 seconds

    return () => clearTimeout(timer)
  }, [])

  const closePopup = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        >
          <motion.div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full relative" layoutId="popup">
            <button onClick={closePopup} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Free Flight Ticket Offer!</h3>
            <p className="text-gray-600 mb-6">
              Get a free flight ticket after successfully completing our four-step process for selected universities!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
              onClick={closePopup}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FreeFlightPopup

