// "use client"

// import { motion, useSpring } from "framer-motion"
// import { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import bgimg1 from "../assets/confused1.jpg"

// const CountUp = ({ end, duration = 2 }) => {
//   const [count, setCount] = useState(0)
//   const spring = useSpring(0, { duration: duration * 1000 })

//   useEffect(() => {
//     spring.set(end)
//   }, [spring, end])

//   useEffect(() => {
//     return spring.onChange((latest) => {
//       setCount(Math.floor(latest))
//     })
//   }, [spring])

//   return <>{count}</>
// }

// export default function Hero() {
//   const [isHovered, setIsHovered] = useState(false)
//   const navigate = useNavigate()

//   const handleButtonClick = () => {
//     navigate("/course-finder")
//   }


//   return (
//     <div id="hero" className="min-h-screen bg-white overflow-hidden">
//       <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-12 sm:py-12 lg:py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* Left Column - Text Content */}
//           <div className="space-y-6 sm:space-y-8">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
//               Confused about studying abroad? <span className="text-blue-900">We've got you covered!</span>
//             </h1>
//             <p className="text-lg text-gray-600">
//               From choosing the right university to landing your dream job, we're here to guide you every step of the
//               way.
//             </p>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//               {[
//                 { end: 1500, label: "universities", suffix: "+" },
//                 { end: 1, label: "courses", suffix: "L+" },
//                 { end: 34, label: "countries" },
//                 // { end: 10, label: "success stories", suffix: "K+" },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   className="text-center p-4 border-2 border-blue-200 rounded-lg shadow-md bg-white"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <div className="text-xl sm:text-2xl font-bold text-blue-900">
//                     <CountUp end={stat.end} />
//                     {stat.suffix}
//                   </div>
//                   <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <button
//               className="w-full sm:w-auto bg-orange-500 text-white px-6 sm:px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors"
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//               onClick={handleButtonClick}
//             >
//               <span className="text-sm sm:text-base">Start Your Journey</span>
//               <motion.svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 animate={{ x: isHovered ? 5 : 0 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <path d="M5 12h14" />
//                 <path d="m12 5 7 7-7 7" />
//               </motion.svg>
//             </button>
//           </div>

//           {/* Right Column - Visual Elements */}
//           <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:mx-0">
//             {/* Rotating flags */}
//             <motion.div
//               className="absolute inset-0"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
//             >
//               <div className="absolute inset-0 border-2 border-purple-100 rounded-full" />
//               <div className="absolute inset-8 border-2 border-purple-100 rounded-full" />

//               {/* Flags */}
//               {[
//                 { flag: "🇮🇳", position: "left-0", bg: "bg-orange-600" },
//                 { flag: "🇺🇸", position: "right-0", bg: "bg-blue-700" },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className={`absolute top-1/2 ${item.position} transform -translate-y-1/2 ${item.position === "left-0" ? "-translate-x-1/2" : "translate-x-1/2"}`}
//                 >
//                   <div
//                     className={`w-6 sm:w-8 h-6 sm:h-8 ${item.bg} rounded-full flex items-center justify-center text-white text-xs`}
//                   >
//                     {item.flag}
//                   </div>
//                 </div>
//               ))}
//             </motion.div>

//             {/* Text Boxes (Aligned Around Circle) */}
//             <div className="absolute inset-0 flex flex-col items-center justify-center">
//               {[
//                 { text: "SOP", angle: 0 },
//                 { text: "Choosing the right university", angle: 45 },
//                 { text: "Fee", angle: 90 },
//                 { text: "Scholarship availability", angle: 135 },
//                 { text: "Admission process", angle: 180 },
//                 { text: "Offer letter", angle: 225 },
//                 { text: "Accommodation", angle: 270 },
//                 { text: "Tutoring", angle: 315 },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="absolute"
//                   style={{
//                     transform: `rotate(${item.angle}deg) translate(clamp(100px, 30vw, 200px)) rotate(-${item.angle}deg)`,
//                   }}
//                 >
//                   <div className="bg-white p-2 rounded-lg shadow-lg text-[10px] sm:text-xs md:text-sm whitespace-nowrap transform scale-75 sm:scale-100">
//                     {item.text}
//                   </div>
//                 </div>
//               ))}

//               {/* Center Image */}
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
//                 <img src={bgimg1 || "/placeholder.svg"} alt="Student" className="w-full h-full object-cover" />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-8 sm:mt-12">
//           <p className="text-sm sm:text-base text-gray-700 font-medium">
//             Facing challenges with studying abroad? Discover one solution to all your problems with{" "}
//             <span className="text-blue-900 font-bold">Rakepto</span>.
//           </p>
//         </div>
//       </main>
//     </div>
//   )
// }

"use client"

import { motion, useSpring } from "framer-motion"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import bgimg1 from "../assets/confused1.jpg"

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const spring = useSpring(0, { duration: duration * 1000 })

  useEffect(() => {
    spring.set(end)
  }, [spring, end])

  useEffect(() => {
    return spring.onChange((latest) => {
      setCount(Math.floor(latest))
    })
  }, [spring])

  return <>{count}</>
}

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleButtonClick = () => {
    navigate("/course-finder")
  }

  return (
    <div id="hero" className="min-h-screen bg-white overflow-hidden">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20 sm:pt-24 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Confused about studying abroad? <span className="text-blue-900">We've got you covered!</span>
            </h1>
            <p className="text-lg text-gray-600">
              From choosing the right university to landing your dream job, we're here to guide you every step of the
              way.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                { end: 1500, label: "universities", suffix: "+" },
                { end: 1, label: "courses", suffix: "L+" },
                { end: 34, label: "countries" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-3 sm:p-4 border-2 border-blue-200 rounded-lg shadow-md bg-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-900">
                    <CountUp end={stat.end} />
                    {stat.suffix}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              className="w-full sm:w-auto bg-orange-500 text-white px-6 sm:px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleButtonClick}
            >
              <span className="text-sm sm:text-base">Start Your Journey</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </motion.svg>
            </button>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:mx-0">
            {/* Rotating flags */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="absolute inset-0 border-2 border-purple-100 rounded-full" />
              <div className="absolute inset-8 border-2 border-purple-100 rounded-full" />

              {/* Flags */}
              {[
                { flag: "🇮🇳", position: "left-0", bg: "bg-orange-600" },
                { flag: "🇺🇸", position: "right-0", bg: "bg-blue-700" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`absolute top-1/2 ${item.position} transform -translate-y-1/2 ${
                    item.position === "left-0" ? "-translate-x-1/2" : "translate-x-1/2"
                  }`}
                >
                  <div
                    className={`w-6 sm:w-8 h-6 sm:h-8 ${item.bg} rounded-full flex items-center justify-center text-white text-xs`}
                  >
                    {item.flag}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Text Boxes (Aligned Around Circle) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {[
                { text: "SOP", angle: 0 },
                { text: "Choosing the right university", angle: 45 },
                { text: "Fee", angle: 90 },
                { text: "Scholarship availability", angle: 135 },
                { text: "Admission process", angle: 180 },
                { text: "Offer letter", angle: 225 },
                { text: "Accommodation", angle: 270 },
                { text: "Tutoring", angle: 315 },
              ].map((item, index) => (
                <div
                  key={index}
                  className="absolute z-20" // Added z-20 to ensure text appears above image
                  style={{
                    transform: `rotate(${item.angle}deg) translate(${
                      isMobile ? "120px" : "clamp(140px, 25vw, 200px)"
                    }) rotate(-${item.angle}deg)`,
                  }}
                >
                  <div
                    className="bg-white p-2 rounded-lg shadow-lg text-[10px] sm:text-xs md:text-sm whitespace-nowrap transform scale-75 sm:scale-100"
                    style={{
                      // Ensure text is always horizontal and readable
                      transform: `scale(${isMobile ? 0.7 : 0.85})`,
                      transformOrigin: "center",
                    }}
                  >
                    {item.text}
                  </div>
                </div>
              ))}

              {/* Center Image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
                <img src={bgimg1 || "/placeholder.svg"} alt="Student" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-sm sm:text-base text-gray-700 font-medium">
            Facing challenges with studying abroad? Discover one solution to all your problems with{" "}
            <span className="text-blue-900 font-bold">Rakepto</span>.
          </p>
        </div>
      </main>
    </div>
  )
}

