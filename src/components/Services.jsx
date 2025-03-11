
"use client"
import { motion } from "framer-motion"
import { Users, Clock, GraduationCap, FileText } from "lucide-react"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Admission & Application Support",
    icon: Users,
    description:
      "Get end-to-end assistance with profile creation, documentation & scholarships from a Team of Experts.",
    color: "bg-blue-500",
    link: "/#sop",
  },
  {
    title: "Test Prepration Solution",
    icon: Clock,
    description: "Get Training on IELTS plus, GMAT, German Language & many more.",
    color: "bg-green-500",
    link: "/test-preparation",
  },
  {
    title: "Education Loan Assistance",
    icon: GraduationCap,
    description:
      "Get Loan assistance from multiple Banks & NBFC partners.",
    color: "bg-purple-500",
    link: "/education-loan",
  },
  {
    title: "Visa Support",
    icon: FileText,
    description: " Get end-to-end visa assistance for your Dream university.",
    color: "bg-red-500",
    link: "/admissions",
  },
]

export default function Services() {
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
                  <motion.a
                    href={service.link}
                    className="inline-flex items-center justify-center bg-white text-gray-800 px-6 py-2 rounded-full font-medium mt-auto hover:bg-gray-100 transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

