'use client';
import * as React from "react";
import Image from "next/image";

function NavLinks() {
  const links = [
    { text: "Home", hasDropdown: false },
    { text: "Category", hasDropdown: true },
  ];

  return (
    <div className="flex gap-8 items-center text-2xl whitespace-nowrap w-[173px] max-sm:hidden">
      {links.map((link, index) => (
        <div
          key={index}
          className="flex gap-1 items-center text-neutral-900 cursor-pointer hover:text-customYellow transition-colors"
        >
          <div>{link.text}</div>
          
          {link.hasDropdown && (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

export default NavLinks;
