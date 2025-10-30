import React, { useEffect } from "react"
import { Link } from "react-router-dom" // Import Link for navigation
import { motion } from "framer-motion"
import { CheckCircle, ArrowLeft } from "lucide-react"

function ThankYou() {
  // This effect hook adds the conversion snippet to the <head>
  useEffect(() => {
    // Create the script element
    const script = document.createElement("script")

    // Set its content from the provided text 
    script.innerHTML = `gtag('event', 'conversion', {'send_to': 'AW-17672318728/as37CLXO_7UbEIje6OpB'});` // 

    // Append the script to the document's <head>
    document.head.appendChild(script)

    // Optional: Return a cleanup function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script)
    }
  }, []) // The empty array [] ensures this effect runs only once when the component mounts

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="max-w-md w-full bg-white/60 backdrop-blur-lg p-8 md:p-12 rounded-2xl shadow-2xl border border-white/50 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-6 inline-block text-green-500"
        >
          <CheckCircle size={64} />
        </motion.div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Thank You!
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Thank you, we’ll contact you soon.
        </p>

        <Link
          to="/" // Link to the home page
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-blue-800 transition-all hover:bg-blue-700 hover:scale-105 active:scale-95"
        >
          <ArrowLeft size={18} />
          Go back to the home page
        </Link>
      </div>
    </div>
  )
}

export default ThankYou