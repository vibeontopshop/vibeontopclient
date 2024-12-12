"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BgImage from "../../assets/signin.jpg";
import Logo from "../../assets/Frame 1261153122.png";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 

  async function handleSignIn(e) {
    e.preventDefault(); 

    try {
      const response = await fetch("http://localhost:8080/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }), 
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Signin failed."); 
        return;
      }

      const data = await response.json();
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("email", data.email);
      console.log("User signed in successfully:", data);
      window.location.href = "/signup"; 
    } catch (err) {
      console.error("Error during signin:", err);
      setError("An error occurred while signing in."); 
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Client-side logic here, like redirecting after successful signin
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col lg:flex-row bg-gray-800 text-gray-800">
      <div className="lg:w-1/2 relative flex flex-col justify-center items-center bg-gray-100">
        <div className="absolute top-4 left-4 z-10">
          <Image
            src={Logo}
            alt="Vibe Logo"
            width={200}
            height={200}
          />
        </div>
        <div className="absolute inset-0">
          <Image
            src={BgImage}
            alt="Sign In Background"
            fill
            style={{ objectFit: "cover" }}  // Fixed objectFit
            className="z-0"
          />
        </div>
      </div>

      {/* Right Section - Sign In Form */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
          <p className="mt-1 text-sm text-gray-500">Please Sign-In Here</p>

          <form onSubmit={handleSignIn} className="mt-6 space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>} {/* Display error message */}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state on change
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember Me
                </label>
              </div>
              <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                 Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-[#B89C5D] rounded-md shadow hover:bg-[#8B7236] focus:outline-none focus:ring-2 focus:ring-[#8B7236] focus:ring-offset-2"
            >
              Sign in
            </button>

            <div className="mt-4 text-center">
              <span className="text-sm text-gray-700">
                Not Registered Yet?
              </span>
              <Link href="/signup" className="ml-1 text-blue-600 hover:underline">
                Create an Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
