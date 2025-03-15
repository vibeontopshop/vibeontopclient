'use client';
import React, { useState,useEffect } from 'react';

export default function Addaddress() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    streetAddress: '',
    Landmark: '',
    city: '',
    pincode: '',
    state: '',
    default: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
   const [token, setToken] = useState(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('https://vibeontopbackend.onrender.com/api/Shipping/addaddress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          streetAddress: formData.streetAddress,
          Landmark: formData.Landmark,
          city: formData.city,
          pincode: formData.pincode,
          state: formData.state,
          default: formData.default,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to add address');
      }

      setMessage('Address added successfully!');
      setFormData({
        name: '',
        phone: '',
        streetAddress: '',
        Landmark: '',
        city: '',
        pincode: '',
        state: '',
        default: false,
      });
    } catch (error) {
      console.error('Error:', error);
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Add a New Address</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border p-3 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Mobile Number"
          className="border p-3 rounded"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="streetAddress"
          placeholder="Flat, House No, Building, etc."
          className="border p-3 rounded"
          value={formData.streetAddress}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="Landmark"
          placeholder="Area, Colony, Street, etc."
          className="border p-3 rounded"
          value={formData.Landmark}
          onChange={handleChange}
          required
        />

        <div className="flex space-x-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            className="border p-3 rounded w-full"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            className="border p-3 rounded w-full"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="text"
          name="pincode"
          placeholder="Pin Code"
          className="border p-3 rounded"
          value={formData.pincode}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className={`py-3 px-6 rounded w-max text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-600 hover:bg-yellow-700'}`}
        >
          {loading ? 'Adding...' : 'Add A New Address'}
        </button>
      </form>

      {message && (
        <p className={`mt-4 ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
