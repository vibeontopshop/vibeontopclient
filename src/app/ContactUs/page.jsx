"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60 },
  },
};

export default function Contactus() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f4ef] text-[#2f2f2f] font-serif px-6 py-16 md:px-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-10 border border-[#d4cfc2] relative overflow-hidden"
      >
        {/* Top decorative element */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#bfae90] via-[#a1927a] to-[#bfae90]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />

        <motion.h1
          className="text-4xl font-semibold text-center mb-10 tracking-wide"
          variants={itemVariants}
        >
          Contact Us
        </motion.h1>

        {!submitted ? (
          <motion.form
            className="space-y-8"
            variants={containerVariants}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            {["Full Name", "Email Address", "Your Message"].map((label, idx) => (
              <motion.div key={label} variants={itemVariants} className="relative">
                <label className="block mb-2 text-lg">{label}</label>
                {label === "Your Message" ? (
                  <textarea
                    rows={5}
                    className="peer w-full border border-[#c7c2b5] bg-[#fdfcf9] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bfae90] transition duration-300"
                    placeholder=""
                  />
                ) : (
                  <input
                    type={label.includes("Email") ? "email" : "text"}
                    className="peer w-full border border-[#c7c2b5] bg-[#fdfcf9] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bfae90] transition duration-300"
                    placeholder=""
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.04, rotate: -0.2 }}
              whileTap={{ scale: 0.98 }}
              className="block mx-auto bg-[#bfae90] text-white tracking-wide font-medium px-8 py-3 rounded-xl shadow-md transition duration-300 hover:bg-[#a1927a]"
              type="submit"
            >
              Send Message
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80 }}
            className="text-center py-12"
          >
            <p className="text-2xl mb-2">🎉 Thank you!</p>
            <p className="text-lg text-[#5a5548]">We'll be in touch shortly.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
