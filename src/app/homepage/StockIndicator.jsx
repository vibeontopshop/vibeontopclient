import React from 'react';

export default function StockIndicator({ inStock }) {
  return (
    <div className="flex absolute gap-1 items-center p-2.5 rounded border-white border-solid bg-zinc-300 bg-opacity-50 border-[0.855px] bottom-[15px] left-[15px] shadow-[0px_17.099px_44.705px_rgba(68,68,68,0.04),0px_36.219px_26.181px_rgba(68,68,68,0.08)]">
      <svg
        className="w-5 h-5 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span className="text-base leading-relaxed text-black">
        In Stock
      </span>
    </div>
  );
}