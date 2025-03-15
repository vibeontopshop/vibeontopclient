'use client';
import * as React from "react";
import Image from "next/image";
function TopBanner() {
  return (
    <div className="flex flex-wrap justify-between items-center px-4 py-0 text-base leading-none text-center text-white bg-black min-h-[40px]">
      <div className="flex-1 self-stretch mx-0 my-auto">
        <span>Discount 20% For New Member,</span>
        <span className="font-extrabold">ONLY FOR TODAY</span>
        <span>!!</span>
      </div>
    </div>
  );
}

export default TopBanner;