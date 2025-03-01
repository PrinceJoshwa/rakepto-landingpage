// import React, { useRef } from 'react'
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

// const destinations = {
//   left: [
//     { name: 'USA', image: 'https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153005/USA_ohczor.jpg' },
//     // { name: 'Canada', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20133009-btNkdDZejcucVPirHY2xFOVjFzlblx.png' }
//     { name: 'UK', image: 'https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153003/Uk_2_xte6v2.jpg' },
//     { name: 'Singapore', image: 'https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153006/singapore_3_b6jqao.jpg' }
//   ],
//   right: [
//     { name: 'Ireland', image: 'https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153005/Ireland_ymmfxg.jpg' },
//     { name: 'Germany', image: 'https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153003/Germany_vpciix.jpg' },
//     { name: 'France', image: 'https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153006/france_mjjus1.jpg' }

//   ]
// }

// function DestinationCard({ name, image }) {
//   return (
//     <motion.div
//       className="relative rounded-3xl overflow-hidden mb-6 aspect-[4/3] shadow-lg"
//       whileHover={{ scale: 1.05 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-10" />
//       <img
//         src={image || "/placeholder.svg"}
//         alt={name}
//         className="w-full h-full object-cover"
//       />
//       <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white z-20">
//         {name}
//       </h3>
//     </motion.div>
//   )
// }

// export default function PickDestination() {
//   const containerRef = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   })

//   const leftY = useTransform(scrollYProgress, [0, 1], [0, -300]) // Increased movement range
//   const rightY = useTransform(scrollYProgress, [0, 1], [0, 300])

//   const springLeftY = useSpring(leftY, { stiffness: 120, damping: 20 }) // Faster response
//   const springRightY = useSpring(rightY, { stiffness: 120, damping: 20 })

//   return (
//     <section className="py-10 bg-[#1e3a8a] overflow-hidden" ref={containerRef}>
//       <div className="container mx-auto px-4">
//         <div className="max-w-3xl mx-auto text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Your <span className="text-white">Dream Study</span>
//             <br />
//             <span className="relative">
//               Destination
//               <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-500"></span>
//             </span>{' '}
//             Awaits
//           </h2>
//           {/* <p className="text-lg text-gray-300">
//             Learn all about the country's top universities, scholarships, cost of living, 
//             post-study work rights, and more from the finest foreign education consultants in the industry!
//           </p> */}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column */}
//           <motion.div style={{ y: springLeftY }} className="space-y-6">
//             {destinations.left.map((dest, index) => (
//               <DestinationCard key={index} {...dest} />
//             ))}
//           </motion.div>

//           {/* Center Column */}
//           <div className="flex items-center justify-center">
//             <motion.button
//               className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View more
//             </motion.button>
//           </div>

//           {/* Right Column */}
//           <motion.div style={{ y: springRightY }} className="space-y-6">
//             {destinations.right.map((dest, index) => (
//               <DestinationCard key={index} {...dest} />
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

const destinations = {
  left: [
    { name: "USA", image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153005/USA_ohczor.jpg" },
    { name: "UK", image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153003/Uk_2_xte6v2.jpg" },
    {
      name: "Singapore",
      image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153006/singapore_3_b6jqao.jpg",
    },
  ],
  right: [
    { name: "Ireland", image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153005/Ireland_ymmfxg.jpg" },
    { name: "Germany", image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153003/Germany_vpciix.jpg" },
    { name: "France", image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153006/france_mjjus1.jpg" },
  ],
}

function DestinationCard({ name, image, index, column }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.2,
        },
      }}
      viewport={{ once: true }}
      className="relative rounded-3xl overflow-hidden mb-6 shadow-lg transform-gpu"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="aspect-[4/3] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-10" />
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" loading="lazy" />
        <h3 className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-xl sm:text-2xl md:text-3xl font-bold text-white z-20">
          {name}
        </h3>
      </div>
    </motion.div>
  )
}

export default function PickDestination() {
  const containerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Reduce animation range on mobile
  const moveRange = isMobile ? 50 : 200
  const leftY = useTransform(scrollYProgress, [0, 1], [0, -moveRange])
  const rightY = useTransform(scrollYProgress, [0, 1], [0, moveRange])

  const springConfig = {
    stiffness: isMobile ? 50 : 120,
    damping: isMobile ? 15 : 20,
  }

  const springLeftY = useSpring(leftY, springConfig)
  const springRightY = useSpring(rightY, springConfig)

  return (
    <section className="py-8 sm:py-10 md:py-16 bg-[#1e3a8a] overflow-hidden relative" ref={containerRef}>
      {/* Background pattern for visual interest */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-5" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Your <span className="text-white">Dream Study</span>
            <br />
            <span className="relative inline-block">
              Destination
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-500"></span>
            </span>{" "}
            Awaits
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Column */}
          <motion.div style={{ y: isMobile ? 0 : springLeftY }} className="space-y-4 sm:space-y-6">
            {destinations.left.map((dest, index) => (
              <DestinationCard key={dest.name} {...dest} index={index} column="left" />
            ))}
          </motion.div>

          {/* Center Column */}
          <div className="flex items-center justify-center my-6 lg:my-0">
            <motion.button
              className="bg-blue-900 text-blue-900 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* View more */}
            </motion.button>
          </div>

          {/* Right Column */}
          <motion.div style={{ y: isMobile ? 0 : springRightY }} className="space-y-4 sm:space-y-6">
            {destinations.right.map((dest, index) => (
              <DestinationCard key={dest.name} {...dest} index={index} column="right" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

