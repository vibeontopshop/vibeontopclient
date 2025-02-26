import React from 'react';
import { FaTrash } from 'react-icons/fa';

const MyOrders = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-4/6 max-w-4xl mx-auto md:w-full sm:w-full sm:px-4">
      {/* Order Items */}
      <div className="space-y-4">
        {["Yellow", "Green", "Black"].map((color, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-center sm:justify-between border p-4 rounded-lg">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s" 
                alt="Product" className="w-20 h-20 rounded-md object-cover" />
              <div className="text-center sm:text-left mt-2 sm:mt-0">
                <h2 className="font-semibold">Jacquard Woven Fabric</h2>
                <p className="text-sm text-gray-500">Color: {color}</p>
                <p className="text-sm text-gray-500">Weight: 120 gms</p>
                <p className="text-sm text-gray-500">Size: XL</p>
                <p className="text-sm text-gray-500">Qty: 50</p>
              </div>
            </div>
            <div className="text-center sm:text-right flex flex-col justify-center items-center sm:items-end mt-2 sm:mt-0">
              <p className="text-lg font-bold text-yellow-600">$180</p>
              <button className="text-gray-400 hover:text-red-500">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-2xl mx-auto mt-6">
        {/* Step 1 - Active */}
        <div className="flex flex-col items-center text-center mb-4 sm:mb-0">
          <span className="text-yellow-500 font-medium text-sm">Order Confirmed</span>
          <div className="w-5 h-5 bg-yellow-500 rounded-full mt-2"></div>
          <span className="text-gray-500 text-xs mt-2">Wed, 11th Jan</span>
        </div>

        {/* Line */}
        <div className="hidden sm:flex flex-1 h-0.5 bg-gray-300"></div>

        {/* Step 2 - Inactive */}
        <div className="flex flex-col items-center text-center mb-4 sm:mb-0">
          <span className="text-gray-400 font-medium text-sm">Shipped</span>
          <div className="w-5 h-5 bg-gray-300 rounded-full mt-2"></div>
          <span className="text-gray-400 text-xs mt-2">Wed, 11th Jan</span>
        </div>

        {/* Line */}
        <div className="hidden sm:flex flex-1 h-0.5 bg-gray-300"></div>

        {/* Step 3 - Inactive */}
        <div className="flex flex-col items-center text-center mb-4 sm:mb-0">
          <span className="text-gray-400 font-medium text-sm">Out For Delivery</span>
          <div className="w-5 h-5 bg-gray-300 rounded-full mt-2"></div>
          <span className="text-gray-400 text-xs mt-2">Wed, 11th Jan</span>
        </div>

        {/* Line */}
        <div className="hidden sm:flex flex-1 h-0.5 bg-gray-300"></div>

        {/* Step 4 - Inactive */}
        <div className="flex flex-col items-center text-center">
          <span className="text-gray-400 font-medium text-sm">Delivered</span>
          <div className="w-5 h-5 bg-gray-300 rounded-full mt-2"></div>
          <span className="text-gray-400 text-xs mt-2">Expected by, Mon 16th</span>
        </div>
      </div>

      {/* Shipping Details */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg">Shipping Address</h3>
        <p className="text-sm text-gray-500">Zyphr Ayo</p>
        <p className="text-sm text-gray-500">752 Park Avenue, Manchester</p>
        <p className="text-sm text-gray-500">Kentucky, 35487</p>
      </div>

      {/* Payment Method */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg">Payment Method</h3>
        <p className="text-sm text-gray-500">Cash On Delivery</p>
      </div>
    </div>
  );
};

export default MyOrders;
