"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/Frame 1261153122.png";

export default function Onboarding() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col lg:flex-row bg-gray-900 text-gray-800">
      {/* Left Section - Background Image and Welcome Message */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center bg-gray-100 relative">
        <div className="absolute top-4 left-4">
          <Image src={Logo} alt="Vibe Logo" width={200} height={200} />
        </div>
        <div className="relative z-10 text-center px-6 py-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-gray-900">Welcome to Vibe</h1>
          <p className="mt-3 text-gray-700 text-base">
            Your one-stop platform to explore and connect. Let’s get started!
          </p>
        </div>
      </div>

      {/* Right Section - Get Started Button */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center p-10 bg-white">
        <div className="w-full max-w-md text-center">
          <h2 className="text-3xl font-bold text-gray-900">Join the Community</h2>
          <p className="mt-2 text-gray-600 text-sm">
            Experience a seamless journey with us.
          </p>

          <button
            onClick={() => router.push("/signup")}
            className="w-full mt-8 py-3 px-5 text-white bg-[#B89C5D] rounded-lg shadow-md hover:bg-[#8B7236] focus:outline-none focus:ring-2 focus:ring-[#8B7236] focus:ring-offset-2 transition duration-200"
            aria-label="Get Started"
          >
            Get Started
          </button>

          <div className="mt-6 text-sm text-gray-700">
            Already have an account?
            <Link href="/signin" className="ml-1 text-blue-600 hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
