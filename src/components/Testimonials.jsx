// // // "use client"

// // // // import { useState } from "react" // No longer needed for auto-slider
// // // import { motion } from "framer-motion"
// // // import { Star, ArrowRight } from "lucide-react" // Removed ChevronLeft, ChevronRight
// // // import { useNavigate } from "react-router-dom"

// // // // ✅ Import testimonial images
// // // import testimonial1 from "../assets/testimonial1.jpg"
// // // import testimonial2 from "../assets/testimonial2.jpg"
// // // import testimonial3 from "../assets/testimonial3.jpg"
// // // import testimonial4 from "../assets/testimonial4.jpg"
// // // import testimonial5 from "../assets/testimonial5.jpg"

// // // const textTestimonials = [
// // //   {
// // //     name: "Danish",
// // //     text: "The counselors were extremely helpful and knowledgeable. They provided me with personalized advice and helped me choose the right course and university. Their support throughout the entire process, from application to visa, was invaluable. I'm truly grateful for their assistance.",
// // //   },
// // //   {
// // //     name: "Jeevita",
// // //     text: "I was initially hesitant about the study abroad process, but Rakepto made it easy and enjoyable. Their team is friendly, knowledgeable, and always available to assist.",
// // //   },
// // // ]

// // // const imageTestimonials = [
// // //   { image: testimonial1 },
// // //   { image: testimonial2 },
// // //   { image: testimonial3 },
// // //   { image: testimonial4 },
// // //   { image: testimonial5 },
// // // ]

// // // // Duplicating the array for a seamless, infinite loop
// // // const doubledImageTestimonials = [...imageTestimonials, ...imageTestimonials]

// // // const containerVariants = {
// // //   hidden: { opacity: 0 },
// // //   visible: {
// // //     opacity: 1,
// // //     transition: { staggerChildren: 0.1 },
// // //   },
// // // }

// // // const itemVariants = {
// // //   hidden: { y: 20, opacity: 0 },
// // //   visible: {
// // //     y: 0,
// // //     opacity: 1,
// // //     transition: { type: "spring", stiffness: 100 },
// // //   },
// // // }

// // // function RatingCard({ platform, rating }) {
// // //   return (
// // //     <motion.div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl" variants={itemVariants}>
// // //       <div className="flex items-center gap-2 mb-2">
// // //         {[...Array(5)].map((_, i) => (
// // //           <Star
// // //             key={i}
// // //             className={`w-5 h-5 ${i < Math.floor(rating) ? "text-blue-600 fill-blue-600" : "text-blue-200"}`}
// // //           />
// // //         ))}
// // //       </div>
// // //       <div className="text-3xl font-bold text-blue-900 mb-1">{rating}</div>
// // //       <div className="text-blue-900 font-medium">{platform} Review</div>
// // //     </motion.div>
// // //   )
// // // }

// // // function Testimonials() {
// // //   const navigate = useNavigate()
// // //   const handleButtonClick = () => navigate("/course-finder")

// // //   // Removed all state and functions related to the manual carousel

// // //   return (
// // //     <section className="py-8 bg-white">
// // //       <div className="container mx-auto px-4">
// // //         {/* ======= Main Heading ======= */}
// // //         <motion.h2
// // //           className="text-3xl md:text-4xl font-bold text-center mb-12 text-black"
// // //           initial={{ opacity: 0, y: -20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.5 }}
// // //         >
// // //           Why Students Love Us
// // //         </motion.h2>

// // //         {/* ======= Ratings Section ======= */}
// // //         <motion.div
// // //           className="max-w-4xl mx-auto mb-16 p-8 rounded-3xl bg-blue-100/50"
// // //           variants={containerVariants}
// // //           initial="hidden"
// // //           animate="visible"
// // //         >
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
// // //             <RatingCard platform="Google" rating={4.6} />
// // //             <RatingCard platform="Facebook" rating={4.9} />
// // //             <div className="text-center lg:text-left">
// // //               <p className="text-xl text-blue-900 font-medium mb-4">
// // //                 Trusted by hundreds of students — with dreams taking off worldwide ✈️{" "}
// // //               </p>
// // //               <motion.button
// // //                 className="bg-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-blue-800 transition-colors mx-auto lg:mx-0"
// // //                 onClick={handleButtonClick}
// // //               >
// // //                 Get started
// // //                 <ArrowRight className="w-4 h-4" />
// // //               </motion.button>
// // //             </div>
// // //           </div>
// // //         </motion.div>

// // //         {/* ======= Text Testimonials Section (Still commented out) ======= */}
// // //         {/* ... */}

// // //         {/* ======= Automatic Image Testimonials Scroller ("Magic UI Slider") ======= */}
// // //         <div>
// // //           {/* This container provides the "faded edges" effect */}
// // //           <motion.div
// // //             className="overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]"
// // //             initial="hidden"
// // //             animate="visible"
// // //             variants={containerVariants}
// // //           >
// // //             {/* This inner div is the track that animates (the "Magic UI Slider" effect) */}
// // //             <motion.div
// // //               className="flex gap-8 pr-8" // pr-8 matches gap-8 for a seamless loop
// // //               animate={{ x: "-200%" }}
// // //               transition={{ duration: 25, ease: "linear", repeat: Infinity }}
// // //             >
// // //               {doubledImageTestimonials.map((item, index) => (
// // //                 // <motion.div
// // //                 //   key={index}
// // //                 //   // 👇 **HERE IS THE REDUCED IMAGE SIZE**
// // //                 //   className="flex-shrink-0 w-1/4 aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
// // //                 //   variants={itemVariants}
// // //                 //   whileHover={{ scale: 1.03 }}
// // //                 // >
// // //                 //   <img
// // //                 //     src={item.image || "/placeholder.svg"}
// // //                 //     alt={`Student testimonial ${index + 1}`}
// // //                 //     className="w-full h-full object-cover"
// // //                 //   />
// // //                 // </motion.div>

// // //                 <motion.div
// // //                   key={index}
// // //                   // 👇 **THIS IS THE LINE I CHANGED**
// // //                   className="flex-shrink-0 w-1/2 lg:w-1/5 aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 flex items-center justify-center"
// // //                   variants={itemVariants}
// // //                   whileHover={{ scale: 1.03 }}
// // //                 >
// // //                   <img
// // //                     src={item.image || "/placeholder.svg"}
// // //                     alt={`Student testimonial ${index + 1}`}
// // //                     // className="w-[90%] h-[90%] object-contain rounded-lg"
// // //                     className="w-full h-full object-fill"
// // //                   />
// // //                 </motion.div>
// // //               ))}
// // //             </motion.div>
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // export default Testimonials

// // "use client"

// // import { motion, useAnimation } from "framer-motion"
// // import { Star, ArrowRight } from "lucide-react"
// // import { useNavigate } from "react-router-dom"
// // import { useEffect } from "react"

// // import testimonial1 from "../assets/testimonial1.jpg"
// // import testimonial2 from "../assets/testimonial2.jpg"
// // import testimonial3 from "../assets/testimonial3.jpg"
// // import testimonial4 from "../assets/testimonial4.jpg"
// // import testimonial5 from "../assets/testimonial5.jpg"

// // const imageTestimonials = [
// //   { image: testimonial1 },
// //   { image: testimonial2 },
// //   { image: testimonial3 },
// //   { image: testimonial4 },
// //   { image: testimonial5 },
// // ]

// // // Duplicate for seamless infinite scroll
// // const doubledImageTestimonials = [...imageTestimonials, ...imageTestimonials]

// // const containerVariants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: { staggerChildren: 0.1 },
// //   },
// // }

// // const itemVariants = {
// //   hidden: { y: 20, opacity: 0 },
// //   visible: {
// //     y: 0,
// //     opacity: 1,
// //     transition: { type: "spring", stiffness: 100 },
// //   },
// // }

// // function RatingCard({ platform, rating }) {
// //   return (
// //     <motion.div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl" variants={itemVariants}>
// //       <div className="flex items-center gap-2 mb-2">
// //         {[...Array(5)].map((_, i) => (
// //           <Star
// //             key={i}
// //             className={`w-5 h-5 ${i < Math.floor(rating) ? "text-blue-600 fill-blue-600" : "text-blue-200"}`}
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
// //   const controls = useAnimation()

// //   const handleButtonClick = () => navigate("/course-finder")

// //   useEffect(() => {
// //     let distance = window.innerWidth * 3 // move 3 screen widths
// //     let speed = 100 // pixels per second

// //     const duration = distance / speed // adjust automatically
// //     controls.start({
// //       x: -distance,
// //       transition: {
// //         duration,
// //         ease: "linear",
// //         repeat: Infinity,
// //       },
// //     })
// //   }, [controls])

// //   return (
// //     <section className="py-8 bg-white">
// //       <div className="container mx-auto px-4">
// //         {/* ======= Heading ======= */}
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
// //                 Trusted by hundreds of students — with dreams taking off worldwide ✈️
// //               </p>
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

// //         {/* ======= Image Scroller ======= */}
// //         <motion.div
// //           className="overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]"
// //           initial="hidden"
// //           animate="visible"
// //           variants={containerVariants}
// //           repeat="Infinity"
// //         >
// //           <motion.div
// //             className="flex gap-8 pr-8"
// //             animate={controls}
// //           >
// //             {doubledImageTestimonials.map((item, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 flex items-center justify-center"
// //                 variants={itemVariants}
// //                 whileHover={{ scale: 1.03 }}
// //               >
// //                 <img
// //                   src={item.image || "/placeholder.svg"}
// //                   alt={`Student testimonial ${index + 1}`}
// //                   className="w-full h-full object-fill"
// //                 />
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default Testimonials

// "use client"

// import { motion, useAnimation } from "framer-motion"
// import { Star, ArrowRight } from "lucide-react"
// import { useNavigate } from "react-router-dom"
// import { useEffect, useRef } from "react"

// import testimonial1 from "../assets/testimonial1.jpg"
// import testimonial2 from "../assets/testimonial2.jpg"
// import testimonial3 from "../assets/testimonial3.jpg"
// import testimonial4 from "../assets/testimonial4.jpg"
// import testimonial5 from "../assets/testimonial5.jpg"

// const imageTestimonials = [
//   { image: testimonial1 },
//   { image: testimonial2 },
//   { image: testimonial3 },
//   { image: testimonial4 },
//   { image: testimonial5 },
// ]

// // ✅ Duplicate list for seamless loop
// const doubledImageTestimonials = [...imageTestimonials, ...imageTestimonials]

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
//   const controls = useAnimation()
//   const sliderRef = useRef(null)

//   const handleButtonClick = () => navigate("/course-finder")

//   useEffect(() => {
//     const slider = sliderRef.current
//     if (!slider) return

//     const scrollWidth = slider.scrollWidth / 2 // half because it's doubled
//     const speed = 100 // pixels per second (adjust if needed)

//     const duration = scrollWidth / speed

//     controls.start({
//       x: -scrollWidth,
//       transition: {
//         duration,
//         ease: "linear",
//         repeat: Infinity,
//       },
//     })
//   }, [controls])

//   return (
//     <section className="py-8 bg-white">
//       <div className="container mx-auto px-4">
//         {/* ======= Heading ======= */}
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
//                 Trusted by hundreds of students — with dreams taking off worldwide ✈️
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

//         {/* ======= Image Scroller ======= */}
//         <div className="overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]">
//           <motion.div
//             ref={sliderRef}
//             className="flex gap-8 pr-8"
//             animate={controls}
//           >
//             {doubledImageTestimonials.map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 flex items-center justify-center"
//                 whileHover={{ scale: 1.03 }}
//               >
//                 <img
//                   src={item.image || "/placeholder.svg"}
//                   alt={`Student testimonial ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Testimonials

"use client"

import { motion, useAnimation } from "framer-motion"
import { Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

import testimonial1 from "../assets/testimonial1.jpg"
import testimonial2 from "../assets/testimonial2.jpg"
import testimonial3 from "../assets/testimonial3.jpg"
import testimonial4 from "../assets/testimonial4.jpg"
import testimonial5 from "../assets/testimonial5.jpg"

const imageTestimonials = [
  { image: testimonial1 },
  { image: testimonial2 },
  { image: testimonial3 },
  { image: testimonial4 },
  { image: testimonial5 },
]

// Duplicate for seamless infinite scroll
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
  const controls = useAnimation()
  const sliderRef = useRef(null)
  const [isAutoScroll, setIsAutoScroll] = useState(true)
  const [offset, setOffset] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)

  const handleButtonClick = () => navigate("/course-finder")

  // === Auto scroll logic ===
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const scrollWidth = slider.scrollWidth / 2 // half width
    const speed = 100 // pixels per second
    const duration = scrollWidth / speed

    if (isAutoScroll) {
      controls.start({
        x: -scrollWidth,
        transition: {
          duration,
          ease: "linear",
          repeat: Infinity,
        },
      })
    } else {
      controls.stop()
    }
  }, [controls, isAutoScroll])

  // === Manual control ===
  useEffect(() => {
    const firstCard = sliderRef.current?.children[0]
    if (firstCard) setCardWidth(firstCard.offsetWidth + 32) // add gap (gap-8 = 32px)
  }, [])

  const handleNext = () => {
    setIsAutoScroll(false)
    setOffset((prev) => prev - cardWidth)
  }

  const handlePrev = () => {
    setIsAutoScroll(false)
    setOffset((prev) => prev + cardWidth)
  }

  return (
    <section className="py-8 bg-white relative">
      <div className="container mx-auto px-4">
        {/* ======= Heading ======= */}
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
                Trusted by hundreds of students — with dreams taking off worldwide ✈️
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

        {/* ======= Image Scroller ======= */}
        <div className="relative overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]">
          {/* Left Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-blue-800 p-3 rounded-full shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-blue-800 p-3 rounded-full shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <motion.div
            ref={sliderRef}
            className="flex gap-8 pr-8"
            animate={isAutoScroll ? controls : { x: offset }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            {doubledImageTestimonials.map((item, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 flex items-center justify-center"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`Student testimonial ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
