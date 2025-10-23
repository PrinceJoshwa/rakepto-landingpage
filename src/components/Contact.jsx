// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { supabase } from "../supabase/supabaseClient"
// import { logError } from "../utils/logger"
// import {
//   Send,
//   CheckCircle,
//   XCircle,
//   Wifi,
//   WifiOff,
//   Earth,
//   Mail,
//   User,
//   MessageSquare,
//   ArrowRight,
//   Sparkles,
// } from "lucide-react"

// // Running text animation component
// const RunningText = ({ text, speed = 20, direction = 2 }) => {
//   const [duplicates, setDuplicates] = useState(1)

//   useEffect(() => {
//     // Calculate duplicates based on viewport width
//     const calculateDuplicates = () => {
//       const viewportWidth = window.innerWidth
//       const needed = Math.ceil((viewportWidth * 2) / 500) + 1 // Assuming average text width
//       setDuplicates(needed)
//     }

//     calculateDuplicates()
//     window.addEventListener("resize", calculateDuplicates)
//     return () => window.removeEventListener("resize", calculateDuplicates)
//   }, [])

//   return (
//     <div id="contact" className="overflow-hidden text-blue-900/5 text-4xl md:text-6xl font-bold">
//       <motion.div
//         initial={{ x: direction > 0 ? 0 : -1000 }}
//         animate={{ x: direction > 0 ? -1000 : 0 }}
//         transition={{
//           duration: speed,
//           repeat: Number.POSITIVE_INFINITY,
//           repeatType: "loop",
//           ease: "linear",
//         }}
//         className="inline-block"
//       >
//         {Array(duplicates)
//           .fill(text)
//           .map((t, i) => (
//             <span key={i} className="mx-8">
//               {t}
//             </span>
//           ))}
//       </motion.div>
//     </div>
//   )
// }

// // Animated input wrapper component
// const AnimatedInput = ({ label, icon: Icon, error, ...props }) => {
//   const [isFocused, setIsFocused] = useState(false)

//   return (
//     <motion.div
//       className="relative mb-6"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <label className="block text-gray-700 font-semibold mb-2">{label}</label>
//       <motion.div className={`relative group ${error ? "animate-shake" : ""}`} whileTap={{ scale: 0.995 }}>
//         <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
//           <Icon size={18} />
//         </div>
//         {props.type !== "textarea" ? (
//           <input
//             {...props}
//             className={`w-full pl-12 pr-4 py-3 bg-white/70 backdrop-blur-sm border-2 rounded-xl focus:outline-none transition-all
//               ${
//                 error
//                   ? "border-red-300 focus:border-red-500 focus:ring-red-200"
//                   : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
//               } focus:ring-4`}
//             onFocus={() => setIsFocused(true)}
//             onBlur={() => setIsFocused(false)}
//           />
//         ) : (
//           <textarea
//             {...props}
//             className={`w-full pl-12 pr-4 py-3 bg-white/70 backdrop-blur-sm border-2 rounded-xl focus:outline-none transition-all
//               ${
//                 error
//                   ? "border-red-300 focus:border-red-500 focus:ring-red-200"
//                   : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
//               } focus:ring-4`}
//             onFocus={() => setIsFocused(true)}
//             onBlur={() => setIsFocused(false)}
//           />
//         )}
//         <motion.div
//           className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: isFocused ? 1 : 0 }}
//           transition={{ duration: 0.3 }}
//         />
//       </motion.div>
//       <AnimatePresence>
//         {error && (
//           <motion.p
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="text-red-500 text-sm mt-1 ml-1"
//           >
//             {error}
//           </motion.p>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   )
// }

// // Success animation component
// const SuccessAnimation = ({ message }) => (
//   <motion.div
//     className="absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-3xl"
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//   >
//     <motion.div
//       className="text-center"
//       initial={{ scale: 0.5 }}
//       animate={{ scale: 1 }}
//       transition={{ type: "spring", duration: 0.5 }}
//     >
//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: [0, 1.2, 1] }}
//         transition={{ duration: 0.5 }}
//         className="mb-4 inline-block text-green-500"
//       >
//         <CheckCircle size={48} />
//       </motion.div>
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//         className="text-xl font-semibold text-gray-800"
//       >
//         {message}
//       </motion.p>
//       <motion.div className="mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
//         <Sparkles className="inline-block text-yellow-400" />
//       </motion.div>
//     </motion.div>
//   </motion.div>
// )

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     country: "",
//   })
//   const [errors, setErrors] = useState({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitMessage, setSubmitMessage] = useState("")
//   const [submitError, setSubmitError] = useState("")
//   const [isOnline, setIsOnline] = useState(navigator.onLine)

//   useEffect(() => {
//     const handleOnline = () => setIsOnline(true)
//     const handleOffline = () => setIsOnline(false)

//     window.addEventListener("online", handleOnline)
//     window.addEventListener("offline", handleOffline)

//     return () => {
//       window.removeEventListener("online", handleOnline)
//       window.removeEventListener("offline", handleOffline)
//     }
//   }, [])

//   const validateForm = () => {
//     const newErrors = {}

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required"
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address"
//     }

//     if (!formData.country) {
//       newErrors.country = "Please select a destination country"
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }))
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!validateForm()) return

//     if (!isOnline) {
//       setSubmitError("You're currently offline. Please check your internet connection and try again.")
//       return
//     }

//     setIsSubmitting(true)
//     setSubmitMessage("")
//     setSubmitError("")

//     try {
//       const contactData = {
//         ...formData,
//         created_at: new Date().toISOString(),
//       }

//       const { error } = await supabase.from("contact").insert([contactData])

//       if (error) throw error

//       setSubmitMessage("Thank you for your message! We'll get back to you soon.")
//       setFormData({ name: "", email: "", message: "" })
//     } catch (error) {
//       logError(error, { formData })
//       console.error("Detailed error:", error)

//       if (error.message.includes("Failed to fetch")) {
//         setSubmitError("Network error. Please check your internet connection and try again.")
//       } else if (error.code === "23505") {
//         setSubmitError("This email has already been submitted. Please use a different email address.")
//       } else if (error.code === "42P01") {
//         setSubmitError("Database configuration error. Please contact support.")
//       } else {
//         setSubmitError("An error occurred while submitting your message. Please try again later.")
//       }
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <section className="min-h-screen py-8 relative overflow-hidden bg-blue-50 ">
//       {/* Animated background text */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none ">
//         <RunningText text="CONTACT US MESSAGE CONNECT REACH OUT" speed={30} direction={1} />
//         <RunningText text="GET IN TOUCH SUPPORT HELP FEEDBACK" speed={25} direction={-1} />
//         <RunningText text="QUESTIONS INQUIRIES INFORMATION REQUEST" speed={20} direction={1} />
//       </div>

//       <div className="container mx-auto px-4 relative">
//         <div className="max-w-4xl mx-auto">
//           {/* Header section */}
//           <motion.div
//             className="text-center mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <motion.h1
//               className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               Get in Touch
//             </motion.h1>
//             <motion.p
//               className="text-lg text-gray-600 max-w-2xl mx-auto"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//             >
//               Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
//             </motion.p>
//           </motion.div>

//           {/* Contact form card */}
//           <motion.div
//             className="relative bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             {/* Network status indicator */}
//             <div className="absolute top-6 right-6">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
//                   isOnline ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
//                 }`}
//               >
//                 {isOnline ? (
//                   <>
//                     <Wifi size={14} />
//                     <span>Online</span>
//                   </>
//                 ) : (
//                   <>
//                     <WifiOff size={14} />
//                     <span>Offline</span>
//                   </>
//                 )}
//               </motion.div>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="p-8 md:p-12">
//               <AnimatedInput
//                 label="Name"
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 icon={User}
//                 error={errors.name}
//                 placeholder="Enter your name"
//               />

//               <AnimatedInput
//                 label="Email"
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 icon={Mail}
//                 error={errors.email}
//                 placeholder="Enter your email"
//               />

//               {/* Add the country dropdown here */}
//               <motion.div
//                 className="relative mb-6"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <label className="block text-gray-700 font-semibold mb-2">Destination Country</label>
//                 <motion.div
//                   className={`relative group ${errors.country ? "animate-shake" : ""}`}
//                   whileTap={{ scale: 0.995 }}
//                 >
//                   <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
//                     <Earth size={18} />
//                   </div>
//                   <select
//                     id="country"
//                     name="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                     className={`w-full pl-12 pr-4 py-3 bg-white/70 backdrop-blur-sm border-2 rounded-xl focus:outline-none transition-all
//                       ${
//                         errors.country
//                           ? "border-red-300 focus:border-red-500 focus:ring-red-200"
//                           : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
//                       } focus:ring-4`}
//                   >
//                     <option value="">Select a country</option>
//                     <option value="USA">United States of America</option>
//                     <option value="AUS">Australia</option>
//                     <option value="CAN">Canada</option>
//                     <option value="GBR">United Kingdom</option>
//                     <option value="NZL">New Zealand</option>
//                     <option value="SGP">Singapore</option>
//                     <option value="ARE">Dubai</option>
//                     <option value="IRL">Ireland</option>
//                     <option value="DEU">Germany</option>
//                     <option value="FRA">France</option>
//                     <option value="SWE">Sweden</option>
//                     <option value="NLD">Netherlands</option>
//                     <option value="AUT">Austria</option>
//                     <option value="DNK">Denmark</option>
//                     <option value="FIN">Finland</option>
//                     <option value="ITA">Italy</option>
//                     <option value="HUN">Hungary</option>
//                     <option value="CHE">Switzerland</option>
//                     <option value="ESP">Spain</option>
//                     <option value="LTU">Lithuania</option>
//                     <option value="CYP">Cyprus</option>
//                     <option value="POL">Poland</option>
//                     <option value="MYS">Malaysia</option>
//                     <option value="MUS">Mauritius</option>
//                     <option value="CHN">China</option>
//                     <option value="VNM">Vietnam</option>
//                     <option value="MLT">Malta</option>
//                     <option value="JPN">Japan</option>
//                     <option value="BEL">Belgium</option>
//                     <option value="RUS">Russia</option>
//                     <option value="KOR">South Korea</option>
//                     <option value="IND">India</option>
//                     <option value="GEO">Georgia</option>
//                     <option value="MCO">Monaco</option>
//                     <option value="HRV">Croatia</option>
//                   </select>
//                   <AnimatePresence>
//                     {errors.country && (
//                       <motion.p
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         className="text-red-500 text-sm mt-1 ml-1"
//                       >
//                         {errors.country}
//                       </motion.p>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               </motion.div>

//               <AnimatedInput
//                 label="Message"
//                 type="textarea"
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 icon={MessageSquare}
//                 error={errors.message}
//                 placeholder="What would you like to tell us?"
//                 rows="4"
//               />

//               <motion.div
//                 className="mt-8"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.6 }}
//               >
//                 <motion.button
//                   type="submit"
//                   className={`w-full px-6 py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${
//                     isOnline ? "bg-blue-800" : "bg-gray-400 cursor-not-allowed"
//                   }`}
//                   whileHover={isOnline ? { scale: 1.02 } : {}}
//                   whileTap={isOnline ? { scale: 0.98 } : {}}
//                   disabled={isSubmitting || !isOnline}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <motion.div
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
//                       >
//                         <Send size={18} />
//                       </motion.div>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       {isOnline ? (
//                         <>
//                           Send Message
//                           <ArrowRight size={18} />
//                         </>
//                       ) : (
//                         <>
//                           Offline
//                           <WifiOff size={18} />
//                         </>
//                       )}
//                     </>
//                   )}
//                 </motion.button>
//               </motion.div>

//               {/* Error message */}
//               <AnimatePresence>
//                 {submitError && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className="mt-4 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-700"
//                   >
//                     <XCircle size={20} />
//                     <p>{submitError}</p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </form>

//             {/* Success message overlay */}
//             <AnimatePresence>{submitMessage && <SuccessAnimation message={submitMessage} />}</AnimatePresence>
//           </motion.div>

//           {/* Additional contact info */}
//           <motion.div
//             className="mt-12 grid md:grid-cols-3 gap-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.8 }}
//           >
//             {[
//               {
//                 icon: Mail,
//                 title: "Email",
//                 description: "connect@rakepto.com",
//                 delay: 0,
//               },
//               {
//                 icon: MessageSquare,
//                 title: "Live Chat",
//                 description: "Available 11am-8pm",
//                 delay: 0.1,
//               },
//               {
//                 icon: User,
//                 title: "Support",
//                 description: "Mon-Fri, 11am-8pm",
//                 delay: 0.2,
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/50"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.8 + item.delay }}
//                 whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
//               >
//                 <div className="flex items-center gap-4">
//                   <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
//                     <item.icon size={24} />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900">{item.title}</h3>
//                     <p className="text-gray-600">{item.description}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// // Add keyframes for shake animation
// const style = document.createElement("style")
// style.textContent = `
//   @keyframes shake {
//     0%, 100% { transform: translateX(0); }
//     25% { transform: translateX(-4px); }
//     75% { transform: translateX(4px); }
//   }
//   .animate-shake {
//     animation: shake 0.5s ease-in-out;
//   }
// `
// document.head.appendChild(style)

// export default Contact

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { supabase } from "../supabase/supabaseClient"
import { logError } from "../utils/logger"
import {
  Send,
  CheckCircle,
  XCircle,
  Wifi,
  WifiOff,
  Earth,
  Mail,
  User,
  MessageSquare,
  ArrowRight,
  Sparkles,
} from "lucide-react"

// Running text animation component
const RunningText = ({ text, speed = 20, direction = 2 }) => {
  const [duplicates, setDuplicates] = useState(1)

  useEffect(() => {
    // Calculate duplicates based on viewport width
    const calculateDuplicates = () => {
      const viewportWidth = window.innerWidth
      const needed = Math.ceil((viewportWidth * 2) / 500) + 1 // Assuming average text width
      setDuplicates(needed)
    }

    calculateDuplicates()
    window.addEventListener("resize", calculateDuplicates)
    return () => window.removeEventListener("resize", calculateDuplicates)
  }, [])

  return (
    <div id="contact" className="overflow-hidden text-blue-900/5 text-4xl md:text-6xl font-bold">
      <motion.div
        initial={{ x: direction > 0 ? 0 : -1000 }}
        animate={{ x: direction > 0 ? -1000 : 0 }}
        transition={{
          duration: speed,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "linear",
        }}
        className="inline-block"
      >
        {Array(duplicates)
          .fill(text)
          .map((t, i) => (
            <span key={i} className="mx-8">
              {t}
            </span>
          ))}
      </motion.div>
    </div>
  )
}

// Animated input wrapper component
const AnimatedInput = ({ label, icon: Icon, error, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div
      className="relative mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <label className="block text-gray-700 font-semibold mb-2">{label}</label>
      <motion.div className={`relative group ${error ? "animate-shake" : ""}`} whileTap={{ scale: 0.995 }}>
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
          <Icon size={18} />
        </div>
        {props.type !== "textarea" ? (
          <input
            {...props}
            className={`w-full pl-12 pr-4 py-3 bg-white/70 backdrop-blur-sm border-2 rounded-xl focus:outline-none transition-all
              ${
                error
                  ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                  : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
              } focus:ring-4`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        ) : (
          <textarea
            {...props}
            className={`w-full pl-12 pr-4 py-3 bg-white/70 backdrop-blur-sm border-2 rounded-xl focus:outline-none transition-all
              ${
                error
                  ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                  : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
              } focus:ring-4`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        )}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isFocused ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-500 text-sm mt-1 ml-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Success animation component
const SuccessAnimation = ({ message }) => (
  <motion.div
    className="absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-3xl"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="text-center"
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.5 }}
        className="mb-4 inline-block text-green-500"
      >
        <CheckCircle size={48} />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-semibold text-gray-800"
      >
        {message}
      </motion.p>
      <motion.div className="mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <Sparkles className="inline-block text-yellow-400" />
      </motion.div>
    </motion.div>
  </motion.div>
)

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    country: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [submitError, setSubmitError] = useState("")
  const [isOnline, setIsOnline] = useState(true) // Default to true

  useEffect(() => {
    // Set initial state from navigator
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.country) {
      newErrors.country = "Please select a destination country"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    if (!isOnline) {
      setSubmitError("You're currently offline. Please check your internet connection and try again.")
      return
    }

    setIsSubmitting(true)
    setSubmitMessage("")
    setSubmitError("")

    try {
      const contactData = {
        ...formData,
        created_at: new Date().toISOString(),
      }

      // 1. Supabase call (existing)
      const { error } = await supabase.from("contact").insert([contactData])

      if (error) throw error

      // 2. Formspree call (NEW)
      //    !!! REPLACE with your Formspree Endpoint ID !!!
      try {
        await fetch("https://formspree.io/f/xwprdgvz", {
          method: "POST",
          body: JSON.stringify(contactData),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
      } catch (formspreeError) {
        // Log the Formspree-specific error but don't show it to the user.
        console.error("Formspree submission failed:", formspreeError)
        logError(formspreeError, { info: "Formspree submission failed", formData })
      }

      // 3. Set success message (existing)
      setSubmitMessage("Thank you for your message! We'll get back to you soon.")
      setFormData({ name: "", email: "", message: "", country: "" })
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
    <section className="min-h-screen py-8 relative overflow-hidden bg-blue-50 ">
      {/* Animated background text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none ">
        <RunningText text="CONTACT US MESSAGE CONNECT REACH OUT" speed={30} direction={1} />
        <RunningText text="GET IN TOUCH SUPPORT HELP FEEDBACK" speed={25} direction={-1} />
        <RunningText text="QUESTIONS INQUIRIES INFORMATION REQUEST" speed={20} direction={1} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Header section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </motion.p>
          </motion.div>

          {/* Contact form card */}
          <motion.div
            className="relative bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Network status indicator */}
            <div className="absolute top-6 right-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                  isOnline ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
              >
                {isOnline ? (
                  <>
                    <Wifi size={14} />
                    <span>Online</span>
                  </>
                ) : (
                  <>
                    <WifiOff size={14} />
                    <span>Offline</span>
                  </>
                )}
              </motion.div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              <AnimatedInput
                label="Name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                icon={User}
                error={errors.name}
                placeholder="Enter your name"
              />

              <AnimatedInput
                label="Email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                icon={Mail}
                error={errors.email}
                placeholder="Enter your email"
              />

              {/* Add the country dropdown here */}
              <motion.div
                className="relative mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <label className="block text-gray-700 font-semibold mb-2">Destination Country</label>
                <motion.div
                  className={`relative group ${errors.country ? "animate-shake" : ""}`}
                  whileTap={{ scale: 0.995 }}
                >
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                    <Earth size={18} />
                  </div>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 bg-white/70 backdrop-blur-sm border-2 rounded-xl focus:outline-none transition-all
                      ${
                        errors.country
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
                      } focus:ring-4`}
                  >
                    <option value="">Select a country</option>
                    <option value="USA">United States of America</option>
                    <option value="AUS">Australia</option>
                    <option value="CAN">Canada</option>
                    <option value="GBR">United Kingdom</option>
                    <option value="NZL">New Zealand</option>
                    <option value="SGP">Singapore</option>
                    <option value="ARE">Dubai</option>
                    <option value="IRL">Ireland</option>
                    <option value="DEU">Germany</option>
                    <option value="FRA">France</option>
                    <option value="SWE">Sweden</option>
                    <option value="NLD">Netherlands</option>
                    <option value="AUT">Austria</option>
                    <option value="DNK">Denmark</option>
                    <option value="FIN">Finland</option>
                    <option value="ITA">Italy</option>
                    <option value="HUN">Hungary</option>
                    <option value="CHE">Switzerland</option>
                    <option value="ESP">Spain</option>
                    <option value="LTU">Lithuania</option>
                    <option value="CYP">Cyprus</option>
                    <option value="POL">Poland</option>
                    <option valueV="MYS">Malaysia</option>
                    <option value="MUS">Mauritius</option>
                    <option value="CHN">China</option>
                    <option value="VNM">Vietnam</option>
                    <option value="MLT">Malta</option>
                    <option value="JPN">Japan</option>
                    <option value="BEL">Belgium</option>
                    <option value="RUS">Russia</option>
                    <option value="KOR">South Korea</option>
                    <option value="IND">India</option>
                    <option value="GEO">Georgia</option>
                    <option value="MCO">Monaco</option>
                    <option value="HRV">Croatia</option>
                  </select>
                  <AnimatePresence>
                    {errors.country && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-sm mt-1 ml-1"
                      >
                        {errors.country}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              <AnimatedInput
                label="Message"
                type="textarea"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                icon={MessageSquare}
                error={errors.message}
                placeholder="What would you like to tell us?"
                rows="4"
              />

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.button
                  type="submit"
                  className={`w-full px-6 py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                    isOnline ? "bg-blue-800" : "bg-gray-400 cursor-not-allowed"
                  }`}
                  whileHover={isOnline ? { scale: 1.02 } : {}}
                  whileTap={isOnline ? { scale: 0.98 } : {}}
                  disabled={isSubmitting || !isOnline}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Send size={18} />
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      {isOnline ? (
                        <>
                          Send Message
                          <ArrowRight size={18} />
                        </>
                      ) : (
                        <>
                          Offline
                          <WifiOff size={18} />
                        </>
                      )}
                    </>
                  )}
                </motion.button>
              </motion.div>

              {/* Error message */}
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-700"
                  >
                    <XCircle size={20} />
                    <p>{submitError}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            {/* Success message overlay */}
            <AnimatePresence>{submitMessage && <SuccessAnimation message={submitMessage} />}</AnimatePresence>
          </motion.div>

          {/* Additional contact info */}
          <motion.div
            className="mt-12 grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              {
                icon: Mail,
                title: "Email",
                description: "connect@rakepto.com",
                delay: 0,
              },
              {
                icon: MessageSquare,
                title: "Live Chat",
                description: "Available 11am-8pm",
                delay: 0.1,
              },
              {
                icon: User,
                title: "Support",
                description: "Mon-Fri, 11am-8pm",
                delay: 0.2,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + item.delay }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Add keyframes for shake animation
const style = document.createElement("style")
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-4px); }
    75% { transform: translateX(4px); }
  }
  .animate-shake {
    animation: shake 0.5s ease-in-out;
  }
`
document.head.appendChild(style)

export default Contact