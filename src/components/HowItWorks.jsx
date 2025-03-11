
"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { ChevronRight, CheckCircle, ArrowRight } from "lucide-react"

const steps = [
  {
    title: "Consultation & Assessment",
    content:
      "Our expert counselors will understand your academic background, career aspirations, and budget to create a personalized study plan.",
    icon: "🎯",
    details: [
      "In-depth discussion of your goals",
      "Analysis of academic records",
      "Evaluation of English proficiency",
      "Budget planning and financial advice",
    ],
    // color: "from-blue-500 to-blue-600",
    color: "from-orange-500 to-orange-600",
    lightColor: "bg-orange-50",
  },
  {
    title: "University Selection",
    content: "We'll help you choose the right universities based on your profile, preferences, and career goals.",
    icon: "🏫",
    details: [
      "Shortlisting suitable universities",
      "Analyzing program curricula",
      "Considering career prospects",
      "Evaluating admission requirements",
    ],
    // // lightColor: "bg-indigo-50",
    // lightColor: "bg-blue-50",
    // // color: "from-indigo-500 to-indigo-600",
    // color: "from-blue-600 to-blue-700",
    color: "from-orange-500 to-orange-600",
    lightColor: "bg-orange-50",
  },
  {
    title: "Application & Documentation",
    content:
      "Get comprehensive support with application forms, documentation, Statement of Purpose (SOP), Letters of Recommendation (LOR), and submission processes.",
    icon: "📝",
    details: [
      "Guidance on filling application forms",
      "SOP and LOR writing assistance",
      "Document verification and organization",
      "Timely submission of applications",
    ],
    // color: "from-cyan-500 to-cyan-600",
    // lightColor: "bg-cyan-50",
    // color: "from-orange-500 to-orange-600",
    // lightColor: "bg-orange-50",
    color: "from-orange-500 to-orange-600",
    lightColor: "bg-orange-50",
  },
  {
    title: "IELTS Plus Training",
    content:
      "Comprehensive training to enhance your IELTS skills, including practice tests, strategies, and personalized feedback.",
    icon: "📚",
    details: [
      "Intensive speaking and writing workshops",
      "Regular mock tests and evaluations",
      "One-on-one feedback sessions",
      "Strategies for all IELTS sections",
    ],
    // color: "from-sky-500 to-sky-600",
    // lightColor: "bg-sky-50",
    color: "from-orange-500 to-orange-600",
    lightColor: "bg-orange-50",
  },
  {
    title: "Scholarship Assistance",
    content: "Information and guidance about available scholarships and how to apply for them.",
    icon: "🏆",
    details: [
      "Identifying relevant scholarship opportunities",
      "Assistance with scholarship applications",
      "Guidance on writing scholarship essays",
      "Interview preparation for scholarships",
    ],
    // color: "from-blue-600 to-blue-700",
    // lightColor: "bg-blue-50",
    color: "from-orange-500 to-orange-600",
    lightColor: "bg-orange-50",
  },
  {
    title: "Visa Assistance",
    content:
      "Expert guidance through the entire visa application process, including documentation and interview preparation.",
    icon: "✈️",
    details: [
      "Comprehensive visa application support",
      "Document preparation and verification",
      "Mock visa interviews",
      "Guidance on financial documentation",
    ],
    // color: "from-blue-600 to-blue-700",
    // lightColor: "bg-blue-50",
    color: "from-orange-500 to-orange-600",
    lightColor: "bg-orange-50",
  },
  {
    title: "Pre-Departure Orientation",
    content: "Detailed briefing about your destination country, university, accommodation, and what to expect.",
    icon: "🌍",
    details: [
      "Cultural adaptation tips",
      "Accommodation arrangements",
      "Travel and packing advice",
      "Introduction to student life abroad",
    ],
    // color: "from-blue-700 to-blue-800",
    // lightColor: "bg-blue-50",
    color: "from-orange-500 to-orange-600",
    lightColor: "bg-orange-50",
  },
  {
    title: "Post-Arrival Support",
    content: "Continuous support even after you arrive, helping you settle into your new environment.",
    icon: "🏠",
    details: [
      "Assistance with local registration processes",
      "Guidance on opening bank accounts",
      "Help with finding part-time jobs",
      "Regular check-ins and support",
    ],
    // color: "from-blue-800 to-blue-900",
    // lightColor: "bg-blue-50",.
    color: "from-orange-500 to-orange-600",
    lightColor: "bg-orange-50",
  },
]

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }))
  }, [controls])

  const handleStepClick = (index) => {
    setActiveStep(index)
  }

  const activeStepData = steps[activeStep]

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-900"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200 rounded-full opacity-20"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-blue-200 rounded-full opacity-20"></div>

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

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-blue-900">How It Works</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Steps List */}
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 flex-grow overflow-y-auto max-h-[600px] space-y-3">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center p-3 rounded-xl cursor-pointer transition-all ${
                      activeStep === index
                        ? `bg-gradient-to-r ${step.color} text-white shadow-md`
                        : `${step.lightColor} hover:bg-gray-100`
                    }`}
                    onClick={() => handleStepClick(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    custom={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={controls}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                        activeStep === index ? "bg-white/20 backdrop-blur-sm" : "bg-white shadow-sm"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <span className={`ml-4 font-medium ${activeStep === index ? "text-white" : "text-gray-700"}`}>
                      {step.title}
                    </span>
                    {activeStep === index && <ChevronRight className="ml-auto text-white" />}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Step Details */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${activeStepData.color} p-6 text-white`}>
                <motion.h3
                  className="text-3xl font-bold mb-2"
                  key={`title-${activeStep}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeStepData.title}
                </motion.h3>
                <motion.p
                  className="text-white/90"
                  key={`content-${activeStep}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {activeStepData.content}
                </motion.p>
              </div>

              {/* Details content */}
              <div className="p-6 flex-grow overflow-y-auto">
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">What to expect:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeStepData.details.map((detail, index) => (
                      <motion.div
                        key={index}
                        className={`flex items-start p-4 rounded-xl ${activeStepData.lightColor}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <ArrowRight
                          className={`mr-2 flex-shrink-0 mt-1 text-${activeStepData.color.split("-")[1]}`}
                          size={18}
                        />
                        <span className="text-gray-700">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Footer */}
              <motion.div
                className="bg-gray-50 p-4 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="mr-2" />
                    <span>
                      Step {activeStep + 1} of {steps.length}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                      className={`p-2 rounded-full ${activeStep === 0 ? "text-gray-300" : "text-blue-600 hover:bg-blue-50"}`}
                    >
                      <ArrowRight className="w-5 h-5 transform rotate-180" />
                    </button>
                    <button
                      onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                      disabled={activeStep === steps.length - 1}
                      className={`p-2 rounded-full ${activeStep === steps.length - 1 ? "text-gray-300" : "text-blue-600 hover:bg-blue-50"}`}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks

