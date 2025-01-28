import React from 'react';
import Image from 'next/image';

export default function ServiceCard({ icon, title, description, centered = false }) {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink justify-center p-6 basis-0 bg-zinc-100 min-w-[240px] max-md:px-5">
      <div className="flex flex-col flex-1 p-6 w-full bg-white max-md:px-5">
        <Image
          loading="lazy"
          src={icon}
          className="object-contain self-center aspect-square rounded-[33px] w-[65px]"
          alt={title}
        />
        <div className="flex flex-col mt-4 w-full">
          <div className={`text-3xl leading-9 ${centered ? 'text-center' : ''} text-neutral-700`}>
            {title}
          </div>
          <div className="mt-2 text-xs leading-4 text-neutral-500">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}