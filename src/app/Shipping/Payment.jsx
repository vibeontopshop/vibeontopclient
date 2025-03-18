'use client';
import React, { useState } from 'react';

export default function Payment({ onPaymentSuccess }) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      if (!paymentMethod) {
        setMessage('Please select a payment method.');
        setLoading(false);
        return;
      }

      if (paymentMethod === 'upi' && !upiId.trim()) {
        setMessage('Please enter your UPI ID.');
        setLoading(false);
        return;
      }

      setTimeout(() => {
        setLoading(false);
        setMessage('Payment method selected successfully!');

        localStorage.setItem('paymentStatus', 'success');
        localStorage.setItem('paymentMethod', paymentMethod);
        console.log(paymentMethod)
        if (paymentMethod === 'upi') {
          localStorage.setItem('upiId', upiId);
        }
        if (onPaymentSuccess) {
          onPaymentSuccess();
        }
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
      setMessage('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Select Payment Method</h2>
      <form onSubmit={handlePaymentSubmit} className="flex flex-col space-y-4">
        <div className="border p-4 rounded flex flex-col space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={() => setPaymentMethod('upi')}
              className="h-4 w-4"
            />
            <span>UPI</span>
          </label>
          {paymentMethod === 'upi' && (
            <input
              type="text"
              placeholder="Enter your UPI ID"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="border p-3 rounded"
              required
            />
          )}
        </div>

        <div className="border p-4 rounded flex items-center space-x-2">
          <input
            type="radio"
            name="paymentMethod"
            value="Cash on Delivery"
            checked={paymentMethod === 'Cash on Delivery'}
            onChange={() => setPaymentMethod('Cash on Delivery')}
            className="h-4 w-4"
          />
          <span>Cash on Delivery</span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`py-3 px-6 rounded w-max text-white ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-yellow-600 hover:bg-yellow-700'
          }`}
        >
          {loading ? 'Processing...' : 'Continue to Review'}
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 ${
            message.includes('success') ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
