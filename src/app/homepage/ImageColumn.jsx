import * as React from "react";

function ImageColumn({ src, className, alt }) {
  return (
    <div className={`flex flex-col ${className} max-md:ml-0 max-md:w-full`}>
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="object-contain grow w-full aspect-[0.48] max-md:mt-7"
      />
    </div>
  );
}

export default ImageColumn;