// import React from 'react'
// import { motion } from 'framer-motion'
// import { Star, ArrowRight } from 'lucide-react'
// import { useNavigate } from 'react-router-dom'

// const testimonials = [
//   {
//     name: 'Danish',
//     text: "The counselors were extremely helpful and knowledgeable. They provided me with personalized advice and helped me choose the right course and university. Their support throughout the entire process, from application to visa, was invaluable. I'm truly grateful for their assistance.",
//   },
//   { 
//     name: 'Jeevita', 
//     text: 'I was initially hesitant about the study abroad process, but Rakepto made it easy and enjoyable. Their team is friendly, knowledgeable, and always available to assist.',
//   },
// ]

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// }

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: 'spring',
//       stiffness: 100
//     }
//   }
// }


// function RatingCard({ platform, rating }) {
//   return (
//     <motion.div 
//       className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl"
//       variants={itemVariants}
//     >
//       <div className="flex items-center gap-2 mb-2">
//         {[...Array(5)].map((_, i) => (
//           <Star 
//             key={i} 
//             className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-blue-600 fill-blue-600' : 'text-blue-200'}`} 
//           />
//         ))}
//       </div>
//       <div className="text-3xl font-bold text-blue-900 mb-1">{rating}</div>
//       <div className="text-blue-900 font-medium">{platform} Review</div>
//     </motion.div>
//   )
// }

// function Testimonials() {
//   const navigate = useNavigate()

//   const handleButtonClick = () => {
//     navigate("/course-finder")
//   }
  
//   return (
//     <section className="py-8 bg-white">
//       <div className="container mx-auto px-4">
//         <motion.h2 
//           className="text-3xl md:text-4xl font-bold text-center mb-12 text-black"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Why Students Love Us
//         </motion.h2>

//         {/* Ratings Section */}
//         <motion.div 
//           className="max-w-4xl mx-auto mb-16 p-8 rounded-3xl bg-blue-100/50"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
//             <RatingCard platform="Google" rating={4.6} />
//             <RatingCard platform="Facebook" rating={4.9} />
//             <div className="text-center lg:text-left">
//               <p className="text-xl text-blue-900 font-medium mb-4">
//                 trusted by over 10 lakh students globally
//               </p>
//               <motion.button className="bg-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-blue-800 transition-colors mx-auto lg:mx-0"
//                onClick={handleButtonClick}
//               >
//                 Get started
//                 <ArrowRight className="w-4 h-4" />
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Testimonials Grid */}
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {testimonials.map((testimonial, index) => (
//             <motion.div 
//               key={index}
//               className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
//               variants={itemVariants}
//               whileHover={{ scale: 1.03 }}
//             >
//               <div className="flex mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 text-blue-600 fill-blue-600" />
//                 ))}
//               </div>
//               <p className="text-gray-700 mb-4">{testimonial.text}</p>
//               <p className="font-semibold text-blue-900">{testimonial.name}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Testimonials


import React from 'react'
import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// ✅ Import testimonial images
import testimonial1 from '../assets/testimonial1.jpg'
import testimonial2 from '../assets/testimonial2.jpg'
import testimonial3 from '../assets/testimonial3.jpg'
import testimonial4 from '../assets/testimonial4.jpg'
import testimonial5 from '../assets/testimonial5.jpg'

const textTestimonials = [
  {
    name: 'Danish',
    text: "The counselors were extremely helpful and knowledgeable. They provided me with personalized advice and helped me choose the right course and university. Their support throughout the entire process, from application to visa, was invaluable. I'm truly grateful for their assistance.",
  },
  { 
    name: 'Jeevita', 
    text: 'I was initially hesitant about the study abroad process, but Rakepto made it easy and enjoyable. Their team is friendly, knowledgeable, and always available to assist.',
  },
]

const imageTestimonials = [
  { image: testimonial1 },
  { image: testimonial2 },
  { image: testimonial3 },
  { image: testimonial4 },
  { image: testimonial5 },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
}

function RatingCard({ platform, rating }) {
  return (
    <motion.div 
      className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl"
      variants={itemVariants}
    >
      <div className="flex items-center gap-2 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-blue-600 fill-blue-600' : 'text-blue-200'}`} 
          />
        ))}
      </div>
      <div className="text-3xl font-bold text-blue-900 mb-1">{rating}</div>
      <div className="text-blue-900 font-medium">{platform} Review</div>
    </motion.div>
  )
}

function Testimonials() {
  const navigate = useNavigate()
  const handleButtonClick = () => navigate("/course-finder")

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* ======= Main Heading ======= */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Students Love Us
        </motion.h2>

        {/* ======= Ratings Section ======= */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16 p-8 rounded-3xl bg-blue-100/50"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
            <RatingCard platform="Google" rating={4.6} />
            <RatingCard platform="Facebook" rating={4.9} />
            <div className="text-center lg:text-left">
              <p className="text-xl text-blue-900 font-medium mb-4">
                trusted by over 10 lakh students globally
              </p>
              <motion.button 
                className="bg-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-blue-800 transition-colors mx-auto lg:mx-0"
                onClick={handleButtonClick}
              >
                Get started
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* ======= Text Testimonials Section ======= */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {textTestimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-blue-600 fill-blue-600" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <p className="font-semibold text-blue-900">{testimonial.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ======= Image Testimonials Section ======= */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {imageTestimonials.map((item, index) => (
            <motion.div 
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <img 
                src={item.image} 
                alt={`Student testimonial ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
