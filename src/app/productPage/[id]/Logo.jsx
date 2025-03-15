'use client';
import * as React from "react";
import Image from "next/image";
function Logo() {
  return (
    <div className="flex gap-4 items-center leading-tight w-[120px]">
      <div className="flex gap-3 items-center w-[120px]">
        <div className="flex gap-1 items-start h-14 w-[120px]">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a02f88826d84d8d8112147d5636360a9d05febaedfecfd84bdd1d51d59102d9c?apiKey=bee90f4503074c6fb2a2afcb7f5d52b9&"
            alt="Company logo"
            className="object-contain aspect-[1.07] shadow-[0_16px_42px_rgba(68,68,68,0.04)] w-[60px]"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
}

export default Logo;