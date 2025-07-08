// import React from 'react';

// const Partner = () => {
//   return (
//     <section className="min-h-screen bg-black text-white px-6 md:px-20 py-16">
//       {/* Hero Section */}
//       <div className="max-w-5xl mx-auto text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">
//           Refer & Earn with Edvoy
//         </h1>
//         <p className="text-lg md:text-xl text-gray-300 mb-8">
//           Invite students to study abroad and earn rewards from <span className="text-yellow-400 font-semibold">£100 to £300</span> (₹10,000 to ₹35,000) for each successful referral.
//         </p>
//         <a
//           href="https://edvoy.com/referral/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block bg-yellow-400 text-black font-semibold px-8 py-3 rounded-md hover:bg-yellow-300 transition duration-300"
//         >
//           Sign Up to Refer
//         </a>
//       </div>

//       {/* How It Works */}
//       <div className="max-w-4xl mx-auto mt-20 grid md:grid-cols-3 gap-10 text-center">
//         <div>
//           <div className="text-4xl mb-4">🎉</div>
//           <h3 className="text-xl font-semibold mb-2">1. Sign Up</h3>
//           <p className="text-gray-400">
//             Register on Edvoy’s referral program and receive your unique referral code.
//           </p>
//         </div>
//         <div>
//           <div className="text-4xl mb-4">🔗</div>
//           <h3 className="text-xl font-semibold mb-2">2. Share</h3>
//           <p className="text-gray-400">
//             Share your referral code with friends or students interested in studying abroad.
//           </p>
//         </div>
//         <div>
//           <div className="text-4xl mb-4">💸</div>
//           <h3 className="text-xl font-semibold mb-2">3. Earn</h3>
//           <p className="text-gray-400">
//             Get rewarded between £100 and £300 (₹10k–₹35k) for every successful student referral.
//           </p>
//         </div>
//       </div>

//       {/* Footer CTA */}
//       <div className="text-center mt-20">
//         <h2 className="text-2xl font-bold mb-4">Ready to Start Earning?</h2>
//         <a
//           href="https://edvoy.com/referral/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block bg-yellow-400 text-black font-semibold px-8 py-3 rounded-md hover:bg-yellow-300 transition duration-300"
//         >
//           Join Now
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Partner;

"use client"

import { motion } from "framer-motion"
import { Users, Share2, DollarSign, ArrowRight, Star, Gift } from "lucide-react"

const Partner = () => {
  const steps = [
    {
      icon: Users,
      title: "Sign Up",
      description: "Register on Edvoy's referral program and receive your unique referral code.",
      color: "from-blue-500 to-blue-600",
      lightColor: "bg-blue-50",
    },
    {
      icon: Share2,
      title: "Share",
      description: "Share your referral code with friends or students interested in studying abroad.",
      color: "from-orange-500 to-orange-600",
      lightColor: "bg-orange-50",
    },
    {
      icon: DollarSign,
      title: "Earn",
      description: "Get rewarded between £100 and £300 (₹10k–₹35k) for every successful student referral.",
      color: "from-blue-600 to-blue-700",
      lightColor: "bg-blue-50",
    },
  ]

  const benefits = [
    "High commission rates",
    "Quick payouts",
    "24/7 support",
    "Marketing materials provided",
    "No hidden fees",
    "Global reach",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-orange-500"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200 rounded-full opacity-20"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-orange-200 rounded-full opacity-20"></div>

      {/* Floating elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400 opacity-5"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 30 - 15],
            x: [0, Math.random() * 30 - 15],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="container mx-auto px-4 py-16 pt-24 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6"
          >
            <Gift className="w-5 h-5" />
            <span className="font-semibold">Partnership Program</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
            Refer & Earn with <span className="text-orange-500">Edvoy</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Invite students to study abroad and earn rewards from{" "}
            <span className="text-orange-500 font-bold">£100 to £300</span>{" "}
            <span className="text-blue-900 font-bold">(₹10,000 to ₹35,000)</span> for each successful referral.
          </p>

          <motion.a
            href="https://edvoy.com/referral/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up to Refer
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Start earning with our simple 3-step process</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${step.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <step.icon className="w-8 h-8" />
                    <span className="text-2xl font-bold opacity-50">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Partner With Us?</h2>
              <p className="text-gray-600">Join thousands of partners earning with our referral program</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg"
                >
                  <Star className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Earning?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our partnership program today and start earning rewards for every successful referral.
            </p>
            <motion.a
              href="https://edvoy.com/referral/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Partner
