// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link, useLocation } from 'react-router-dom';
// import { ChevronDown } from 'lucide-react'; // Importing the dropdown arrow icon

// function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [studentServiceOpen, setStudentServiceOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const isStandalonePage = ['/course-finder', '/test-preparation', '/education-loan', '/scholarship'].includes(location.pathname);

//   const handleNavigation = (hash) => {
//     const element = document.querySelector(hash);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

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
//             aria-label="Toggle menu"
//             aria-expanded={menuOpen}
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
//               to={isStandalonePage ? '/#hero' : '#hero'}
//               className="hover:text-orange-500 transition-colors"
//               onClick={(e) => {
//                 if (!isStandalonePage) {
//                   e.preventDefault();
//                   handleNavigation('#hero');
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
//               <button
//                 className="flex items-center hover:text-orange-500 transition-colors focus:outline-none"
//               >
//                 Student Service
//                 <ChevronDown
//                   className={`ml-1 transition-transform ${studentServiceOpen ? 'rotate-180' : ''}`}
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
//               to={isStandalonePage ? '/#contact' : '#contact'}
//               className="hover:text-orange-500 transition-colors"
//               onClick={(e) => {
//                 if (!isStandalonePage) {
//                   e.preventDefault();
//                   handleNavigation('#contact');
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
//             // className="fixed inset-0 bg-blue-900 z-40 md:hidden"
//             className="fixed inset-0 bg-blue-900 z-40 md:hidden overflow-y-auto"
//             onClick={() => setMenuOpen(false)}  //Close menu when clicking outside
//             >
//             <nav className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
//               <Link
//                 to={isStandalonePage ? '/#hero' : '#hero'}
//                 className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
//                 onClick={(e) => {
//                   if (!isStandalonePage) {
//                     e.preventDefault();
//                     handleNavigation('#hero');
//                   }
//                   setMenuOpen(false);
//                 }}
//               >
//                 Home
//               </Link>

//               {/* Student Service Dropdown in Mobile */}
//               <div
//                 className="relative"
//                 onClick={(e) => {
//                   e.stopPropagation(); // Stop event propagation
//                   setStudentServiceOpen(!studentServiceOpen);
//                 }}
//               >
//                 <button
//                   className="flex items-center text-white text-xl py-4 hover:text-orange-500 transition-colors focus:outline-none"
//                 >
//                   Student Service
//                   <ChevronDown
//                     className={`ml-1 transition-transform ${studentServiceOpen ? 'rotate-180' : ''}`}
//                     size={18}
//                   />
//                 </button>
//                 <AnimatePresence>
//                   {studentServiceOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       className="mt-2 w-48 bg-white shadow-lg rounded-md py-2"
//                     >
//                       <Link
//                         to="/test-preparation"
//                         className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                         onClick={() => setMenuOpen(false)}
//                       >
//                         Test Preparation
//                       </Link>
//                       <Link
//                         to="/scholarship"
//                         className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                         onClick={() => setMenuOpen(false)}
//                       >
//                         Scholarship
//                       </Link>
//                       <Link
//                         to="/education-loan"
//                         className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                         onClick={() => setMenuOpen(false)}
//                       >
//                         Education Loan
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
//                 to={isStandalonePage ? '/#contact' : '#contact'}
//                 className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
//                 onClick={(e) => {
//                   if (!isStandalonePage) {
//                     e.preventDefault();
//                     handleNavigation('#contact');
//                   }
//                   setMenuOpen(false);
//                 }}
//               >
//                 Contact
//               </Link>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// export default Header;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [studentServiceOpen, setStudentServiceOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isStandalonePage = ['/course-finder', '/test-preparation', '/education-loan', '/scholarship'].includes(location.pathname);

  // Check if the current page is the Scholarship page
  const isScholarshipPage = location.pathname === '/scholarship';
  const isEducationloanPage = location.pathname === '/education-loan';

  const handleNavigation = (hash) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <motion.header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white text-blue-900 shadow-md' // Scrolled state
            : isScholarshipPage || isEducationloanPage
            ? 'bg-transparent text-white' // Scholarship page initial state (white text)
            : 'bg-transparent text-blue-900' // Default state
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:flex-row md:space-x-6">
            <Link
              to={isStandalonePage ? '/#hero' : '#hero'}
              className={`hover:text-orange-500 transition-colors ${
                isActive('/') ? 'text-orange-500' : ''
              }`}
              onClick={(e) => {
                if (!isStandalonePage) {
                  e.preventDefault();
                  handleNavigation('#hero');
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
                className={`flex items-center hover:text-orange-500 transition-colors focus:outline-none ${
                  isActive('/test-preparation') ||
                  isActive('/scholarship') ||
                  isActive('/education-loan')
                    ? 'text-orange-500'
                    : ''
                }`}
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
                      className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 ${
                        isActive('/test-preparation') ? 'bg-gray-200' : ''
                      }`}
                    >
                      Test Preparation
                    </Link>
                    <Link
                      to="/scholarship"
                      className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 ${
                        isActive('/scholarship') ? 'bg-gray-200' : ''
                      }`}
                    >
                      Scholarship
                    </Link>
                    <Link
                      to="/education-loan"
                      className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 ${
                        isActive('/education-loan') ? 'bg-gray-200' : ''
                      }`}
                    >
                      Education Loan
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/course-finder"
              className={`hover:text-orange-500 transition-colors ${
                isActive('/course-finder') ? 'text-orange-500' : ''
              }`}
            >
              Course Finder
            </Link>
            <Link
              to={isStandalonePage ? '/#contact' : '#contact'}
              className={`hover:text-orange-500 transition-colors ${
                isActive('/contact') ? 'text-orange-500' : ''
              }`}
              onClick={(e) => {
                if (!isStandalonePage) {
                  e.preventDefault();
                  handleNavigation('#contact');
                }
              }}
            >
              Contact
            </Link>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-blue-900 z-40 md:hidden overflow-y-auto"
            onClick={() => setMenuOpen(false)}  // Close menu when clicking outside
          >
            <nav className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
              <Link
                to={isStandalonePage ? '/#hero' : '#hero'}
                className={`text-white text-xl py-4 hover:text-orange-500 transition-colors ${
                  isActive('/') ? 'text-orange-500 font-semibold' : ''
                }`}
                onClick={(e) => {
                  if (!isStandalonePage) {
                    e.preventDefault();
                    handleNavigation('#hero');
                  }
                  setMenuOpen(false);
                }}
              >
                Home
              </Link>

              {/* Student Service Dropdown in Mobile */}
              <div
                className="relative"
                onClick={(e) => {
                  e.stopPropagation(); // Stop event propagation
                  setStudentServiceOpen(!studentServiceOpen);
                }}
              >
                <button
                  className={`flex items-center text-white text-xl py-4 hover:text-orange-500 transition-colors focus:outline-none ${
                    isActive('/test-preparation') ||
                    isActive('/scholarship') ||
                    isActive('/education-loan')
                      ? 'text-orange-500 font-semibold'
                      : ''
                  }`}
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
                      className="mt-2 w-48 bg-white shadow-lg rounded-md py-2"
                    >
                      <Link
                        to="/test-preparation"
                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 ${
                          isActive('/test-preparation') ? 'bg-gray-200' : ''
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        Test Preparation
                      </Link>
                      <Link
                        to="/scholarship"
                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 ${
                          isActive('/scholarship') ? 'bg-gray-200' : ''
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        Scholarship
                      </Link>
                      <Link
                        to="/education-loan"
                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 ${
                          isActive('/education-loan') ? 'bg-gray-200' : ''
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        Education Loan
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/course-finder"
                className={`text-white text-xl py-4 hover:text-orange-500 transition-colors ${
                  isActive('/course-finder') ? 'text-orange-500 font-semibold' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Course Finder
              </Link>
              <Link
                to={isStandalonePage ? '/#contact' : '#contact'}
                className={`text-white text-xl py-4 hover:text-orange-500 transition-colors ${
                  isActive('/contact') ? 'text-orange-500 font-semibold' : ''
                }`}
                onClick={(e) => {
                  if (!isStandalonePage) {
                    e.preventDefault();
                    handleNavigation('#contact');
                  }
                  setMenuOpen(false);
                }}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;