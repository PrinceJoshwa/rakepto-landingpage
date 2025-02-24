import React from 'react'
import { motion } from 'framer-motion'
import { GlobeIcon, BookOpen, FileCheck, Plane } from 'lucide-react'

const steps = [
  { icon: GlobeIcon, title: 'Choose Your Destination', description: 'Study in Australia, Canada, USA, or UK' },
  { icon: BookOpen, title: 'Select Your Course', description: 'Pick from +100 Universities' },
  { icon: FileCheck, title: 'Get SOP Help', description: 'Free Statement of Purpose assistance' },
  { icon: Plane, title: 'Start Your Journey', description: 'We\'ll guide you every step of the way' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
}

function ApplicationProcess() {
  return (
    <section className="py-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready To Make Your Study Abroad Dreams a Reality
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="bg-blue-100 p-4 rounded-full mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon className="w-8 h-8 text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 mb-8">
            Our experienced counselors will guide you through every step of the process, from course selection to visa applications. We'll tailor our services to your specific needs and aspirations. Our global reach extends to numerous countries, offering you a wide range of study destinations. We provide affordable fees without compromising on quality.
          </p>
          <motion.a 
            href="#contact" 
            className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DON'T WAIT-APPLY NOW!
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default ApplicationProcess

