import * as React from "react";


const SizeSelector = ({ sizes }) => {
  return (
    <div className="flex flex-col grow shrink self-stretch my-auto w-[164px]">
      <div className="text-base text-black text-opacity-60">
        Select Size
      </div>
      <div className="flex gap-3 items-center mt-5 w-full">
        {sizes.map((size, index) => (
          <div key={index} className="flex flex-col self-stretch my-auto text-xl font-medium text-black whitespace-nowrap w-[37px]">
            <div 
              className="px-1 bg-white rounded-full border border-black border-solid h-[45px] w-[45px] flex justify-center items-center"
              role="button"
              tabIndex={0}
              aria-label={`Select size ${size.label}`}
            >
              {size.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;