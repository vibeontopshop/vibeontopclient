import * as React from "react";
import Image from "next/image";
function ImageColumn({ src, className, alt }) {
  return (
    <div className={`flex flex-col ${className} max-md:ml-0 max-md:w-full`}>
      <Image
        loading="lazy"
        src={src}
        alt={alt}
        className="object-contain grow w-full aspect-[0.48] max-md:mt-7"
      />
    </div>
  );
}

export default ImageColumn;