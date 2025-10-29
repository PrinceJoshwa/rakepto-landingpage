// // import React from 'react'
// // import { motion } from 'framer-motion'
// // import { Star, ArrowRight } from 'lucide-react'
// // import { useNavigate } from 'react-router-dom'

// // // ✅ Import testimonial images
// // import testimonial1 from '../assets/testimonial1.jpg'
// // import testimonial2 from '../assets/testimonial2.jpg'
// // import testimonial3 from '../assets/testimonial3.jpg'
// // import testimonial4 from '../assets/testimonial4.jpg'
// // import testimonial5 from '../assets/testimonial5.jpg'

// // const textTestimonials = [
// //   {
// //     name: 'Danish',
// //     text: "The counselors were extremely helpful and knowledgeable. They provided me with personalized advice and helped me choose the right course and university. Their support throughout the entire process, from application to visa, was invaluable. I'm truly grateful for their assistance.",
// //   },
// //   { 
// //     name: 'Jeevita', 
// //     text: 'I was initially hesitant about the study abroad process, but Rakepto made it easy and enjoyable. Their team is friendly, knowledgeable, and always available to assist.',
// //   },
// // ]

// // const imageTestimonials = [
// //   { image: testimonial1 },
// //   { image: testimonial2 },
// //   { image: testimonial3 },
// //   { image: testimonial4 },
// //   { image: testimonial5 },
// // ]

// // const containerVariants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: { staggerChildren: 0.1 }
// //   }
// // }

// // const itemVariants = {
// //   hidden: { y: 20, opacity: 0 },
// //   visible: {
// //     y: 0,
// //     opacity: 1,
// //     transition: { type: 'spring', stiffness: 100 }
// //   }
// // }

// // function RatingCard({ platform, rating }) {
// //   return (
// //     <motion.div 
// //       className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl"
// //       variants={itemVariants}
// //     >
// //       <div className="flex items-center gap-2 mb-2">
// //         {[...Array(5)].map((_, i) => (
// //           <Star 
// //             key={i} 
// //             className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-blue-600 fill-blue-600' : 'text-blue-200'}`} 
// //           />
// //         ))}
// //       </div>
// //       <div className="text-3xl font-bold text-blue-900 mb-1">{rating}</div>
// //       <div className="text-blue-900 font-medium">{platform} Review</div>
// //     </motion.div>
// //   )
// // }

// // function Testimonials() {
// //   const navigate = useNavigate()
// //   const handleButtonClick = () => navigate("/course-finder")

// //   return (
// //     <section className="py-8 bg-white">
// //       <div className="container mx-auto px-4">
// //         {/* ======= Main Heading ======= */}
// //         <motion.h2 
// //           className="text-3xl md:text-4xl font-bold text-center mb-12 text-black"
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           Why Students Love Us
// //         </motion.h2>

// //         {/* ======= Ratings Section ======= */}
// //         <motion.div 
// //           className="max-w-4xl mx-auto mb-16 p-8 rounded-3xl bg-blue-100/50"
// //           variants={containerVariants}
// //           initial="hidden"
// //           animate="visible"
// //         >
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
// //             <RatingCard platform="Google" rating={4.6} />
// //             <RatingCard platform="Facebook" rating={4.9} />
// //             <div className="text-center lg:text-left">
// //               <p className="text-xl text-blue-900 font-medium mb-4">
// //                Trusted by hundreds of students — with dreams taking off worldwide ✈️              </p>
// //               <motion.button 
// //                 className="bg-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-blue-800 transition-colors mx-auto lg:mx-0"
// //                 onClick={handleButtonClick}
// //               >
// //                 Get started
// //                 <ArrowRight className="w-4 h-4" />
// //               </motion.button>
// //             </div>
// //           </div>
// //         </motion.div>

// //         {/* ======= Text Testimonials Section ======= */}
// //         {/* <motion.div 
// //           className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
// //           variants={containerVariants}
// //           initial="hidden"
// //           animate="visible"
// //         >
// //           {textTestimonials.map((testimonial, index) => (
// //             <motion.div 
// //               key={index}
// //               className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
// //               variants={itemVariants}
// //               whileHover={{ scale: 1.03 }}
// //             >
// //               <div className="flex mb-4">
// //                 {[...Array(5)].map((_, i) => (
// //                   <Star key={i} className="w-5 h-5 text-blue-600 fill-blue-600" />
// //                 ))}
// //               </div>
// //               <p className="text-gray-700 mb-4">{testimonial.text}</p>
// //               <p className="font-semibold text-blue-900">{testimonial.name}</p>
// //             </motion.div>
// //           ))}
// //         </motion.div> */}

// //         {/* ======= Image Testimonials Section ======= */}
// //         <motion.div 
// //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// //           variants={containerVariants}
// //           initial="hidden"
// //           animate="visible"
// //         >
// //           {imageTestimonials.map((item, index) => (
// //             <motion.div 
// //               key={index}
// //               className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
// //               variants={itemVariants}
// //               whileHover={{ scale: 1.03 }}
// //             >
// //               <img 
// //                 src={item.image} 
// //                 alt={`Student testimonial ${index + 1}`} 
// //                 className="w-full h-full object-cover"
// //               />
// //             </motion.div>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default Testimonials


// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
// import { useNavigate } from "react-router-dom"

// // ✅ Import testimonial images
// import testimonial1 from "../assets/testimonial1.jpg"
// import testimonial2 from "../assets/testimonial2.jpg"
// import testimonial3 from "../assets/testimonial3.jpg"
// import testimonial4 from "../assets/testimonial4.jpg"
// import testimonial5 from "../assets/testimonial5.jpg"

// const textTestimonials = [
//   {
//     name: "Danish",
//     text: "The counselors were extremely helpful and knowledgeable. They provided me with personalized advice and helped me choose the right course and university. Their support throughout the entire process, from application to visa, was invaluable. I'm truly grateful for their assistance.",
//   },
//   {
//     name: "Jeevita",
//     text: "I was initially hesitant about the study abroad process, but Rakepto made it easy and enjoyable. Their team is friendly, knowledgeable, and always available to assist.",
//   },
// ]

// const imageTestimonials = [
//   { image: testimonial1 },
//   { image: testimonial2 },
//   { image: testimonial3 },
//   { image: testimonial4 },
//   { image: testimonial5 },
// ]

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 },
//   },
// }

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { type: "spring", stiffness: 100 },
//   },
// }

// function RatingCard({ platform, rating }) {
//   return (
//     <motion.div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl" variants={itemVariants}>
//       <div className="flex items-center gap-2 mb-2">
//         {[...Array(5)].map((_, i) => (
//           <Star
//             key={i}
//             className={`w-5 h-5 ${i < Math.floor(rating) ? "text-blue-600 fill-blue-600" : "text-blue-200"}`}
//           />
//         ))}
//       </div>
//       <div className="text-3xl font-bold text-blue-900 mb-1">{rating}</div>
//       <div className="text-blue-900 font-medium">{platform} Review</div>
//     </motion.div>
//   )
// }

// function Testimonials() {
//   const navigate = useNavigate()
//   const handleButtonClick = () => navigate("/course-finder")

//   const [carouselIndex, setCarouselIndex] = useState(0)
//   const itemsPerView = 3
//   const totalItems = imageTestimonials.length
//   const maxIndex = Math.max(0, totalItems - itemsPerView)

//   const handlePrevious = () => {
//     setCarouselIndex((prev) => Math.max(0, prev - 1))
//   }

//   const handleNext = () => {
//     setCarouselIndex((prev) => Math.min(maxIndex, prev + 1))
//   }

//   return (
//     <section className="py-8 bg-white">
//       <div className="container mx-auto px-4">
//         {/* ======= Main Heading ======= */}
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold text-center mb-12 text-black"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Why Students Love Us
//         </motion.h2>

//         {/* ======= Ratings Section ======= */}
//         <motion.div
//           className="max-w-4xl mx-auto mb-16 p-8 rounded-3xl bg-blue-100/50"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
//             <RatingCard platform="Google" rating={4.6} />
//             <RatingCard platform="Facebook" rating={4.9} />
//             <div className="text-center lg:text-left">
//               <p className="text-xl text-blue-900 font-medium mb-4">
//                 Trusted by hundreds of students — with dreams taking off worldwide ✈️{" "}
//               </p>
//               <motion.button
//                 className="bg-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-blue-800 transition-colors mx-auto lg:mx-0"
//                 onClick={handleButtonClick}
//               >
//                 Get started
//                 <ArrowRight className="w-4 h-4" />
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>

//         {/* ======= Text Testimonials Section ======= */}
//         {/* <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {textTestimonials.map((testimonial, index) => (
//             <motion.div 
//               key={index}
//               className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
//               variants={itemVariants}
//               whileHover={{ scale: 1.03 }}
//             >
//               <div className="flex mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 text-blue-600 fill-blue-600" />
//                 ))}
//               </div>
//               <p className="text-gray-700 mb-4">{testimonial.text}</p>
//               <p className="font-semibold text-blue-900">{testimonial.name}</p>
//             </motion.div>
//           ))}
//         </motion.div> */}

//         {/* ======= Image Testimonials Carousel Section ======= */}
//         <div className="relative">
//           {/* Navigation Buttons */}
//           <button
//             onClick={handlePrevious}
//             disabled={carouselIndex === 0}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
//             aria-label="Previous testimonials"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>

//           <button
//             onClick={handleNext}
//             disabled={carouselIndex === maxIndex}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
//             aria-label="Next testimonials"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>

//           {/* Carousel Container */}
//           <motion.div className="overflow-hidden" initial="hidden" animate="visible" variants={containerVariants}>
//             <motion.div
//               className="flex gap-8"
//               animate={{ x: -carouselIndex * (100 / itemsPerView) + "%" }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             >
//               {imageTestimonials.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex-shrink-0 w-1/3 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
//                   variants={itemVariants}
//                   whileHover={{ scale: 1.03 }}
//                 >
//                   <img
//                     src={item.image || "/placeholder.svg"}
//                     alt={`Student testimonial ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Testimonials


"use client"

// import { useState } from "react" // No longer needed for auto-slider
import { motion } from "framer-motion"
import { Star, ArrowRight } from "lucide-react" // Removed ChevronLeft, ChevronRight
import { useNavigate } from "react-router-dom"

// ✅ Import testimonial images
import testimonial1 from "../assets/testimonial1.jpg"
import testimonial2 from "../assets/testimonial2.jpg"
import testimonial3 from "../assets/testimonial3.jpg"
import testimonial4 from "../assets/testimonial4.jpg"
import testimonial5 from "../assets/testimonial5.jpg"

const textTestimonials = [
  {
    name: "Danish",
    text: "The counselors were extremely helpful and knowledgeable. They provided me with personalized advice and helped me choose the right course and university. Their support throughout the entire process, from application to visa, was invaluable. I'm truly grateful for their assistance.",
  },
  {
    name: "Jeevita",
    text: "I was initially hesitant about the study abroad process, but Rakepto made it easy and enjoyable. Their team is friendly, knowledgeable, and always available to assist.",
  },
]

const imageTestimonials = [
  { image: testimonial1 },
  { image: testimonial2 },
  { image: testimonial3 },
  { image: testimonial4 },
  { image: testimonial5 },
]

// Duplicating the array for a seamless, infinite loop
const doubledImageTestimonials = [...imageTestimonials, ...imageTestimonials]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
}

function RatingCard({ platform, rating }) {
  return (
    <motion.div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl" variants={itemVariants}>
      <div className="flex items-center gap-2 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < Math.floor(rating) ? "text-blue-600 fill-blue-600" : "text-blue-200"}`}
          />
        ))}
      </div>
      <div className="text-3xl font-bold text-blue-900 mb-1">{rating}</div>
      <div className="text-blue-900 font-medium">{platform} Review</div>
    </motion.div>
  )
}

function Testimonials() {
  const navigate = useNavigate()
  const handleButtonClick = () => navigate("/course-finder")

  // Removed all state and functions related to the manual carousel

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* ======= Main Heading ======= */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Students Love Us
        </motion.h2>

        {/* ======= Ratings Section ======= */}
        <motion.div
          className="max-w-4xl mx-auto mb-16 p-8 rounded-3xl bg-blue-100/50"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
            <RatingCard platform="Google" rating={4.6} />
            <RatingCard platform="Facebook" rating={4.9} />
            <div className="text-center lg:text-left">
              <p className="text-xl text-blue-900 font-medium mb-4">
                Trusted by hundreds of students — with dreams taking off worldwide ✈️{" "}
              </p>
              <motion.button
                className="bg-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-blue-800 transition-colors mx-auto lg:mx-0"
                onClick={handleButtonClick}
              >
                Get started
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* ======= Text Testimonials Section (Still commented out) ======= */}
        {/* ... */}

        {/* ======= Automatic Image Testimonials Scroller ("Magic UI Slider") ======= */}
        <div>
          {/* This container provides the "faded edges" effect */}
          <motion.div
            className="overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* This inner div is the track that animates (the "Magic UI Slider" effect) */}
            <motion.div
              className="flex gap-8 pr-8" // pr-8 matches gap-8 for a seamless loop
              animate={{ x: "-50%" }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            >
              {doubledImageTestimonials.map((item, index) => (
                // <motion.div
                //   key={index}
                //   // 👇 **HERE IS THE REDUCED IMAGE SIZE**
                //   className="flex-shrink-0 w-1/4 aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                //   variants={itemVariants}
                //   whileHover={{ scale: 1.03 }}
                // >
                //   <img
                //     src={item.image || "/placeholder.svg"}
                //     alt={`Student testimonial ${index + 1}`}
                //     className="w-full h-full object-cover"
                //   />
                // </motion.div>

                <motion.div
  key={index}
  className="flex-shrink-0 w-1/5 aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 flex items-center justify-center"
  variants={itemVariants}
  whileHover={{ scale: 1.03 }}
>
  <img
    src={item.image || "/placeholder.svg"}
    alt={`Student testimonial ${index + 1}`}
    // className="w-[90%] h-[90%] object-contain rounded-lg"
    className="w-full h-full object-fill"

  />
</motion.div>

              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

