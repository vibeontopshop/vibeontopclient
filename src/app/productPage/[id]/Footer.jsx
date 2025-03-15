'use client';
import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import {
  SiVisa,
  SiMastercard,
  SiPaypal,
  SiApplepay,
  SiGooglepay,
} from "react-icons/si";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col p-20 w-full bg-zinc-100 max-md:px-10 max-md:py-16 max-sm:px-5 max-sm:py-10">
      <div className="flex flex-wrap gap-20 mx-auto my-0 max-w-[1240px] max-md:gap-10 max-sm:flex-col max-sm:gap-10">
        <div className="flex-[0_0_240px]">
          <div className="flex gap-4 items-center">
            <Image
              src="/logo.png"
              alt="Jodiac Logo"
              width={50}
              height={50}
              className="h-auto w-[81px]"
              priority
            />
          </div>
          <div className="mt-6 text-sm leading-6 max-w-[248px] text-black text-opacity-60">
            Jodiac collection! You&apos;ll find our exclusive collection of
            Swag and cosmic style T-shirts, all designed in-house by our
            creative team.
          </div>
          <div className="flex gap-3 mt-4">
            <a
              href="#"
              aria-label="Twitter"
              className="flex justify-center items-center w-11 h-11 text-xl text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex justify-center items-center w-11 h-11 text-xl text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex justify-center items-center w-11 h-11 text-xl text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="flex-[0_0_240px] max-md:flex-[0_0_200px] max-sm:w-full max-sm:flex-[0_0_auto]">
          <div className="text-base font-medium text-black uppercase tracking-[3px]">
            Get In Touch
          </div>
          <div className="mt-7 text-base leading-5 text-zinc-600">
            <address className="not-italic">
              Keota Matri Colony, Post-Hooghly, Sahaganj, Bandel, Hooghly,
              West-Bengal, Pin-712104, India
              <br />
              <br />
              <a
                href="tel:+910000000000"
                className="hover:text-black transition-colors"
              >
                +91 000000000000
              </a>
              <br />
              <br />
              <a
                href="mailto:jodiac777@gmail.com"
                className="hover:text-black transition-colors"
              >
                jodiac777@gmail.com
              </a>
            </address>
          </div>
        </div>
        <div className="flex-[0_0_240px] max-md:flex-[0_0_200px] max-sm:w-full max-sm:flex-[0_0_auto]">
          <div className="text-base font-medium text-black uppercase tracking-[3px]">
            Need help?
          </div>
          <nav className="mt-7 text-base leading-5 text-zinc-600">
            <ul>
              <li className="mb-6">
                <a href="#" className="hover:text-black transition-colors">
                  Login/Sign-up
                </a>
              </li>
              <li className="mb-6">
                <a href="#" className="hover:text-black transition-colors">
                  Shop
                </a>
              </li>
              <li className="mb-6">
                <a href="#" className="hover:text-black transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Return and Cancellation Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-[0_0_240px] max-md:flex-[0_0_200px] max-sm:w-full max-sm:flex-[0_0_auto]">
          <div className="text-base font-medium text-black uppercase tracking-[3px]">
            More
          </div>
          <nav className="mt-7 text-base leading-5 text-zinc-600">
            <ul>
              <li className="mb-6">
                <a href="#" className="hover:text-black transition-colors">
                  Contact Us
                </a>
              </li>
              <li className="mb-6">
                <a href="#" className="hover:text-black transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex justify-between items-center pt-5 mx-auto mt-10 mb-0 w-full border-t border-solid border-t-black border-t-opacity-10 max-w-[1240px] max-sm:flex-col max-sm:gap-5 max-sm:text-center">
        <div className="text-sm text-black text-opacity-60">
          Jodiac.com &copy; {new Date().getFullYear()}, All Rights Reserved
        </div>
        <div className="flex gap-3 items-center max-sm:justify-center">
          <SiVisa className="w-auto h-[30px]" aria-label="Visa" />
          <SiMastercard className="w-auto h-[30px]" aria-label="Mastercard" />
          <SiPaypal className="w-auto h-[30px]" aria-label="PayPal" />
          <SiApplepay className="w-auto h-[30px]" aria-label="Apple Pay" />
          <SiGooglepay className="w-auto h-[30px]" aria-label="Google Pay" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
