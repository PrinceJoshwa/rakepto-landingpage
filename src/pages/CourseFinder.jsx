
// import React, { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ChevronLeft } from 'lucide-react'
// import ResultsPage from '../components/course-finder/ResultsPage'
// import StepContent from '../components/course-finder/StepContent'
// import { steps } from '../components/course-finder/constants/formSteps'
// import img1 from '../assets/crcimg11.png'

// export default function CourseFinder() {
//   const [currentStep, setCurrentStep] = useState(0)
//   const [formData, setFormData] = useState({})
//   const [stats, setStats] = useState({ universities: 1500, courses: 100000 })
//   const [showResults, setShowResults] = useState(false)

//   const handleNext = (e) => {
//     if (e) e.preventDefault()
    
//     if (currentStep < steps.length - 1) {
//       setCurrentStep(currentStep + 1)
//       setStats({
//         universities: Math.floor(Math.random() * 1000),
//         courses: Math.floor(Math.random() * 100000)
//       })
//     } else {
//       setShowResults(true)
//     }
//   }

//   const handleBack = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1)
//     }
//   }

//   if (showResults) {
//     const filters = {
//       country: formData.country,
//       studyArea: formData.studyArea,
//       degree: formData.degree
//     }
//     return <ResultsPage selectedFilters={filters} />
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 pt-12 sm:pt-20 md:pt-24">
//       <div className="container mx-auto px-4 py-4 sm:py-8">
//         <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
//           {/* Left Panel - Image and Text */}
//           <motion.div
//             className="bg-blue-700 text-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl relative overflow-hidden order-2 md:order-1"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="flex flex-col h-full">
//               <div className="flex flex-row items-start mb-4">
//                 <div className="w-full">
//                   <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
//                     Find the best course and universities
//                   </h1>
//                 </div>
//               </div>
//               <div className="w-80">
//                   <img
//                     src={img1}
//                     alt="Decorative"
//                     className="w-full object-contain"
//                   />
//                 </div>
//               <div className="bg-white/10 inline-flex rounded-full p-2 sm:p-3 md:p-4 mt-auto">

//                 <div className="flex gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm">
//                   <div>
//                     <div className="font-bold text-lg sm:text-xl md:text-2xl">{stats.universities}</div>
//                     <div className="text-white/80 text-xs sm:text-sm">universities</div>
//                   </div>
//                   <div className="border-l border-white/20" />
//                   <div>
//                     <div className="font-bold text-lg sm:text-xl md:text-2xl">{stats.courses}</div>
//                     <div className="text-white/80 text-xs sm:text-sm">courses</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Panel - Form */}
//           <motion.div
//             className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-sm order-1 md:order-2"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             {currentStep > 0 && (
//               <button
//                 onClick={handleBack}
//                 className="flex items-center text-gray-600 mb-3 sm:mb-4 md:mb-6"
//               >
//                 <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
//                 <span className="text-sm sm:text-base">Back</span>
//               </button>
//             )}

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={steps[currentStep].id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <StepContent
//                   step={steps[currentStep]}
//                   formData={formData}
//                   setFormData={setFormData}
//                   onNext={handleNext}
//                 />
//               </motion.div>
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import { useForm } from '@formspree/react' // Import useForm
import ResultsPage from '../components/course-finder/ResultsPage'
import StepContent from '../components/course-finder/StepContent'
import { steps } from '../components/course-finder/constants/formSteps'
import img1 from '../assets/crcimg11.png'

export default function CourseFinder() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})
  const [stats, setStats] = useState({ universities: 1500, courses: 100000 })
  const [showResults, setShowResults] = useState(false)

  // --- Formspree Integration ---
  // !! REMEMBER TO REPLACE THIS ID !!
  const [formSpreeState, sendToFormspree] = useForm("mzzkgvkb") 
  const [isSubmitting, setIsSubmitting] = useState(false)

  // This effect watches for Formspree submission success
  useEffect(() => {
    // Check if we triggered a submission and it has now succeeded
    if (isSubmitting && formSpreeState.succeeded) {
      setShowResults(true) // Show results page on success
      setIsSubmitting(false) // Reset our local state
    }
    // Check if we triggered a submission and it has now failed
    if (isSubmitting && formSpreeState.errors) {
      setIsSubmitting(false) // Reset, error message will show
    }
  }, [formSpreeState.succeeded, formSpreeState.errors, isSubmitting])
  // --- End Formspree Integration ---

  const handleNext = (e) => {
    if (e) e.preventDefault()
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      setStats({
        universities: Math.floor(Math.random() * 1000),
        courses: Math.floor(Math.random() * 100000)
      })
    } else {
      // --- This is the last step. ---
      setIsSubmitting(true)
      sendToFormspree(formData)
      // The useEffect above will handle showing results on success
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

  // Combine Formspree's submitting state with our local one
  const isFormSubmitting = isSubmitting || formSpreeState.submitting

  return (
    <div className="min-h-screen bg-gray-50 pt-12 sm:pt-20 md:pt-24">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Left Panel - Image and Text */}
          <motion.div
            className="bg-blue-700 text-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl relative overflow-hidden order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col h-full">
              <div className="flex flex-row items-start mb-4">
                <div className="w-full">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                    Find the best course and universities
                  </h1>
                </div>
              </div>
              <div className="w-80">
                  <img
                    src={img1}
                    alt="Decorative"
                    className="w-full object-contain"
                  />
                </div>
              <div className="bg-white/10 inline-flex rounded-full p-2 sm:p-3 md:p-4 mt-auto">

                <div className="flex gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm">
                  <div>
                    <div className="font-bold text-lg sm:text-xl md:text-2xl">{stats.universities}</div>
                    <div className="text-white/80 text-xs sm:text-sm">universities</div>
                  </div>
                  <div className="border-l border-white/20" />
                  <div>
                    <div className="font-bold text-lg sm:text-xl md:text-2xl">{stats.courses}</div>
                    <div className="text-white/80 text-xs sm:text-sm">courses</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Form */}
          <motion.div
            className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-sm order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {currentStep > 0 && (
              <button
                onClick={handleBack}
                className="flex items-center text-gray-600 mb-3 sm:mb-4 md:mb-6"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Back</span>
              </button>
            )}

            {/* --- Formspree Error Message --- */}
            {formSpreeState.errors && !isFormSubmitting && (
              <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg" role="alert">
                <p>Oops! There was an error submitting your form. Please try again.</p>
              </div>
            )}
            {/* --- End Error Message --- */}

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
                  isSubmitting={isFormSubmitting} /* Pass submitting state */
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}