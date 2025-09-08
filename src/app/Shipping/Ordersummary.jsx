'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Ordersummary() {
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("selectedProduct"));
    if (storedOrder) {
      setOrderData(storedOrder);
    }
  }, []);

  if (!orderData) {
    return (
      <div className="flex items-center justify-center w-full h-[400px] text-amber-700 font-bold text-2xl">
        Loading Order Summary...
      </div>
    );
  }

  const total =
    orderData.price * orderData.quantity -
    (orderData.price * orderData.quantity * orderData.discount) / 100;

  return (
    <div className="flex justify-center items-center w-full py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.03, rotate: 0.5 }}
        className="w-[360px] sm:w-[420px] bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 rounded-2xl shadow-2xl overflow-hidden p-6 relative"
      >
        {/* Header */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-3xl font-extrabold text-amber-800 text-center tracking-wide"
        >
          Order Summary
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="h-1 w-24 bg-amber-600 mx-auto mt-2 mb-5 rounded-full origin-left"
        ></motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="space-y-3 text-gray-800 text-base sm:text-lg"
        >
          <p>
            <span className="font-semibold">Product:</span> {orderData.name}
          </p>
          <p>
            <span className="font-semibold">Color:</span> {orderData.color}
          </p>
          <p>
            <span className="font-semibold">Size:</span> {orderData.size}
          </p>
          <p>
            <span className="font-semibold">Weight:</span> {orderData.weight}
          </p>
          <p>
            <span className="font-semibold">Quantity:</span>{" "}
            {orderData.quantity}
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="my-5 border-t border-amber-400 origin-left"
        ></motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="space-y-2"
        >
          <p className="font-semibold">
            Subtotal:{" "}
            <span className="text-gray-900">
              ₹{(orderData.price * orderData.quantity).toFixed(2)}
            </span>
          </p>
          <p className="font-semibold">
            Discount:{" "}
            <span className="text-green-600">{orderData.discount}%</span>
          </p>
          <p className="text-xl font-bold text-red-600">
            Total: ₹{total.toFixed(2)}
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-8 text-center"
        >
          <p className="text-lg font-bold text-amber-700 animate-pulse">
            Thank You for Choosing Us! 💛
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
