
"use client"

import { motion, useSpring } from "framer-motion"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import bgimg1 from "../assets/confused1.jpg"
import { Helmet } from "react-helmet" // Import Helmet for meta tags


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

    // Meta data from the image
    const metaTitle = "Study Abroad Consultants | Scholarships | Exams | Study Loan"
    const metaDescription = "Find study abroad consultants near me. Explore scholarships, exams (IELTS, TOEFL), and study loan options for abroad education."
    const focusKeywords = [
      "study abroad",
      "study abroad consultants",
      "how to get scholarship to study abroad",
      "study abroad consultants near me",
      "education loan for abroad studies",
      "study abroad scholarships",
      "best countries to study abroad",
      "study abroad consultants in chennai",
      "study abroad consultants in delhi",
      "study abroad consultants in kerala",
      "study abroad near me",
      "student loans for studying abroad",
      "study abroad consultants in bangalore",
      "study abroad consultants in hyderabad",
      "study abroad consultants in mumbai",
      "study loan for abroad",
      "exams to study abroad",
    ]    
  // Statistics with colors
  const statistics = [
    // { end: 1500, label: "universities", suffix: "+", color: "bg-blue-100 border-blue-300 text-blue-800" },
    { end: 1500, label: "universities", suffix: "+", color: "bg-blue-700 border-orange-400 text-white" },
    // { end: 1, label: "courses", suffix: "L+", color: "bg-indigo-100 border-indigo-300 text-indigo-800" },
    { end: 1, label: "courses", suffix: "L+", color: "bg-blue-700 border-orange-400 text-white" },
    // { end: 34, label: "countries", color: "bg-purple-100 border-purple-300 text-purple-800" },
    { end: 34, label: "countries", color: "bg-blue-700 border-orange-400 text-white" },
  ]

  return (
    <>
          {/* Add Meta Tags using Helmet */}
          <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={focusKeywords.join(", ")} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
      </Helmet>
    <div id="hero" className="min-h-screen bg-white overflow-hidden">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20 sm:pt-24 lg:pt-32">
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

            {/* Stats Grid with Colors */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  className={`text-center p-3 sm:p-4 border-2 rounded-lg shadow-md ${stat.color}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold">
                    <CountUp end={stat.end} />
                    {stat.suffix}
                  </div>
                  <div className="text-xs sm:text-sm">{stat.label}</div>
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
    </>
  )
}

