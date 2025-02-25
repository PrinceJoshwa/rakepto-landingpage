// import React, { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ChevronDown } from 'lucide-react'

// const steps = [
//   {
//     title: 'Consultation & Assessment',
//     content: 'Our expert counselors will understand your academic background, career aspirations, and budget to create a personalized study plan.'
//   },
//   {
//     title: "IELTS Plus Training",
//     content: "Comprehensive training to enhance your IELTS skills, including practice tests, strategies, and personalized feedback."
//   },
//   {
//     title: 'University Selection',
//     content: "We'll help you choose the right universities based on your profile, preferences, and career goals."
//   },
//   {
//     title: "Application & Documentation",
//     content: "Get comprehensive support with application forms, documentation, Statement of Purpose (SOP), Letters of Recommendation (LOR), and submission processes."
//   },  
//   {
//     title: 'Scholarship Assistance',
//     content: 'Information and guidance about available scholarships and how to apply for them.'
//   },
//   {
//     title: 'Visa Assistance',
//     content: 'Expert guidance through the entire visa application process, including documentation and interview preparation.'
//   },
//   {
//     title: 'Pre-Departure Orientation',
//     content: 'Detailed briefing about your destination country, university, accommodation, and what to expect.'
//   },
//   {
//     title: 'Post-Arrival Support',
//     content: 'Continuous support even after you arrive, helping you settle into your new environment.'
//   },
// ]

// function AccordionItem({ title, content, isOpen, onClick, index }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//     >
//       <div className="border-b border-gray-200">
//         <motion.button
//           className="w-full py-4 flex justify-between items-center text-left"
//           onClick={onClick}
//           whileHover={{ scale: 1.01 }}
//         >
//           <span className="text-lg font-semibold text-blue-900">
//             {index + 1}. {title}
//           </span>
//           <motion.div
//             animate={{ rotate: isOpen ? 180 : 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <ChevronDown className="w-5 h-5 text-blue-900" />
//           </motion.div>
//         </motion.button>
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: 'auto', opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="overflow-hidden"
//             >
//               <div className="pb-4 text-gray-600">
//                 {content}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   )
// }

// function HowItWorks() {
//   const [openIndex, setOpenIndex] = useState(0)

//   return (
//     <section id="how-it-works" className="py-8 bg-gradient-to-b from-blue-50 to-white">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-8"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">How It Works</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Your journey to studying abroad made simple with our step-by-step process
//           </p>
//         </motion.div>

//         <motion.div
//           className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6"
//           whileHover={{ boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
//         >
//           {steps.map((step, index) => (
//             <AccordionItem
//               key={index}
//               title={step.title}
//               content={step.content}
//               isOpen={openIndex === index}
//               onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
//               index={index}
//             />
//           ))}
//         </motion.div>

//         <motion.div
//           className="text-center mt-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           {/* <motion.button
//             className="bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Start Your Journey
//           </motion.button> */}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default HowItWorks

// "use client"

// import { useState, useEffect } from "react"
// import { motion, useAnimation } from "framer-motion"
// import { ChevronRight, CheckCircle } from "lucide-react"

// const steps = [
//   {
//     title: "Consultation & Assessment",
//     content:
//       "Our expert counselors will understand your academic background, career aspirations, and budget to create a personalized study plan.",
//     icon: "🎯",
//   },
//   {
//     title: "IELTS Plus Training",
//     content:
//       "Comprehensive training to enhance your IELTS skills, including practice tests, strategies, and personalized feedback.",
//     icon: "📚",
//   },
//   {
//     title: "University Selection",
//     content: "We'll help you choose the right universities based on your profile, preferences, and career goals.",
//     icon: "🏫",
//   },
//   {
//     title: "Application & Documentation",
//     content:
//       "Get comprehensive support with application forms, documentation, Statement of Purpose (SOP), Letters of Recommendation (LOR), and submission processes.",
//     icon: "📝",
//   },
//   {
//     title: "Scholarship Assistance",
//     content: "Information and guidance about available scholarships and how to apply for them.",
//     icon: "🏆",
//   },
//   {
//     title: "Visa Assistance",
//     content:
//       "Expert guidance through the entire visa application process, including documentation and interview preparation.",
//     icon: "✈️",
//   },
//   {
//     title: "Pre-Departure Orientation",
//     content: "Detailed briefing about your destination country, university, accommodation, and what to expect.",
//     icon: "🌍",
//   },
//   {
//     title: "Post-Arrival Support",
//     content: "Continuous support even after you arrive, helping you settle into your new environment.",
//     icon: "🏠",
//   },
// ]

// const HowItWorks = () => {
//   const [activeStep, setActiveStep] = useState(0)
//   const controls = useAnimation()

//   useEffect(() => {
//     controls.start((i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2 },
//     }))
//   }, [controls])

//   const handleStepClick = (index) => {
//     setActiveStep(index)
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
//       <div className="container mx-auto px-4">
//         <motion.h1
//           className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Your Journey to Studying Abroad
//         </motion.h1>

//         <div className="flex flex-col md:flex-row gap-8">
//           <div className="md:w-1/3">
//             <motion.div
//               className="bg-white rounded-xl shadow-lg p-6"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               {steps.map((step, index) => (
//                 <motion.div
//                   key={index}
//                   className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
//                     activeStep === index ? "bg-blue-100" : "hover:bg-gray-100"
//                   }`}
//                   onClick={() => handleStepClick(index)}
//                   whileHover={{ scale: 1.03 }}
//                   custom={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={controls}
//                 >
//                   <div
//                     className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
//                       activeStep === index ? "bg-blue-500 text-white" : "bg-gray-200"
//                     }`}
//                   >
//                     {step.icon}
//                   </div>
//                   <span className="ml-4 font-medium">{step.title}</span>
//                   {activeStep === index && <ChevronRight className="ml-auto text-blue-500" />}
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//           <div className="md:w-2/3">
//             <motion.div
//               className="bg-white rounded-xl shadow-lg p-8"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               <motion.h2
//                 className="text-3xl font-bold text-blue-900 mb-6"
//                 key={activeStep}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {steps[activeStep].title}
//               </motion.h2>
//               <motion.p
//                 className="text-gray-600 mb-8"
//                 key={activeStep + "content"}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: 0.1 }}
//               >
//                 {steps[activeStep].content}
//               </motion.p>
//               <motion.div
//                 className="flex items-center text-green-600"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: 0.2 }}
//               >
//                 <CheckCircle className="mr-2" />
//                 <span>
//                   Step {activeStep + 1} of {steps.length}
//                 </span>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>

//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//         >
//           <motion.button
//             className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Start Your Journey Now
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// export default HowItWorks

// "use client"

// import { useState, useEffect } from "react"
// import { motion, useAnimation } from "framer-motion"
// import { ChevronRight, CheckCircle, ArrowRight } from "lucide-react"

// const steps = [
//   {
//     title: "Consultation & Assessment",
//     content:
//       "Our expert counselors will understand your academic background, career aspirations, and budget to create a personalized study plan.",
//     icon: "🎯",
//     details: [
//       "In-depth discussion of your goals",
//       "Analysis of academic records",
//       "Evaluation of English proficiency",
//       "Budget planning and financial advice",
//     ],
//   },
//   {
//     title: "IELTS Plus Training",
//     content:
//       "Comprehensive training to enhance your IELTS skills, including practice tests, strategies, and personalized feedback.",
//     icon: "📚",
//     details: [
//       "Intensive speaking and writing workshops",
//       "Regular mock tests and evaluations",
//       "One-on-one feedback sessions",
//       "Strategies for all IELTS sections",
//     ],
//   },
//   {
//     title: "University Selection",
//     content: "We'll help you choose the right universities based on your profile, preferences, and career goals.",
//     icon: "🏫",
//     details: [
//       "Shortlisting suitable universities",
//       "Analyzing program curricula",
//       "Considering career prospects",
//       "Evaluating admission requirements",
//     ],
//   },
//   {
//     title: "Application & Documentation",
//     content:
//       "Get comprehensive support with application forms, documentation, Statement of Purpose (SOP), Letters of Recommendation (LOR), and submission processes.",
//     icon: "📝",
//     details: [
//       "Guidance on filling application forms",
//       "SOP and LOR writing assistance",
//       "Document verification and organization",
//       "Timely submission of applications",
//     ],
//   },
//   {
//     title: "Scholarship Assistance",
//     content: "Information and guidance about available scholarships and how to apply for them.",
//     icon: "🏆",
//     details: [
//       "Identifying relevant scholarship opportunities",
//       "Assistance with scholarship applications",
//       "Guidance on writing scholarship essays",
//       "Interview preparation for scholarships",
//     ],
//   },
//   {
//     title: "Visa Assistance",
//     content:
//       "Expert guidance through the entire visa application process, including documentation and interview preparation.",
//     icon: "✈️",
//     details: [
//       "Comprehensive visa application support",
//       "Document preparation and verification",
//       "Mock visa interviews",
//       "Guidance on financial documentation",
//     ],
//   },
//   {
//     title: "Pre-Departure Orientation",
//     content: "Detailed briefing about your destination country, university, accommodation, and what to expect.",
//     icon: "🌍",
//     details: [
//       "Cultural adaptation tips",
//       "Accommodation arrangements",
//       "Travel and packing advice",
//       "Introduction to student life abroad",
//     ],
//   },
//   {
//     title: "Post-Arrival Support",
//     content: "Continuous support even after you arrive, helping you settle into your new environment.",
//     icon: "🏠",
//     details: [
//       "Assistance with local registration processes",
//       "Guidance on opening bank accounts",
//       "Help with finding part-time jobs",
//       "Regular check-ins and support",
//     ],
//   },
// ]

// const HowItWorks = () => {
//   const [activeStep, setActiveStep] = useState(0)
//   const controls = useAnimation()

//   useEffect(() => {
//     controls.start((i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1 },
//     }))
//   }, [controls])

//   const handleStepClick = (index) => {
//     setActiveStep(index)
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
//       <div className="container mx-auto px-4">
//         <motion.h1
//           className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Your Journey to Studying Abroad
//         </motion.h1>

//         <div className="flex flex-col lg:flex-row gap-8">
//           <div className="lg:w-1/3">
//             <motion.div
//               className="bg-white rounded-xl shadow-lg p-6"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               {steps.map((step, index) => (
//                 <motion.div
//                   key={index}
//                   className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
//                     activeStep === index ? "bg-blue-100" : "hover:bg-gray-100"
//                   }`}
//                   onClick={() => handleStepClick(index)}
//                   whileHover={{ scale: 1.03 }}
//                   custom={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={controls}
//                 >
//                   <div
//                     className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
//                       activeStep === index ? "bg-blue-500 text-white" : "bg-gray-200"
//                     }`}
//                   >
//                     {step.icon}
//                   </div>
//                   <span className="ml-4 font-medium">{step.title}</span>
//                   {activeStep === index && <ChevronRight className="ml-auto text-blue-500" />}
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//           <div className="lg:w-2/3">
//             <motion.div
//               className="bg-white rounded-xl shadow-lg p-8"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               <motion.h2
//                 className="text-3xl font-bold text-blue-900 mb-4"
//                 key={activeStep}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {steps[activeStep].title}
//               </motion.h2>
//               <motion.p
//                 className="text-gray-600 mb-6"
//                 key={activeStep + "content"}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: 0.1 }}
//               >
//                 {steps[activeStep].content}
//               </motion.p>
//               <motion.div
//                 className="mb-6"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: 0.2 }}
//               >
//                 <h3 className="text-xl font-semibold text-blue-800 mb-3">What to expect:</h3>
//                 <ul className="space-y-2">
//                   {steps[activeStep].details.map((detail, index) => (
//                     <motion.li
//                       key={index}
//                       className="flex items-start"
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.3 + index * 0.1 }}
//                     >
//                       <ArrowRight className="mr-2 text-orange-500 flex-shrink-0 mt-1" size={18} />
//                       <span>{detail}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </motion.div>
//               <motion.div
//                 className="flex items-center text-green-600"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: 0.4 }}
//               >
//                 <CheckCircle className="mr-2" />
//                 <span>
//                   Step {activeStep + 1} of {steps.length}
//                 </span>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HowItWorks


import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Consultation & Assessment',
    content: 'Our expert counselors will understand your academic background, career aspirations, and budget to create a personalized study plan.',
    icon: '🎯',
    details: [
      'In-depth discussion of your goals',
      'Analysis of academic records',
      'Evaluation of English proficiency',
      'Budget planning and financial advice'
    ]
  },
  {
    title: "IELTS Plus Training",
    content: "Comprehensive training to enhance your IELTS skills, including practice tests, strategies, and personalized feedback.",
    icon: '📚',
    details: [
      'Intensive speaking and writing workshops',
      'Regular mock tests and evaluations',
      'One-on-one feedback sessions',
      'Strategies for all IELTS sections'
    ]
  },
  {
    title: 'University Selection',
    content: "We'll help you choose the right universities based on your profile, preferences, and career goals.",
    icon: '🏫',
    details: [
      'Shortlisting suitable universities',
      'Analyzing program curricula',
      'Considering career prospects',
      'Evaluating admission requirements'
    ]
  },
  {
    title: "Application & Documentation",
    content: "Get comprehensive support with application forms, documentation, Statement of Purpose (SOP), Letters of Recommendation (LOR), and submission processes.",
    icon: '📝',
    details: [
      'Guidance on filling application forms',
      'SOP and LOR writing assistance',
      'Document verification and organization',
      'Timely submission of applications'
    ]
  },  
  {
    title: 'Scholarship Assistance',
    content: 'Information and guidance about available scholarships and how to apply for them.',
    icon: '🏆',
    details: [
      'Identifying relevant scholarship opportunities',
      'Assistance with scholarship applications',
      'Guidance on writing scholarship essays',
      'Interview preparation for scholarships'
    ]
  },
  {
    title: 'Visa Assistance',
    content: 'Expert guidance through the entire visa application process, including documentation and interview preparation.',
    icon: '✈️',
    details: [
      'Comprehensive visa application support',
      'Document preparation and verification',
      'Mock visa interviews',
      'Guidance on financial documentation'
    ]
  },
  {
    title: 'Pre-Departure Orientation',
    content: 'Detailed briefing about your destination country, university, accommodation, and what to expect.',
    icon: '🌍',
    details: [
      'Cultural adaptation tips',
      'Accommodation arrangements',
      'Travel and packing advice',
      'Introduction to student life abroad'
    ]
  },
  {
    title: 'Post-Arrival Support',
    content: 'Continuous support even after you arrive, helping you settle into your new environment.',
    icon: '🏠',
    details: [
      'Assistance with local registration processes',
      'Guidance on opening bank accounts',
      'Help with finding part-time jobs',
      'Regular check-ins and support'
    ]
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }));
  }, [controls]);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-10">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div 
            className="lg:w-1/3 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6 flex-grow overflow-y-auto max-h-[600px]">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
                    activeStep === index ? 'bg-blue-100' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => handleStepClick(index)}
                  whileHover={{ scale: 1.03 }}
                  custom={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={controls}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                    activeStep === index ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}>
                    {step.icon}
                  </div>
                  <span className="ml-4 font-medium">{step.title}</span>
                  {activeStep === index && (
                    <ChevronRight className="ml-auto text-blue-500" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-2/3 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-8 flex-grow overflow-y-auto">
              <motion.h2 
                className="text-3xl font-bold text-blue-900 mb-4"
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {steps[activeStep].title}
              </motion.h2>
              <motion.p
                className="text-gray-600 mb-6"
                key={activeStep + 'content'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {steps[activeStep].content}
              </motion.p>
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-3">What to expect:</h3>
                <ul className="space-y-2">
                  {steps[activeStep].details.map((detail, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <ArrowRight className="mr-2 text-orange-500 flex-shrink-0 mt-1" size={18} />
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <motion.div 
              className="bg-gray-50 p-4 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="flex items-center text-green-600">
                <CheckCircle className="mr-2" />
                <span>Step {activeStep + 1} of {steps.length}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
