import * as React from "react";
import Image from "next/image";
const ColorSelector = ({ colors }) => {
  return (
    <div className="flex flex-col grow shrink self-stretch my-auto w-52 min-w-[240px]">
      <div className="self-start text-base text-black text-opacity-60">
        Select Colors
      </div>
      <div className="flex gap-4 items-start mt-4">
        {colors.map((color, index) => (
          color.image ? (
            <Image
              key={index}
              loading="lazy"
              src={color.image}
              alt={`Color option ${index + 1}`}
              className="object-contain shrink-0 aspect-square w-[37px]"
            />
          ) : (
            <div
              key={index}
              className={`flex shrink-0 rounded-full h-[37px] w-[37px] ${color.bgClass}`}
              role="button"
              tabIndex={0}
              aria-label={`Select ${color.name} color`}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;