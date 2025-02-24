// import React from 'react'
// import { motion } from 'framer-motion'
// import { Users, Clock, GraduationCap, FileText } from 'lucide-react'

// const services = [
//   {
//     title: 'Team of Experts',
//     icon: Users,
//     description: 'Our team of experienced education consultants is dedicated to helping you achieve your academic goals.',
//     color: 'text-blue-500'
//   },
//   {
//     title: 'Round the Clock Support',
//     icon: Clock,
//     description: 'We offer round-the-clock support to address your queries and concerns.',
//     color: 'text-green-500'
//   },
//   {
//     title: 'Destination Study Support',
//     icon: GraduationCap,
//     description: 'We provide comprehensive support for various study destinations, including the UK, USA, Canada, Australia, and more.',
//     color: 'text-blue-500'
//   },
//   {
//     title: 'Admission & Application Support',
//     icon: FileText,
//     description: 'Get end-to-end assistance with profile creation, document collection, and entrance exam preparation.',
//     color: 'text-red-500'
//   }
// ]

// function Services() {
//   return (
//     <section id="services" className="py-20 bg-blue-50/50">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Services</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Comprehensive support services to make your study abroad journey smooth and successful
//           </p>
//         </motion.div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <motion.div
//                 className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
//                 whileHover={{ y: -10 }}
//               >
//                 <div className="flex flex-col items-center text-center h-full">
//                   <motion.div
//                     className={`p-4 rounded-full bg-gray-50 mb-6 ${service.color}`}
//                     whileHover={{ rotate: 360, scale: 1.1 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <service.icon className="w-8 h-8" />
//                   </motion.div>
//                   <h3 className="text-xl font-semibold text-blue-900 mb-3">{service.title}</h3>
//                   <p className="text-gray-600 mb-6">{service.description}</p>
//                   <motion.button
//                     className="inline-flex items-center justify-center text-blue-900 hover:text-blue-700 font-medium mt-auto"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Learn more
//                     <svg
//                       className="w-5 h-5 ml-2"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </motion.button>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Services

//v0
// import { motion } from "framer-motion"
// import { Users, Clock, GraduationCap, FileText } from "lucide-react"

// const services = [
//   {
//     title: "Team of Experts",
//     icon: Users,
//     description:
//       "Our team of experienced education consultants is dedicated to helping you achieve your academic goals.",
//     color: "bg-blue-500",
//   },
//   {
//     title: "Round the Clock Support",
//     icon: Clock,
//     description: "We offer round-the-clock support to address your queries and concerns.",
//     color: "bg-green-500",
//   },
//   {
//     title: "Destination Study Support",
//     icon: GraduationCap,
//     description:
//       "We provide comprehensive support for various study destinations, including the UK, USA, Canada, Australia, and more.",
//     color: "bg-purple-500",
//   },
//   {
//     title: "Admission & Application Support",
//     icon: FileText,
//     description: "Get end-to-end assistance with profile creation, document collection, and entrance exam preparation.",
//     color: "bg-red-500",
//   },
// ]

// function Services() {
//   return (
//     <section id="services" className="py-20 bg-gradient-to-b from-blue-50 to-white">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Services</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Comprehensive support services to make your study abroad journey smooth and successful
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <motion.div
//                 className={`${service.color} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col`}
//                 whileHover={{ y: -10 }}
//               >
//                 <div className="flex flex-col items-center text-center h-full">
//                   <motion.div
//                     className="p-4 rounded-full bg-white mb-6"
//                     whileHover={{ rotate: 360, scale: 1.1 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <service.icon className="w-8 h-8 text-gray-800" />
//                   </motion.div>
//                   <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
//                   <p className="text-white mb-6">{service.description}</p>
//                   <motion.button
//                     className="inline-flex items-center justify-center bg-white text-gray-800 px-6 py-2 rounded-full font-medium mt-auto hover:bg-gray-100 transition-colors"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Learn More
//                     <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                   </motion.button>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Services

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Clock, GraduationCap, FileText, ArrowRight, X } from 'lucide-react'

const services = [
  {
    title: 'Team of Experts',
    icon: Users,
    description: 'Our team of experienced education consultants is dedicated to helping you achieve your academic goals.',
    color: 'bg-blue-500'
  },
  {
    title: 'Round the Clock Support',
    icon: Clock,
    description: 'We offer round-the-clock support to address your queries and concerns.',
    color: 'bg-green-500'
  },
  {
    title: 'Destination Study Support',
    icon: GraduationCap,
    description: 'We provide comprehensive support for various study destinations, including the UK, USA, Canada, Australia, and more.',
    color: 'bg-purple-500'
  },
  {
    title: 'Admission & Application Support',
    icon: FileText,
    description: 'Get end-to-end assistance with profile creation, document collection, and entrance exam preparation.',
    color: 'bg-red-500'
  }
]

function ServiceForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    onClose()
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Enquire Now</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Services() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <section id="services" className="py-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive support services to make your study abroad journey smooth and successful
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className={`${service.color} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col`}
                whileHover={{ y: -10 }}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <motion.div
                    className="p-4 rounded-full bg-white mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-8 h-8 text-gray-800" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-white mb-6">{service.description}</p>
                  <motion.button
                    onClick={() => setIsFormOpen(true)}
                    className="inline-flex items-center justify-center bg-white text-gray-800 px-6 py-2 rounded-full font-medium mt-auto hover:bg-gray-100 transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <ServiceForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  )
}
