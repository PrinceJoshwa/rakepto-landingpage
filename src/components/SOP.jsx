// "use client"
// import { useState } from "react" // Add useState import
// import { motion } from "framer-motion"
// import { FileText, CheckCircle, Edit, Send } from "lucide-react"
// import SOPForm from "./SOPForm" // Import the SOPForm component

// const features = [
//   {
//     icon: Edit,
//     title: "Professional Writing",
//     description: "Expert writers craft your SOP with precision and creativity",
//   },
//   {
//     icon: CheckCircle,
//     title: "Tailored Content",
//     description: "Customized to highlight your unique achievements and aspirations",
//   },
//   {
//     icon: Send,
//     title: "Timely Delivery",
//     description: "Quick turnaround without compromising on quality",
//   },
// ]

// const steps = [
//   "Understanding your profile",
//   "Drafting compelling content",
//   "Professional review",
//   "Final polishing",
//   "Delivery",
// ]

// function SOP() {
//   // Add state for controlling form visibility
//   const [isFormOpen, setIsFormOpen] = useState(false)

//   // Function to handle opening the form
//   const handleOpenForm = () => {
//     setIsFormOpen(true)
//   }

//   // Function to handle closing the form
//   const handleCloseForm = () => {
//     setIsFormOpen(false)
//   }

//   return (
//     <section className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20">
//       <div className="container mx-auto px-4">
//         {/* Hero Section */}
//         <div className="text-center mb-16">
//           <motion.h1
//             className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Write a Standout SOP with <span className="text-orange-500">Expert Guidance!</span>
//           </motion.h1>
//           <motion.p
//             className="text-xl md:text-2xl text-gray-300 mb-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             We Craft the Perfect Statement of Purpose for You!
//           </motion.p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <feature.icon className="w-12 h-12 text-orange-500 mb-4" />
//               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//               <p className="text-gray-300">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Process Timeline */}
//         <div className="max-w-4xl mx-auto mb-16">
//           <motion.h2
//             className="text-3xl font-bold text-center mb-12"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//           >
//             Our Writing Process
//           </motion.h2>
//           <div className="relative">
//             <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-500/30" />
//             {steps.map((step, index) => (
//               <motion.div
//                 key={index}
//                 className="relative flex items-center mb-8"
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <div className={`flex-1 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
//                   <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
//                     <span className="text-orange-500 font-bold">Step {index + 1}</span>
//                     <p className="text-lg">{step}</p>
//                   </div>
//                 </div>
//                 <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full" />
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-8">Don't Wait - Start Your SOP Today!</h2>
//           <motion.button
//             className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 hover:bg-orange-600 transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleOpenForm} // Add onClick handler
//           >
//             <FileText className="w-5 h-5" />
//             Get Started Now
//           </motion.button>
//           <motion.p
//             className="mt-4 text-gray-300"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             Join thousands of successful applicants who trusted us with their SOPs
//           </motion.p>
//         </motion.div>

//         {/* Floating Elements Animation */}
//         <div className="fixed inset-0 pointer-events-none">
//           {[...Array(5)].map((_, index) => (
//             <motion.div
//               key={index}
//               className="absolute w-4 h-4 bg-orange-500/20 rounded-full"
//               animate={{
//                 x: [0, Math.random() * 100 - 50],
//                 y: [0, Math.random() * 100 - 50],
//                 scale: [1, 1.2, 1],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "reverse",
//                 delay: index * 0.5,
//               }}
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Add the SOPForm component */}
//       <SOPForm isOpen={isFormOpen} onClose={handleCloseForm} />
//     </section>
//   )
// }

// export default SOP

"use client"
import { useState } from "react" // Add useState import
import { motion } from "framer-motion"
import { FileText, CheckCircle, Edit, Send } from "lucide-react"
import SOPForm from "./SOPForm" // Import the SOPForm component

const features = [
  {
    icon: Edit,
    title: "Professional Writing",
    description: "Expert writers craft your SOP with precision and creativity",
  },
  {
    icon: CheckCircle,
    title: "Tailored Content",
    description: "Customized to highlight your unique achievements and aspirations",
  },
  {
    icon: Send,
    title: "Timely Delivery",
    description: "Quick turnaround without compromising on quality",
  },
]

const steps = [
  "Understanding your profile",
  "Drafting compelling content",
  "Professional review",
  "Final polishing",
  "Delivery",
]

function SOP() {
  // Add state for controlling form visibility
  const [isFormOpen, setIsFormOpen] = useState(false)

  // Function to handle opening the form
  const handleOpenForm = () => {
    setIsFormOpen(true)
  }

  // Function to handle closing the form
  const handleCloseForm = () => {
    setIsFormOpen(false)
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Write a Standout SOP with <span className="text-orange-500">Expert Guidance!</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We Craft the Perfect Statement of Purpose for You!
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Writing Process
          </motion.h2>
          
          {/* Desktop Timeline (hidden on mobile) */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-500/30" />
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex items-center mb-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                    <span className="text-orange-500 font-bold">Step {index + 1}</span>
                    <p className="text-lg">{step}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full" />
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Timeline (vertical layout) */}
          <div className="md:hidden relative">
            <div className="absolute left-4 top-0 h-full w-1 bg-orange-500/30" />
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative pl-12 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute left-4 top-4 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full" />
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                  <span className="text-orange-500 font-bold">Step {index + 1}</span>
                  <p className="text-lg">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Don't Wait - Start Your SOP Today!</h2>
          <motion.button
            className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 hover:bg-orange-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpenForm} // Add onClick handler
          >
            <FileText className="w-5 h-5" />
            Get Started Now
          </motion.button>
          <motion.p
            className="mt-4 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of successful applicants who trusted us with their SOPs
          </motion.p>
        </motion.div>

        {/* Floating Elements Animation - Modified for better mobile experience */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-4 h-4 bg-orange-500/20 rounded-full"
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: index * 0.5,
              }}
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Add the SOPForm component */}
      <SOPForm isOpen={isFormOpen} onClose={handleCloseForm} />
    </section>
  )
}

export default SOP