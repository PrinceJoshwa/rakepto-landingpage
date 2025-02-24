// import React, { useRef, useEffect } from 'react'
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

// const destinations = {
//   left: [
//     {
//       name: 'USA',
//       image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20133009-btNkdDZejcucVPirHY2xFOVjFzlblx.png',
//     },
//     {
//       name: 'Canada',
//       image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20133009-btNkdDZejcucVPirHY2xFOVjFzlblx.png',
//     }
//   ],
//   right: [
//     {
//       name: 'New Zealand',
//       image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20133009-btNkdDZejcucVPirHY2xFOVjFzlblx.png',
//     },
//     {
//       name: 'Switzerland',
//       image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20133009-btNkdDZejcucVPirHY2xFOVjFzlblx.png',
//     }
//   ]
// }

// function DestinationCard({ name, image, direction = 'up' }) {
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

//   const leftY = useTransform(scrollYProgress, [0, 1], [0, -100])
//   const rightY = useTransform(scrollYProgress, [0, 1], [0, 100])
  
//   const springLeftY = useSpring(leftY, { stiffness: 100, damping: 30 })
//   const springRightY = useSpring(rightY, { stiffness: 100, damping: 30 })

//   return (
//     <section className="py-20 bg-[#1e3a8a]" ref={containerRef}>
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
//           <p className="text-lg text-gray-300">
//             Learn all about the country's top universities, scholarships, cost of living, 
//             post study work rights and more from the finest foreign education consultants in the industry!
//           </p>
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






import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const destinations = {
  left: [
    { name: 'USA', image: 'https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153005/USA_ohczor.jpg' },
    // { name: 'Canada', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20133009-btNkdDZejcucVPirHY2xFOVjFzlblx.png' }
    { name: 'UK', image: 'https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153003/Uk_2_xte6v2.jpg' },
    { name: 'Singapore', image: 'https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153006/singapore_3_b6jqao.jpg' }
  ],
  right: [
    { name: 'Ireland', image: 'https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153005/Ireland_ymmfxg.jpg' },
    { name: 'Germany', image: 'https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153003/Germany_vpciix.jpg' },
    { name: 'France', image: 'https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153006/france_mjjus1.jpg' }

  ]
}

function DestinationCard({ name, image }) {
  return (
    <motion.div
      className="relative rounded-3xl overflow-hidden mb-6 aspect-[4/3] shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-10" />
      <img
        src={image || "/placeholder.svg"}
        alt={name}
        className="w-full h-full object-cover"
      />
      <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white z-20">
        {name}
      </h3>
    </motion.div>
  )
}

export default function PickDestination() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const leftY = useTransform(scrollYProgress, [0, 1], [0, -300]) // Increased movement range
  const rightY = useTransform(scrollYProgress, [0, 1], [0, 300])

  const springLeftY = useSpring(leftY, { stiffness: 120, damping: 20 }) // Faster response
  const springRightY = useSpring(rightY, { stiffness: 120, damping: 20 })

  return (
    <section className="py-10 bg-[#1e3a8a] overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your <span className="text-white">Dream Study</span>
            <br />
            <span className="relative">
              Destination
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-500"></span>
            </span>{' '}
            Awaits
          </h2>
          {/* <p className="text-lg text-gray-300">
            Learn all about the country's top universities, scholarships, cost of living, 
            post-study work rights, and more from the finest foreign education consultants in the industry!
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <motion.div style={{ y: springLeftY }} className="space-y-6">
            {destinations.left.map((dest, index) => (
              <DestinationCard key={index} {...dest} />
            ))}
          </motion.div>

          {/* Center Column */}
          <div className="flex items-center justify-center">
            <motion.button
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View more
            </motion.button>
          </div>

          {/* Right Column */}
          <motion.div style={{ y: springRightY }} className="space-y-6">
            {destinations.right.map((dest, index) => (
              <DestinationCard key={index} {...dest} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

