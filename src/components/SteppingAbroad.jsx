import React from 'react'
import { motion } from 'framer-motion'
import { Users, Phone, Laptop } from 'lucide-react'

const steps = [
  { icon: Users, title: 'One-on-one Career Guidance', description: 'Personalized advice tailored to your goals' },
  { icon: Phone, title: 'Reserve by Phone', description: 'Call Us 24/7 for immediate assistance' },
  { icon: Laptop, title: 'Remote Support', description: 'Get help online in just a few clicks' },
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

function SteppingAbroad() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Stepping Abroad for Studies
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="bg-orange-100 p-4 rounded-full mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon className="w-8 h-8 text-orange-500" />
                </motion.div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* <motion.a 
            href="tel:+911234567890" 
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CLAIM +911234567890
          </motion.a> */}
        </motion.div>
      </div>
    </section>
  )
}

export default SteppingAbroad

