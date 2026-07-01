// // "use client"

// // import { motion } from "framer-motion"
// // import { Award, ShieldCheck, ExternalLink, CheckCircle } from "lucide-react"

// // export default function BritishCouncilCertification() {
// //   return (
// //     <section className="py-16 bg-gradient-to-b from-white to-blue-50">
// //       <div className="container mx-auto px-4">
// //         <motion.div 
// //           className="max-w-6xl mx-auto bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border border-blue-800"
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //         >
// //           {/* Background Accents */}
// //           <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
// //           <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>

// //           <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12">
            
// //             {/* Badge Icon Area */}
// //             <motion.div 
// //               className="flex-shrink-0 relative"
// //               whileHover={{ scale: 1.05 }}
// //               transition={{ type: "spring", stiffness: 300 }}
// //             >
// //               <div className="absolute inset-0 bg-orange-500 blur-xl opacity-20 rounded-full"></div>
// //               <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-md border border-white/20 relative z-10 flex flex-col items-center justify-center shadow-inner">
// //                 <Award className="w-24 h-24 text-orange-400 mb-2 drop-shadow-lg" />
// //                 <span className="text-white font-bold tracking-widest text-sm uppercase">Certified</span>
// //               </div>
// //             </motion.div>
            
// //             {/* Text Content */}
// //             <div className="flex-grow text-center lg:text-left text-white space-y-5">
// //               <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
// //                 <ShieldCheck className="w-4 h-4" /> Official Accreditation
// //               </div>
              
// //               <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
// //                 British Council Certified UK Agent
// //               </h2>
              
// //               <p className="text-blue-100/90 text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
// //                 Rakepto Study Abroad is globally recognized and formally certified by the British Council. We strictly adhere to the National Code of Ethical Practice for UK Education Agents, ensuring complete transparency and premium support for your international journey.
// //               </p>

// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 max-w-xl mx-auto lg:mx-0">
// //                 <div className="flex items-center justify-center lg:justify-start gap-3">
// //                   <CheckCircle className="w-6 h-6 text-green-400" />
// //                   <span className="text-blue-50 text-lg">Code: <strong className="text-white">87209</strong></span>
// //                 </div>
// //                 <div className="flex items-center justify-center lg:justify-start gap-3">
// //                   <CheckCircle className="w-6 h-6 text-green-400" />
// //                   <span className="text-blue-50 text-lg">Valid until: <strong className="text-white">31/10/2027</strong></span>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* CTA Button */}
// //             <div className="flex-shrink-0 w-full lg:w-auto mt-4 lg:mt-0">
// //               <a 
// //                 href="https://enetbadges.com/MyBadges/Details?authCode=DCBZAFNTJXEBMYWE" 
// //                 target="_blank" 
// //                 rel="noopener noreferrer"
// //                 className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 group w-full text-lg border border-orange-400"
// //               >
// //                 Verify Live Badge
// //                 <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
// //               </a>
// //             </div>
// //           </div>

// //           {/* Secure Image Certificates Section */}
// //           <div className="relative z-10 pt-10 border-t border-white/10">
// //             <h3 className="text-2xl font-bold text-white mb-8 text-center">View Our Official Credentials</h3>
            
// //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //               {/* Certificate 1 */}
// //               <motion.div 
// //                 className="bg-white/5 p-3 rounded-2xl border border-white/10 backdrop-blur-sm"
// //                 whileHover={{ y: -5 }}
// //                 transition={{ duration: 0.3 }}
// //               >
// //                 <div className="flex items-center gap-2 mb-4 px-2">
// //                   <Award className="w-5 h-5 text-orange-400" />
// //                   <h4 className="text-white font-semibold">Certificate of Completion</h4>
// //                 </div>
// //                 <div className="w-full h-[500px] rounded-xl overflow-hidden bg-white flex items-center justify-center p-4">
// //                   <img 
// //                     src="/Cert_1.png" 
// //                     alt="British Council Certificate of Completion" 
// //                     className="max-w-full max-h-full object-contain pointer-events-none select-none"
// //                     onContextMenu={(e) => e.preventDefault()}
// //                     draggable="false"
// //                   />
// //                 </div>
// //               </motion.div>

// //               {/* Certificate 2 */}
// //               <motion.div 
// //                 className="bg-white/5 p-3 rounded-2xl border border-white/10 backdrop-blur-sm"
// //                 whileHover={{ y: -5 }}
// //                 transition={{ duration: 0.3 }}
// //               >
// //                 <div className="flex items-center gap-2 mb-4 px-2">
// //                   <ShieldCheck className="w-5 h-5 text-orange-400" />
// //                   <h4 className="text-white font-semibold">Code of Conduct Acceptance</h4>
// //                 </div>
// //                 <div className="w-full h-[500px] rounded-xl overflow-hidden bg-white flex items-center justify-center p-4">
// //                   <img 
// //                     src="/Cert_2.png" 
// //                     alt="Code of Conduct Acceptance" 
// //                     className="max-w-full max-h-full object-contain pointer-events-none select-none"
// //                     onContextMenu={(e) => e.preventDefault()}
// //                     draggable="false"
// //                   />
// //                 </div>
// //               </motion.div>
// //             </div>
// //           </div>
          
// //         </motion.div>
// //       </div>
// //     </section>
// //   )
// // }
// "use client"

// import { motion } from "framer-motion"
// import { Award, ShieldCheck, ExternalLink, CheckCircle, FileText } from "lucide-react"

// export default function BritishCouncilCertification() {
//   return (
//     <section className="py-16 md:py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 relative overflow-hidden border-y border-blue-800/50">
      
//       {/* Full-Width Background Accents */}
//       <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500 rounded-full opacity-10 blur-[120px] pointer-events-none"></div>
//       <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-orange-500 rounded-full opacity-10 blur-[120px] pointer-events-none"></div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         {/* Top Content Area */}
//         <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16 max-w-7xl mx-auto">
          
//           {/* Badge Icon Area */}
//           <motion.div 
//             className="flex-shrink-0 relative"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-20 rounded-full"></div>
//             <div className="bg-white/10 p-8 rounded-[2rem] backdrop-blur-md border border-white/20 relative z-10 flex flex-col items-center justify-center shadow-2xl">
//               <Award className="w-24 h-24 text-orange-400 mb-3 drop-shadow-lg" />
//               <span className="text-white font-bold tracking-widest text-sm uppercase">Certified</span>
//             </div>
//           </motion.div>
          
//           {/* Text Content */}
//           <div className="flex-grow text-center lg:text-left text-white space-y-6">
//             <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-full">
//               <ShieldCheck className="w-5 h-5" /> Official Accreditation
//             </div>
            
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
//               British Council Certified UK Agent
//             </h2>
            
//             <p className="text-blue-100/90 text-lg md:text-xl max-w-3xl mx-auto lg:mx-0 leading-relaxed">
//               Rakepto Study Abroad is globally recognized and formally certified by the British Council. We strictly adhere to the National Code of Ethical Practice for UK Education Agents, ensuring complete transparency and premium support for your international journey.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
//               <div className="flex items-center gap-3">
//                 <CheckCircle className="w-6 h-6 text-green-400" />
//                 <span className="text-blue-50 text-lg">Code: <strong className="text-white">87209</strong></span>
//               </div>
//               <div className="hidden sm:block text-white/30">|</div>
//               <div className="flex items-center gap-3">
//                 <CheckCircle className="w-6 h-6 text-green-400" />
//                 <span className="text-blue-50 text-lg">Valid until: <strong className="text-white">31/10/2027</strong></span>
//               </div>
//             </div>
//           </div>

//           {/* CTA Button */}
//           <div className="flex-shrink-0 w-full lg:w-auto mt-6 lg:mt-0">
//             <a 
//               href="https://enetbadges.com/MyBadges/Details?authCode=DCBZAFNTJXEBMYWE" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-5 rounded-2xl shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300 group w-full text-lg border border-orange-400"
//             >
//               Verify Live Badge
//               <ExternalLink className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//             </a>
//           </div>
//         </div>

//         {/* PDF Certificates Section */}
//         <div className="pt-12 border-t border-white/10 max-w-7xl mx-auto">
//           <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">View Our Official Credentials</h3>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
//             {/* Certificate 1 */}
//             <motion.div 
//               className="bg-white/5 p-4 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl flex flex-col"
//               whileHover={{ y: -5 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="flex items-center justify-between mb-4 px-2">
//                 <div className="flex items-center gap-3">
//                   <Award className="w-6 h-6 text-orange-400" />
//                   <h4 className="text-white text-lg font-semibold">Certificate of Completion</h4>
//                 </div>
//                 <a 
//                   href="https://ik.imagekit.io/j0xzq9pns/marketly/Cert_87209_103793_1.pdf" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="md:hidden text-orange-400 hover:text-orange-300 text-sm flex items-center gap-1"
//                 >
//                   <FileText className="w-4 h-4" /> Open
//                 </a>
//               </div>
//               <div className="w-full h-[500px] rounded-2xl overflow-hidden bg-gray-100 flex-grow relative group">
//                 {/* Fallback overlay block for right clicks on desktop */}
//                 <div className="absolute inset-0 z-10 hidden md:block" onContextMenu={(e) => e.preventDefault()}></div>
//                 <iframe 
//                   src="https://ik.imagekit.io/j0xzq9pns/marketly/Cert_87209_103793_1.pdf#toolbar=0&navpanes=0&scrollbar=0" 
//                   className="w-full h-full border-none relative z-0"
//                   title="British Council Certificate of Completion"
//                   style={{ pointerEvents: 'auto' }}
//                 />
//               </div>
//             </motion.div>

//             {/* Certificate 2 */}
//             <motion.div 
//               className="bg-white/5 p-4 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl flex flex-col"
//               whileHover={{ y: -5 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="flex items-center justify-between mb-4 px-2">
//                 <div className="flex items-center gap-3">
//                   <ShieldCheck className="w-6 h-6 text-orange-400" />
//                   <h4 className="text-white text-lg font-semibold">Code of Conduct Acceptance</h4>
//                 </div>
//                 <a 
//                   href="https://ik.imagekit.io/j0xzq9pns/marketly/Cert_87211_103793_5.pdf" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="md:hidden text-orange-400 hover:text-orange-300 text-sm flex items-center gap-1"
//                 >
//                   <FileText className="w-4 h-4" /> Open
//                 </a>
//               </div>
//               <div className="w-full h-[500px] rounded-2xl overflow-hidden bg-gray-100 flex-grow relative group">
//                  {/* Fallback overlay block for right clicks on desktop */}
//                 <div className="absolute inset-0 z-10 hidden md:block" onContextMenu={(e) => e.preventDefault()}></div>
//                 <iframe 
//                   src="https://ik.imagekit.io/j0xzq9pns/marketly/Cert_87211_103793_5.pdf#toolbar=0&navpanes=0&scrollbar=0" 
//                   className="w-full h-full border-none relative z-0"
//                   title="Code of Conduct Acceptance"
//                   style={{ pointerEvents: 'auto' }}
//                 />
//               </div>
//             </motion.div>
            
//           </div>
//         </div>
        
//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { Award, ShieldCheck, ExternalLink, CheckCircle, FileText } from "lucide-react"

export default function BritishCouncilCertification() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 relative overflow-hidden border-y border-blue-800/50">
      
      {/* Full-Width Background Accents */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500 rounded-full opacity-10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-orange-500 rounded-full opacity-10 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Content Area */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16 max-w-7xl mx-auto">
          
          {/* Badge Icon Area */}
          <motion.div 
            className="flex-shrink-0 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-20 rounded-full"></div>
            <div className="bg-white/10 p-8 rounded-[2rem] backdrop-blur-md border border-white/20 relative z-10 flex flex-col items-center justify-center shadow-2xl">
              <Award className="w-24 h-24 text-orange-400 mb-3 drop-shadow-lg" />
              <span className="text-white font-bold tracking-widest text-sm uppercase">Certified</span>
            </div>
          </motion.div>
          
          {/* Text Content */}
          <div className="flex-grow text-center lg:text-left text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-full">
              <ShieldCheck className="w-5 h-5" /> Official Accreditation
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              British Council Certified UK Agent
            </h2>
            
            <p className="text-blue-100/90 text-lg md:text-xl max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              Rakepto Study Abroad is globally recognized and formally certified by the British Council. We strictly adhere to the National Code of Ethical Practice for UK Education Agents, ensuring complete transparency and premium support for your international journey.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-blue-50 text-lg">Code: <strong className="text-white">87209</strong></span>
              </div>
              <div className="hidden sm:block text-white/30">|</div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-blue-50 text-lg">Valid until: <strong className="text-white">31/10/2027</strong></span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0 w-full lg:w-auto mt-6 lg:mt-0">
            <a 
              href="https://enetbadges.com/MyBadges/Details?authCode=DCBZAFNTJXEBMYWE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-5 rounded-2xl shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300 group w-full text-lg border border-orange-400"
            >
              Verify Live Badge
              <ExternalLink className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* PDF Certificates Section */}
        <div className="pt-12 border-t border-white/10 max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">View Our Official Credentials</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Certificate 1 */}
            <motion.div 
              className="bg-white/5 p-4 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl flex flex-col"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-orange-400" />
                  <h4 className="text-white text-lg font-semibold">Certificate of Completion</h4>
                </div>
                <a 
                  href="https://ik.imagekit.io/j0xzq9pns/marketly/Cert_87209_103793_1.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="md:hidden text-orange-400 hover:text-orange-300 text-sm flex items-center gap-1"
                >
                  <FileText className="w-4 h-4" /> Open
                </a>
              </div>
              <div className="w-full h-[500px] rounded-2xl overflow-hidden bg-gray-100 flex-grow relative group">
                {/* Overlay removed to allow scrolling */}
                <iframe 
                  src="https://ik.imagekit.io/j0xzq9pns/marketly/Cert_87209_103793_1.pdf#toolbar=0&navpanes=0" 
                  className="w-full h-full border-none relative z-0"
                  title="British Council Certificate of Completion"
                />
              </div>
            </motion.div>

            {/* Certificate 2 */}
            <motion.div 
              className="bg-white/5 p-4 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl flex flex-col"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-orange-400" />
                  <h4 className="text-white text-lg font-semibold">Code of Conduct Acceptance</h4>
                </div>
                <a 
                  href="https://ik.imagekit.io/j0xzq9pns/marketly/Cert_87211_103793_5.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="md:hidden text-orange-400 hover:text-orange-300 text-sm flex items-center gap-1"
                >
                  <FileText className="w-4 h-4" /> Open
                </a>
              </div>
              <div className="w-full h-[500px] rounded-2xl overflow-hidden bg-gray-100 flex-grow relative group">
                {/* Overlay removed to allow scrolling */}
                <iframe 
                  src="https://ik.imagekit.io/j0xzq9pns/marketly/Cert_87211_103793_5.pdf#toolbar=0&navpanes=0" 
                  className="w-full h-full border-none relative z-0"
                  title="Code of Conduct Acceptance"
                />
              </div>
            </motion.div>
            
          </div>
        </div>
        
      </div>
    </section>
  )
}