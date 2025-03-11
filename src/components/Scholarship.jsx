
// "use client"

// import { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
// import { Search, Info, ChevronRight, Award, Globe, BookOpen, ArrowRight, Check } from "lucide-react"
// import CountUp from "react-countup"
// import { useNavigate } from "react-router-dom"
// import { Helmet } from "react-helmet" // Import Helmet for meta tags

// const ScholarshipCard = ({ data, index }) => (
//   <motion.div
//     className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.4, delay: index * 0.1 }}
//     whileHover={{
//       y: -8,
//       boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
//       scale: 1.02,
//     }}
//   >
//     <div className="p-6 flex-1 flex flex-col relative">
//       {/* Decorative element */}
//       <div className="absolute -top-2 -right-2 w-20 h-20 bg-blue-50 rounded-full opacity-30" />

//       <h3 className="text-xl font-bold text-blue-900 mb-2 relative">{data.university || data.country}</h3>

//       {data.name && (
//         <motion.p
//           className="text-blue-600 font-semibold mb-4 relative"
//           initial={{ opacity: 0.8 }}
//           whileHover={{ opacity: 1, x: 3 }}
//           transition={{ duration: 0.2 }}
//         >
//           {data.name}
//         </motion.p>
//       )}

//       <div className="space-y-3 flex-1 relative">
//         {data.tuitionFee && (
//           <motion.div className="flex items-start gap-2" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
//             <span className="text-orange-500 font-semibold min-w-24">Tuition Fee:</span>
//             <span className="text-gray-600 flex-1">{data.tuitionFee}</span>
//           </motion.div>
//         )}
//         {data.scholarship && (
//           <motion.div className="flex items-start gap-2" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
//             <span className="text-orange-500 font-semibold min-w-24">Scholarship:</span>
//             <span className="text-gray-600 flex-1">{data.scholarship}</span>
//           </motion.div>
//         )}
//         {data.additionalInfo && (
//           <motion.div className="flex items-start gap-2" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
//             <span className="text-orange-500 font-semibold min-w-24">Additional Info:</span>
//             <span className="text-gray-600 flex-1">{data.additionalInfo}</span>
//           </motion.div>
//         )}
//         {data.programs && (
//           <motion.div className="flex items-start gap-2" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
//             <span className="text-orange-500 font-semibold min-w-24">Programs:</span>
//             <span className="text-gray-600 flex-1">{data.programs}</span>
//           </motion.div>
//         )}
//         {data.requirements && (
//           <motion.div className="flex items-start gap-2" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
//             <span className="text-orange-500 font-semibold min-w-24">Requirements:</span>
//             <span className="text-gray-600 flex-1">{data.requirements}</span>
//           </motion.div>
//         )}
//         {data.workVisa && (
//           <motion.div className="flex items-start gap-2" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
//             <span className="text-orange-500 font-semibold min-w-24">Work Visa:</span>
//             <span className="text-gray-600 flex-1">{data.workVisa}</span>
//           </motion.div>
//         )}
//         {data.livingExpenses && (
//           <motion.div className="flex items-start gap-2" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
//             <span className="text-orange-500 font-semibold min-w-24">Living Expenses:</span>
//             <span className="text-gray-600 flex-1">{data.livingExpenses}</span>
//           </motion.div>
//         )}
//         {data.notes && (
//           <motion.div className="flex items-start gap-2" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
//             <span className="text-orange-500 font-semibold min-w-24">Notes:</span>
//             <span className="text-gray-600 flex-1">{data.notes}</span>
//           </motion.div>
//         )}
//       </div>
//     </div>

//     {/* Card footer with subtle gradient */}
//     <div className="h-2 bg-gradient-to-r from-blue-500 to-orange-500" />
//   </motion.div>
// )

// // CountryTab component with enhanced animations
// const CountryTab = ({ country, isActive, onClick, index }) => (
//   <motion.button
//     onClick={onClick}
//     className={`px-6 py-3 rounded-full transition-all flex items-center gap-2 text-sm md:text-base ${
//       isActive ? "bg-blue-900 text-white shadow-lg" : "bg-white text-blue-900 hover:bg-blue-50"
//     }`}
//     whileHover={{
//       scale: 1.05,
//       boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//     }}
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay: index * 0.1, duration: 0.3 }}
//   >
//     {country}
//     {isActive && (
//       <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
//         <ChevronRight size={16} />
//       </motion.div>
//     )}
//   </motion.button>
// )

// // Animated text for CTA section
// const AnimatedText = ({ text }) => {
//   return (
//     <div className="overflow-hidden py-2">
//       <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
//         {text}
//       </motion.div>
//     </div>
//   )
// }

// // Running text animation component
// const RunningText = ({ text, speed = 20, direction = 1 }) => {
//   const containerRef = useRef(null)
//   const [containerWidth, setContainerWidth] = useState(0)
//   const [textWidth, setTextWidth] = useState(0)
//   const [duplicates, setDuplicates] = useState(1)

//   useEffect(() => {
//     if (containerRef.current) {
//       setContainerWidth(containerRef.current.offsetWidth)

//       // Create a temporary element to measure text width
//       const tempElement = document.createElement("div")
//       tempElement.style.position = "absolute"
//       tempElement.style.visibility = "hidden"
//       tempElement.style.whiteSpace = "nowrap"
//       tempElement.style.fontSize = "2rem"
//       tempElement.style.fontWeight = "bold"
//       tempElement.innerText = text
//       document.body.appendChild(tempElement)

//       const width = tempElement.offsetWidth
//       setTextWidth(width)

//       // Calculate how many duplicates we need to fill the container
//       const needed = Math.ceil((containerWidth * 2) / width) + 1
//       setDuplicates(needed)

//       document.body.removeChild(tempElement)
//     }
//   }, [text, containerWidth]) // Removed containerRef from dependencies

//   const distance = textWidth * duplicates
//   const duration = distance / speed

//   return (
//     <div
//       ref={containerRef}
//       className="overflow-hidden whitespace-nowrap text-white text-opacity-10 text-2xl md:text-4xl font-bold"
//     >
//       <motion.div
//         initial={{ x: direction > 0 ? 0 : -distance }}
//         animate={{ x: direction > 0 ? -distance : 0 }}
//         transition={{
//           duration,
//           repeat: Number.POSITIVE_INFINITY,
//           repeatType: "loop",
//           ease: "linear",
//         }}
//         className="inline-block"
//       >
//         {Array(duplicates)
//           .fill(text)
//           .map((t, i) => (
//             <span key={i} className="mx-8">
//               {t}
//             </span>
//           ))}
//       </motion.div>
//     </div>
//   )
// }

// const scholarshipData = {
//   USA: {
//     Undergraduate: [
//       {
//         university: "The University Of Alabama, Tuscaloosa",
//         name: "International Excellence Scholarship",
//         tuitionFee: "$33,400",
//         scholarship: "$30,500",
//         additionalInfo: "91% scholarship on tuition fees",
//       },
//       {
//         university: "Texas State University",
//         name: "Academic Scholarship",
//         tuitionFee: "$10,000",
//         scholarship: "$8,000",
//         additionalInfo: "80% scholarship on tuition fees",
//       },
//       {
//         university: "University Of New Mexico",
//         name: "International Amigo Scholarship",
//         tuitionFee: "$36,497",
//         scholarship: "$24,658",
//         additionalInfo: "68% scholarship on tuition fees",
//       },
//       {
//         university: "Depaul University",
//         name: "Merit Scholarship",
//         tuitionFee: "$45,195",
//         scholarship: "$29,000",
//         additionalInfo: "64% scholarship on tuition fees",
//       },
//       {
//         university: "University of South Florida",
//         tuitionFee: "$17,324",
//         scholarship: "$11,000",
//         additionalInfo: "63% scholarship on tuition fees",
//       },
//       {
//         university: "University of St. Thomas",
//         tuitionFee: "$52,850",
//         scholarship: "$34,333",
//         additionalInfo: "65% scholarship on tuition fees",
//       },
//       {
//         university: "University Of Cincinnati",
//         tuitionFee: "$30,010",
//         scholarship: "$17,500",
//         additionalInfo: "58% scholarship on tuition fees",
//       },
//       {
//         university: "Rider University",
//         tuitionFee: "$37,700",
//         scholarship: "$22,000",
//         additionalInfo: "58% scholarship on tuition fees",
//       },
//       {
//         university: "New York Institute Of Technology",
//         tuitionFee: "$47,060",
//         scholarship: "$27,000",
//         additionalInfo: "57% scholarship on tuition fees",
//       },
//       {
//         university: "University Of Arizona",
//         tuitionFee: "$41,474",
//         scholarship: "$23,000",
//         additionalInfo: "55% scholarship on tuition fees",
//       },
//       {
//         university: "George Mason University",
//         tuitionFee: "$38,279",
//         scholarship: "$19,500",
//         additionalInfo: "51% scholarship on tuition fees",
//       },
//       {
//         university: "The State University Of New York, Albany (Suny Albany)",
//         tuitionFee: "$31,896",
//         scholarship: "$15,000",
//         additionalInfo: "47% scholarship on tuition fees",
//       },
//       {
//         university: "University Of Massachusetts Dartmouth (UMass Dartmouth)",
//         tuitionFee: "$29,661",
//         scholarship: "$13,500",
//         additionalInfo: "46% scholarship on tuition fees",
//       },
//       {
//         university: "Arizona State University",
//         tuitionFee: "$27,139",
//         scholarship: "$12,500",
//         additionalInfo: "46% scholarship on tuition fees",
//       },
//       {
//         university: "Southeast Missouri State University",
//         tuitionFee: "$16,395",
//         scholarship: "$6,900",
//         additionalInfo: "42% scholarship on tuition fees",
//       },
//       {
//         university: "Colorado State University",
//         tuitionFee: "$43,839",
//         scholarship: "$18,000",
//         additionalInfo: "41% scholarship on tuition fees",
//       },
//       {
//         university: "University Of Bridgeport",
//         tuitionFee: "$19,970",
//         scholarship: "$8,133",
//         additionalInfo: "41% scholarship on tuition fees",
//       },
//       {
//         university: "University of California, Riverside - College of Business",
//         tuitionFee: "$73,934",
//         scholarship: "$30,000",
//         additionalInfo: "41% scholarship on tuition fees",
//       },
//       {
//         university: "Midwestern State University",
//         tuitionFee: "$15,426",
//         scholarship: "$6,012",
//         additionalInfo: "39% scholarship on tuition fees",
//       },
//       {
//         university: "Savannah College Of Art And Design - Savannah",
//         tuitionFee: "$42,620",
//         scholarship: "$16,500",
//         additionalInfo: "39% scholarship on tuition fees",
//       },
//       {
//         university: "Missouri University Of Science And Technology",
//         tuitionFee: "$26,000",
//         scholarship: "$10,000",
//         additionalInfo: "38% scholarship on tuition fees",
//       },
//       {
//         university: "Wright State University",
//         tuitionFee: "$14,000",
//         scholarship: "$5,000",
//         additionalInfo: "36% scholarship on tuition fees",
//       },
//       {
//         university: "Missouri State University",
//         tuitionFee: "$14,628",
//         scholarship: "$5,090",
//         additionalInfo: "35% scholarship on tuition fees",
//       },
//       {
//         university: "Worcester Polytechnic Institute",
//         tuitionFee: "$28,980",
//         scholarship: "$9,660",
//         additionalInfo: "33% scholarship on tuition fees",
//       },
//       {
//         university: "Northern Arizona University",
//         tuitionFee: "$33,924",
//         scholarship: "$11,000",
//         additionalInfo: "32% scholarship on tuition fees",
//       },
//     ],
//     Postgraduate: [
//       {
//         university: "Yeshiva University",
//         name: "Graduate Excellence Award",
//         tuitionFee: "$21,522",
//         scholarship: "$17,084",
//         additionalInfo: "79% scholarship on tuition fees",
//       },
//       {
//         university: "University Of Cincinnati",
//         name: "Graduate Scholarship",
//         tuitionFee: "$27,902",
//         scholarship: "$21,598",
//         additionalInfo: "77% scholarship on tuition fees",
//       },
//       {
//         university: "Indiana University Of Pennsylvania",
//         name: "International Merit Scholarship",
//         tuitionFee: "$18,703",
//         scholarship: "$12,520",
//         additionalInfo: "67% scholarship on tuition fees",
//       },
//       {
//         university: "University Of New Mexico",
//         tuitionFee: "$23,887",
//         scholarship: "$15,097",
//         additionalInfo: "63% scholarship on tuition fees",
//       },
//       {
//         university: "New York Institute Of Technology",
//         tuitionFee: "$44,060",
//         scholarship: "$24,000",
//         additionalInfo: "54% scholarship on tuition fees",
//       },
//       {
//         university: "Depaul University",
//         tuitionFee: "$43,665",
//         scholarship: "$23,000",
//         additionalInfo: "53% scholarship on tuition fees",
//       },
//       {
//         university: "Auburn University At Montgomery",
//         tuitionFee: "$19,143",
//         scholarship: "$9,660",
//         additionalInfo: "50% scholarship on tuition fees",
//       },
//       {
//         university: "University Of New Haven",
//         tuitionFee: "$19,656",
//         scholarship: "$9,828",
//         additionalInfo: "50% scholarship on tuition fees",
//       },
//       {
//         university: "The Catholic University Of America",
//         tuitionFee: "$37,270",
//         scholarship: "$18,500",
//         additionalInfo: "50% scholarship on tuition fees",
//       },
//     ],
//   },
//   Europe: {
//     "Country Info": [
//       {
//         country: "Ireland",
//         programs: "IT, Pharma, Business, Finance",
//         requirements: "55%-65%",
//         workVisa: "24 months",
//         tuitionFee: "€8,000 – 20,000",
//         livingExpenses: "€12,000 per annum",
//       },
//       {
//         country: "Germany",
//         programs: "Engineering, IT, Business",
//         requirements: "60%",
//         workVisa: "18 months",
//         tuitionFee: "€8,000 – 12,000",
//         livingExpenses: "€11,904 per annum",
//       },
//       {
//         country: "France",
//         programs: "Business Management, Tourism",
//         requirements: "55%",
//         workVisa: "24 months",
//         tuitionFee: "€7,000 – 15,000",
//         livingExpenses: "SEK 123,768 per annum",
//       },
//       {
//         country: "Netherlands",
//         programs: "Engineering, Hospitality Management",
//         requirements: "65%",
//         workVisa: "12 months",
//         tuitionFee: "SEK 150,000",
//         livingExpenses: "€15,000 per annum",
//       },
//       {
//         country: "Sweden",
//         programs: "Engineering, Renewable Energy",
//         requirements: "60%",
//         workVisa: "12 months",
//         tuitionFee: "€8,000 – 12,000",
//         livingExpenses: "SEK 12,000 per annum",
//       },
//       {
//         country: "Finland",
//         programs: "Data Science, Electrical Engineering",
//         requirements: "60%",
//         workVisa: "24 months",
//         tuitionFee: "€7,000 – 12,000",
//         livingExpenses: "€10,500 per annum",
//       },
//     ],
//   },
//   NewZealand: [
//     {
//       university: "Education New Zealand",
//       name: "New Zealand Excellence Awards (NZEA)",
//       scholarship: " UG: NZ$24,000 PG: NZ$10,000 each; UG: NZ 20,000 towards first year tuition fee",
//     },
//     {
//       university: "University of Auckland",
//       name: "India High Achievers Scholarship",
//       scholarship: "Up to $20,000 for postgraduate or undergraduate study",
//     },
//     {
//       university: "University of Canterbury",
//       name: "UC Master's Scholarship",
//       scholarship: "NZ$14,000",
//     },
//     {
//       university: "Lincoln University",
//       name: "180-credit Taught Master Merit Scholarship",
//       scholarship: "NZ$7,000 - 10,000",
//     },
//     {
//       university: "Lincoln University",
//       name: "Lincoln University Undergraduate Vice-Chancellor's",
//       scholarship: "NZ$5,000",
//     },
//     {
//       university: "Victoria University of Wellington",
//       name: "Tongarewa Scholarship",
//       scholarship: "NZ$5,000 - NZ$10,000",
//     },
//     {
//       university: "Victoria University of Wellington",
//       name: "Vice Chancellor's International Excellence Scholarship",
//       scholarship: "NZ$10,000",
//     },
//     {
//       university: "University of Waikato",
//       name: "Vice Chancellor's International Excellence Scholarship for India",
//       scholarship: "Up to NZ$15,000 towards tuition fees",
//     },
//     {
//       university: "University of Waikato",
//       name: "Vice Chancellor's Scholarships",
//       scholarship: "Up to NZ$10,000 towards tuition fees for full time study.",
//     },
//     {
//       university: "University of Otago",
//       name: "Vice Chancellor's International Postgraduate Scholarship for India",
//       scholarship: "Up to NZ$10,000 towards tuition fees for full time study.",
//     },
//     {
//       university: "Auckland University of Technology (AUT)",
//       name: "AUT International Scholarship  - South Asia",
//       scholarship: "NZ$5,000 contribution towards fees",
//     },
//     {
//       university: "Auckland University of Technology (AUT)",
//       name: "AUT International Faculty of Health and Environmental Sciences",
//       scholarship: "NZ$8,000 contribution towards fees",
//     },
//     {
//       university: "Auckland University of Technology (AUT)",
//       name: "AUT International Scholarship Faculty of Design and Creative Technologies",
//       scholarship: "NZ$5,000 contribution towards fees",
//     },
//     {
//       university: "Auckland University of Technology (AUT)",
//       name: "AUT International Scholarship Faculty of Culture and Society",
//       scholarship: "The scholarship consists of a NZ$7,000 contribution towards fees",
//     },
//   ],
//   UK: [
//     {
//       university: "Newcastle University",
//       name: "Vice-Chancellor's International Scholarships",
//       scholarship: "£4000",
//       notes: "Application Based",
//     },
//     {
//       university: "Newcastle University",
//       name: "Vice-Chancellor's Excellence Scholarships",
//       scholarship: "50% (57 Nos.) & 100% (2 Nos.)",
//       notes: "Application Based",
//     },
//     {
//       university: "Royal Holloway University of London",
//       name: "Royal Holloway India Postgraduate Scholarship",
//       scholarship: "£6,000",
//       notes: "Automatic",
//     },
//     {
//       university: "University of Aberdeen",
//       name: "Aberdeen Global Scholarship",
//       scholarship: "£8,000",
//       notes: "Automatic",
//     },
//     {
//       university: "University of East Anglia",
//       name: "Vice Chancellor's International Excellence Scholarship",
//       scholarship: "£7,000",
//       notes: "Application Based",
//     },
//     {
//       university: "University of East Anglia",
//       name: "Vice Chancellor's International Excellence Scholarship",
//       scholarship: "£7,000",
//       notes: "Application Based",
//     },
//     {
//       university: "Brunel University of London",
//       name: "Vice Chancellor's PGT Excellence Award ",
//       scholarship: "£6,000",
//       notes: "Application Based",
//     },
//     {
//       university: "Brunel University of London",
//       name: "The International Bursary PGT",
//       scholarship: "£2,000",
//       notes: "Automatic for 2:2 degree holders",
//     },
//     {
//       university: "University of Strathclyde",
//       name: "Various Scholarships",
//       scholarship: "£5000 - £12000 based on course, £9000 - £17000 for MBA",
//       notes: "Some Automatic, others require Application",
//     },
//     {
//       university: "Newcastle University",
//       name: "Vice-Chancellor's International Scholarships",
//       scholarship: "£7000",
//       notes: "Automatic",
//     },
//     {
//       university: "Newcastle University",
//       name: "Vice-Chancellor's Global Scholarships",
//       scholarship: "£4000",
//       notes: "Application Based",
//     },
//     {
//       university: "Newcastle University",
//       name: "Vice-Chancellor's Excellence Scholarships",
//       scholarship: "50% (57 Nos.) & 100% (2 Nos.)",
//       notes: "Application Based",
//     },
//   ],
//   Dubai: [
//     {
//       university: "University of Birmingham Dubai",
//       name: "Merit-Based Scholarship",
//       scholarship: "Up to 40%",
//       additionalInfo:
//         "Based on Indian Higher Secondary Certificate Percentage. Additional 10% merit-based scholarship available on top of flat 30% for eligible students. Valid until 30th June for Sep 2025 intake.",
//     },
//     {
//       university: "Murdoch University Dubai",
//       name: "Academic Excellence Scholarship",
//       scholarship: "15% - 40%",
//       additionalInfo: `
//           Indian Higher Secondary Certificate (State Boards):
//           • 15%: 70% - 79%
//           • 25%: 80% - 84%
//           • 35%: 85% - 89%
//           • 40%: ≥ 90%
//         `,
//     },
//   ],
//   Australia: [
//     {
//       university: "The University of Adelaide",
//       scholarship: "15% - 30% of tuition fees",
//     },
//     {
//       university: "University of Wollongong Australia",
//       scholarship: "20% - 30% of tuition fees",
//     },
//     {
//       university: "The University of Newcastle Australia",
//       scholarship: "A$12,000",
//     },
//     {
//       university: "Macquarie University Sydney Australia",
//       scholarship: "A$10,000",
//     },
//     {
//       university: "Deakin University",
//       scholarship: "20% - 25% of tuition fees",
//     },
//     {
//       university: "UTS (University of Technology Sydney)",
//       scholarship: "20% - 25% of tuition fees",
//     },
//   ],
// }

// export default function Scholarship() {
//   const [activeCountry, setActiveCountry] = useState("USA");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeTab, setActiveTab] = useState("Undergraduate");
//   const [isLoading, setIsLoading] = useState(true);
//   const [scrollY, setScrollY] = useState(0);
//   const navigate = useNavigate();

//   // Refs for scroll animations
//   const termsRef = useRef(null);
//   const ctaRef = useRef(null);

//   const { scrollYProgress: termsScrollProgress } = useScroll({
//     target: termsRef,
//     offset: ["start end", "end start"],
//   });

//   const { scrollYProgress: ctaScrollProgress } = useScroll({
//     target: ctaRef,
//     offset: ["start end", "end start"],
//   });

//   const termsOpacity = useTransform(termsScrollProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
//   const termsY = useTransform(termsScrollProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

//   const ctaScale = useTransform(ctaScrollProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
//   const ctaOpacity = useTransform(ctaScrollProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

//   // Countries array
//   const countries = ["USA", "NewZealand", "Europe", "UK", "Australia", "Dubai"];

//   // Simulate loading effect
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 800);

//     // Track scroll position for parallax effects
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleButtonClick = () => {
//     navigate("/#contact");
//   };

//   // Filter scholarships based on search term
//   const filterScholarships = (data) => {
//     if (!data) return [];
//     return data.filter((item) => {
//       const searchText = searchTerm.toLowerCase();
//       return (
//         item.university?.toLowerCase().includes(searchText) ||
//         item.country?.toLowerCase().includes(searchText) ||
//         item.name?.toLowerCase().includes(searchText)
//       );
//     });
//   };

//   // Define meta data for SEO
//   const metaTitle = "Study Abroad Scholarships - Fund Your International Education";
//   const metaDescription = "Discover study abroad scholarships and financial aid opportunities for international students. Find scholarships to study in the UK, USA, and more.";
//   const focusKeywords = [
//     "how to get scholarship to study abroad",
//     "study abroad scholarships",
//     "Indian government scholarships for studying abroad",
//     "how can I get scholarship to study abroad",
//   ];

//   // Define the renderScholarships function
//   const renderScholarships = () => {
//     const data = scholarshipData[activeCountry];

//     if (!data)
//       return (
//         <motion.p className="text-gray-600 text-center py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           No scholarships available for this country.
//         </motion.p>
//       );

//     if (activeCountry === "USA") {
//       const filteredData = filterScholarships(data[activeTab]);
//       return (
//         <>
//           <motion.div
//             className="flex gap-4 mb-8 justify-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <motion.button
//               className={`px-6 py-2 rounded-full transition-all ${
//                 activeTab === "Undergraduate" ? "bg-orange-500 text-white shadow-md" : "bg-white text-orange-500"
//               }`}
//               onClick={() => setActiveTab("Undergraduate")}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Undergraduate
//             </motion.button>
//             <motion.button
//               className={`px-6 py-2 rounded-full transition-all ${
//                 activeTab === "Postgraduate" ? "bg-orange-500 text-white shadow-md" : "bg-white text-orange-500"
//               }`}
//               onClick={() => setActiveTab("Postgraduate")}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Postgraduate
//             </motion.button>
//           </motion.div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
//             >
//               {filteredData.length > 0 ? (
//                 filteredData.map((scholarship, index) => (
//                   <ScholarshipCard key={index} data={scholarship} index={index} />
//                 ))
//               ) : (
//                 <motion.p
//                   className="text-gray-600 col-span-3 text-center py-12"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                 >
//                   No scholarships match your search criteria.
//                 </motion.p>
//               )}
//             </motion.div>
//           </AnimatePresence>
//         </>
//       );
//     }

//     if (activeCountry === "Europe") {
//       const filteredData = filterScholarships(data["Country Info"]);
//       return (
//         <AnimatePresence mode="wait">
//           <motion.div
//             key="europe"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
//           >
//             {filteredData.length > 0 ? (
//               filteredData.map((info, index) => <ScholarshipCard key={index} data={info} index={index} />)
//             ) : (
//               <motion.p
//                 className="text-gray-600 col-span-2 text-center py-12"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//               >
//                 No scholarships match your search criteria.
//               </motion.p>
//             )}
//           </motion.div>
//         </AnimatePresence>
//       );
//     }

//     // Handle New Zealand, UK, Dubai, and Australia
//     const filteredData = filterScholarships(data);
//     return (
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeCountry}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.3 }}
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {filteredData.length > 0 ? (
//             filteredData.map((scholarship, index) => <ScholarshipCard key={index} data={scholarship} index={index} />)
//           ) : (
//             <motion.p
//               className="text-gray-600 col-span-3 text-center py-12"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             >
//               No scholarships match your search criteria.
//             </motion.p>
//           )}
//         </motion.div>
//       </AnimatePresence>
//     );
//   };

//   // Loading screen
//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
//           <motion.div
//             animate={{
//               rotate: 360,
//               scale: [1, 1.2, 1],
//             }}
//             transition={{
//               rotate: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
//               scale: { duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
//             }}
//             className="w-16 h-16 mx-auto mb-4"
//           >
//             <Award size={64} className="text-blue-900" />
//           </motion.div>
//           <h2 className="text-xl font-semibold text-blue-900">Loading Scholarships...</h2>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* Add Meta Tags using Helmet */}
//       <Helmet>
//         <title>{metaTitle}</title>
//         <meta name="description" content={metaDescription} />
//         <meta name="keywords" content={focusKeywords.join(", ")} />
//         <meta property="og:title" content={metaTitle} />
//         <meta property="og:description" content={metaDescription} />
//         <meta property="og:type" content="website" />
//         <meta name="twitter:title" content={metaTitle} />
//         <meta name="twitter:description" content={metaDescription} />
//       </Helmet>

//       {/* Your Existing Scholarship Component */}
//       <div className="min-h-screen bg-gray-50 overflow-hidden">
//         {/* Hero Section with Parallax Effect */}
//         <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 to-blue-800 relative">
//           {/* Decorative elements */}
//           <motion.div
//             className="absolute top-0 right-0 w-64 h-64 bg-blue-700 rounded-full opacity-20"
//             style={{
//               x: scrollY * 0.2,
//               y: scrollY * -0.1,
//             }}
//           />
//           <motion.div
//             className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700 rounded-full opacity-10"
//             style={{
//               x: scrollY * -0.1,
//               y: scrollY * 0.05,
//             }}
//           />

//           <div className="container mx-auto px-4 relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="max-w-4xl mx-auto text-center"
//             >
//               <motion.h1
//                 className="text-4xl md:text-5xl font-bold text-white mb-6"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >
//                 Global Scholarship Opportunities
//               </motion.h1>
//               <motion.p
//                 className="text-xl text-blue-100 mb-12"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//               >
//                 Discover scholarships that can help fund your international education journey
//               </motion.p>

//               {/* Search Bar with animation */}
//               <motion.div
//                 className="relative max-w-2xl mx-auto"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.4 }}
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <input
//                   type="text"
//                   placeholder="Search scholarships..."
//                   className="w-full px-6 py-4 rounded-full text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <motion.div
//                   className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400"
//                   whileHover={{ scale: 1.2, color: "#3b82f6" }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <Search className="cursor-pointer" />
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Main Content */}
//         <section className="py-16">
//           <div className="container mx-auto px-4">
//             {/* Country Tabs */}
//             <div className="flex overflow-x-auto pb-4 mb-12 px-4 whitespace-nowrap justify-start md:justify-center">
//               <div className="inline-flex gap-4">
//                 {countries.map((country, index) => (
//                   <CountryTab
//                     key={country}
//                     country={country}
//                     isActive={activeCountry === country}
//                     onClick={() => setActiveCountry(country)}
//                     index={index}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Scholarships Grid */}
//             {renderScholarships()}
//           </div>
//         </section>

//         {/* Terms & Conditions with completely redesigned UI and animations */}
//         <section
//           ref={termsRef}
//           className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden"
//         >
//           {/* Animated background elements */}
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="absolute w-full h-full">
//               <RunningText
//                 text="TERMS & CONDITIONS SCHOLARSHIP ELIGIBILITY REQUIREMENTS APPLICATION DEADLINES"
//                 speed={15}
//                 direction={1}
//               />
//               <RunningText text="ACADEMIC CRITERIA RENEWAL POLICY DOCUMENTATION VERIFICATION" speed={20} direction={-1} />
//               <RunningText
//                 text="INTERNATIONAL STUDENTS FINANCIAL AID TUITION FEES LIVING EXPENSES"
//                 speed={12}
//                 direction={1}
//               />
//             </div>
//           </div>

//           {/* Content with scroll-based animations */}
//           <motion.div className="container mx-auto px-4 relative z-10" style={{ opacity: termsOpacity, y: termsY }}>
//             <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
//               <div className="flex flex-col md:flex-row gap-8">
//                 <div className="md:w-1/3">
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                     className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 h-full"
//                   >
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       whileInView={{ scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.5, delay: 0.2 }}
//                       className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"
//                     >
//                       <Info className="w-8 h-8" />
//                     </motion.div>
//                     <motion.h2
//                       className="text-2xl font-bold mb-4 text-center"
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.5, delay: 0.3 }}
//                     >
//                       Terms & Conditions
//                     </motion.h2>
//                     <motion.p
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.5, delay: 0.4 }}
//                       className="text-blue-100 text-center"
//                     >
//                       Important information about scholarship eligibility and requirements
//                     </motion.p>
//                   </motion.div>
//                 </div>

//                 <div className="md:w-2/3">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {[
//                       "All scholarship amounts are subject to change without prior notice",
//                       "Eligibility criteria must be met to qualify for scholarships",
//                       "Application deadlines vary by institution",
//                       "Additional documentation may be required",
//                       "Scholarships are awarded at the discretion of the institutions",
//                       "Academic requirements and test scores must meet minimum criteria",
//                       "Some scholarships may require separate applications",
//                       "Renewal conditions may apply for multi-year scholarships",
//                     ].map((item, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, x: -20, y: 20 }}
//                         whileInView={{ opacity: 1, x: 0, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
//                         whileHover={{
//                           scale: 1.03,
//                           backgroundColor: "rgba(255,255,255,0.15)",
//                           boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
//                         }}
//                         className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 flex items-start gap-3 transition-all"
//                       >
//                         <div className="mt-1 text-orange-400 flex-shrink-0">
//                           <Check size={16} />
//                         </div>
//                         <p className="text-sm">{item}</p>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         {/* Stats Section with counter animation */}
//         <section
//           className="py-16 relative overflow-hidden bg-cover bg-center bg-no-repeat "
//           style={{ backgroundImage: "url('https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740858176/ab_oiaekm.png')" }} // Change this path to your image
//         >
//           {/* Gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-80"></div>

//           {/* Decorative elements */}
//           <motion.div
//             className="absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full opacity-20"
//             animate={{
//               x: [0, 20, 0],
//               y: [0, 10, 0],
//             }}
//             transition={{
//               duration: 8,
//               repeat: Number.POSITIVE_INFINITY,
//               ease: "easeInOut",
//             }}
//           />

//           <div className="container mx-auto px-4 relative z-10">
//             <div className="grid md:grid-cols-4 gap-8">
//               {[
//                 { label: "Partner Universities", value: 1500, suffix: "+", icon: <BookOpen className="w-8 h-8" /> },
//                 { label: "Countries", value: 34, suffix: "+", icon: <Globe className="w-8 h-8" /> },
//                 { label: "Scholarships Available", value: 1000, suffix: "+", icon: <Award className="w-8 h-8" /> },
//                 { label: "Success Rate", value: 95, suffix: "%", icon: <ChevronRight className="w-8 h-8" /> },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   className="text-center text-white bg-orange-400 bg-opacity-20 rounded-xl p-6"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1, duration: 0.5 }}
//                   whileHover={{
//                     y: -5,
//                     boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//                     backgroundColor: "rgba(255,255,255,0.1)",
//                   }}
//                 >
//                   <motion.div
//                     className="mx-auto mb-4 w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
//                     whileHover={{ rotate: 10, scale: 1.1 }}
//                   >
//                     {stat.icon}
//                   </motion.div>
//                   <motion.div
//                     className="text-4xl font-bold mb-2"
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
//                   >
//                     <CountUp end={stat.value} duration={3} />{stat.suffix}
//                   </motion.div>
//                   <div className="text-lg">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section with background image and running text animation */}
//         <section
//           ref={ctaRef}
//           className="py-24 relative overflow-hidden"
//           style={{
//             backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-blue-800 backdrop-blur-sm"></div>

//           {/* Running text animation layers */}
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="absolute w-full h-full">
//               <RunningText text="SCHOLARSHIP OPPORTUNITY EDUCATION ABROAD STUDY INTERNATIONAL" speed={15} direction={1} />
//               <RunningText text="FUTURE CAREER GLOBAL EXPERIENCE ACADEMIC EXCELLENCE" speed={20} direction={-1} />
//               <RunningText text="FUNDING TUITION WAIVER FINANCIAL AID MERIT BASED" speed={12} direction={1} />
//             </div>
//           </div>

//           {/* Content with scroll-based animations */}
//           <motion.div
//             className="container mx-auto px-4 text-center relative z-10"
//             style={{
//               scale: ctaScale,
//               opacity: ctaOpacity,
//             }}
//           >
//             <div className="max-w-3xl mx-auto">
//               <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 shadow-2xl">
//                 <div className="overflow-hidden mb-6">
//                   <AnimatedText
//                     text={
//                       <h2 className="text-4xl md:text-5xl font-bold text-white">
//                         Ready to Start Your <span className="text-orange-400">Journey?</span>
//                       </h2>
//                     }
//                   />
//                 </div>

//                 <div className="overflow-hidden mb-8">
//                   <AnimatedText
//                     text={
//                       <p className="text-xl text-blue-100">
//                         Contact our experts to learn more about scholarship opportunities
//                       </p>
//                     }
//                   />
//                 </div>

//                 <motion.button
//                   className="bg-orange-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-orange-400 transition-colors"
//                   whileHover={{
//                     scale: 1.05,
//                     boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: 0.4 }}
//                   onClick={handleButtonClick}
//                 >
//                   <span className="flex items-center gap-2">
//                     Get Expert Guidance
//                     <ArrowRight size={18} />
//                   </span>
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         </section>
//       </div>
//     </>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Search, Info, ChevronRight, Award, Globe, BookOpen, ArrowRight, Check } from "lucide-react";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import Helmet for meta tags

// ScholarshipCard component (unchanged)
const ScholarshipCard = ({ data, index }) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    whileHover={{
      y: -8,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      scale: 1.02,
    }}
  >
    <div className="p-6 flex-1 flex flex-col relative">
      <div className="absolute -top-2 -right-2 w-20 h-20 bg-blue-50 rounded-full opacity-30" />
      <h3 className="text-xl font-bold text-blue-900 mb-2 relative">{data.university || data.country}</h3>
      {data.name && (
        <motion.p
          className="text-blue-600 font-semibold mb-4 relative"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1, x: 3 }}
          transition={{ duration: 0.2 }}
        >
          {data.name}
        </motion.p>
      )}
      <div className="space-y-3 flex-1 relative">
        {data.tuitionFee && (
          <motion.div className="flex items-start gap-2" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
            <span className="text-orange-500 font-semibold min-w-24">Tuition Fee:</span>
            <span className="text-gray-600 flex-1">{data.tuitionFee}</span>
          </motion.div>
        )}
        {data.scholarship && (
          <motion.div className="flex items-start gap-2" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
            <span className="text-orange-500 font-semibold min-w-24">Scholarship:</span>
            <span className="text-gray-600 flex-1">{data.scholarship}</span>
          </motion.div>
        )}
        {data.additionalInfo && (
          <motion.div className="flex items-start gap-2" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
            <span className="text-orange-500 font-semibold min-w-24">Additional Info:</span>
            <span className="text-gray-600 flex-1">{data.additionalInfo}</span>
          </motion.div>
        )}
        {data.programs && (
          <motion.div className="flex items-start gap-2" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
            <span className="text-orange-500 font-semibold min-w-24">Programs:</span>
            <span className="text-gray-600 flex-1">{data.programs}</span>
          </motion.div>
        )}
        {data.requirements && (
          <motion.div className="flex items-start gap-2" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
            <span className="text-orange-500 font-semibold min-w-24">Requirements:</span>
            <span className="text-gray-600 flex-1">{data.requirements}</span>
          </motion.div>
        )}
        {data.workVisa && (
          <motion.div className="flex items-start gap-2" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
            <span className="text-orange-500 font-semibold min-w-24">Work Visa:</span>
            <span className="text-gray-600 flex-1">{data.workVisa}</span>
          </motion.div>
        )}
        {data.livingExpenses && (
          <motion.div className="flex items-start gap-2" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
            <span className="text-orange-500 font-semibold min-w-24">Living Expenses:</span>
            <span className="text-gray-600 flex-1">{data.livingExpenses}</span>
          </motion.div>
        )}
        {data.notes && (
          <motion.div className="flex items-start gap-2" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
            <span className="text-orange-500 font-semibold min-w-24">Notes:</span>
            <span className="text-gray-600 flex-1">{data.notes}</span>
          </motion.div>
        )}
      </div>
    </div>
    <div className="h-2 bg-gradient-to-r from-blue-500 to-orange-500" />
  </motion.div>
);

// CountryTab component (unchanged)
const CountryTab = ({ country, isActive, onClick, index }) => (
  <motion.button
    onClick={onClick}
    className={`px-6 py-3 rounded-full transition-all flex items-center gap-2 text-sm md:text-base ${
      isActive ? "bg-blue-900 text-white shadow-lg" : "bg-white text-blue-900 hover:bg-blue-50"
    }`}
    whileHover={{
      scale: 1.05,
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.3 }}
  >
    {country}
    {isActive && (
      <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
        <ChevronRight size={16} />
      </motion.div>
    )}
  </motion.button>
);

// Animated text for CTA section
const AnimatedText = ({ text }) => {
  return (
    <div className="overflow-hidden py-2">
      <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        {text}
      </motion.div>
    </div>
  );
};

// Running text animation component
const RunningText = ({ text, speed = 20, direction = 1 }) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [textWidth, setTextWidth] = useState(0);
  const [duplicates, setDuplicates] = useState(1);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);

      // Create a temporary element to measure text width
      const tempElement = document.createElement("div");
      tempElement.style.position = "absolute";
      tempElement.style.visibility = "hidden";
      tempElement.style.whiteSpace = "nowrap";
      tempElement.style.fontSize = "2rem";
      tempElement.style.fontWeight = "bold";
      tempElement.innerText = text;
      document.body.appendChild(tempElement);

      const width = tempElement.offsetWidth;
      setTextWidth(width);

      // Calculate how many duplicates we need to fill the container
      const needed = Math.ceil((containerWidth * 2) / width) + 1;
      setDuplicates(needed);

      document.body.removeChild(tempElement);
    }
  }, [text, containerWidth]); // Removed containerRef from dependencies

  const distance = textWidth * duplicates;
  const duration = distance / speed;

  return (
    <div
      ref={containerRef}
      className="overflow-hidden whitespace-nowrap text-white text-opacity-10 text-2xl md:text-4xl font-bold"
    >
      <motion.div
        initial={{ x: direction > 0 ? 0 : -distance }}
        animate={{ x: direction > 0 ? -distance : 0 }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "linear",
        }}
        className="inline-block"
      >
        {Array(duplicates)
          .fill(text)
          .map((t, i) => (
            <span key={i} className="mx-8">
              {t}
            </span>
          ))}
      </motion.div>
    </div>
  );
};

const scholarshipData = {
  USA: {
    Undergraduate: [
      {
        university: "The University Of Alabama, Tuscaloosa",
        name: "International Excellence Scholarship",
        tuitionFee: "$33,400",
        scholarship: "$30,500",
        additionalInfo: "91% scholarship on tuition fees",
      },
      {
        university: "Texas State University",
        name: "Academic Scholarship",
        tuitionFee: "$10,000",
        scholarship: "$8,000",
        additionalInfo: "80% scholarship on tuition fees",
      },
      {
        university: "University Of New Mexico",
        name: "International Amigo Scholarship",
        tuitionFee: "$36,497",
        scholarship: "$24,658",
        additionalInfo: "68% scholarship on tuition fees",
      },
      {
        university: "Depaul University",
        name: "Merit Scholarship",
        tuitionFee: "$45,195",
        scholarship: "$29,000",
        additionalInfo: "64% scholarship on tuition fees",
      },
      {
        university: "University of South Florida",
        tuitionFee: "$17,324",
        scholarship: "$11,000",
        additionalInfo: "63% scholarship on tuition fees",
      },
      {
        university: "University of St. Thomas",
        tuitionFee: "$52,850",
        scholarship: "$34,333",
        additionalInfo: "65% scholarship on tuition fees",
      },
      {
        university: "University Of Cincinnati",
        tuitionFee: "$30,010",
        scholarship: "$17,500",
        additionalInfo: "58% scholarship on tuition fees",
      },
      {
        university: "Rider University",
        tuitionFee: "$37,700",
        scholarship: "$22,000",
        additionalInfo: "58% scholarship on tuition fees",
      },
      {
        university: "New York Institute Of Technology",
        tuitionFee: "$47,060",
        scholarship: "$27,000",
        additionalInfo: "57% scholarship on tuition fees",
      },
      {
        university: "University Of Arizona",
        tuitionFee: "$41,474",
        scholarship: "$23,000",
        additionalInfo: "55% scholarship on tuition fees",
      },
      {
        university: "George Mason University",
        tuitionFee: "$38,279",
        scholarship: "$19,500",
        additionalInfo: "51% scholarship on tuition fees",
      },
      {
        university: "The State University Of New York, Albany (Suny Albany)",
        tuitionFee: "$31,896",
        scholarship: "$15,000",
        additionalInfo: "47% scholarship on tuition fees",
      },
      {
        university: "University Of Massachusetts Dartmouth (UMass Dartmouth)",
        tuitionFee: "$29,661",
        scholarship: "$13,500",
        additionalInfo: "46% scholarship on tuition fees",
      },
      {
        university: "Arizona State University",
        tuitionFee: "$27,139",
        scholarship: "$12,500",
        additionalInfo: "46% scholarship on tuition fees",
      },
      {
        university: "Southeast Missouri State University",
        tuitionFee: "$16,395",
        scholarship: "$6,900",
        additionalInfo: "42% scholarship on tuition fees",
      },
      {
        university: "Colorado State University",
        tuitionFee: "$43,839",
        scholarship: "$18,000",
        additionalInfo: "41% scholarship on tuition fees",
      },
      {
        university: "University Of Bridgeport",
        tuitionFee: "$19,970",
        scholarship: "$8,133",
        additionalInfo: "41% scholarship on tuition fees",
      },
      {
        university: "University of California, Riverside - College of Business",
        tuitionFee: "$73,934",
        scholarship: "$30,000",
        additionalInfo: "41% scholarship on tuition fees",
      },
      {
        university: "Midwestern State University",
        tuitionFee: "$15,426",
        scholarship: "$6,012",
        additionalInfo: "39% scholarship on tuition fees",
      },
      {
        university: "Savannah College Of Art And Design - Savannah",
        tuitionFee: "$42,620",
        scholarship: "$16,500",
        additionalInfo: "39% scholarship on tuition fees",
      },
      {
        university: "Missouri University Of Science And Technology",
        tuitionFee: "$26,000",
        scholarship: "$10,000",
        additionalInfo: "38% scholarship on tuition fees",
      },
      {
        university: "Wright State University",
        tuitionFee: "$14,000",
        scholarship: "$5,000",
        additionalInfo: "36% scholarship on tuition fees",
      },
      {
        university: "Missouri State University",
        tuitionFee: "$14,628",
        scholarship: "$5,090",
        additionalInfo: "35% scholarship on tuition fees",
      },
      {
        university: "Worcester Polytechnic Institute",
        tuitionFee: "$28,980",
        scholarship: "$9,660",
        additionalInfo: "33% scholarship on tuition fees",
      },
      {
        university: "Northern Arizona University",
        tuitionFee: "$33,924",
        scholarship: "$11,000",
        additionalInfo: "32% scholarship on tuition fees",
      },
    ],
    Postgraduate: [
      {
        university: "Yeshiva University",
        name: "Graduate Excellence Award",
        tuitionFee: "$21,522",
        scholarship: "$17,084",
        additionalInfo: "79% scholarship on tuition fees",
      },
      {
        university: "University Of Cincinnati",
        name: "Graduate Scholarship",
        tuitionFee: "$27,902",
        scholarship: "$21,598",
        additionalInfo: "77% scholarship on tuition fees",
      },
      {
        university: "Indiana University Of Pennsylvania",
        name: "International Merit Scholarship",
        tuitionFee: "$18,703",
        scholarship: "$12,520",
        additionalInfo: "67% scholarship on tuition fees",
      },
      {
        university: "University Of New Mexico",
        tuitionFee: "$23,887",
        scholarship: "$15,097",
        additionalInfo: "63% scholarship on tuition fees",
      },
      {
        university: "New York Institute Of Technology",
        tuitionFee: "$44,060",
        scholarship: "$24,000",
        additionalInfo: "54% scholarship on tuition fees",
      },
      {
        university: "Depaul University",
        tuitionFee: "$43,665",
        scholarship: "$23,000",
        additionalInfo: "53% scholarship on tuition fees",
      },
      {
        university: "Auburn University At Montgomery",
        tuitionFee: "$19,143",
        scholarship: "$9,660",
        additionalInfo: "50% scholarship on tuition fees",
      },
      {
        university: "University Of New Haven",
        tuitionFee: "$19,656",
        scholarship: "$9,828",
        additionalInfo: "50% scholarship on tuition fees",
      },
      {
        university: "The Catholic University Of America",
        tuitionFee: "$37,270",
        scholarship: "$18,500",
        additionalInfo: "50% scholarship on tuition fees",
      },
    ],
  },
  Europe: {
    "Country Info": [
      {
        country: "Ireland",
        programs: "IT, Pharma, Business, Finance",
        requirements: "55%-65%",
        workVisa: "24 months",
        tuitionFee: "€8,000 – 20,000",
        livingExpenses: "€12,000 per annum",
      },
      {
        country: "Germany",
        programs: "Engineering, IT, Business",
        requirements: "60%",
        workVisa: "18 months",
        tuitionFee: "€8,000 – 12,000",
        livingExpenses: "€11,904 per annum",
      },
      {
        country: "France",
        programs: "Business Management, Tourism",
        requirements: "55%",
        workVisa: "24 months",
        tuitionFee: "€7,000 – 15,000",
        livingExpenses: "SEK 123,768 per annum",
      },
      {
        country: "Netherlands",
        programs: "Engineering, Hospitality Management",
        requirements: "65%",
        workVisa: "12 months",
        tuitionFee: "SEK 150,000",
        livingExpenses: "€15,000 per annum",
      },
      {
        country: "Sweden",
        programs: "Engineering, Renewable Energy",
        requirements: "60%",
        workVisa: "12 months",
        tuitionFee: "€8,000 – 12,000",
        livingExpenses: "SEK 12,000 per annum",
      },
      {
        country: "Finland",
        programs: "Data Science, Electrical Engineering",
        requirements: "60%",
        workVisa: "24 months",
        tuitionFee: "€7,000 – 12,000",
        livingExpenses: "€10,500 per annum",
      },
    ],
  },
  NewZealand: [
    {
      university: "Education New Zealand",
      name: "New Zealand Excellence Awards (NZEA)",
      scholarship: " UG: NZ$24,000 PG: NZ$10,000 each; UG: NZ 20,000 towards first year tuition fee",
    },
    {
      university: "University of Auckland",
      name: "India High Achievers Scholarship",
      scholarship: "Up to $20,000 for postgraduate or undergraduate study",
    },
    {
      university: "University of Canterbury",
      name: "UC Master's Scholarship",
      scholarship: "NZ$14,000",
    },
    {
      university: "Lincoln University",
      name: "180-credit Taught Master Merit Scholarship",
      scholarship: "NZ$7,000 - 10,000",
    },
    {
      university: "Lincoln University",
      name: "Lincoln University Undergraduate Vice-Chancellor's",
      scholarship: "NZ$5,000",
    },
    {
      university: "Victoria University of Wellington",
      name: "Tongarewa Scholarship",
      scholarship: "NZ$5,000 - NZ$10,000",
    },
    {
      university: "Victoria University of Wellington",
      name: "Vice Chancellor's International Excellence Scholarship",
      scholarship: "NZ$10,000",
    },
    {
      university: "University of Waikato",
      name: "Vice Chancellor's International Excellence Scholarship for India",
      scholarship: "Up to NZ$15,000 towards tuition fees",
    },
    {
      university: "University of Waikato",
      name: "Vice Chancellor's Scholarships",
      scholarship: "Up to NZ$10,000 towards tuition fees for full time study.",
    },
    {
      university: "University of Otago",
      name: "Vice Chancellor's International Postgraduate Scholarship for India",
      scholarship: "Up to NZ$10,000 towards tuition fees for full time study.",
    },
    {
      university: "Auckland University of Technology (AUT)",
      name: "AUT International Scholarship  - South Asia",
      scholarship: "NZ$5,000 contribution towards fees",
    },
    {
      university: "Auckland University of Technology (AUT)",
      name: "AUT International Faculty of Health and Environmental Sciences",
      scholarship: "NZ$8,000 contribution towards fees",
    },
    {
      university: "Auckland University of Technology (AUT)",
      name: "AUT International Scholarship Faculty of Design and Creative Technologies",
      scholarship: "NZ$5,000 contribution towards fees",
    },
    {
      university: "Auckland University of Technology (AUT)",
      name: "AUT International Scholarship Faculty of Culture and Society",
      scholarship: "The scholarship consists of a NZ$7,000 contribution towards fees",
    },
  ],
  UK: [
    {
      university: "Newcastle University",
      name: "Vice-Chancellor's International Scholarships",
      scholarship: "£4000",
      notes: "Application Based",
    },
    {
      university: "Newcastle University",
      name: "Vice-Chancellor's Excellence Scholarships",
      scholarship: "50% (57 Nos.) & 100% (2 Nos.)",
      notes: "Application Based",
    },
    {
      university: "Royal Holloway University of London",
      name: "Royal Holloway India Postgraduate Scholarship",
      scholarship: "£6,000",
      notes: "Automatic",
    },
    {
      university: "University of Aberdeen",
      name: "Aberdeen Global Scholarship",
      scholarship: "£8,000",
      notes: "Automatic",
    },
    {
      university: "University of East Anglia",
      name: "Vice Chancellor's International Excellence Scholarship",
      scholarship: "£7,000",
      notes: "Application Based",
    },
    {
      university: "University of East Anglia",
      name: "Vice Chancellor's International Excellence Scholarship",
      scholarship: "£7,000",
      notes: "Application Based",
    },
    {
      university: "Brunel University of London",
      name: "Vice Chancellor's PGT Excellence Award ",
      scholarship: "£6,000",
      notes: "Application Based",
    },
    {
      university: "Brunel University of London",
      name: "The International Bursary PGT",
      scholarship: "£2,000",
      notes: "Automatic for 2:2 degree holders",
    },
    {
      university: "University of Strathclyde",
      name: "Various Scholarships",
      scholarship: "£5000 - £12000 based on course, £9000 - £17000 for MBA",
      notes: "Some Automatic, others require Application",
    },
    {
      university: "Newcastle University",
      name: "Vice-Chancellor's International Scholarships",
      scholarship: "£7000",
      notes: "Automatic",
    },
    {
      university: "Newcastle University",
      name: "Vice-Chancellor's Global Scholarships",
      scholarship: "£4000",
      notes: "Application Based",
    },
    {
      university: "Newcastle University",
      name: "Vice-Chancellor's Excellence Scholarships",
      scholarship: "50% (57 Nos.) & 100% (2 Nos.)",
      notes: "Application Based",
    },
  ],
  Dubai: [
    {
      university: "University of Birmingham Dubai",
      name: "Merit-Based Scholarship",
      scholarship: "Up to 40%",
      additionalInfo:
        "Based on Indian Higher Secondary Certificate Percentage. Additional 10% merit-based scholarship available on top of flat 30% for eligible students. Valid until 30th June for Sep 2025 intake.",
    },
    {
      university: "Murdoch University Dubai",
      name: "Academic Excellence Scholarship",
      scholarship: "15% - 40%",
      additionalInfo: `
          Indian Higher Secondary Certificate (State Boards):
          • 15%: 70% - 79%
          • 25%: 80% - 84%
          • 35%: 85% - 89%
          • 40%: ≥ 90%
        `,
    },
  ],
  Australia: [
    {
      university: "The University of Adelaide",
      scholarship: "15% - 30% of tuition fees",
    },
    {
      university: "University of Wollongong Australia",
      scholarship: "20% - 30% of tuition fees",
    },
    {
      university: "The University of Newcastle Australia",
      scholarship: "A$12,000",
    },
    {
      university: "Macquarie University Sydney Australia",
      scholarship: "A$10,000",
    },
    {
      university: "Deakin University",
      scholarship: "20% - 25% of tuition fees",
    },
    {
      university: "UTS (University of Technology Sydney)",
      scholarship: "20% - 25% of tuition fees",
    },
  ],
}

// New CountriesCoveredSection component
const CountriesCoveredSection = () => {
  // const countriesCovered = [
  //   "Italy", "Denmark", "Austria", "Russia", "Spain", "Hungary", "Lithuania", "Poland", "Georgia", "Monaco",
  //   "Ireland", "Germany", "France", "Sweden", "Netherlands", "Finland", "Belgium", "Russia"
  // ];

  const countriesCovered = [
    { name: "Italy", flag: "🇮🇹" },
    { name: "Denmark", flag: "🇩🇰" },
    { name: "Austria", flag: "🇦🇹" },
    { name: "Russia", flag: "🇷🇺" },
    { name: "Spain", flag: "🇪🇸" },
    { name: "Hungary", flag: "🇭🇺" },
    { name: "Lithuania", flag: "🇱🇹" },
    { name: "Poland", flag: "🇵🇱" },
    { name: "Georgia", flag: "🇬🇪" },
    { name: "Monaco", flag: "🇲🇨" },
    { name: "Ireland", flag: "🇮🇪" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "France", flag: "🇫🇷" },
    { name: "Sweden", flag: "🇸🇪" },
    { name: "Netherlands", flag: "🇳🇱" },
    { name: "Finland", flag: "🇫🇮" },
    { name: "Belgium", flag: "🇧🇪" },
  ];


  // const generalInformation = [
  //   { country: "Ireland", livingExpenses: "€12,000", tuitionFee: "€8,000 – 20,000" },
  //   { country: "Germany", livingExpenses: "€11,904", tuitionFee: "€8,000 – 12,000" },
  //   { country: "France", livingExpenses: "SEK 123,768", tuitionFee: "€7,000 – 15,000" },
  //   { country: "Netherlands", livingExpenses: "€15,000", tuitionFee: "SEK 150,000" },
  //   { country: "Sweden", livingExpenses: "SEK 12,000", tuitionFee: "€8,000 – 12,000" },
  //   { country: "Finland", livingExpenses: "€10,500", tuitionFee: "€7,000 – 12,000" }
  // ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Countries Covered By Rakepto</h2>
          <p className="text-gray-600">Explore the countries where Rakepto offers guidance and support for your study abroad journey.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12"
        >
          {countriesCovered.map((country, index) => (
            <div key={index} className="bg-orange-200 p-4 rounded-lg shadow-sm text-center">
             <span className="text-2xl mb-2">{country.flag}</span>
             <span className="text-blue-900 font-semibold">{country.name}</span>
            </div>
          ))}
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-6">General Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalInformation.map((info, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">{info.country}</h4>
                <p className="text-gray-600"><span className="font-semibold">Living Expenses:</span> {info.livingExpenses}</p>
                <p className="text-gray-600"><span className="font-semibold">Tuition Fee:</span> {info.tuitionFee}</p>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

// Rest of the Scholarship component (unchanged)
export default function Scholarship() {
  const [activeCountry, setActiveCountry] = useState("USA");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Undergraduate");
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  const termsRef = useRef(null);
  const ctaRef = useRef(null);

  const { scrollYProgress: termsScrollProgress } = useScroll({
    target: termsRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: ctaScrollProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });

  const termsOpacity = useTransform(termsScrollProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const termsY = useTransform(termsScrollProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  const ctaScale = useTransform(ctaScrollProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const ctaOpacity = useTransform(ctaScrollProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const countries = ["USA", "NewZealand", "Europe", "UK", "Australia", "Dubai"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    navigate("/#contact");
  };

  const filterScholarships = (data) => {
    if (!data) return [];
    return data.filter((item) => {
      const searchText = searchTerm.toLowerCase();
      return (
        item.university?.toLowerCase().includes(searchText) ||
        item.country?.toLowerCase().includes(searchText) ||
        item.name?.toLowerCase().includes(searchText)
      );
    });
  };

  const metaTitle = "Study Abroad Scholarships - Fund Your International Education";
  const metaDescription = "Discover study abroad scholarships and financial aid opportunities for international students. Find scholarships to study in the UK, USA, and more.";
  const focusKeywords = [
    "how to get scholarship to study abroad",
    "study abroad scholarships",
    "Indian government scholarships for studying abroad",
    "how can I get scholarship to study abroad",
  ];

  const renderScholarships = () => {
    const data = scholarshipData[activeCountry];

    if (!data)
      return (
        <motion.p className="text-gray-600 text-center py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          No scholarships available for this country.
        </motion.p>
      );

    if (activeCountry === "USA") {
      const filteredData = filterScholarships(data[activeTab]);
      return (
        <>
          <motion.div
            className="flex gap-4 mb-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === "Undergraduate" ? "bg-orange-500 text-white shadow-md" : "bg-white text-orange-500"
              }`}
              onClick={() => setActiveTab("Undergraduate")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Undergraduate
            </motion.button>
            <motion.button
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === "Postgraduate" ? "bg-orange-500 text-white shadow-md" : "bg-white text-orange-500"
              }`}
              onClick={() => setActiveTab("Postgraduate")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Postgraduate
            </motion.button>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredData.length > 0 ? (
                filteredData.map((scholarship, index) => (
                  <ScholarshipCard key={index} data={scholarship} index={index} />
                ))
              ) : (
                <motion.p
                  className="text-gray-600 col-span-3 text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  No scholarships match your search criteria.
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        </>
      );
    }

    if (activeCountry === "Europe") {
      const filteredData = filterScholarships(data["Country Info"]);
      return (
        <AnimatePresence mode="wait">
          <motion.div
            key="europe"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {filteredData.length > 0 ? (
              filteredData.map((info, index) => <ScholarshipCard key={index} data={info} index={index} />)
            ) : (
              <motion.p
                className="text-gray-600 col-span-2 text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                No scholarships match your search criteria.
              </motion.p>
            )}
          </motion.div>
        </AnimatePresence>
      );
    }

    const filteredData = filterScholarships(data);
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCountry}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredData.length > 0 ? (
            filteredData.map((scholarship, index) => <ScholarshipCard key={index} data={scholarship} index={index} />)
          ) : (
            <motion.p
              className="text-gray-600 col-span-3 text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No scholarships match your search criteria.
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
            className="w-16 h-16 mx-auto mb-4"
          >
            <Award size={64} className="text-blue-900" />
          </motion.div>
          <h2 className="text-xl font-semibold text-blue-900">Loading Scholarships...</h2>
        </motion.div>
      </div>
    );
  }

  return (
    <>
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

      <div className="min-h-screen bg-gray-50 overflow-hidden">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 to-blue-800 relative">
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-blue-700 rounded-full opacity-20"
            style={{
              x: scrollY * 0.2,
              y: scrollY * -0.1,
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700 rounded-full opacity-10"
            style={{
              x: scrollY * -0.1,
              y: scrollY * 0.05,
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Global Scholarship Opportunities
              </motion.h1>
              <motion.p
                className="text-xl text-blue-100 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Discover scholarships that can help fund your international education journey
              </motion.p>

              <motion.div
                className="relative max-w-2xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <input
                  type="text"
                  placeholder="Search scholarships..."
                  className="w-full px-6 py-4 rounded-full text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <motion.div
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400"
                  whileHover={{ scale: 1.2, color: "#3b82f6" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Search className="cursor-pointer" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto pb-4 mb-12 px-4 whitespace-nowrap justify-start md:justify-center">
              <div className="inline-flex gap-4">
                {countries.map((country, index) => (
                  <CountryTab
                    key={country}
                    country={country}
                    isActive={activeCountry === country}
                    onClick={() => setActiveCountry(country)}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {renderScholarships()}
          </div>
        </section>

        {/* New Countries Covered Section */}
        <CountriesCoveredSection />

        {/* Terms & Conditions Section */}
        <section
          ref={termsRef}
          className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-full h-full">
              <RunningText
                text="TERMS & CONDITIONS SCHOLARSHIP ELIGIBILITY REQUIREMENTS APPLICATION DEADLINES"
                speed={15}
                direction={1}
              />
              <RunningText text="ACADEMIC CRITERIA RENEWAL POLICY DOCUMENTATION VERIFICATION" speed={20} direction={-1} />
              <RunningText
                text="INTERNATIONAL STUDENTS FINANCIAL AID TUITION FEES LIVING EXPENSES"
                speed={12}
                direction={1}
              />
            </div>
          </div>

          <motion.div className="container mx-auto px-4 relative z-10" style={{ opacity: termsOpacity, y: termsY }}>
            <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 h-full"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Info className="w-8 h-8" />
                    </motion.div>
                    <motion.h2
                      className="text-2xl font-bold mb-4 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      Terms & Conditions
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-blue-100 text-center"
                    >
                      Important information about scholarship eligibility and requirements
                    </motion.p>
                  </motion.div>
                </div>

                <div className="md:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "All scholarship amounts are subject to change without prior notice",
                      "Eligibility criteria must be met to qualify for scholarships",
                      "Application deadlines vary by institution",
                      "Additional documentation may be required",
                      "Scholarships are awarded at the discretion of the institutions",
                      "Academic requirements and test scores must meet minimum criteria",
                      "Some scholarships may require separate applications",
                      "Renewal conditions may apply for multi-year scholarships",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        whileHover={{
                          scale: 1.03,
                          backgroundColor: "rgba(255,255,255,0.15)",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                        }}
                        className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 flex items-start gap-3 transition-all"
                      >
                        <div className="mt-1 text-orange-400 flex-shrink-0">
                          <Check size={16} />
                        </div>
                        <p className="text-sm">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section
          className="py-16 relative overflow-hidden bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: "url('https://res.cloudinary.com/dsj3kcbf4/image/upload/v1740858176/ab_oiaekm.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-80"></div>

          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full opacity-20"
            animate={{
              x: [0, 20, 0],
              y: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: "Partner Universities", value: 1500, suffix: "+", icon: <BookOpen className="w-8 h-8" /> },
                { label: "Countries", value: 34, suffix: "+", icon: <Globe className="w-8 h-8" /> },
                { label: "Scholarships Available", value: 1000, suffix: "+", icon: <Award className="w-8 h-8" /> },
                { label: "Success Rate", value: 95, suffix: "%", icon: <ChevronRight className="w-8 h-8" /> },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center text-white bg-orange-400 bg-opacity-20 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <motion.div
                    className="mx-auto mb-4 w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    className="text-4xl font-bold mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <CountUp end={stat.value} duration={3} />{stat.suffix}
                  </motion.div>
                  <div className="text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={ctaRef}
          className="py-24 relative overflow-hidden"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-blue-800 backdrop-blur-sm"></div>

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-full h-full">
              <RunningText text="SCHOLARSHIP OPPORTUNITY EDUCATION ABROAD STUDY INTERNATIONAL" speed={15} direction={1} />
              <RunningText text="FUTURE CAREER GLOBAL EXPERIENCE ACADEMIC EXCELLENCE" speed={20} direction={-1} />
              <RunningText text="FUNDING TUITION WAIVER FINANCIAL AID MERIT BASED" speed={12} direction={1} />
            </div>
          </div>

          <motion.div
            className="container mx-auto px-4 text-center relative z-10"
            style={{
              scale: ctaScale,
              opacity: ctaOpacity,
            }}
          >
            <div className="max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 shadow-2xl">
                <div className="overflow-hidden mb-6">
                  <AnimatedText
                    text={
                      <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Ready to Start Your <span className="text-orange-400">Journey?</span>
                      </h2>
                    }
                  />
                </div>

                <div className="overflow-hidden mb-8">
                  <AnimatedText
                    text={
                      <p className="text-xl text-blue-100">
                        Contact our experts to learn more about scholarship opportunities
                      </p>
                    }
                  />
                </div>

                <motion.button
                  className="bg-orange-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-orange-400 transition-colors"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  onClick={handleButtonClick}
                >
                  <span className="flex items-center gap-2">
                    Get Expert Guidance
                    <ArrowRight size={18} />
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}