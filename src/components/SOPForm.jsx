"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Loader2 } from "lucide-react"

const formFields = [
  { name: "name", label: "Full Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "course", label: "Desired Course", type: "text" },
  { name: "university", label: "Target University", type: "text" },
]

const FormField = ({ label, type, value, onChange, name, animate }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: animate }}
  >
    <label className="block text-gray-700 mb-2 font-medium">{label}</label>
    {type === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows="4"
        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
        placeholder={`Enter your ${label.toLowerCase()}`}
        required
      />
    )}
  </motion.div>
)

function SOPForm({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    university: "",
    requirements: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    onClose()
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      university: "",
      requirements: "",
    })
    setCurrentStep(1)
  }

  const nextStep = () => {
    setCurrentStep(2)
  }

  const prevStep = () => {
    setCurrentStep(1)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-md relative overflow-hidden"
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
              onClick={onClose}
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5 text-gray-500" />
            </motion.button>

            {/* Form Header */}
            <div className="p-6 pb-0">
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Start Your SOP Journey
              </motion.h3>
              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {currentStep === 1
                  ? "Fill in your basic details to get started"
                  : "Tell us more about your requirements"}
              </motion.p>
            </div>

            {/* Progress Bar */}
            <motion.div
              className="w-full h-1 bg-gray-100 mt-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="h-full bg-orange-500"
                initial={{ width: "50%" }}
                animate={{ width: currentStep === 1 ? "50%" : "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <AnimatePresence mode="wait">
                {currentStep === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-4"
                  >
                    {formFields.map((field, index) => (
                      <FormField
                        key={field.name}
                        {...field}
                        value={formData[field.name]}
                        onChange={handleChange}
                        animate={index * 0.1}
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <FormField
                      label="Special Requirements"
                      type="textarea"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      animate={0}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Actions */}
              <motion.div
                className="flex gap-3 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {currentStep === 2 && (
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Back
                  </motion.button>
                )}
                <motion.button
                  type="button"
                  onClick={currentStep === 1 ? nextStep : handleSubmit}
                  className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      {currentStep === 1 ? "Next" : "Submit"}
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SOPForm

