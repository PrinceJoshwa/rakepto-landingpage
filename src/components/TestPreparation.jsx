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

