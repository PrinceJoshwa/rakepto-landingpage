
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, DollarSign, StampIcon as Passport, Home, Briefcase, GraduationCap, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Scholarship Assistance",
    description: "Get help finding and applying for scholarships",
    color: "from-purple-500 to-indigo-600",
    lightColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: DollarSign,
    title: "Education Loan Support",
    description: "Guidance on securing financial aid for your studies",
    color: "from-emerald-500 to-teal-600",
    lightColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Passport,
    title: "Visa Support",
    description: "Assistance with visa application and documentation",
    color: "from-blue-500 to-cyan-600",
    lightColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Home,
    title: "Accommodation Support",
    description: "Help finding suitable housing options abroad",
    color: "from-amber-500 to-orange-600",
    lightColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Briefcase,
    title: "Part-time Job Support",
    description: "Guidance on finding work opportunities while studying",
    color: "from-rose-500 to-pink-600",
    lightColor: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    icon: GraduationCap,
    title: "Academic Support",
    description: "Ongoing assistance with your academic journey",
    color: "from-sky-500 to-blue-600",
    lightColor: "bg-sky-50",
    iconColor: "text-sky-600",
  },
]

function SupportServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 opacity-80"></div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200 opacity-10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-block"
            whileInView={{
              scale: [0.9, 1.1, 1],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-700 mb-4">
              Support from Home to Abroad
            </h2>
          </motion.div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive support services ensure a smooth transition from your home country to your study
            destination.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className={`h-full rounded-2xl overflow-hidden relative group`}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Card background with gradient */}
                <div className="absolute inset-0 bg-white"></div>

                {/* Colored top bar */}
                <div className={`h-2 w-full bg-gradient-to-r ${service.color}`}></div>

                <div className="p-8 relative z-10">
                  <div className="flex items-start mb-6">
                    <motion.div
                      className={`${service.lightColor} p-4 rounded-xl mr-4 flex-shrink-0`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>

                  <motion.div
                    className="mt-4 overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: hoveredIndex === index ? "auto" : 0,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href="#contact"
                      className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                    >
                      Learn more about this service
                      <ArrowRight className={`ml-2 w-4 h-4 ${service.iconColor}`} />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.a
            href="#contact"
            className="relative inline-flex group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
            <button className="relative bg-gradient-to-r from-indigo-600 to-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl">
              TALK TO AN EXPERT
            </button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default SupportServices

