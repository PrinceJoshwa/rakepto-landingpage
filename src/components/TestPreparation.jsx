
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Book, GraduationCap, Globe, ArrowRight, CheckCircle, BookOpenText } from "lucide-react"
import { Helmet } from "react-helmet" // Import Helmet for meta tags

const examTypes = [
  {
    title: "GRE/GMAT",
    description: "50 classes, 1.5 hours each. Three months of focused preparation.",
    price: "22,000",
    features: ["Comprehensive prep", "Expert instructors", "Practice tests", "Study materials"],
  },
  {
    title: "SAT",
    description: "34 classes, 1.5 hours each. A comprehensive 1.5 month course.",
    price: "22,000",
    features: ["Maximize potential", "Intensive preparation", "Regular assessments", "Performance tracking"],
  },
]

const languageCourses = [
  {
    title: "German A1",
    description: "Begin your German language journey with our A1 course.",
    price: "15,000",
    duration: "45 classes",
    features: ["Comprehensive Lessons", "Experienced Instructors", "Speaking Practice", "Cultural Insights"],
  },
  {
    title: "IELTS/TOEFL/PTE/DUOLINGO",
    description: "Specialized courses for English proficiency tests.",
    price: "8,000",
    features: ["Test strategies", "Speaking practice", "Writing feedback", "Mock tests"],
  },
]

export default function TestPreparation() {
  const [selectedTab, setSelectedTab] = useState("exams")
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  // Data from the image
  const metaTitle = "IELTS Exam Dates, Fees, Booking & Registration"
  const metaDescription = "Check IELTS exam dates, fees, and book your IELTS exam registration online. Prepare for your IELTS exam with our resources."
  const keywordData = [
    { keyword: "ielts exam", intent: "Navigational", volume: 110000, difficulty: 84 },
    { keyword: "ielts exam fee", intent: "Informational", volume: 49500, difficulty: 34 },
    { keyword: "ielts exam dates", intent: "Informational", volume: 33100, difficulty: 50 },
    { keyword: "ielts exam date 2022", intent: "Informational", volume: 14800, difficulty: 24 },
    { keyword: "ielts exam date 2023", intent: "Informational", volume: 14800, difficulty: 30 },
    { keyword: "ielts exam date 2024", intent: "Informational", volume: 14800, difficulty: 30 },
    { keyword: "ielts exam booking", intent: "Informational", volume: 9900, difficulty: 72 },
    { keyword: "ielts exam dates 2022", intent: "Informational", volume: 9900, difficulty: 22 },
    { keyword: "ielts exam dates 2023", intent: "Informational", volume: 8100, difficulty: 28 },
    { keyword: "ielts exam results", intent: "Transactional", volume: 8100, difficulty: 57 },
    { keyword: "ielts exam dates 2021-2022 in India", intent: "Informational", volume: 8600, difficulty: 17 },
    { keyword: "ielts exam fee in India", intent: "Informational", volume: 8600, difficulty: 31 },
    { keyword: "29 april 2023 ielts exam reading answers", intent: "Informational", volume: 5400, difficulty: 17 },
    { keyword: "idp ielts exam dates", intent: "Informational", volume: 5400, difficulty: 48 },
    { keyword: "ielts exam dates 2024", intent: "Informational", volume: 5400, difficulty: 29 },
    { keyword: "ielts exam syllabus", intent: "Informational", volume: 5400, difficulty: 23 },
    { keyword: "what is ielts exam", intent: "Informational", volume: 5400, difficulty: 66 },
    { keyword: "ielts exam pattern", intent: "Informational", volume: 4400, difficulty: 27 },
    { keyword: "ielts exam sample", intent: "Informational", volume: 4400, difficulty: 64 },
    { keyword: "ielts exam sample paper", intent: "Informational", volume: 4400, difficulty: 57 },
    { keyword: "ielts exam full form", intent: "Informational", volume: 3600, difficulty: 50 },
    { keyword: "ielts exam date 2021 idp", intent: "Informational", volume: 2600, difficulty: 17 },
    { keyword: "ielts exam registration", intent: "Informational", volume: 2400, difficulty: 57 },
  ]

  // Focus keywords for SEO
  const focusKeywords = keywordData.map((data) => data.keyword)

  // Loading screen
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
            <BookOpenText size={64} className="text-blue-900" />
          </motion.div>
          <h2 className="text-xl font-semibold text-blue-900">Loading TestPreparation...</h2>
        </motion.div>
      </div>
    )
  }

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

      {/* Your Existing TestPreparation Component */}
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
              <p className="text-lg text-gray-600 mb-6">
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
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-medium inline-flex items-center"
                href="https://rzp.io/rzp/cQa5iEVv"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}