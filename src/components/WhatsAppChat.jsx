
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Prevent Font Awesome from automatically adding its CSS
config.autoAddCss = false

function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = '+911234567890' // Replace with your actual WhatsApp number
  const message = encodeURIComponent('Hi, I\'m interested in studying abroad. Can you help me?')

  const toggleChat = () => setIsOpen(!isOpen)

  // Ensure icons are only rendered client-side to prevent hydration errors
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Blinking Animation Wrapper */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-400 opacity-50"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.1, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        ></motion.div>
        
        <button
          onClick={toggleChat}
          className="relative bg-green-500 text-white p-3 px-3.5 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
        </button>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 bg-white p-4 rounded-lg shadow-xl z-50 w-72"
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', damping: 25, stiffness: 500 }}
          >
            <button
              onClick={toggleChat}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <h3 className="text-lg font-semibold mb-2">Chat with us on WhatsApp</h3>
            <p className="text-sm text-gray-600 mb-4">
              Click the button below to start a conversation on WhatsApp. We're here to help!
            </p>
            <a
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-2 px-4 rounded-full inline-block text-center w-full hover:bg-green-600 transition-colors"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default WhatsAppChat
