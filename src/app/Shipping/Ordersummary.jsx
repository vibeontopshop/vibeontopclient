'use client';
import React, { useEffect, useState } from 'react';

export default function Ordersummary() {
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem('selectedProduct'));
    if (storedOrder) {
      setOrderData(storedOrder);
    }
  }, []);

  if (!orderData) return <div className="p-6">No items in your cart</div>;

  const subtotal = orderData.price * orderData.quantity;
  const discount = (subtotal * orderData.discount) / 100;
  const total = subtotal - discount;

  return (
    <div className="w-full md:w-1/3 p-6 border border-gray-300 rounded-md h-max">
      <h2 className="text-xl font-semibold mb-6">ORDER SUMMARY</h2>

      <div className="flex justify-between mb-2">
        <span>Product</span>
        <span>{orderData.name}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Color</span>
        <span>{orderData.color}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Size</span>
        <span>{orderData.size}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Weight</span>
        <span>{orderData.weight}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Quantity</span>
        <span>{orderData.quantity}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>₹{subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Discount ({orderData.discount}%)</span>
        <span className="text-green-600">-₹{discount.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-lg font-bold mb-6">
        <span>Total</span>
        <span>₹{total.toFixed(2)}</span>
      </div>

      <button className="bg-yellow-600 text-white py-3 px-6 rounded w-full">
        Checkout Here →
      </button>
    </div>
  );
}
