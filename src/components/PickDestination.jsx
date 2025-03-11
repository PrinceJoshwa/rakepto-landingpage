
"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import FormPopup from "./FormPopup"

// Updated destination data with all the countries you specified
const allDestinations = [
  // North America
  {
    id: 1,
    name: "United States of America",
    region: "North America",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153005/USA_ohczor.jpg",
    universities: "4,500+",
    students: "1M+",
  },
  {
    id: 2,
    name: "Canada",
    region: "North America",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715235/canada_l1oksm.jpg",
    universities: "100+",
    students: "640K+",
  },

  // Europe
  {
    id: 3,
    name: "United Kingdom",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153003/Uk_2_xte6v2.jpg",
    universities: "160+",
    students: "600K+",
  },
  {
    id: 4,
    name: "Ireland",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153005/Ireland_ymmfxg.jpg",
    universities: "40+",
    students: "35K+",
  },
  {
    id: 5,
    name: "Germany",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153003/Germany_vpciix.jpg",
    universities: "400+",
    students: "320K+",
  },
  {
    id: 6,
    name: "France",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740153006/france_mjjus1.jpg",
    universities: "250+",
    students: "370K+",
  },
  {
    id: 7,
    name: "Sweden",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715235/sweden_vujh0l.jpg?height=400&width=600",
    universities: "40+",
    students: "38K+",
  },
  {
    id: 8,
    name: "Netherlands",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715231/netherland_wpgsxa.jpg?height=400&width=600",
    universities: "55+",
    students: "122K+",
  },
  {
    id: 9,
    name: "Austria",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715187/austria_nij7xy.jpg?height=400&width=600",
    universities: "70+",
    students: "102K+",
  },
  {
    id: 10,
    name: "Denmark",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715188/denmark_rxofel.jpg?height=400&width=600",
    universities: "25+",
    students: "34K+",
  },
  {
    id: 11,
    name: "Finland",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715223/finland_upha3c.jpg?height=400&width=600",
    universities: "35+",
    students: "31K+",
  },
  {
    id: 12,
    name: "Italy",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715231/italy_e9rwjn.jpg?height=400&width=600",
    universities: "90+",
    students: "110K+",
  },
  {
    id: 13,
    name: "Hungary",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715223/hungary_ihtmlv.jpg?height=400&width=600",
    universities: "30+",
    students: "28K+",
  },
  {
    id: 14,
    name: "Switzerland",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715217/swizerland_kibq8o.jpg?height=400&width=600",
    universities: "30+",
    students: "60K+",
  },
  {
    id: 15,
    name: "Spain",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715220/spain_rxdh26.jpg?height=400&width=600",
    universities: "80+",
    students: "125K+",
  },
  {
    id: 16,
    name: "Lithuania",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715215/lithuania_s81tfa.jpg?height=400&width=600",
    universities: "20+",
    students: "15K+",
  },
  {
    id: 17,
    name: "Cyprus",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715218/cyprus_lbqenq.jpg?height=400&width=600",
    universities: "15+",
    students: "32K+",
  },
  {
    id: 18,
    name: "Poland",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715206/poland_rrujtb.jpg?height=400&width=600",
    universities: "450+",
    students: "84K+",
  },
  {
    id: 19,
    name: "Malta",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715204/malta_tr8ocg.jpg?height=400&width=600",
    universities: "5+",
    students: "12K+",
  },
  {
    id: 20,
    name: "Belgium",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715189/belgium_qtbh7h.jpg?height=400&width=600",
    universities: "40+",
    students: "55K+",
  },
  {
    id: 21,
    name: "Russia",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715188/russia_aaep3w.jpg?height=400&width=600",
    universities: "950+",
    students: "310K+",
  },
  {
    id: 22,
    name: "Georgia",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715195/georgia_vcrmyi.jpg?height=400&width=600",
    universities: "20+",
    students: "15K+",
  },
  {
    id: 23,
    name: "Monaco",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715189/monaco_djaiyz.jpg?height=400&width=600",
    universities: "3+",
    students: "5K+",
  },
  {
    id: 24,
    name: "Croatia",
    region: "Europe",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715188/croatia_lzmun4.jpg?height=400&width=600",
    universities: "30+",
    students: "25K+",
  },

  // Asia
  {
    id: 25,
    name: "Singapore",
    region: "Asia",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741716752/singapore_rdkoaw.jpg",
    universities: "34+",
    students: "85K+",
  },
  {
    id: 26,
    name: "Malaysia",
    region: "Asia",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715204/malaysia_dnh5jv.jpg?height=400&width=600",
    universities: "170+",
    students: "130K+",
  },
  {
    id: 27,
    name: "China",
    region: "Asia",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715211/china_cphglu.jpg?height=400&width=600",
    universities: "2,900+",
    students: "490K+",
  },
  {
    id: 28,
    name: "Vietnam",
    region: "Asia",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715204/vietnam_lx2fwd.jpg?height=400&width=600",
    universities: "150+",
    students: "45K+",
  },
  {
    id: 29,
    name: "Japan",
    region: "Asia",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715199/japan_d2yzx3.jpg?height=400&width=600",
    universities: "780+",
    students: "310K+",
  },
  {
    id: 30,
    name: "South Korea",
    region: "Asia",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715197/southkorea_vgraes.jpg?height=400&width=600",
    universities: "370+",
    students: "160K+",
  },
  {
    id: 31,
    name: "India",
    region: "Asia",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715196/india_ou3idn.jpg?height=400&width=600",
    universities: "950+",
    students: "420K+",
  },

  // Middle East
  {
    id: 32,
    name: "Dubai",
    region: "Middle East",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715235/dubai_khspt8.jpg?height=400&width=600",
    universities: "30+",
    students: "45K+",
  },

  // Oceania
  {
    id: 33,
    name: "Australia",
    region: "Oceania",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715229/australia_ix4ujg.jpg?height=400&width=600",
    universities: "43+",
    students: "750K+",
  },
  {
    id: 34,
    name: "New Zealand",
    region: "Oceania",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715231/newzealand_qlhwfp.jpg?height=400&width=600",
    universities: "8+",
    students: "120K+",
  },

  // Africa
  {
    id: 35,
    name: "Mauritius",
    region: "Africa",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1741715206/mauritius_ojxbj2.jpg?height=400&width=600",
    universities: "10+",
    students: "18K+",
  },
]

// Get unique regions for filtering
const regions = [...new Set(allDestinations.map((d) => d.region))]

// 3D Card component with parallax effect
const Card3D = ({ destination, isActive, onClick, index, delay = 0 }) => {
  const cardRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    })
  }
   
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  useEffect(() => {
    if (isHovered) {
      rotateX.set(mousePosition.y * -15)
      rotateY.set(mousePosition.x * 15)
    } else {
      rotateX.set(0)
      rotateY.set(0)
    }
  }, [mousePosition, isHovered, rotateX, rotateY])

  const springConfig = { damping: 15, stiffness: 300 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)
  

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${isActive ? "z-30" : "z-10"}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: delay,
          type: "spring",
          stiffness: 100,
          damping: 12,
        },
      }}
      whileHover={{ z: 30 }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`relative w-full h-full perspective-1000 cursor-pointer`}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className={`
            relative overflow-hidden rounded-2xl shadow-2xl transform-gpu
            ${isActive ? "w-[300px] sm:w-[500px] md:w-[600px] aspect-[16/9]" : "w-[160px] sm:w-[200px] aspect-[3/4]"}
            transition-all duration-500 ease-out
          `}
        >
          {/* Background image with parallax effect */}
          <motion.div
            className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%]"
            style={{
              x: isHovered ? mousePosition.x * -20 : 0,
              y: isHovered ? mousePosition.y * -20 : 0,
              transition: { duration: 0.2 },
            }}
          >
            <img
              src={destination.image || "/placeholder.svg"}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Gradient overlay */}
          <div
            className={`
            absolute inset-0 z-10
            ${isActive ? "bg-black/70" : "bg-black/70"}
          `}
          />

          {/* Content */}
          <div className="absolute inset-0 z-20 p-4 sm:p-6 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
            >
              {/* Country name */}
              <h3
                className={`
                font-bold text-white mb-1 tracking-wide
                ${isActive ? "text-3xl sm:text-4xl" : "text-lg sm:text-xl"}
              `}
              >
                {destination.name}
              </h3>

              {/* Region badge - visible on non-active cards */}
              {!isActive && (
                <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                  {destination.region}
                </span>
              )}

              {/* Stats row - only visible when active */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    className="flex gap-4 mt-2 mb-3"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      transition: { duration: 0.3, delay: 0.1 },
                    }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <div className="flex flex-col">
                      <span className="text-orange-300 font-semibold text-sm">Universities</span>
                      <span className="text-white text-lg font-bold">{destination.universities}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-orange-300 font-semibold text-sm">Int'l Students</span>
                      <span className="text-white text-lg font-bold">{destination.students}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Button - only visible when active */}
              <AnimatePresence>
                {isActive && (
                  <motion.button
                    className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full font-medium text-sm sm:text-base shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.3, delay: 0.3 },
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Programs
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Shine effect on hover */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 z-10 bg-white opacity-10"
              initial={{ rotate: -30, scale: 2, x: "-100%" }}
              animate={{
                x: "200%",
                transition: { duration: 1, ease: "easeOut" },
              }}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

// Region filter button
const RegionButton = ({ region, isActive, onClick }) => {
  return (
    <motion.button
      onClick={() => onClick(region)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        isActive ? "bg-orange-500 text-white shadow-lg" : "bg-white/10 text-white/80 hover:bg-white/20"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {region}
    </motion.button>
  )
}

// Search input component
const SearchInput = ({ value, onChange, onClear }) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search countries..."
        className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
      />
      {value && (
        <button onClick={onClear} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  )
}

// Pagination component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-10 h-10 rounded-full flex items-center justify-center ${
          currentPage === 1 ? "text-white/30 cursor-not-allowed" : "text-white hover:bg-white/10"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            currentPage === page ? "bg-orange-500 text-white" : "text-white hover:bg-white/10"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 rounded-full flex items-center justify-center ${
          currentPage === totalPages ? "text-white/30 cursor-not-allowed" : "text-white hover:bg-white/10"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

// Floating elements for background animation
const FloatingElement = ({ delay, duration, size, color, left, top }) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-2xl opacity-20 ${size} ${color}`}
      style={{ left: `${left}%`, top: `${top}%` }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  )
}

export default function PickDestination() {
  const [activeDestination, setActiveDestination] = useState(null)
  const [selectedRegion, setSelectedRegion] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12
  const containerRef = useRef(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)


  // Filter destinations based on region and search query
  const filteredDestinations = allDestinations.filter((destination) => {
    const matchesRegion = selectedRegion === "All" || destination.region === selectedRegion
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesRegion && matchesSearch
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage)
  const paginatedDestinations = filteredDestinations.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedRegion, searchQuery])

  // Reset active destination when region changes
  useEffect(() => {
    setActiveDestination(null)
  }, [selectedRegion])

  // Parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8], [0, 1, 1, 0])

  const handleCardClick = (id) => {
    setActiveDestination(activeDestination === id ? null : id)
  }

  const handleRegionChange = (region) => {
    setSelectedRegion(region)
  }

  const handleSearchChange = (query) => {
    setSearchQuery(query)
  }

  const handleClearSearch = () => {
    setSearchQuery("")
  }

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)

    // Scroll to top of container when page changes
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsVisible(false)
  }

  return (
    <section ref={containerRef} className="relative min-h-screen py-16 overflow-hidden bg-blue-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement delay={0} duration={8} size="w-64 h-64" color="bg-blue-700" left={10} top={20} />
        <FloatingElement delay={2} duration={10} size="w-80 h-80" color="bg-blue-800" left={70} top={60} />
        <FloatingElement delay={1} duration={12} size="w-40 h-40" color="bg-blue-600" left={80} top={10} />
        <FloatingElement delay={3} duration={9} size="w-56 h-56" color="bg-blue-700" left={20} top={70} />
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading with parallax effect */}
        <motion.div className="text-center mb-12" style={{ y: y1, opacity }}>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-white">Your Dream Study</span>
            <br />
            <span className="relative inline-block">
              <span className="text-white">Destination</span>
              <motion.span
                className="absolute -bottom-3 left-0 h-1 bg-orange-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
              />
            </span>{" "}
            <span className="text-white">Awaits</span>
          </motion.h2>

          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Discover world-class education opportunities in premier destinations
          </motion.p>
        </motion.div>

        {/* Search and filter controls */}
        <div className="mb-8">
          <SearchInput value={searchQuery} onChange={handleSearchChange} onClear={handleClearSearch} />

          <motion.div
            className="flex flex-wrap justify-center gap-2 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <RegionButton region="All" isActive={selectedRegion === "All"} onClick={handleRegionChange} />
            {regions.map((region) => (
              <RegionButton
                key={region}
                region={region}
                isActive={selectedRegion === region}
                onClick={handleRegionChange}
              />
            ))}
          </motion.div>
        </div>

        {/* Main destination showcase */}
        <div className="flex flex-col items-center">
          {/* Active destination (expanded view) */}
          <AnimatePresence>
            {activeDestination !== null && (
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <Card3D
                  destination={allDestinations.find((d) => d.id === activeDestination)}
                  isActive={true}
                  onClick={() => handleCardClick(activeDestination)}
                  index={0}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Grid of destination cards */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {paginatedDestinations.map((destination, index) => (
              <Card3D
                key={destination.id}
                destination={destination}
                isActive={false}
                onClick={() => handleCardClick(destination.id)}
                index={index}
                delay={index * 0.05} // Staggered animation
              />
            ))}
          </motion.div>

          {/* Show message if no results */}
          {paginatedDestinations.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white text-lg">No destinations found. Try adjusting your search.</p>
            </motion.div>
          )}

          {/* Pagination */}
          {filteredDestinations.length > itemsPerPage && (
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          )}
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="mt-4 bg-orange-500 text-white px-8 py-3 rounded-full font-medium shadow-xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(30, 58, 138, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={openPopup}
          >
            Get Free Consultation
          </motion.button>
        </motion.div>
      </div>
      <FormPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}/>
      {/* Custom styles for 3D effects */}
      <style jsx="true">{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>

    </section>
  )
}

