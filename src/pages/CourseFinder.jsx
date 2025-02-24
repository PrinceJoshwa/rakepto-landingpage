import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import ResultsPage from '../components/course-finder/ResultsPage'
import StepContent from '../components/course-finder/StepContent'
import { steps } from '../components/course-finder/constants/formSteps'
import img1 from '../assets/crcimg11.png'

export default function CourseFinder() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})
  const [stats, setStats] = useState({ universities: 1500, courses: 100000 })
  const [showResults, setShowResults] = useState(false)

  const handleNext = (e) => {
    if (e) e.preventDefault()
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      setStats({
        universities: Math.floor(Math.random() * 1000),
        courses: Math.floor(Math.random() * 100000)
      })
    } else {
      setShowResults(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (showResults) {
    const filters = {
      country: formData.country,
      studyArea: formData.studyArea,
      degree: formData.degree
    }
    return <ResultsPage selectedFilters={filters} />
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto">
          {/* Left Panel */}
          <motion.div
            className="bg-blue-700 text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl relative overflow-hidden order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10">
              <div className="bg-white/10 inline-flex rounded-full p-3 sm:p-4 mb-4 sm:mb-6">
                <div className="flex gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div>
                    <div className="font-bold text-xl sm:text-2xl">{stats.universities}</div>
                    <div className="text-white/80">universities</div>
                  </div>
                  <div className="border-l border-white/20" />
                  <div>
                    <div className="font-bold text-xl sm:text-2xl">{stats.courses}</div>
                    <div className="text-white/80">courses</div>
                  </div>
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                Find the best<br />course and<br />universities
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-700/50" />
            <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64">
              <img
                src={img1}
                alt="Decorative"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {currentStep > 0 && (
              <button
                onClick={handleBack}
                className="flex items-center text-gray-600 mb-4 sm:mb-6"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Back</span>
              </button>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={steps[currentStep].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <StepContent
                  step={steps[currentStep]}
                  formData={formData}
                  setFormData={setFormData}
                  onNext={handleNext}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}