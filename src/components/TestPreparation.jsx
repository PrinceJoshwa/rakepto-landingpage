// "use client"
// import { motion } from "framer-motion"
// import { Book, Clock, DollarSign } from "lucide-react"

// const TestPreparation = () => {
//   const courses = [
//     {
//       name: "GRE",
//       details: "50 classes, 1.5 hours each",
//       duration: "Three months of focused preparation",
//       price: 15104,
//     },
//     {
//       name: "GMAT",
//       details: "65 classes, 1.5 hours each",
//       duration: "A comprehensive 3.5 month course",
//       price: 15104,
//     },
//     {
//       name: "SAT",
//       details: "34 classes, 1.5 hours each",
//       duration: "1.5 months dedicated to mastering the SAT",
//       price: 15104,
//     },
//     {
//       name: "IELTS",
//       details: "27 classes",
//       duration: "Flexible schedule",
//       price: 2000,
//     },
//     {
//       name: "TOEFL",
//       details: "15 classes",
//       duration: "Flexible schedule",
//       price: 2000,
//     },
//     {
//       name: "PTE",
//       details: "20 classes",
//       duration: "Flexible schedule",
//       price: 2000,
//     },
//     {
//       name: "Duolingo",
//       details: "12 classes",
//       duration: "Flexible schedule",
//       price: 2000,
//     },
//     {
//       name: "German A1",
//       details: "45 classes",
//       duration: "Comprehensive language course",
//       price: 8000,
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-blue-900 text-white py-16">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-4">Test Preparation Courses</h1>
//           <p className="text-xl">Unlock Your Potential with Rakepto's Expert Guidance</p>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-12">
//         <section className="mb-12">
//           <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Courses</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {courses.map((course, index) => (
//               <motion.div
//                 key={course.name}
//                 className="bg-white rounded-lg shadow-md overflow-hidden"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <div className="bg-orange-500 text-white py-4 px-6">
//                   <h3 className="text-2xl font-bold">{course.name}</h3>
//                 </div>
//                 <div className="p-6">
//                   <p className="flex items-center mb-2">
//                     <Book className="mr-2" size={18} />
//                     {course.details}
//                   </p>
//                   <p className="flex items-center mb-2">
//                     <Clock className="mr-2" size={18} />
//                     {course.duration}
//                   </p>
//                   <p className="flex items-center text-lg font-semibold text-blue-900">
//                     <DollarSign className="mr-2" size={18} />
//                     Rs {course.price}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         <section className="bg-blue-900 text-white rounded-lg p-8">
//           <h2 className="text-3xl font-bold mb-6">Why Choose Rakepto?</h2>
//           <ul className="list-disc list-inside space-y-2">
//             <li>Experienced and dedicated instructors</li>
//             <li>Personalized mentoring and guidance</li>
//             <li>Comprehensive curriculum covering all test sections</li>
//             <li>Proven strategies for achieving exceptional scores</li>
//             <li>Affordable courses with unbeatable value</li>
//           </ul>
//         </section>
//       </main>

//       <footer className="bg-gray-200 py-8">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-blue-900">
//             Ready to start your journey? Contact us today to enroll in our test preparation courses!
//           </p>
//           <button className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition-colors">
//             Contact Us
//           </button>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default TestPreparation


// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Book, Clock, DollarSign, ChevronDown, CheckCircle } from "lucide-react"

// const TestPreparationPage = () => {
//   const [selectedCourse, setSelectedCourse] = useState(null)

//   const courses = [
//     {
//       name: "GRE/GMAT",
//       icon: "🎓",
//       details: [
//         { test: "GRE", classes: 50, duration: "3 months", price: 15104 },
//         { test: "GMAT", classes: 65, duration: "3.5 months", price: 15104 },
//       ],
//       description:
//         "Master the skills and strategies you need to excel in GRE or GMAT. Our expert instructors provide personalized support to help you achieve your target score.",
//     },
//     {
//       name: "SAT",
//       icon: "📚",
//       details: [{ test: "SAT", classes: 34, duration: "1.5 months", price: 15104 }],
//       description:
//         "Unlock your potential with our targeted SAT course. We provide comprehensive coverage of all sections to maximize your score.",
//     },
//     {
//       name: "English Proficiency",
//       icon: "🌐",
//       details: [
//         { test: "IELTS", classes: 27, duration: "Flexible", price: 2000 },
//         { test: "TOEFL", classes: 15, duration: "Flexible", price: 2000 },
//         { test: "PTE", classes: 20, duration: "Flexible", price: 2000 },
//         { test: "Duolingo", classes: 12, duration: "Flexible", price: 2000 },
//       ],
//       description:
//         "Achieve your desired score in IELTS, TOEFL, PTE, or Duolingo. Our specialized courses are tailored to each test format.",
//     },
//     {
//       name: "German A1",
//       icon: "🇩🇪",
//       details: [{ test: "German A1", classes: 45, duration: "Comprehensive", price: 8000 }],
//       description:
//         "Begin your German language journey with our A1 course. Gain essential language skills and cultural insights for studying in Germany.",
//     },
//   ]

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//       },
//     },
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-orange-50">
//       <header className="bg-blue-900 text-white py-20">
//         <div className="container mx-auto px-4 text-center">
//           <motion.h1
//             className="text-5xl font-bold mb-4"
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             Test Preparation Courses
//           </motion.h1>
//           <motion.p
//             className="text-xl"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Unlock Your Potential with Rakepto's Expert Guidance
//           </motion.p>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-16">
//         <motion.section className="mb-16" variants={containerVariants} initial="hidden" animate="visible">
//           <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Courses</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {courses.map((course) => (
//               <motion.div
//                 key={course.name}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
//                 variants={itemVariants}
//               >
//                 <div
//                   className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 px-6 cursor-pointer"
//                   onClick={() => setSelectedCourse(selectedCourse === course.name ? null : course.name)}
//                 >
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center">
//                       <span className="text-4xl mr-4">{course.icon}</span>
//                       <h3 className="text-2xl font-bold">{course.name}</h3>
//                     </div>
//                     <ChevronDown
//                       className={`transition-transform duration-300 ${selectedCourse === course.name ? "transform rotate-180" : ""}`}
//                       size={24}
//                     />
//                   </div>
//                 </div>
//                 <AnimatePresence>
//                   {selectedCourse === course.name && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="p-6"
//                     >
//                       <p className="text-gray-600 mb-4">{course.description}</p>
//                       {course.details.map((detail) => (
//                         <div key={detail.test} className="mb-4 last:mb-0">
//                           <h4 className="font-semibold text-lg text-blue-800">{detail.test}</h4>
//                           <p className="flex items-center text-gray-600 mt-2">
//                             <Book className="mr-2" size={18} />
//                             {detail.classes} classes
//                           </p>
//                           <p className="flex items-center text-gray-600">
//                             <Clock className="mr-2" size={18} />
//                             {detail.duration}
//                           </p>
//                           <p className="flex items-center text-lg font-semibold text-orange-600 mt-2">
//                             <DollarSign className="mr-2" size={18} />
//                             Rs {detail.price}
//                           </p>
//                         </div>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         <motion.section
//           className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-8 shadow-lg"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-3xl font-bold mb-6">Why Choose Rakepto?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {[
//               "Experienced and dedicated instructors",
//               "Personalized mentoring and guidance",
//               "Comprehensive curriculum covering all test sections",
//               "Proven strategies for achieving exceptional scores",
//               "Affordable courses with unbeatable value",
//               "Flexible scheduling options",
//             ].map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 className="flex items-start"
//                 initial={{ x: -20, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <CheckCircle className="mr-2 flex-shrink-0" size={24} />
//                 <p>{benefit}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>
//       </main>

//       <footer className="bg-blue-900 text-white py-12">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-xl mb-6">
//             Ready to start your journey? Contact us today to enroll in our test preparation courses!
//           </p>
//           <motion.button
//             className="bg-orange-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Contact Us
//           </motion.button>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default TestPreparationPage

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Book, GraduationCap, Globe, ArrowRight, CheckCircle } from "lucide-react"

const examTypes = [
  {
    title: "GRE/GMAT",
    description: "50 classes, 1.5 hours each. Three months of focused preparation.",
    price: "15,104",
    features: ["Comprehensive prep", "Expert instructors", "Practice tests", "Study materials"],
  },
  {
    title: "SAT",
    description: "34 classes, 1.5 hours each. A comprehensive 1.5 month course.",
    price: "15,104",
    features: ["Maximize potential", "Intensive preparation", "Regular assessments", "Performance tracking"],
  },
  {
    title: "IELTS/TOEFL/PTE",
    description: "Specialized courses for English proficiency tests.",
    price: "2,000",
    features: ["Test strategies", "Speaking practice", "Writing feedback", "Mock tests"],
  },
]

const languageCourses = [
  {
    title: "German A1",
    description: "Begin your German language journey with our A1 course.",
    price: "8,000",
    duration: "45 classes",
    features: ["Comprehensive Lessons", "Experienced Instructors", "Cultural Insights"],
  },
]

export default function TestPreparation() {
  const [selectedTab, setSelectedTab] = useState("exams")

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Unlock Your Global Future with Expert Test Preparation
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Comprehensive preparation for international exams and language tests. Expert guidance, proven strategies,
              and guaranteed results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium ${
                selectedTab === "exams" ? "bg-blue-600 text-white" : "bg-white text-blue-600 border border-blue-600"
              }`}
              onClick={() => setSelectedTab("exams")}
            >
              Entrance Exams
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium ${
                selectedTab === "languages" ? "bg-blue-600 text-white" : "bg-white text-blue-600 border border-blue-600"
              }`}
              onClick={() => setSelectedTab("languages")}
            >
              Language Courses
            </motion.button>
          </div>

          {/* Exam Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {selectedTab === "exams"
              ? examTypes.map((exam, index) => (
                //   <motion.div
                //     key={exam.title}
                //     initial={{ opacity: 0, y: 20 }}
                //     animate={{ opacity: 1, y: 0 }}
                //     transition={{ duration: 0.5, delay: index * 0.1 }}
                //     className="bg-white rounded-xl shadow-lg overflow-hidden"
                //   >
                //     <div className="p-6">
                //       <h3 className="text-2xl font-bold text-blue-900 mb-4">{exam.title}</h3>
                //       <p className="text-gray-600 mb-4">{exam.description}</p>
                //       <div className="text-3xl font-bold text-blue-600 mb-6">₹{exam.price}</div>
                //       <ul className="space-y-3 mb-6">
                //         {exam.features.map((feature, i) => (
                //           <li key={i} className="flex items-center text-gray-700">
                //             <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                //             {feature}
                //           </li>
                //         ))}
                //       </ul>
                //       <motion.button
                //         whileHover={{ scale: 1.05 }}
                //         whileTap={{ scale: 0.95 }}
                //         className="w-full bg-blue-600 text-white py-3 rounded-full font-medium flex items-center justify-center"
                //       >
                //         Enroll Now
                //         <ArrowRight className="w-5 h-5 ml-2" />
                //       </motion.button>
                //     </div>
                //   </motion.div>
                <motion.div
                  key={exam.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
                >
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4 flex flex-grow">{exam.title}</h3>
                    <p className="text-gray-600 mb-4 flex flex-grow">{exam.description}</p>
                    <div className="text-3xl font-bold text-blue-600 mb-6 flex flex-grow">₹{exam.price}</div>
                    <ul className="space-y-3 mb-6 flex-grow">
                      {exam.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-blue-600 text-white py-3 rounded-full font-medium flex items-center justify-center"
                    >
                      Enroll Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.button>
                  </div>
                </motion.div>

                ))
              : languageCourses.map((course, index) => (
                  <motion.div
                    key={course.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">{course.title}</h3>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <div className="text-3xl font-bold text-blue-600 mb-6">₹{course.price}</div>
                      <div className="text-gray-600 mb-4">Duration: {course.duration}</div>
                      <ul className="space-y-3 mb-6">
                        {course.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-blue-600 text-white py-3 rounded-full font-medium flex items-center justify-center"
                      >
                        Enroll Now
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose Our Test Preparation?</h2>
            <p className="text-gray-600">Expert guidance and comprehensive support to help you achieve your goals</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Book,
                title: "Expert Teachers",
                description: "Learn from experienced educators with proven track records",
              },
              {
                icon: GraduationCap,
                title: "Comprehensive Material",
                description: "Access to extensive study resources and practice tests",
              },
              {
                icon: Globe,
                title: "Global Recognition",
                description: "Prepare for internationally recognized exams",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-900 text-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-blue-100 mb-8">
              Join our test preparation programs and take the first step towards your international education goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-medium inline-flex items-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

