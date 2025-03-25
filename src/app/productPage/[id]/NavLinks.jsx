'use client';
import { useRouter } from "next/navigation";
import * as React from "react";

function NavLinks() {
  const links = [
    { text: "Home", hasDropdown: false },
    { text: "Category", hasDropdown: true },
  ];
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/Cart');
  };
  return (
    <nav className="flex justify-between items-center w-full px-8 py-4 text-lg font-medium text-neutral-800 max-sm:hidden">
      <div className="flex items-center gap-10">
        {links.map((link, index) => (
          <div
            key={index}
            className="group relative flex items-center gap-1 cursor-pointer transition-colors duration-300 hover:text-customYellow"
          >
            <span>{link.text}</span>

            {link.hasDropdown && (
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            )}
            {link.hasDropdown && (
              <div className="absolute top-8 left-0 hidden w-40 bg-white shadow-lg rounded-md group-hover:flex flex-col py-2 transition-all duration-300 z-10">
                <a className="px-4 py-2 hover:bg-gray-100 text-sm text-neutral-700" href="#">Subcategory 1</a>
                <a className="px-4 py-2 hover:bg-gray-100 text-sm text-neutral-700" href="#">Subcategory 2</a>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-right">
        <button className="relative p-2 -right-3/4 rounded-full hover:bg-gray-100 transition-colors duration-300 group" onClick={handleRedirect}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-neutral-800 transition-transform duration-300 group-hover:scale-110"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.5l1.72 12.94a2.25 2.25 0 002.24 2.06h9.06a2.25 2.25 0 002.24-2.06L20.25 6H5.25"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 21a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-9 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            />
          </svg>
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-semibold">
            2
          </span>
        </button>
      </div>
    </nav>
  );
}

export default NavLinks;
