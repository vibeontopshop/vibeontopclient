import * as React from "react";

const QuantitySelector = ({ value, onIncrease, onDecrease }) => {
  return (
    <div className="flex flex-col grow shrink self-stretch my-auto text-base whitespace-nowrap w-[140px]">
      <div className="text-black text-opacity-60">Quantity</div>
      <div className="flex overflow-hidden gap-10 justify-between items-center px-5 py-2.5 mt-8 max-w-full font-medium text-black bg-zinc-100 min-h-[42px] rounded-[50px] w-[170px]">
        <button
          onClick={onDecrease}
          aria-label="Decrease quantity"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/de4b68fef6db652744c8d394d693f22f3ea73b670f5eeb3d95f91f5582eeb081?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9"
            alt=""
          />
        </button>
        <div className="self-stretch my-auto">{value}</div>
        <button
          onClick={onIncrease}
          aria-label="Increase quantity"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/83c1e736cb3928a45d8b85ea9ce69f72298f02b1b355a1a8d10cbe7ec794d8c1?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;