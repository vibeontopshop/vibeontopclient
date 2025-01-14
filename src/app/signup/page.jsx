"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import BgImage from "../../assets/Group 1000006143.png";
import Logo from "../../assets/Frame 1261153122.png";

export default function SignUp() {
  const [formData, setFormData] = useState({
    FirstName: '',
    role: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://vibeontopbackend.onrender.com/api/auth/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData), // Ensure `formData` is stringified
        }
      );

      if (!response.ok) {
        // Handle error response
        const errorData = await response.json().catch(() => ({ message: 'Signup failed' }));
        console.error('Error response:', errorData);
        setError(errorData.message || 'Signup failed');
        return;
      }

      // Handle successful response
      const data = await response.json();
      console.log('Signup successful', data);
      setSuccess('Signup successful! Redirecting...');
      setError(null);

      // Redirect after a short delay
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (error) {
      console.error('Fetch error:', error);
      setError('An error occurred during signup.');
      setSuccess(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen lg:flex-row bg-gray-800 text-gray-800">
      {/* Left Section - Background Image */}
      <div className="relative lg:w-1/2 w-full h-64 lg:h-auto flex flex-col justify-center items-center bg-gray-100">
        <div className="absolute top-4 left-4 z-10">
          <Image src={Logo} alt="Vibe Logo" width={150} height={150} priority />
        </div>
        <div className="absolute inset-0">
          <Image
            src={BgImage}
            alt="Sign Up Background"
            fill
            style={{ objectFit: "cover" }}
            className="z-0"
          />
        </div>
      </div>

      {/* Right Section - Sign Up Form */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center p-4 sm:p-8 bg-white">
        <div className="w-full max-w-sm sm:max-w-md">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Sign Up</h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Please enter your details
          </p>

          {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
          {success && <p className="mt-4 text-sm text-green-500">{success}</p>}

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {/* First Name */}
            <div>
              <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="FirstName"
                name="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your first name"
              />
            </div>

            {/* Role Dropdown */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  Select your role
                </option>
                <option value="Business">Business</option>
                <option value="Customer">Customer</option>
              </select>
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                I agree to the{" "}
                <Link href="/terms" className="text-blue-600 hover:underline">
                  Terms & Conditions
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-black rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
