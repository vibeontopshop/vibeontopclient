"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BgImage from "../../assets/Group 1000006143.png";
import Logo from "../../assets/Frame 1261153122.png";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    role: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("SignUp Error:", data);
        throw new Error(data.message || "Failed to sign up.");
      }

      setSuccess(data.message);
      setFormData({
        firstName: "",
        role: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error during signup:", error);
      setError(error.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row bg-gray-800 text-gray-800">
      {/* Left Section - Image and Logo */}
      <div className="lg:w-1/2 relative flex flex-col justify-center items-center bg-gray-100">
        {/* Logo */}
        <div className="absolute top-4 left-4 z-10 flex items-center px-3 py-2 rounded-md">
          <Image src={Logo} alt="Vibe Logo" width={200} height={200} priority />
        </div>

        {/* Main Image */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src={BgImage}
            alt="Sign Up Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>

      {/* Right Section - Sign Up Form */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900">Sign Up</h1>
          <p className="mt-2 text-sm text-gray-600">Please enter your details</p>

          {error && <p className="mt-4 text-red-500">{error}</p>}
          {success && <p className="mt-4 text-green-500">{success}</p>}

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
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
        </div>
      </div>
    </div>
  );
}
