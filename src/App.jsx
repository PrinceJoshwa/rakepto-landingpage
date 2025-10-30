

"use client"

import { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import EndToEndSupport from "./components/EndToEndSupport"
import SOP from "./components/SOP"
import HowItWorks from "./components/HowItWorks"
import Testimonials from "./components/Testimonials"
// import SupportServices from "./components/SupportServices"
// import SteppingAbroad from "./components/SteppingAbroad"
import ApplicationProcess from "./components/ApplicationProcess"
import Contact from "./components/Contact"
import WhatsAppChat from "./components/WhatsAppChat"
import Footer from "./components/Footer"
import CourseFinder from "./pages/CourseFinder"
import FreeFlightPopup from "./components/FreeFlightPopup"
import EducationLoan from "./components/education-loan"
import TestPreparation from "./components/TestPreparation"
import PickDestination from "./components/PickDestination"; // Import the PickDestination component
import Partner from "./components/Partner"
import { Toaster } from "sonner"
import Scholarship from "./components/Scholarship"
import Blogs from "./pages/Blogs"
import BlogPost from "./pages/Blog"
import Thankyou from "./components/contact/Thankyou"

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    } else {
      const id = hash.replace("#", "")
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [hash]) // Removed unnecessary pathname dependency

  return null
}

function MainContent() {
    const location = useLocation()

useEffect(() => {
  const params = new URLSearchParams(location.search);
  const scrollTo = params.get("scrollTo");

  if (scrollTo) {
    const target = document.getElementById(scrollTo);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState({}, "", location.pathname); // clean URL
    }
  }
}, [location.search]);

  return (
    <>
      <Hero />
      <Services />
      <PickDestination /> {/* Added PickDestination component */}
      <EndToEndSupport />
      <SOP />
      <HowItWorks />
      {/* <SupportServices /> */}
      {/* <SteppingAbroad /> */}
      <ApplicationProcess />
      <Testimonials />
      {/* <Partner /> */}
      <Contact />
      <WhatsAppChat />
      <FreeFlightPopup />
    </>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-center" />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/course-finder" element={<CourseFinder />} />
            <Route path="/education-loan" element={<EducationLoan />} />            
            <Route path="/test-preparation" element={<TestPreparation />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogPost />} />
            <Route path="/contact/thankyou" element={<Thankyou/>} />
            <Route path="/freeflight/thankyou" element={<Thankyou/>} />
            <Route path="/loan/thankyou" element={<Thankyou/>} />

          </Routes>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </Router>
  )
}

export default App

