// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Globe, BookOpen, FileCheck, Plane, ArrowRight, Check } from "lucide-react"

// const steps = [
//   {
//     icon: Globe,
//     title: "Choose Your Destination",
//     description: "Study in Australia, Canada, USA, or UK",
//     details:
//       "We help you select the perfect country based on your academic goals, budget, and career aspirations. Our experts provide detailed insights into each destination's education system, culture, and post-study opportunities.",
//   },
//   {
//     icon: BookOpen,
//     title: "Select Your Course",
//     description: "Pick from +100 Universities",
//     details:
//       "Browse through our extensive database of courses from prestigious universities worldwide. We match your academic profile with suitable programs to ensure the best fit for your career goals.",
//   },
//   {
//     icon: FileCheck,
//     title: "Get SOP Help",
//     description: "Free Statement of Purpose assistance",
//     details:
//       "Our professional writers help craft compelling statements that highlight your strengths and aspirations. We ensure your application stands out with personalized, well-structured content.",
//   },
//   {
//     icon: Plane,
//     title: "Start Your Journey",
//     description: "We'll guide you every step of the way",
//     details:
//       "From visa application to pre-departure orientation, we provide comprehensive support to ensure a smooth transition to your study destination. Our team remains available even after you arrive abroad.",
//   },
// ]

// function ApplicationProcess() {
//   const [activeStep, setActiveStep] = useState(null)

//   return (
//     <section className="py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50 relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 to-blue-600"></div>
//       <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20"></div>
//       <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-300 rounded-full opacity-20"></div>

//       {/* Floating elements */}
//       {[...Array(6)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute rounded-full bg-blue-400 opacity-5"
//           style={{
//             width: Math.random() * 100 + 50,
//             height: Math.random() * 100 + 50,
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [0, Math.random() * 30 - 15],
//             x: [0, Math.random() * 30 - 15],
//           }}
//           transition={{
//             duration: 3 + Math.random() * 2,
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "reverse",
//           }}
//         />
//       ))}

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="text-blue-900">Your Study Abroad Journey</span>
//           </h2>
//           <p className="text-lg text-blue-700 max-w-3xl mx-auto">
//             Follow our simple four-step process to turn your international education dreams into reality
//           </p>
//         </motion.div>

//         {/* Timeline Process */}
//         <div className="relative mb-20">
//           {/* Timeline line */}
//           <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 transform md:translate-x-[-50%] hidden md:block"></div>

//           {steps.map((step, index) => {
//             // Alternate between dark and light blue for steps
//             const isDark = index % 2 === 0
//             const mainColor = isDark ? "blue-900" : "blue-700"
//             const iconBg = isDark ? "bg-blue-100" : "bg-blue-50"
//             const iconText = isDark ? "text-blue-900" : "text-blue-700"
//             const borderColor = isDark ? "ring-blue-900" : "ring-blue-700"
//             const numberBg = isDark ? "bg-blue-900" : "bg-blue-700"
//             const desktopNumberBg = isDark ? "bg-blue-100" : "bg-blue-50"
//             const desktopNumberText = isDark ? "text-blue-900" : "text-blue-700"
//             const headingText = isDark ? "text-blue-900" : "text-blue-800"
//             const descText = isDark ? "text-blue-800/80" : "text-blue-700/80"
//             const buttonText = isDark ? "text-blue-900" : "text-blue-700"
//             const borderTop = isDark ? "border-blue-100" : "border-blue-50"

//             return (
//               <motion.div
//                 key={index}
//                 className={`relative mb-12 md:mb-24 ${index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto md:mr-[50%]" : "md:pl-12 md:ml-[50%]"}`}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7, delay: index * 0.1 }}
//               >
//                 {/* Timeline dot */}
//                 <div
//                   className={`hidden md:block absolute top-6 md:left-0 md:right-auto w-8 h-8 bg-white rounded-full border-4 ${isDark ? "border-blue-900" : "border-blue-700"} transform md:translate-x-[-50%] z-10`}
//                 ></div>

//                 {/* Step number for mobile */}
//                 <div
//                   className={`md:hidden absolute left-0 top-0 w-10 h-10 rounded-full ${numberBg} text-white flex items-center justify-center font-bold`}
//                 >
//                   {index + 1}
//                 </div>

//                 <div
//                   className={`bg-white rounded-xl shadow-lg p-6 md:p-8 ml-14 md:ml-0 cursor-pointer relative overflow-hidden ${activeStep === index ? `ring-2 ${borderColor}` : ""}`}
//                   onClick={() => setActiveStep(activeStep === index ? null : index)}
//                 >
//                   {/* Step number for desktop */}
//                   <div
//                     className={`hidden md:flex absolute top-4 right-4 w-8 h-8 rounded-full ${desktopNumberBg} ${desktopNumberText} items-center justify-center font-bold text-sm`}
//                   >
//                     {index + 1}
//                   </div>

//                   <div className="flex flex-col md:flex-row items-start gap-4">
//                     <div
//                       className={`p-3 rounded-lg ${iconBg} ${iconText} flex-shrink-0 ${index % 2 === 0 ? "md:order-2" : ""}`}
//                     >
//                       <step.icon className="w-6 h-6" />
//                     </div>

//                     <div className={`${index % 2 === 0 ? "md:order-1" : ""}`}>
//                       <h3 className={`text-xl font-bold ${headingText} mb-2`}>{step.title}</h3>
//                       <p className={`${descText} mb-4`}>{step.description}</p>

//                       <AnimatePresence>
//                         {activeStep === index && (
//                           <motion.div
//                             initial={{ height: 0, opacity: 0 }}
//                             animate={{ height: "auto", opacity: 1 }}
//                             exit={{ height: 0, opacity: 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="overflow-hidden"
//                           >
//                             <div className={`pt-4 border-t ${borderTop}`}>
//                               <p className="text-gray-600">{step.details}</p>
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>

//                       <button
//                         className={`mt-3 ${buttonText} font-medium flex items-center text-sm ${index % 2 === 0 ? "md:ml-auto" : ""}`}
//                         onClick={(e) => {
//                           e.stopPropagation()
//                           setActiveStep(activeStep === index ? null : index)
//                         }}
//                       >
//                         {activeStep === index ? "Show less" : "Learn more"}
//                         <motion.span animate={{ rotate: activeStep === index ? 90 : 0 }} transition={{ duration: 0.3 }}>
//                           <ArrowRight className="ml-1 w-4 h-4" />
//                         </motion.span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             )
//           })}
//         </div>

//         <motion.div
//           className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg relative"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, delay: 0.4 }}
//         >
//           {/* Gradient border at top */}
//           <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-900 to-blue-600"></div>

//           <h3 className="text-2xl font-bold text-blue-900 mb-4">Why Choose Our Process?</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//             {[
//               { text: "Personalized guidance at every step", shade: "900" },
//               { text: "Expert counselors with international experience", shade: "800" },
//               { text: "Transparent and streamlined process", shade: "900" },
//               { text: "Ongoing support even after arrival", shade: "800" },
//               { text: "High success rate for visa approvals", shade: "900" },
//               { text: "Access to exclusive university partnerships", shade: "800" },
//             ].map((benefit, index) => (
//               <div key={index} className="flex items-start">
//                 <div
//                   className={`mt-1 mr-3 p-1 rounded-full ${benefit.shade === "900" ? "bg-blue-100 text-blue-900" : "bg-blue-50 text-blue-800"} flex-shrink-0`}
//                 >
//                   <Check className="w-4 h-4" />
//                 </div>
//                 <p className="text-gray-700">{benefit.text}</p>
//               </div>
//             ))}
//           </div>

//           <motion.div className="text-center mt-8">
//             <motion.a
//               href="#contact"
//               className="relative inline-block group"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               transition={{ type: "spring", stiffness: 400, damping: 17 }}
//             >
//               {/* Animated gradient background */}
//               <div className="absolute -inset-1 bg-gradient-to-r from-blue-900 to-blue-600 rounded-full opacity-70 group-hover:opacity-100 blur-sm transition duration-200"></div>

//               {/* Button with gradient */}
//               <div className="relative px-10 py-4 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full text-white text-lg font-semibold shadow-lg">
//                 START YOUR APPLICATION NOW
//               </div>
//             </motion.a>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default ApplicationProcess

// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Globe, BookOpen, FileCheck, Plane, Check, ChevronDown } from "lucide-react"

// const steps = [
//   {
//     icon: Globe,
//     title: "Choose Your Destination",
//     description: "Study in Australia, Canada, USA, or UK",
//     details:
//       "We help you select the perfect country based on your academic goals, budget, and career aspirations. Our experts provide detailed insights into each destination's education system, culture, and post-study opportunities.",
//   },
//   {
//     icon: BookOpen,
//     title: "Select Your Course",
//     description: "Pick from +100 Universities",
//     details:
//       "Browse through our extensive database of courses from prestigious universities worldwide. We match your academic profile with suitable programs to ensure the best fit for your career goals.",
//   },
//   {
//     icon: FileCheck,
//     title: "Get SOP Help",
//     description: "Free Statement of Purpose assistance",
//     details:
//       "Our professional writers help craft compelling statements that highlight your strengths and aspirations. We ensure your application stands out with personalized, well-structured content.",
//   },
//   {
//     icon: Plane,
//     title: "Start Your Journey",
//     description: "We'll guide you every step of the way",
//     details:
//       "From visa application to pre-departure orientation, we provide comprehensive support to ensure a smooth transition to your study destination. Our team remains available even after you arrive abroad.",
//   },
// ]

// export default function ApplicationProcess() {
//   const [activeStep, setActiveStep] = useState(null)

//   return (
//     <section className="py-12 bg-gradient-to-b from-blue-50 via-white to-blue-50 relative overflow-hidden">
//       {/* Background animation elements */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 to-blue-600"></div>

//       {/* Animated floating elements */}
//       {[...Array(5)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute rounded-full bg-blue-400 opacity-5"
//           style={{
//             width: Math.random() * 80 + 40,
//             height: Math.random() * 80 + 40,
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [0, Math.random() * 30 - 15],
//             x: [0, Math.random() * 30 - 15],
//           }}
//           transition={{
//             duration: 3 + Math.random() * 2,
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "reverse",
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           className="text-center mb-10"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-3">
//             <span className="text-blue-900">Your Study Abroad Journey</span>
//           </h2>
//           <p className="text-base text-blue-700 max-w-2xl mx-auto">
//             Follow our simple four-step process to turn your international education dreams into reality
//           </p>
//         </motion.div>

//         {/* Timeline Process - Compact and Interactive */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer ${
//                 activeStep === index ? "ring-2 ring-blue-600" : ""
//               }`}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//               onClick={() => setActiveStep(activeStep === index ? null : index)}
//             >
//               <div className="h-2 bg-gradient-to-r from-blue-900 to-blue-600"></div>
//               <div className="p-5">
//                 <div className="flex items-start gap-3 mb-3">
//                   <div className="p-2 rounded-lg bg-blue-100 text-blue-900 flex-shrink-0">
//                     <step.icon className="w-5 h-5" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between">
//                       <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-900 text-white text-xs font-bold">
//                         {index + 1}
//                       </span>
//                       <motion.div animate={{ rotate: activeStep === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
//                         <ChevronDown className="w-4 h-4 text-blue-700" />
//                       </motion.div>
//                     </div>
//                     <h3 className="text-lg font-bold text-blue-900 mt-2">{step.title}</h3>
//                     <p className="text-blue-800/80 text-sm">{step.description}</p>
//                   </div>
//                 </div>

//                 <AnimatePresence>
//                   {activeStep === index && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="overflow-hidden"
//                     >
//                       <div className="pt-3 border-t border-blue-50">
//                         <p className="text-gray-600 text-sm">{step.details}</p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Benefits Section - More Compact */}
//         <motion.div
//           className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md relative"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-900 to-blue-600"></div>

//           <h3 className="text-xl font-bold text-blue-900 mb-4">Why Choose Our Process?</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
//             {[
//               { text: "Personalized guidance at every step", shade: "900" },
//               { text: "Expert counselors with international experience", shade: "800" },
//               { text: "Transparent and streamlined process", shade: "900" },
//               { text: "Ongoing support even after arrival", shade: "800" },
//               { text: "High success rate for visa approvals", shade: "900" },
//               { text: "Access to exclusive university partnerships", shade: "800" },
//             ].map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 className="flex items-start"
//                 initial={{ opacity: 0, x: -10 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.3, delay: index * 0.05 }}
//               >
//                 <div
//                   className={`mt-1 mr-2 p-1 rounded-full ${
//                     benefit.shade === "900" ? "bg-blue-100 text-blue-900" : "bg-blue-50 text-blue-800"
//                   } flex-shrink-0`}
//                 >
//                   <Check className="w-3.5 h-3.5" />
//                 </div>
//                 <p className="text-gray-700 text-sm">{benefit.text}</p>
//               </motion.div>
//             ))}
//           </div>

//           <motion.div className="text-center mt-6">
//             <motion.a
//               href="#contact"
//               className="relative inline-block group"
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               {/* Animated gradient background with pulse effect */}
//               <motion.div
//                 className="absolute -inset-0.5 bg-gradient-to-r from-blue-900 to-blue-600 rounded-full opacity-70 group-hover:opacity-100 blur-sm"
//                 animate={{
//                   scale: [1, 1.05, 1],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Number.POSITIVE_INFINITY,
//                   repeatType: "loop",
//                 }}
//               ></motion.div>

//               {/* Button with gradient */}
//               <div className="relative px-8 py-3 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full text-white font-semibold shadow-lg">
//                 START YOUR APPLICATION NOW
//               </div>
//             </motion.a>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, BookOpen, FileCheck, Plane, Check, ChevronDown } from "lucide-react"

const steps = [
  {
    icon: Globe,
    title: "Choose Your Destination",
    description: "Study in Australia, Canada, USA, or UK",
    details:
      "We help you select the perfect country based on your academic goals, budget, and career aspirations. Our experts provide detailed insights into each destination's education system, culture, and post-study opportunities.",
  },
  {
    icon: BookOpen,
    title: "Select Your Course",
    description: "Pick from +100 Universities",
    details:
      "Browse through our extensive database of courses from prestigious universities worldwide. We match your academic profile with suitable programs to ensure the best fit for your career goals.",
  },
  {
    icon: FileCheck,
    title: "Get SOP Help",
    description: "Free Statement of Purpose assistance",
    details:
      "Our professional writers help craft compelling statements that highlight your strengths and aspirations. We ensure your application stands out with personalized, well-structured content.",
  },
  {
    icon: Plane,
    title: "Start Your Journey",
    description: "We'll guide you every step of the way",
    details:
      "From visa application to pre-departure orientation, we provide comprehensive support to ensure a smooth transition to your study destination. Our team remains available even after you arrive abroad.",
  },
]

export default function ApplicationProcess() {
  const [activeStep, setActiveStep] = useState(null)

  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background animation elements */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 to-blue-600"></div> */}
      <div className="absolute top-0 left-0 w-full h-1"></div>

      {/* Animated floating elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400 opacity-5"
          style={{
            width: Math.random() * 80 + 40,
            height: Math.random() * 80 + 40,
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
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-blue-900">Your Study Abroad Journey</span>
          </h2>
          <p className="text-base text-blue-700 max-w-2xl mx-auto">
            Follow our simple four-step process to turn your international education dreams into reality
          </p>
        </motion.div>

        {/* Timeline Process - Compact and Interactive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer ${
                activeStep === index ? "ring-2 ring-blue-600" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => {
                // If clicking the same card that's already open, close it
                // Otherwise, open the clicked card (which automatically closes any other open card)
                setActiveStep(activeStep === index ? null : index)
              }}
            >
              <div className="h-2 bg-gradient-to-r from-blue-900 to-blue-600"></div>
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-900 flex-shrink-0">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-900 text-white text-xs font-bold">
                        {index + 1}
                      </span>
                      <motion.div animate={{ rotate: activeStep === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className="w-4 h-4 text-blue-700" />
                      </motion.div>
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 mt-2">{step.title}</h3>
                    <p className="text-blue-800/80 text-sm">{step.description}</p>
                  </div>
                </div>

                <AnimatePresence>
                  {activeStep === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 border-t border-blue-50">
                        <p className="text-gray-600 text-sm">{step.details}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section - More Compact */}
        <motion.div
          className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-900 to-blue-600"></div>

          <h3 className="text-xl font-bold text-blue-900 mb-4">Why Choose Our Process?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
            {[
              { text: "Personalized guidance at every step", shade: "900" },
              { text: "Expert counselors with international experience", shade: "800" },
              { text: "Transparent and streamlined process", shade: "900" },
              { text: "Ongoing support even after arrival", shade: "800" },
              { text: "High success rate for visa approvals", shade: "900" },
              { text: "Access to exclusive university partnerships", shade: "800" },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div
                  className={`mt-1 mr-2 p-1 rounded-full ${
                    benefit.shade === "900" ? "bg-blue-100 text-blue-900" : "bg-blue-50 text-blue-800"
                  } flex-shrink-0`}
                >
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="text-gray-700 text-sm">{benefit.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-6">
            <motion.a
              href="#contact"
              className="relative inline-block group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Animated gradient background with pulse effect */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-900 to-blue-600 rounded-full opacity-70 group-hover:opacity-100 blur-sm"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              ></motion.div>

              {/* Button with gradient */}
              <div className="relative px-8 py-3 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full text-white font-semibold shadow-lg">
                START YOUR APPLICATION NOW
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

