import React from 'react'
import { motion } from 'framer-motion'
import { SchoolIcon as Scholarship, DollarSign, StampIcon as Passport, Home, Briefcase, GraduationCap } from 'lucide-react'

const services = [
  { icon: Scholarship, title: 'Scholarship Assistance', description: 'Get help finding and applying for scholarships' },
  { icon: DollarSign, title: 'Education loan support', description: 'Guidance on securing financial aid for your studies' },
  { icon: Passport, title: 'Visa support', description: 'Assistance with visa application and documentation' },
  { icon: Home, title: 'Accommodation Support', description: 'Help finding suitable housing options abroad' },
  { icon: Briefcase, title: 'Part-time job support', description: 'Guidance on finding work opportunities while studying' },
  { icon: GraduationCap, title: 'Academic support', description: 'Ongoing assistance with your academic journey' },
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

function SupportServices() {
  return (
    // <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
    <section className="py-8 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Support from Home Country to Abroad
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="bg-blue-100 p-3 rounded-full mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-6 h-6 text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-blue-900">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a 
            href="#contact" 
            className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            TALK TO EXPERT
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default SupportServices

