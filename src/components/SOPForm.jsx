// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { X, Send, Loader2 } from "lucide-react"

// const formFields = [
//   { name: "name", label: "Full Name", type: "text" },
//   { name: "email", label: "Email", type: "email" },
//   { name: "phone", label: "Phone", type: "tel" },
//   { name: "course", label: "Desired Course", type: "text" },
//   { name: "university", label: "Target University", type: "text" },
// ]

// const FormField = ({ label, type, value, onChange, name, animate }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.3, delay: animate }}
//   >
//     <label className="block text-gray-700 mb-2 font-medium">{label}</label>
//     {type === "textarea" ? (
//       <textarea
//         name={name}
//         value={value}
//         onChange={onChange}
//         rows="4"
//         className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
//         placeholder={`Enter your ${label.toLowerCase()}`}
//       />
//     ) : (
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
//         placeholder={`Enter your ${label.toLowerCase()}`}
//         required
//       />
//     )}
//   </motion.div>
// )

// function SOPForm({ isOpen, onClose }) {
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [currentStep, setCurrentStep] = useState(1)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: "",
//     university: "",
//     requirements: "",
//   })

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1500))

//     setIsSubmitting(false)
//     onClose()
//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       course: "",
//       university: "",
//       requirements: "",
//     })
//     setCurrentStep(1)
//   }

//   const nextStep = () => {
//     setCurrentStep(2)
//   }

//   const prevStep = () => {
//     setCurrentStep(1)
//   }

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
//           onClick={(e) => e.target === e.currentTarget && onClose()}
//         >
//           <motion.div
//             initial={{ scale: 0.95, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.95, opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="bg-white rounded-2xl shadow-xl w-full max-w-md relative overflow-hidden"
//           >
//             {/* Close Button */}
//             <motion.button
//               className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
//               onClick={onClose}
//               whileHover={{ rotate: 90 }}
//               transition={{ duration: 0.2 }}
//             >
//               <X className="w-5 h-5 text-gray-500" />
//             </motion.button>

//             {/* Form Header */}
//             <div className="p-6 pb-0">
//               <motion.h3
//                 className="text-2xl font-bold text-gray-900 mb-2"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//               >
//                 Start Your SOP Journey
//               </motion.h3>
//               <motion.p
//                 className="text-gray-600"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 }}
//               >
//                 {currentStep === 1
//                   ? "Fill in your basic details to get started"
//                   : "Tell us more about your requirements"}
//               </motion.p>
//             </div>

//             {/* Progress Bar */}
//             <motion.div
//               className="w-full h-1 bg-gray-100 mt-6"
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <motion.div
//                 className="h-full bg-orange-500"
//                 initial={{ width: "50%" }}
//                 animate={{ width: currentStep === 1 ? "50%" : "100%" }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.div>

//             {/* Form Content */}
//             <form onSubmit={handleSubmit} className="p-6 space-y-4">
//               <AnimatePresence mode="wait">
//                 {currentStep === 1 ? (
//                   <motion.div
//                     key="step1"
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: 20 }}
//                     className="space-y-4"
//                   >
//                     {formFields.map((field, index) => (
//                       <FormField
//                         key={field.name}
//                         {...field}
//                         value={formData[field.name]}
//                         onChange={handleChange}
//                         animate={index * 0.1}
//                       />
//                     ))}
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="step2"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     className="space-y-4"
//                   >
//                     <FormField
//                       label="Special Requirements"
//                       type="textarea"
//                       name="requirements"
//                       value={formData.requirements}
//                       onChange={handleChange}
//                       animate={0}
//                     />
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* Form Actions */}
//               <motion.div
//                 className="flex gap-3 pt-4"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 {currentStep === 2 && (
//                   <motion.button
//                     type="button"
//                     onClick={prevStep}
//                     className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     Back
//                   </motion.button>
//                 )}
//                 <motion.button
//                   type="button"
//                   onClick={currentStep === 1 ? nextStep : handleSubmit}
//                   className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors disabled:opacity-50"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <Loader2 className="w-5 h-5 animate-spin" />
//                   ) : (
//                     <>
//                       {currentStep === 1 ? "Next" : "Submit"}
//                       <Send className="w-4 h-4" />
//                     </>
//                   )}
//                 </motion.button>
//               </motion.div>
//             </form>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

// export default SOPForm

// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { X, Send, Loader2, ArrowLeft } from "lucide-react"
// import { toast } from "sonner" // Add toast notifications for better feedback

// const formFields = [
//   { name: "name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
//   { name: "email", label: "Email", type: "email", placeholder: "Enter your email address" },
//   { name: "phone", label: "Phone", type: "tel", placeholder: "Enter your phone number" },
//   { name: "course", label: "Desired Course", type: "text", placeholder: "Enter your desired course" },
//   { name: "university", label: "Target University", type: "text", placeholder: "Enter your target university" },
// ]

// const FormField = ({ label, type, value, onChange, name, placeholder, error }) => (
//   <div className="space-y-2">
//     <label className="block text-sm font-medium text-gray-700">{label}</label>
//     {type === "textarea" ? (
//       <textarea
//         name={name}
//         value={value}
//         onChange={onChange}
//         rows="4"
//         className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none ${
//           error ? "border-red-500" : "border-gray-200"
//         }`}
//         placeholder={placeholder}
//       />
//     ) : (
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
//           error ? "border-red-500" : "border-gray-200"
//         }`}
//         placeholder={placeholder}
//       />
//     )}
//     {error && <p className="text-xs text-red-500">{error}</p>}
//   </div>
// )

// function SOPForm({ isOpen, onClose }) {
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [currentStep, setCurrentStep] = useState(1)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: "",
//     university: "",
//     requirements: "",
//   })
//   const [errors, setErrors] = useState({})
//   const [isClosing, setIsClosing] = useState(false)

//   // Reset form when opened
//   useEffect(() => {
//     if (isOpen) {
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         course: "",
//         university: "",
//         requirements: "",
//       })
//       setCurrentStep(1)
//       setErrors({})
//       setIsClosing(false)
//     }
//   }, [isOpen])

//   const validateStep1 = () => {
//     const newErrors = {}
//     if (!formData.name.trim()) newErrors.name = "Name is required"
//     if (!formData.email.trim()) newErrors.email = "Email is required"
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format"
//     if (!formData.phone.trim()) newErrors.phone = "Phone is required"
//     if (!formData.course.trim()) newErrors.course = "Course is required"
//     if (!formData.university.trim()) newErrors.university = "University is required"

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const validateStep2 = () => {
//     const newErrors = {}
//     if (!formData.requirements.trim()) newErrors.requirements = "Please provide your requirements"
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
//     if (!validateStep2()) return

//     setIsSubmitting(true)
//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1500))

//       toast.success("Form submitted successfully!")
//       handleClose()
//     } catch (error) {
//       toast.error("Failed to submit form. Please try again.")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const handleClose = () => {
//     setIsClosing(true)
//     setTimeout(() => {
//       onClose()
//       setIsClosing(false)
//     }, 300)
//   }

//   const nextStep = () => {
//     if (validateStep1()) {
//       setCurrentStep(2)
//     }
//   }

//   const prevStep = () => {
//     setCurrentStep(1)
//     setErrors({})
//   }

//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1 },
//     exit: { opacity: 0, scale: 0.95 },
//   }

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
//           onClick={(e) => e.target === e.currentTarget && handleClose()}
//         >
//           <motion.div
//             variants={modalVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             transition={{ type: "spring", duration: 0.5 }}
//             className="bg-white rounded-2xl shadow-xl w-full max-w-md relative overflow-hidden"
//           >
//             {/* Close Button */}
//             <button
//               className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors z-10"
//               onClick={handleClose}
//             >
//               <X className="w-5 h-5 text-gray-500" />
//             </button>

//             {/* Form Header */}
//             <div className="p-6 pb-0">
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your SOP Journey</h3>
//               <p className="text-gray-600">
//                 {currentStep === 1
//                   ? "Fill in your basic details to get started"
//                   : "Tell us more about your requirements"}
//               </p>
//             </div>

//             {/* Progress Bar */}
//             <div className="w-full h-1 bg-gray-100 mt-6">
//               <motion.div
//                 className="h-full bg-orange-500"
//                 initial={{ width: "50%" }}
//                 animate={{ width: currentStep === 1 ? "50%" : "100%" }}
//                 transition={{ duration: 0.3 }}
//               />
//             </div>

//             {/* Form Content */}
//             <form onSubmit={handleSubmit} className="p-6 space-y-4">
//               <AnimatePresence mode="wait">
//                 {currentStep === 1 ? (
//                   <motion.div
//                     key="step1"
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: 20 }}
//                     className="space-y-4"
//                   >
//                     {formFields.map((field) => (
//                       <FormField
//                         key={field.name}
//                         {...field}
//                         value={formData[field.name]}
//                         onChange={handleChange}
//                         error={errors[field.name]}
//                       />
//                     ))}
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="step2"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     className="space-y-4"
//                   >
//                     <FormField
//                       label="Special Requirements"
//                       type="textarea"
//                       name="requirements"
//                       value={formData.requirements}
//                       onChange={handleChange}
//                       placeholder="Tell us about your specific requirements and preferences"
//                       error={errors.requirements}
//                     />
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* Form Actions */}
//               <div className="flex gap-3 pt-4">
//                 {currentStep === 2 && (
//                   <motion.button
//                     type="button"
//                     onClick={prevStep}
//                     className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <ArrowLeft className="w-4 h-4" />
//                     Back
//                   </motion.button>
//                 )}
//                 <motion.button
//                   type="button"
//                   onClick={currentStep === 1 ? nextStep : handleSubmit}
//                   className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <Loader2 className="w-5 h-5 animate-spin" />
//                   ) : (
//                     <>
//                       {currentStep === 1 ? "Next" : "Submit"}
//                       <Send className="w-4 h-4" />
//                     </>
//                   )}
//                 </motion.button>
//               </div>
//             </form>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

// export default SOPForm

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const formFields = [
  { name: "name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
  { name: "email", label: "Email", type: "email", placeholder: "Enter your email address" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "Enter your phone number" },
  { name: "course", label: "Desired Course", type: "text", placeholder: "Enter your desired course" },
  { name: "university", label: "Target University", type: "text", placeholder: "Enter your target university" },
];

const FormField = ({ label, type, value, onChange, name, placeholder, error }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    {type === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows="4"
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none ${
          error ? "border-red-500" : "border-gray-200"
        }`}
        placeholder={placeholder}
        style={{ color: "#000" }} // Ensure text color is black
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
          error ? "border-red-500" : "border-gray-200"
        }`}
        placeholder={placeholder}
        style={{ color: "#000" }} // Ensure text color is black
      />
    )}
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);

function SOPForm({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    university: "",
    requirements: "",
  });
  const [errors, setErrors] = useState({});
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        university: "",
        requirements: "",
      });
      setCurrentStep(1);
      setErrors({});
      setIsClosing(false);
    }
  }, [isOpen]);

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.course.trim()) newErrors.course = "Course is required";
    if (!formData.university.trim()) newErrors.university = "University is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.requirements.trim()) newErrors.requirements = "Please provide your requirements";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Form submitted successfully!");
      handleClose();
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  const nextStep = () => {
    if (validateStep1()) setCurrentStep(2);
  };

  const prevStep = () => {
    setCurrentStep(1);
    setErrors({});
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-md relative overflow-hidden"
          >
            <button
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors z-10"
              onClick={handleClose}
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <div className="p-6 pb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your SOP Journey</h3>
              <p className="text-gray-600">
                {currentStep === 1
                  ? "Fill in your basic details to get started"
                  : "Tell us more about your requirements"}
              </p>
            </div>

            <div className="w-full h-1 bg-gray-100 mt-6">
              <motion.div
                className="h-full bg-orange-500"
                initial={{ width: "50%" }}
                animate={{ width: currentStep === 1 ? "50%" : "100%" }}
                transition={{ duration: 0.3 }}
              />
            </div>

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
                    {formFields.map((field) => (
                      <FormField
                        key={field.name}
                        {...field}
                        value={formData[field.name]}
                        onChange={handleChange}
                        error={errors[field.name]}
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
                      placeholder="Tell us about your specific requirements and preferences"
                      error={errors.requirements}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-3 pt-4">
                {currentStep === 2 && (
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </motion.button>
                )}
                <motion.button
                  type="button"
                  onClick={currentStep === 1 ? nextStep : handleSubmit}
                  className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SOPForm;