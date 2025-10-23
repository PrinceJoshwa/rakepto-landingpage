"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Users, Share2, DollarSign, ArrowRight, Star, Gift, X } from "lucide-react" // Added X for close icon

const Partner = () => {
  const [form, setForm] = useState({ name: "", email: "" })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false) // State to control modal visibility

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      const response = await fetch("/api/sendReferral", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setMessage("✅ Referral code sent to your email!")
        setForm({ name: "", email: "" })
        // Optionally close modal on success after a short delay
        setTimeout(() => setIsModalOpen(false), 2000)
      } else {
        setMessage("❌ Failed to send email: " + (data.error || "Unknown error"))
      }
    } catch (error) {
      setMessage("❌ Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const steps = [
    {
      icon: Users,
      title: "Sign Up",
      description: "Register on Rakepto's referral program and receive your unique referral code.",
      color: "from-blue-500 to-blue-600",
      lightColor: "bg-blue-50",
    },
    {
      icon: Share2,
      title: "Share",
      description: "Share your referral code with friends or students interested in studying abroad.",
      color: "from-orange-500 to-orange-600",
      lightColor: "bg-orange-50",
    },
    {
      icon: DollarSign,
      title: "Earn",
      description: "Get rewarded between £100 and £300 (₹10k–₹35k) for every successful student referral.",
      color: "from-blue-600 to-blue-700",
      lightColor: "bg-blue-50",
    },
  ]

  const benefits = [
    "High commission rates",
    "Quick payouts",
    "24/7 support",
    "Marketing materials provided",
    "No hidden fees",
    "Global reach",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-orange-500"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200 rounded-full opacity-20"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-orange-200 rounded-full opacity-20"></div>

      {/* Floating elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400 opacity-5"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 30 - 15],
            x: [0, Math.random() * 30 - 15],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="container mx-auto px-4 py-16 pt-24 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6"
          >
            <Gift className="w-5 h-5" />
            <span className="font-semibold">Partnership Program</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
            Refer & Earn with <span className="text-orange-500">Rakepto</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Invite students to study abroad and earn rewards from{" "}
            <span className="text-orange-500 font-bold">£100 to £300</span>{" "}
            <span className="text-blue-900 font-bold">(₹10,000 to ₹35,000)</span> for each successful referral.
          </p>

          <motion.button // Changed from <a> to <button> for click handling
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up to Refer
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Start earning with our simple 3-step process</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${step.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <step.icon className="w-8 h-8" />
                    <span className="text-2xl font-bold opacity-50">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Partner With Us?</h2>
              <p className="text-gray-600">Join thousands of partners earning with our referral program</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg"
                >
                  <Star className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Earning?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our partnership program today and start earning rewards for every successful referral.
            </p>
            <motion.button // Changed from <a> to <button> for click handling
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Custom Modal for Sign Up Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md relative"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Partner Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-200 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-200 focus:outline-none"
                  placeholder="your@example.com"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-600 transition duration-200"
                disabled={loading}
              >
                {loading ? "Sending..." : "Sign Up & Get Referral Code"}
              </button>
            </form>
            {message && <div className="mt-4 text-center text-sm text-gray-700">{message}</div>}
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Partner
