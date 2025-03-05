"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import BgImage from "../../assets/signup.png";
import Logo from "../../assets/logo.png";

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    FirstName: "",
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log("Submitting form data:", formData);
  
      const response = await fetch("https://vibeontopbackend.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Sign-up failed.");
      }
  
      const data = await response.json();
      console.log("API Response:", data);
  
      if (!data.accessToken) {
        throw new Error("No accessToken received. Check backend response.");
      }
  
      localStorage.setItem("token", data.accessToken);
  
      setError(null);
      setSuccessMessage("Sign-up successful! Redirecting...");
  
      router.push("/Mainpage");
    } catch (err) {
      console.error("Sign-up error:", err);
      setError(err.message);
      setSuccessMessage(null);
    }
  };
  
  

  return (
    <div className="flex min-h-screen flex-col lg:flex-row bg-gray-800 text-gray-800">
      {/* Left Section - Image and Logo */}
      <div className="lg:w-1/2 relative flex flex-col justify-center items-center bg-gray-100">
          {/* Logo */}
        <div className=" absolute top-0 left-64 z-10 flex items-center px-0 py-8 rounded-md sm:left-10 sm:top-0 lg:left-4 lg:top-4">
          <Image
            src={Logo}
            alt="Vibe Logo"
            width={200}
            height={200}
            className="w-1/2 sm:w-2/3 lg:w-1/3"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src={BgImage}
            alt="Sign Up Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      </div>

      {/* Right Section - Sign Up Form */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900">Sign Up</h1>
          <p className="mt-2 text-sm text-gray-600">Please enter your details</p>

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
                  Select a role
                </option>
                <option value="Business">Business</option>
                <option value="Customer">Customer</option>
              </select>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
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

          {/* Error Message */}
          {error && <p className="mt-4 text-red-600 text-sm">{error}</p>}
          {/* Success Message */}
          {successMessage && <p className="mt-4 text-green-600 text-sm">{successMessage}</p>}
        </div>
      </div>
    </div>
  );
}
