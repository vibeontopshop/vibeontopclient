import * as React from "react";
import { ProductCardProps } from "./types";
import Image from "next/image";

export function ProductCard({ title, number, imageSrc }: ProductCardProps) {
  return (
    <div className="flex flex-col px-14 py-12 w-full bg-neutral-900 bg-opacity-20 max-md:px-5 max-md:max-w-full">
      <div className="text-5xl leading-tight bg-clip-text bg-[linear-gradient(95deg,#FDFDFD_3.88%,#9C9C9C_246.6%)] max-md:text-4xl">
        {title}
      </div>
      <div className="flex gap-3.5 self-start mt-2 text-3xl">
        <div className="flex gap-2 whitespace-nowrap">
          <div className="grow bg-clip-text bg-[linear-gradient(95deg,#FDFDFD_3.88%,#9C9C9C_246.6%)]">
            {number}
          </div>
          <Image
            loading="lazy"
            src={imageSrc}
            alt=""
            className="object-contain shrink-0 my-auto w-12 aspect-[47.62] fill-[linear-gradient(95deg,#FDFDFD_3.88%,#9C9C9C_246.6%)] stroke-[1.765px] stroke-neutral-900"
            width={500}
            height={500}
          />
        </div>
        <div className="bg-clip-text basis-auto bg-[linear-gradient(95deg,#FDFDFD_3.88%,#9C9C9C_246.6%)]">
          Summer Sale
        </div>
      </div>
    </div>
  );
}