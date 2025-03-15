'use client';
import * as React from "react";

const WeightSelector = ({ weights }) => {
  return (
    <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[238px]">
      <div className="text-base text-black text-opacity-60">
        Select Weight
      </div>
      <div className="flex gap-1.5 items-center mt-4 w-full text-xs leading-relaxed text-zinc-500">
        {weights.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col self-stretch my-auto w-[88px]">
            {column.map((weight, index) => (
              <div key={index} className="flex flex-col mt-1.5 w-full rounded max-w-[85px]">
                <div 
                  className="gap-2 self-stretch py-2 pr-5 pl-5 rounded min-h-[34px]"
                  role="button"
                  tabIndex={0}
                  aria-label={`Select ${weight} weight`}
                >
                  {weight}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-4 w-full min-h-0 border border-solid border-black border-opacity-10 max-md:max-w-full" />
    </div>
  );
};

export default WeightSelector;