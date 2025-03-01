"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Check, Globe2, GraduationCap, Users2, Building2, BookOpen, Wallet, CircleDollarSign } from "lucide-react"
import { Link } from "react-router-dom"
import { useRef } from "react"

const FloatingCard = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      className="relative bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm border border-white/10"
    >
      {children}
    </motion.div>
  )
}

export default function EducationLoan() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

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
            <CircleDollarSign size={64} className="text-blue-900" />
          </motion.div>
          <h2 className="text-xl font-semibold text-blue-900">Loading Education Loan...</h2>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" ref={ref}>
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "linear-gradient(to bottom right, #1E3A8A 0%, #1E40AF 50%, #3B82F6 100%)",
            y,
          }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzE3MjU0RCI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMxRDRFRDgiIG9wYWNpdHk9IjAuMyI+PC9jaXJjbGU+Cjwvc3ZnPg==')] opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white bg-clip-text">
                Rakepto: Financing Dreams for Indian Students
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-12">
                Unlock your global education potential with our tailored loan solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="#apply"
                  className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  <span>Apply Now</span>
                  <motion.span
                    className="absolute right-0 -mt-12 h-32 w-8 opacity-40"
                    animate={{
                      x: ["0%", "200%"],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                      ease: "linear",
                    }}
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                    }}
                  />
                </Link>
                <Link
                  to="#learn-more"
                  className="inline-flex items-center justify-center px-8 py-3 font-bold text-white border-2 border-white/50 rounded-full hover:bg-white/10 transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-white/50 rounded-full mt-2"
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Benefits Section with Floating Cards */}
      <section className="py-24 bg-gradient-to-b from-blue-900 to-blue-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Unlock Global Opportunities</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Experience world-class education with our comprehensive support system
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Globe2,
                title: "Global Perspective",
                description: "Experience diverse cultures and viewpoints that shape your global outlook",
                gradient: "from-blue-500 to-cyan-400",
              },
              {
                icon: GraduationCap,
                title: "Career Advancement",
                description: "Gain competitive edge in the international job market",
                gradient: "from-orange-500 to-pink-500",
              },
              {
                icon: Users2,
                title: "Personal Growth",
                description: "Develop independence and resilience through new challenges",
                gradient: "from-green-500 to-emerald-400",
              },
            ].map((item, index) => (
              <FloatingCard key={index} delay={index * 0.2}>
                <div className="p-8">
                  <div
                    className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${item.gradient}`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Programs Section with Interactive Cards */}
      <section className="py-24 bg-gradient-to-b from-blue-950 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Tailored Loan Solutions</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Choose from our range of flexible financing options
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Building2,
                title: "Secured Loans",
                features: ["Competitive interest rates", "Higher loan amounts", "Flexible tenure"],
                color: "bg-gradient-to-br from-blue-500 to-blue-600",
              },
              {
                icon: Wallet,
                title: "Unsecured Loans",
                features: ["No collateral required", "Quick processing", "Simple documentation"],
                color: "bg-gradient-to-br from-orange-500 to-orange-600",
              },
              {
                icon: BookOpen,
                title: "Study Support",
                features: ["Course counseling", "University selection", "Visa assistance"],
                color: "bg-gradient-to-br from-green-500 to-green-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={`rounded-2xl p-8 ${item.color} transform transition-all duration-300 group-hover:shadow-2xl`}
                >
                  <item.icon className="w-12 h-12 text-white mb-6" />
                  <h3 className="text-2xl font-bold mb-6 text-white">{item.title}</h3>
                  <ul className="space-y-4">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-white">
                        <Check className="w-5 h-5 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process with Timeline */}
      <section className="py-24 bg-gradient-to-b from-blue-900 to-blue-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Simple Application Process</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Get your education loan approved in four easy steps
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                title: "Online Application",
                description: "Fill out our simple online application form with basic details",
              },
              {
                title: "Document Submission",
                description: "Upload required documents for verification",
              },
              {
                title: "Loan Approval",
                description: "Quick processing and approval of your loan application",
              },
              {
                title: "Disbursement",
                description: "Funds transferred directly to your institution",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex gap-8 mb-12 last:mb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="relative flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  {index < 3 && <div className="w-1 flex-1 bg-orange-500/20 my-2" />}
                </div>
                <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-blue-200">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI0ZGNzYwMCI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAuMyI+PC9jaXJjbGU+Cjwvc3ZnPg==')] opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Begin Your Global Education Journey?
              </h2>
              <p className="text-xl text-white/90 mb-12">
                Take the first step towards your international education dreams
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="#apply"
                  className="inline-flex items-center justify-center px-8 py-4 font-bold text-orange-500 bg-white rounded-full hover:bg-blue-50 transition-all duration-200"
                >
                  Apply Now
                </Link>
                <Link
                  to="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 font-bold text-white border-2 border-white rounded-full hover:bg-white/10 transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

