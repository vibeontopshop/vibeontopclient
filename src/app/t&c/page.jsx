"use client"

import { motion } from "framer-motion"

export default function Terms() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#f8f6f1] min-h-screen px-6 md:px-20 py-12 font-serif text-[#1e1e1e]"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-8 border-b pb-4 border-[#d4cfc4]">
          Terms & Conditions
        </h1>
        <p className="text-lg leading-relaxed space-y-4">
          Welcome to <span className="italic font-semibold">VibeOnTop</span>. These Terms & Conditions govern your use of our website and services, whether you are shopping as an individual customer or operating as a business. By accessing or using our platform, you agree to comply with these terms.
          <br /><br />
          VibeOnTop is an eCommerce platform specializing in clothing manufacturing and distribution. We serve both Business-to-Customer (B2C) and Business-to-Business (B2B) users, offering high-quality garments for personal use as well as bulk wholesale purchases. Users are required to register with accurate information and select the correct role — either as a customer or a business. Misuse of account roles may result in suspension or termination.
          <br /><br />
          All product prices, descriptions, and availability are subject to change without notice. Pricing may vary depending on order quantity, customization, and user type (B2B or B2C). Orders must be paid in full at the time of purchase unless a separate agreement is made for wholesale clients.
          <br /><br />
          We strive to process and ship orders efficiently; however, delivery timelines may vary based on location and order volume. VibeOnTop is not responsible for delays caused by third-party carriers or customs. Returns are accepted for B2C orders under specific conditions outlined in our Return Policy. For B2B orders, returns are only allowed in the case of defects or fulfillment errors.
          <br /><br />
          All content on this website, including designs, images, and branding, is the intellectual property of VibeOnTop and may not be copied or reused without permission. We are not liable for any indirect or consequential damages related to the use of our products or platform.
          <br /><br />
          These terms are governed by the laws of your local jurisdiction. We reserve the right to update or change our Terms & Conditions at any time. Continued use of the platform after updates constitutes agreement to the revised terms.
          <br /><br />
          If you have any questions about these terms, please contact us at <a href="mailto:support@vibeontop.com" className="underline decoration-[#9b8f80] hover:text-[#645f57]">support@vibeontop.com</a>.
        </p>
      </div>
    </motion.div>
  )
}
