// import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Link, useLocation } from 'react-router-dom'

// function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const location = useLocation()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const isCourseFinder = location.pathname === '/course-finder'

//   const handleNavigation = (hash) => {
//     const element = document.querySelector(hash)
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   return (
//     <>
//       <motion.header 
//         className={`fixed w-full z-50 transition-all duration-300 ${
//           isScrolled ? 'bg-white text-blue-900 shadow-md' : 'bg-transparent text-blue-900'
//         }`}
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <motion.h1 
//             className="text-3xl font-bold"
//             whileHover={{ scale: 1.1 }}
//           >
//             <Link to="/">Rakepto</Link>
//           </motion.h1>

//           {/* Mobile Menu Icon */}
//           <button 
//             className="md:hidden block focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <svg 
//               className="w-6 h-6" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24" 
//             >
//               {menuOpen ? (
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth="2" 
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth="2" 
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               )}
//             </svg>
//           </button>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex md:flex-row md:space-x-6">
//             <Link 
//               to={isCourseFinder ? '/#hero' : '#hero'}
//               className="hover:text-orange-500 transition-colors"
//               onClick={(e) => {
//                 if (!isCourseFinder) {
//                   e.preventDefault()
//                   handleNavigation('#hero')
//                 }
//               }}
//             >
//               Home
//             </Link>
//             <Link 
//               to="/course-finder" 
//               className="hover:text-orange-500 transition-colors"
//             >
//               Course Finder
//             </Link>
//             <Link 
//               to={isCourseFinder ? '/#contact' : '#contact'}
//               className="hover:text-orange-500 transition-colors"
//               onClick={(e) => {
//                 if (!isCourseFinder) {
//                   e.preventDefault()
//                   handleNavigation('#contact')
//                 }
//               }}
//             >
//               Contact
//             </Link>
//           </nav>
//         </div>
//       </motion.header>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-blue-900 z-40 md:hidden"
//           >
//             <nav className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
//               <Link 
//                 to={isCourseFinder ? '/#hero' : '#hero'}
//                 className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
//                 onClick={(e) => {
//                   if (!isCourseFinder) {
//                     e.preventDefault()
//                     handleNavigation('#hero')
//                   }
//                   setMenuOpen(false)
//                 }}
//               >
//                 Home
//               </Link>
//               <Link 
//                 to="/course-finder" 
//                 className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Course Finder
//               </Link>
//               <Link 
//                 to={isCourseFinder ? '/#contact' : '#contact'}
//                 className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
//                 onClick={(e) => {
//                   if (!isCourseFinder) {
//                     e.preventDefault()
//                     handleNavigation('#contact')
//                   }
//                   setMenuOpen(false)
//                 }}
//               >
//                 Contact
//               </Link>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

// export default Header


// import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Link, useLocation } from 'react-router-dom'

// function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [dropdownOpen, setDropdownOpen] = useState(false)
//   const location = useLocation()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const isCourseFinder = location.pathname === '/course-finder'

//   const handleNavigation = (hash) => {
//     const element = document.querySelector(hash)
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   return (
//     <>
//       <motion.header 
//         className={`fixed w-full z-50 transition-all duration-300 ${
//           isScrolled ? 'bg-white text-blue-900 shadow-md' : 'bg-transparent text-blue-900'
//         }`}
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <motion.h1 
//             className="text-3xl font-bold"
//             whileHover={{ scale: 1.1 }}
//           >
//             <Link to="/">Rakepto</Link>
//           </motion.h1>

//           {/* Mobile Menu Icon */}
//           <button 
//             className="md:hidden block focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <svg 
//               className="w-6 h-6" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24" 
//             >
//               {menuOpen ? (
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth="2" 
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth="2" 
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               )}
//             </svg>
//           </button>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex md:flex-row md:space-x-6">
//             <Link 
//               to={isCourseFinder ? '/#hero' : '#hero'}
//               className="hover:text-orange-500 transition-colors"
//               onClick={(e) => {
//                 if (!isCourseFinder) {
//                   e.preventDefault()
//                   handleNavigation('#hero')
//                 }
//               }}
//             >
//               Home
//             </Link>
//             <Link 
//               to="/course-finder" 
//               className="hover:text-orange-500 transition-colors"
//             >
//               Course Finder
//             </Link>

//             {/* Student Service Dropdown */}
//             <div className="relative">
//               <button 
//                 className="hover:text-orange-500 transition-colors flex items-center"
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//               >
//                 Student Service
//                 <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>

//               <AnimatePresence>
//                 {dropdownOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden"
//                   >
//                     <Link 
//                       to="/test-preparation"
//                       className="block px-4 py-2 text-blue-900 hover:bg-gray-200"
//                     >
//                       Test Preparation
//                     </Link>
//                     <Link 
//                       to="/scholarship"
//                       className="block px-4 py-2 text-blue-900 hover:bg-gray-200"
//                     >
//                       Scholarship
//                     </Link>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <Link 
//               to={isCourseFinder ? '/#contact' : '#contact'}
//               className="hover:text-orange-500 transition-colors"
//               onClick={(e) => {
//                 if (!isCourseFinder) {
//                   e.preventDefault()
//                   handleNavigation('#contact')
//                 }
//               }}
//             >
//               Contact
//             </Link>
//           </nav>
//         </div>
//       </motion.header>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-blue-900 z-40 md:hidden"
//           >
//             <nav className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
//               <Link 
//                 to={isCourseFinder ? '/#hero' : '#hero'}
//                 className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
//                 onClick={(e) => {
//                   if (!isCourseFinder) {
//                     e.preventDefault()
//                     handleNavigation('#hero')
//                   }
//                   setMenuOpen(false)
//                 }}
//               >
//                 Home
//               </Link>
//               <Link 
//                 to="/course-finder" 
//                 className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Course Finder
//               </Link>

//               {/* Student Service Dropdown in Mobile */}
//               <div className="relative w-full text-center">
//                 <button 
//                   className="text-white text-xl py-4 hover:text-orange-500 transition-colors flex justify-center w-full"
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                 >
//                   Student Service
//                   <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>

//                 <AnimatePresence>
//                   {dropdownOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-md shadow-lg mt-1 w-40 text-center"
//                     >
//                       <Link 
//                         to="/test-preparation"
//                         className="block px-4 py-2 text-blue-900 hover:bg-gray-200"
//                         onClick={() => setMenuOpen(false)}
//                       >
//                         Test Preparation
//                       </Link>
//                       <Link 
//                         to="/scholarship"
//                         className="block px-4 py-2 text-blue-900 hover:bg-gray-200"
//                         onClick={() => setMenuOpen(false)}
//                       >
//                         Scholarship
//                       </Link>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               <Link 
//                 to={isCourseFinder ? '/#contact' : '#contact'}
//                 className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
//                 onClick={(e) => {
//                   if (!isCourseFinder) {
//                     e.preventDefault()
//                     handleNavigation('#contact')
//                   }
//                   setMenuOpen(false)
//                 }}
//               >
//                 Contact
//               </Link>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

// export default Header


// import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Link, useLocation } from 'react-router-dom'

// function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [studentServiceOpen, setStudentServiceOpen] = useState(false)
//   const location = useLocation()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const isCourseFinder = location.pathname === '/course-finder'

//   const handleNavigation = (hash) => {
//     const element = document.querySelector(hash)
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   return (
//     <>
//       <motion.header 
//         className={`fixed w-full z-50 transition-all duration-300 ${
//           isScrolled ? 'bg-white text-blue-900 shadow-md' : 'bg-transparent text-blue-900'
//         }`}
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <motion.h1 
//             className="text-3xl font-bold"
//             whileHover={{ scale: 1.1 }}
//           >
//             <Link to="/">Rakepto</Link>
//           </motion.h1>

//           {/* Mobile Menu Icon */}
//           <button 
//             className="md:hidden block focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <svg 
//               className="w-6 h-6" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24" 
//             >
//               {menuOpen ? (
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth="2" 
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth="2" 
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               )}
//             </svg>
//           </button>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex md:flex-row md:space-x-6">
//             <Link 
//               to={isCourseFinder ? '/#hero' : '#hero'}
//               className="hover:text-orange-500 transition-colors"
//               onClick={(e) => {
//                 if (!isCourseFinder) {
//                   e.preventDefault()
//                   handleNavigation('#hero')
//                 }
//               }}
//             >
//               Home
//             </Link>

//             {/* Student Service Dropdown */}
//             <div 
//               className="relative"
//               onMouseEnter={() => setStudentServiceOpen(true)}
//               onMouseLeave={() => setStudentServiceOpen(false)}
//             >
//               <button className="hover:text-orange-500 transition-colors focus:outline-none">
//                 Student Service
//               </button>
//               <AnimatePresence>
//                 {studentServiceOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2"
//                   >
//                     <Link 
//                       to="/test-preparation"
//                       className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                     >
//                       Test Preparation
//                     </Link>
//                     <Link 
//                       to="/scholarship"
//                       className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                     >
//                       Scholarship
//                     </Link>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <Link 
//               to="/course-finder" 
//               className="hover:text-orange-500 transition-colors"
//             >
//               Course Finder
//             </Link>
//             <Link 
//               to={isCourseFinder ? '/#contact' : '#contact'}
//               className="hover:text-orange-500 transition-colors"
//               onClick={(e) => {
//                 if (!isCourseFinder) {
//                   e.preventDefault()
//                   handleNavigation('#contact')
//                 }
//               }}
//             >
//               Contact
//             </Link>
//           </nav>
//         </div>
//       </motion.header>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-blue-900 z-40 md:hidden"
//           >
//             <nav className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
//               <Link 
//                 to={isCourseFinder ? '/#hero' : '#hero'}
//                 className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
//                 onClick={(e) => {
//                   if (!isCourseFinder) {
//                     e.preventDefault()
//                     handleNavigation('#hero')
//                   }
//                   setMenuOpen(false)
//                 }}
//               >
//                 Home
//               </Link>

//               {/* Mobile Student Service Dropdown */}
//               <div className="text-center">
//                 <button 
//                   className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
//                   onClick={() => setStudentServiceOpen(!studentServiceOpen)}
//                 >
//                   Student Service
//                 </button>
//                 <AnimatePresence>
//                   {studentServiceOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       className="mt-2 bg-blue-800 rounded-md py-2"
//                     >
//                       <Link 
//                         to="/test-preparation"
//                         className="block text-white py-2 px-4 hover:bg-blue-700"
//                         onClick={() => setMenuOpen(false)}
//                       >
//                         Test Preparation
//                       </Link>
//                       <Link 
//                         to="/scholarship"
//                         className="block text-white py-2 px-4 hover:bg-blue-700"
//                         onClick={() => setMenuOpen(false)}
//                       >
//                         Scholarship
//                       </Link>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               <Link 
//                 to="/course-finder" 
//                 className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Course Finder
//               </Link>
//               <Link 
//                 to={isCourseFinder ? '/#contact' : '#contact'}
//                 className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
//                 onClick={(e) => {
//                   if (!isCourseFinder) {
//                     e.preventDefault()
//                     handleNavigation('#contact')
//                   }
//                   setMenuOpen(false)
//                 }}
//               >
//                 Contact
//               </Link>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

// export default Header

// import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Link, useLocation } from 'react-router-dom'
// import { ChevronDown } from 'lucide-react'  // Importing the dropdown arrow icon

// function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [studentServiceOpen, setStudentServiceOpen] = useState(false)
//   const location = useLocation()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const isCourseFinder = location.pathname === '/course-finder'

//   const isTestPreparation = location.pathname === '/test-preparation'

//   const handleNavigation = (hash) => {
//     const element = document.querySelector(hash)
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   return (
//     <>
//       <motion.header 
//         className={`fixed w-full z-50 transition-all duration-300 ${
//           isScrolled ? 'bg-white text-blue-900 shadow-md' : 'bg-transparent text-blue-900'
//         }`}
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <motion.h1 
//             className="text-3xl font-bold"
//             whileHover={{ scale: 1.1 }}
//           >
//             <Link to="/">Rakepto</Link>
//           </motion.h1>

//           {/* Mobile Menu Icon */}
//           <button 
//             className="md:hidden block focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <svg 
//               className="w-6 h-6" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24" 
//             >
//               {menuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//               )}
//             </svg>
//           </button>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex md:flex-row md:space-x-6">
//             <Link 
//               to={isCourseFinder === isTestPreparation ? '/#hero' : '#hero'}
//               className="hover:text-orange-500 transition-colors"
//               onClick={(e) => {
//                 if (!isCourseFinder === isTestPreparation) {
//                   e.preventDefault()
//                   handleNavigation('#hero')
//                 }
//               }}
//             >
//               Home
//             </Link>
//             {/* <Link 
//               to={isTestPreparation ? '/#hero' : '#hero'}
//               className="hover:text-orange-500 transition-colors"
//               onClick={(e) => {
//                 if (!isTestPreparation) {
//                   e.preventDefault()
//                   handleNavigation('#hero')
//                 }
//               }}
//             >
//               Home
//             </Link> */}

//             {/* Student Service Dropdown */}
//             <div 
//               className="relative"
//               onMouseEnter={() => setStudentServiceOpen(true)}
//               onMouseLeave={() => setStudentServiceOpen(false)}
//             >
//               <button 
//                 className="flex items-center hover:text-orange-500 transition-colors focus:outline-none"
//               >
//                 Student Service
//                 <ChevronDown 
//                   className={`ml-1 transition-transform ${
//                     studentServiceOpen ? 'rotate-180' : ''
//                   }`} 
//                   size={18} 
//                 />
//               </button>
//               <AnimatePresence>
//                 {studentServiceOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2"
//                   >
//                     <Link 
//                       to="/test-preparation"
//                       className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                     >
//                       Test Preparation
//                     </Link>
//                     <Link 
//                       to="/scholarship"
//                       className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                     >
//                       Scholarship
//                     </Link>
//                     <Link 
//                       to="/education-loan"
//                       className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                     >
//                       Education Loan
//                     </Link>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <Link to="/course-finder" className="hover:text-orange-500 transition-colors">
//               Course Finder
//             </Link>
//             <Link 
//               to={isCourseFinder ? '/#contact' : '#contact'}
//               className="hover:text-orange-500 transition-colors"
//               onClick={(e) => {
//                 if (!isCourseFinder) {
//                   e.preventDefault()
//                   handleNavigation('#contact')
//                 }
//               }}
//             >
//               Contact
//             </Link>
//           </nav>
//         </div>
//       </motion.header>
//     </>
//   )
// }

// export default Header


import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'  // Importing the dropdown arrow icon

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [studentServiceOpen, setStudentServiceOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isStandalonePage = ['/course-finder', '/test-preparation', '/education-loan'].includes(location.pathname)

  const handleNavigation = (hash) => {
    const element = document.querySelector(hash)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white text-blue-900 shadow-md' : 'bg-transparent text-blue-900'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1 
          className="text-3xl font-bold"
          whileHover={{ scale: 1.1 }}
        >
          <Link to="/">Rakepto</Link>
        </motion.h1>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden block focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:flex-row md:space-x-6">
          <Link 
            to={isStandalonePage ? '/#hero' : '#hero'}
            className="hover:text-orange-500 transition-colors"
            onClick={(e) => {
              if (!isStandalonePage) {
                e.preventDefault()
                handleNavigation('#hero')
              }
            }}
          >
            Home
          </Link>

          {/* Student Service Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setStudentServiceOpen(true)}
            onMouseLeave={() => setStudentServiceOpen(false)}
          >
            <button 
              className="flex items-center hover:text-orange-500 transition-colors focus:outline-none"
            >
              Student Service
              <ChevronDown 
                className={`ml-1 transition-transform ${studentServiceOpen ? 'rotate-180' : ''}`} 
                size={18} 
              />
            </button>
            <AnimatePresence>
              {studentServiceOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2"
                >
                  <Link 
                    to="/test-preparation"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Test Preparation
                  </Link>
                  <Link 
                    to="/scholarship"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Scholarship
                  </Link>
                  <Link 
                    to="/education-loan"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Education Loan
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/course-finder" className="hover:text-orange-500 transition-colors">
            Course Finder
          </Link>
          <Link 
            to={isStandalonePage ? '/#contact' : '#contact'}
            className="hover:text-orange-500 transition-colors"
            onClick={(e) => {
              if (!isStandalonePage) {
                e.preventDefault()
                handleNavigation('#contact')
              }
            }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
