"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "../../assets/logo.png";
import BgImage from "../../assets/signin.jpg";
import Link from "next/link";
import Image from "next/image";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
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
      const response = await fetch("https://vibeontopbackend.onrender.com/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Sign-in failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.accessToken);

      console.log("Sign-in successful", data);
      router.push("/Mainpage");
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to sign in, please check your credentials.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row bg-gray-800 text-gray-800">
      <div className="lg:w-1/2 sm:relative flex flex-col justify-center items-center bg-gray-100">
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
            alt="Sign In Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
          <p className="mt-1 text-sm text-gray-500">Please sign in here</p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
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

            {/* Remember me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="h-4 w-4 text-gold-600 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  Remember Me
                </label>
              </div>
              <Link href="/forgotpass" className="text-sm text-gold-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-[#B89C5D] rounded-md shadow hover:bg-[#8B7236] focus:outline-none focus:ring-2 focus:ring-[#8B7236] focus:ring-offset-2"
            >
              Sign In
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            <div className="mt-4 text-center">
              <span>Not Registered Yet?</span>
              <Link href="/signup" className="text-black-600 hover:underline ml-1">
                Create an Account
              </Link>
            </div>
          </form>

          {/* Error Message */}
          {error && <p className="mt-4 text-red-600 text-sm">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Signin;
