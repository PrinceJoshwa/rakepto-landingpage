import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { supabase } from "../supabase/supabaseClient"
import { logError } from "../utils/logger"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [submitError, setSubmitError] = useState("")
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isOnline) {
      setSubmitError("You're currently offline. Please check your internet connection and try again.")
      return
    }

    setIsSubmitting(true)
    setSubmitMessage("")
    setSubmitError("")

    try {
      // Add created_at field with current timestamp
      const contactData = {
        ...formData,
        created_at: new Date().toISOString()
      }

      const { error } = await supabase
        .from('contacts')
        .insert([contactData])

      if (error) throw error

      setSubmitMessage("Thank you for your message! We'll get back to you soon.")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      logError(error, { formData })
      console.error("Detailed error:", error)
      
      if (error.message.includes("Failed to fetch")) {
        setSubmitError("Network error. Please check your internet connection and try again.")
      } else if (error.code === "23505") {
        setSubmitError("This email has already been submitted. Please use a different email address.")
      } else if (error.code === "42P01") {
        setSubmitError("Database configuration error. Please contact support.")
      } else {
        setSubmitError("An error occurred while submitting your message. Please try again later.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-8 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">Contact Us</h2>
        <div className="max-w-3xl mx-auto">
          <motion.form
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className={`w-full px-6 py-3 rounded-full font-semibold text-white transition-colors ${
                isOnline ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-400 cursor-not-allowed"
              }`}
              whileHover={isOnline ? { scale: 1.05 } : {}}
              whileTap={isOnline ? { scale: 0.95 } : {}}
              disabled={isSubmitting || !isOnline}
            >
              {isSubmitting ? "Sending..." : isOnline ? "Send Message" : "Offline"}
            </motion.button>
            {submitMessage && <p className="mt-4 text-center text-green-600">{submitMessage}</p>}
            {submitError && <p className="mt-4 text-center text-red-600">{submitError}</p>}
            {!isOnline && (
              <p className="mt-4 text-center text-yellow-600">
                You're currently offline. Please check your internet connection.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact