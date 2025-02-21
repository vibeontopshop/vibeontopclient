import * as React from "react";
import { ProductCardProps } from "./types";
import Image from "next/image";

export function ProductCard({ title, number, imageSrc }: ProductCardProps) {
  return (
    <div className="flex flex-col px-14 py-12 w-full bg-neutral-900 bg-opacity-20 max-md:px-5 max-md:max-w-full">
      {/* Title */}
      <h2 className="text-5xl font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 max-md:text-4xl">
        {title}
      </h2>

      {/* Number + Image + Sale Info */}
      <div className="flex gap-3.5 self-start mt-2 text-3xl">
        <div className="flex gap-2 items-center whitespace-nowrap">
          {/* Number */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            {number}
          </span>

          {/* Image */}
          <div className="w-12 h-12 relative">
            <Image
              loading="lazy"
              src={imageSrc}
              alt="Product"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Sale Text */}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Summer Sale
        </span>
      </div>
    </div>
  );
}
