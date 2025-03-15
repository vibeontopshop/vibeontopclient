'use client';
import * as React from "react";

function Reviews() {
  return (
    <div className="flex gap-2.5 justify-start items-center w-[182px] max-md:w-full max-sm:w-full">
      <div className="self-stretch my-auto text-4xl text-black max-sm:text-3xl">
        All Reviews
      </div>
      <div className="self-stretch my-auto text-xl leading-6 text-black text-opacity-60 max-sm:text-base">
        (451)
      </div>
    </div>
  );
}

export default Reviews;