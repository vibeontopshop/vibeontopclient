import React from 'react';
import Image from 'next/image';
export default function ServiceRow({ icon, title, description }) {
  return (
    <div className="flex overflow-hidden flex-col justify-center p-6 w-full bg-zinc-100 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-4 items-start p-6 w-full bg-white max-md:px-5 max-md:max-w-full">
        <Image
          loading="lazy"
          src={icon}
          className="object-contain shrink-0 aspect-square rounded-[33px] w-[65px]"
          alt={title}
          width={50}
          height={50}
        />
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
          <div className="text-3xl leading-none text-neutral-700 max-md:max-w-full">
            {title}
          </div>
          <div className="mt-4 text-xs leading-4 text-neutral-500 max-md:max-w-full">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}