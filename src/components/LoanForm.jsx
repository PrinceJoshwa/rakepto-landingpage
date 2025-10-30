// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { X, CheckCircle, Sparkles, User, Mail, MessageSquare, Earth } from "lucide-react"
// import { supabase } from "../supabase/supabaseClient"
// import { logError } from "../utils/logger"

// // Animated input wrapper component (medium size)
// const AnimatedInput = ({ label, icon: Icon, error, ...props }) => {
//   const [isFocused, setIsFocused] = useState(false)

//   return (
//     <motion.div
//       className="relative mb-5" // Medium margin-bottom
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//     >
//       <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label> {/* Medium label */}
//       <motion.div className={`relative group ${error ? "animate-shake" : ""}`} whileTap={{ scale: 0.98 }}>
//         <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
//           <Icon size={18} /> {/* Medium icon */}
//         </div>
//         {props.type !== "textarea" ? (
//           <input
//             {...props}
//             className={`w-full pl-10 pr-3 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg focus:outline-none transition-all text-sm
//               ${
//                 error
//                   ? "border-red-300 focus:border-red-500 focus:ring-red-200"
//                   : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
//               } focus:ring-2`} // Medium padding
//             onFocus={() => setIsFocused(true)}
//             onBlur={() => setIsFocused(false)}
//           />
//         ) : (
//           <textarea
//             {...props}
//             className={`w-full pl-10 pr-3 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg focus:outline-none transition-all text-sm
//               ${
//                 error
//                   ? "border-red-300 focus:border-red-500 focus:ring-red-200"
//                   : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
//               } focus:ring-2`} // Medium padding
//             onFocus={() => setIsFocused(true)}
//             onBlur={() => setIsFocused(false)}
//           />
//         )}
//         <motion.div
//           className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: isFocused ? 1 : 0 }}
//           transition={{ duration: 0.2 }}
//         />
//       </motion.div>
//       <AnimatePresence>
//         {error && (
//           <motion.p
//             initial={{ opacity: 0, y: -5 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -5 }}
//             className="text-red-500 text-xs mt-1 ml-1"
//           >
//             {error}
//           </motion.p>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   )
// }

// // Success animation component (medium size)
// const SuccessAnimation = ({ message }) => (
//   <motion.div
//     className="absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-lg"
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
//         className="mb-3 inline-block text-green-500"
//       >
//         <CheckCircle size={40} /> {/* Medium icon */}
//       </motion.div>
//       <motion.p
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//         className="text-lg font-semibold text-gray-800"
//       >
//         {message}
//       </motion.p>
//       <motion.div className="mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
//         <Sparkles className="inline-block text-yellow-400" size={24} /> {/* Medium icon */}
//       </motion.div>
//     </motion.div>
//   </motion.div>
// )

// function LoanForm({ isOpen, onClose }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     country: "",
//   })

//   const [errors, setErrors] = useState({})
//   const [submitMessage, setSubmitMessage] = useState("")
//   const [submitError, setSubmitError] = useState("")
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//     if (errors[e.target.name]) {
//       setErrors((prev) => ({ ...prev, [e.target.name]: "" }))
//     }
//   }

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

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!validateForm()) return

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

//       setTimeout(() => {
//         setFormData({ name: "", email: "", message: "", country: "" })
//         setSubmitMessage("")
//         onClose()
//       }, 3000)
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
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full relative"
//           >
//             <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
//               <X size={20} /> {/* Medium close icon */}
//             </button>
//             <h3 className="text-xl font-bold text-blue-900 mb-5 text-center">EduLoan Support</h3> {/* Medium heading */}
//             <form onSubmit={handleSubmit} className="space-y-5"> {/* Medium spacing between form elements */}
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

//               {/* Destination Country Dropdown */}
//               <motion.div
//                 className="relative mb-5" // Medium margin-bottom
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Destination Country</label> {/* Medium label */}
//                 <motion.div
//                   className={`relative group ${errors.country ? "animate-shake" : ""}`}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
//                     <Earth size={18} /> {/* Medium icon */}
//                   </div>
//                   <select
//                     id="country"
//                     name="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                     className={`w-full pl-10 pr-3 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg focus:outline-none transition-all text-sm
//                       ${
//                         errors.country
//                           ? "border-red-300 focus:border-red-500 focus:ring-red-200"
//                           : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
//                       } focus:ring-2`} // Medium padding
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
//                         initial={{ opacity: 0, y: -5 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -5 }}
//                         className="text-red-500 text-xs mt-1 ml-1"
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
//                 rows="4" // Medium rows for textarea
//               />

//               <motion.button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm" // Medium button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </motion.button>

//               {/* Error message */}
//               <AnimatePresence>
//                 {submitError && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -5 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -5 }}
//                     className="mt-4 p-3 bg-red-50 border border-red-100 rounded-lg flex items-center gap-2 text-red-700 text-sm" // Medium error message
//                   >
//                     <XCircle size={18} /> {/* Medium icon */}
//                     <p>{submitError}</p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </form>

//             {/* Success message overlay */}
//             <AnimatePresence>{submitMessage && <SuccessAnimation message={submitMessage} />}</AnimatePresence>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

// export default LoanForm


"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom" // 1. Import useNavigate
import { motion, AnimatePresence } from "framer-motion"
import { X, User, Mail, MessageSquare, Earth, XCircle } from "lucide-react" // 2. Removed CheckCircle & Sparkles
import { supabase } from "../supabase/supabaseClient"
import { logError } from "../utils/logger"

// Animated input wrapper component (medium size)
const AnimatedInput = ({ label, icon: Icon, error, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div
      className="relative mb-5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <motion.div className={`relative group ${error ? "animate-shake" : ""}`} whileTap={{ scale: 0.98 }}>
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
          <Icon size={18} />
        </div>
        {props.type !== "textarea" ? (
          <input
            {...props}
            className={`w-full pl-10 pr-3 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg focus:outline-none transition-all text-sm
              ${
                error
                  ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                  : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
              } focus:ring-2`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        ) : (
          <textarea
            {...props}
            className={`w-full pl-10 pr-3 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg focus:outline-none transition-all text-sm
              ${
                error
                  ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                  : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
              } focus:ring-2`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        )}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isFocused ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-red-500 text-xs mt-1 ml-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// 3. SuccessAnimation component removed

function LoanForm({ isOpen, onClose }) {
  const navigate = useNavigate() // 4. Initialize useNavigate

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    country: "",
  })

  const [errors, setErrors] = useState({})
  // const [submitMessage, setSubmitMessage] = useState("") // 5. Removed submitMessage state
  const [submitError, setSubmitError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.country) newErrors.country = "Please select a destination country"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    // setSubmitMessage("") // Removed
    setSubmitError("")

    try {
      const contactData = {
        ...formData,
        created_at: new Date().toISOString(),
      }

      // 1. Supabase call
      const { error } = await supabase.from("contact").insert([contactData])
      if (error) throw error

      // 6. Formspree call (NEW)
      try {
        // !!! IMPORTANT: Replace with your new Formspree Endpoint ID !!!
        await fetch("https://formspree.io/f/xpwolrnn", {
          method: "POST",
          body: JSON.stringify(contactData),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
      } catch (formspreeError) {
        console.error("Formspree submission failed:", formspreeError)
        logError(formspreeError, { info: "Formspree submission failed", formData })
      }

      // 7. Reset form, close popup, and redirect
      setFormData({ name: "", email: "", message: "", country: "" })
      onClose() // Close the popup
      
      // Redirect to your new thank-you page
      navigate("/loan/thankyou")

      // 8. REMOVED: setSubmitMessage and setTimeout block
      
    } catch (error) {
      logError(error, { formData })
      console.error("Detailed error:", error)
      if (error.message.includes("Failed to fetch")) {
        setSubmitError("Network error. Please check your internet connection and try again.")
      } else if (error.code === "23505") {
        setSubmitError("This email has already been submitted.")
      } else if (error.code === "42P01") {
        setSubmitError("Database configuration error. Please contact support.")
      } else {
        setSubmitError("An error occurred. Please try again later.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full relative"
          >
            <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
            <h3 className="text-xl font-bold text-blue-900 mb-5 text-center">EduLoan Support</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              
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

              {/* Destination Country Dropdown */}
              <motion.div
                className="relative mb-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">Destination Country</label>
                <motion.div
                  className={`relative group ${errors.country ? "animate-shake" : ""}`}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                    <Earth size={18} />
                  </div>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg focus:outline-none transition-all text-sm
                      ${
                        errors.country
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
                      } focus:ring-2`}
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
                    <option value="MYS">Malaysia</option>
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
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-red-500 text-xs mt-1 ml-1"
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

              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              {/* Error message */}
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="mt-4 p-3 bg-red-50 border border-red-100 rounded-lg flex items-center gap-2 text-red-700 text-sm"
                  >
                    <XCircle size={18} />
                    <p>{submitError}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            {/* 9. Success message overlay removed */}
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoanForm