'use client';
import * as React from "react";
import TopBanner from "./TopBanner";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function NavigationBar() {
  return (
    <div className="flex flex-col">
      <TopBanner />
      <div className="flex flex-wrap justify-between items-center px-8 py-0 mt-11 w-full max-md:gap-5 max-md:px-5 max-md:py-0 max-md:mt-10 max-sm:flex-col max-sm:items-start">
        <div className="flex gap-11 items-center min-w-[240px] w-[408px] max-md:pr-5">
          <Logo />
          <NavLinks />
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;