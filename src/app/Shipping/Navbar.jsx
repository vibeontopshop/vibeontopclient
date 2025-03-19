'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import Logo from "../../assets/logoEdit.png";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not available. You need to sign up to view the page.');
        return;
      }

      try {
        const response = await axios.get('https://vibeontopbackend.onrender.com/api/auth/getuser', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {/* Top Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black text-white text-center py-2 text-sm"
      >
        Discount 20% For New Members. <span className="font-bold">ONLY FOR TODAY!!</span>
      </motion.div>

      {/* Main Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative flex items-center justify-between px-5 md:px-10 py-4 shadow-md bg-white"
      >
        {/* Logo */}
        <div className="flex items-center space-x-2 text-2xl font-bold">
          <Image
            src={Logo}
            alt="Logo"
            className="h-12 w-12 md:h-16 md:w-16"
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden  md:flex items-center space-x-8 text-black">
          {['HOME', 'CATEGORY', 'CONTACT', 'ABOUT'].map((item, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative text-black hover:text-yellow-600 transition duration-300 group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-500 transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_10px_#facc15]"></span>
            </motion.a>
          ))}
          {user ? (
            <motion.div
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="px-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-700 to-black text-lg animate-pulse drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]"
              >
                👋 Good to go, {user.name}!
              </motion.span>
            </motion.div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-black px-4 py-2 rounded bg-yellow-600 text-white hover:bg-yellow-700 transition duration-300"
            >
              Log In
            </motion.button>
          )}
        </nav>
        <div className="md:hidden z-20">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl text-black focus:outline-none"
          >
            {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 right-5 bg-white rounded-md shadow-lg flex flex-col space-y-4 px-6 py-4 w-48 z-10"
            >
              {['HOME', 'CATEGORY', 'CONTACT', 'ABOUT'].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)} // Close menu when clicked
                  className="relative text-black hover:text-yellow-600 transition duration-300 group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-500 transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_10px_#facc15]"></span>
                </motion.a>
              ))}
              {user ? (
                <motion.div
                  className="flex items-center space-x-2 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-700 to-black text-lg animate-pulse drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]"
                  >
                    Good to go {user.name}!
                  </motion.span>
                </motion.div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-black px-4 py-2 rounded bg-yellow-600 text-white hover:bg-yellow-700 transition duration-300"
                >
                  Log In
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
