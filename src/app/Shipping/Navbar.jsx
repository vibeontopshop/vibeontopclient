'use client';

import React from 'react';
import Image from 'next/image';
import Logo from "../../assets/logoEdit.png"; 

export default function Navbar() {
  return (
    <div>
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Discount 20% For New Member. <span className="font-bold">ONLY FOR TODAY!!</span>
      </div>

      <header className="relative flex items-center justify-between px-10 py-4 shadow-md bg-white">
      <div className="flex items-center space-x-2 text-2xl font-bold">
          <Image src={Logo} alt="Logo"className="absolute top-0 left-5 h-20 w-20"/>
        </div>
        <nav className="flex items-center space-x-8 text-black">
          <a href="#" className="hover:text-yellow-600">HOME</a>
          <a href="#" className="hover:text-yellow-600">CATEGORY</a>

          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-yellow-600">CONTACT</a>
            <a href="#" className="hover:text-yellow-600">ABOUT</a>
            <button className="border border-black px-4 py-2 rounded bg-yellow-600 text-white hover:bg-yellow-700">
              Log In
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
