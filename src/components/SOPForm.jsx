
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, Earth } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "../supabase/supabaseClient"; // Import Supabase client
import { logError } from "../utils/logger"; // Import logger if needed

const formFields = [
  { name: "name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
  { name: "email", label: "Email", type: "email", placeholder: "Enter your email address" },
];

const FormField = ({ label, type, value, onChange, name, placeholder, error }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    {type === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows="4"
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none ${
          error ? "border-red-500" : "border-gray-200"
        }`}
        placeholder={placeholder}
        style={{ color: "#000" }} // Ensure text color is black
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
          error ? "border-red-500" : "border-gray-200"
        }`}
        placeholder={placeholder}
        style={{ color: "#000" }} // Ensure text color is black
      />
    )}
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);

function SOPForm({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    country: "", // Added country field
  });
  const [errors, setErrors] = useState({});
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        email: "",
        message: "",
        country: "",
      });
      setErrors({});
      setIsClosing(false);
    }
  }, [isOpen]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.country) newErrors.country = "Please select a destination country"; // Validate country
    if (!formData.message.trim()) newErrors.message = "Message is required"; // Validate message

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const contactData = {
        ...formData,
        created_at: new Date().toISOString(),
      };

      // Insert data into Supabase
      const { error } = await supabase.from("contact").insert([contactData]);

      if (error) throw error;

      toast.success("Form submitted successfully!");
      handleClose();
    } catch (error) {
      logError(error, { formData });
      console.error("Detailed error:", error);

      if (error.message.includes("Failed to fetch")) {
        toast.error("Network error. Please check your internet connection and try again.");
      } else if (error.code === "23505") {
        toast.error("This email has already been submitted. Please use a different email address.");
      } else if (error.code === "42P01") {
        toast.error("Database configuration error. Please contact support.");
      } else {
        toast.error("An error occurred while submitting your message. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-md relative overflow-hidden"
          >
            <button
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors z-10"
              onClick={handleClose}
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <div className="p-6 pb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your SOP Journey</h3>
              <p className="text-gray-600">Fill in your details to get started</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="space-y-4">
                {formFields.map((field) => (
                  <FormField
                    key={field.name}
                    {...field}
                    value={formData[field.name]}
                    onChange={handleChange}
                    error={errors[field.name]}
                  />
                ))}
                {/* Destination Country Dropdown */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Destination Country</label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <Earth size={16} />
                    </div>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                        errors.country ? "border-red-500" : "border-gray-200"
                      }`}
                      style={{ color: "#000" }} // Ensure text color is black
                    >
                      <option value="">Select a country</option>
                      <option value="USA">United States of America</option>
                      <option value="AUS">Australia</option>
                      <option value="CAN">Canada</option>
                      <option value="GBR">United Kingdom</option>
                      <option value="NZL">New Zealand</option>
                      <option value="SGP">Singapore</option>
                      <option value="ARE">Dubai</option>
                      <option value="IRL">Ireland</option>
                      <option value="DEU">Germany</option>
                      <option value="FRA">France</option>
                      <option value="SWE">Sweden</option>
                      <option value="NLD">Netherlands</option>
                      <option value="AUT">Austria</option>
                      <option value="DNK">Denmark</option>
                      <option value="FIN">Finland</option>
                      <option value="ITA">Italy</option>
                      <option value="HUN">Hungary</option>
                      <option value="CHE">Switzerland</option>
                      <option value="ESP">Spain</option>
                      <option value="LTU">Lithuania</option>
                      <option value="CYP">Cyprus</option>
                      <option value="POL">Poland</option>
                      <option value="MYS">Malaysia</option>
                      <option value="MUS">Mauritius</option>
                      <option value="CHN">China</option>
                      <option value="VNM">Vietnam</option>
                      <option value="MLT">Malta</option>
                      <option value="JPN">Japan</option>
                      <option value="BEL">Belgium</option>
                      <option value="RUS">Russia</option>
                      <option value="KOR">South Korea</option>
                      <option value="IND">India</option>
                      <option value="GEO">Georgia</option>
                      <option value="MCO">Monaco</option>
                      <option value="HRV">Croatia</option>
                    </select>
                  </div>
                  {errors.country && <p className="text-xs text-red-500">{errors.country}</p>}
                </div>

                <FormField
                  label="Message"
                  type="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What would you like to tell us?"
                  error={errors.message}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Submit
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SOPForm;