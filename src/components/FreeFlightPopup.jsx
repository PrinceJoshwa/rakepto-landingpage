// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { X } from "lucide-react"

// function FreeFlightPopup() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true)
//     }, 5000) // Show popup after 5 seconds

//     return () => clearTimeout(timer)
//   }, [])

//   const closePopup = () => {
//     setIsVisible(false)
//   }

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.8 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
//         >
//           <motion.div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full relative" layoutId="popup">
//             <button onClick={closePopup} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
//               <X size={24} />
//             </button>
//             <h3 className="text-2xl font-bold text-blue-900 mb-4">Free Flight Ticket Offer!</h3>
//             <p className="text-gray-600 mb-6">
//               Get a free flight ticket after successfully completing our four-step process for selected universities!
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
//               onClick={closePopup}
//             >
//               Learn More
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

// export default FreeFlightPopup

// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { X } from "lucide-react"

// function FreeFlightPopup() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true)
//     }, 5000) // Show popup after 5 seconds

//     return () => clearTimeout(timer)
//   }, [])

//   const closePopup = () => {
//     setIsVisible(false)
//   }

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.8 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
//         >
//           <motion.div
//             className="bg-blue-900 rounded-3xl shadow-xl p-8 max-w-md w-full relative text-white overflow-hidden"
//             layoutId="popup"
//           >
//             <button
//               onClick={closePopup}
//               className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
//             >
//               <X size={24} />
//             </button>

//             <div className="flex flex-col md:flex-row items-center gap-8">
//               {/* Illustration */}
//               <div className="w-28 h-48 relative flex-shrink-0">
//                 <img
//                   // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(749)-kcDOz1MkfbcYDjIWVFNhA0OvX4vC0L.png"
//                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740853758/crcimg11_txpe0s.png"
//                   alt="Student illustration"
//                   className="w-full h-full object-contain"
//                 />
//               </div>

//               {/* Content */}
//               <div className="flex-1">
//                 <h3 className="text-3xl font-bold mb-2">FREE Flight Ticket!</h3>
//                 <p className="text-white/90 text-lg mb-6">
//                   Get a free flight ticket after successfully completing our four-step process for selected
//                   universities!
//                 </p>
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-center"
//                   onClick={closePopup}
//                 >
//                   Learn More
//                 </motion.button>
//               </div>
//             </div>

//             {/* Background Pattern - Optional */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none" />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

// export default FreeFlightPopup


// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { X } from "lucide-react"

// function FreeFlightPopup() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true)
//     }, 5000) // Show popup after 5 seconds

//     return () => clearTimeout(timer)
//   }, [])

//   const closePopup = () => {
//     setIsVisible(false)
//   }

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.8 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
//         >
//           <motion.div
//             className="bg-blue-900 rounded-3xl shadow-xl p-8 max-w-md w-full relative text-white overflow-hidden"
//             layoutId="popup"
//           >
//             <button
//               onClick={closePopup}
//               className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
//             >
//               <X size={24} />
//             </button>

//             <div className="flex flex-col items-center gap-6">
//               {/* Enlarged Illustration */}
//               <div className="w-50 h-40 relative flex-shrink-0 mx-auto">
//                 <img
//                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740853758/crcimg11_txpe0s.png"
//                   alt="Student illustration"
//                   className="w-full h-full object-contain"
//                 />
//               </div>

//               {/* Content */}
//               <div className="text-center">
//                 <h3 className="text-3xl font-bold mb-2">FREE Flight Ticket!</h3>
//                 <p className="text-white/90 text-lg mb-6">
//                   Get a free flight ticket after successfully completing our four-step process for selected universities!
//                 </p>
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
//                   onClick={closePopup}
//                 >
//                   Learn More
//                 </motion.button>
//               </div>
//             </div>

//             {/* Background Pattern - Optional */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none" />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

// export default FreeFlightPopup

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

function FreeFlightPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000) // Show popup after 5 seconds

    return () => clearTimeout(timer)
  }, [])

  const closePopup = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        >
          <motion.div
            className="bg-blue-900 rounded-3xl shadow-xl p-8 max-w-md w-full relative text-white overflow-hidden"
            layoutId="popup"
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center gap-6">
              {/* Flight Moving Effect */}
              <motion.div
                className="w-50 h-40 relative flex-shrink-0 mx-auto"
                animate={{ x: [-50, 50, -50], y: [-10, 10, -10] }} // Forward & slight upward movement
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740853758/crcimg11_txpe0s.png"
                  alt="Flight illustration"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-2">FREE Flight Ticket!</h3>
                <p className="text-white/90 text-lg mb-6">
                  Get a free flight ticket after successfully completing our four-step process for selected universities!
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                  onClick={closePopup}
                >
                  Learn More
                </motion.button>
              </div>
            </div>

            {/* Background Pattern - Optional */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FreeFlightPopup
