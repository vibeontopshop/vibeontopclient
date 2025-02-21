import * as React from "react";
import Image from "next/image";

function ButtonWithImage() {
  return (
    <div className="flex overflow-hidden justify-between items-center p-3 w-12 h-12 bg-zinc-100 min-h-[48px] rounded-[62px]">
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f74fe9119f4677de761ee2dfb0f679c58d26d6a0ec7824606b028229ae03c836?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9"
        alt="Icon button"
        className="object-contain self-stretch my-auto w-6 aspect-square"
      />
    </div>
  );
}

function ButtonLatest() {
  return (
    <div className="flex overflow-hidden gap-3.5 justify-between items-center px-5 py-3.5 text-base font-medium text-orange-300 whitespace-nowrap bg-zinc-100 min-h-[48px] rounded-[62px] w-[120px]">
      <div className="self-stretch my-auto">Latest</div>
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e6f7526871f9ac009574bfae8b5417634ab36e9d9b30dc746ff96809fa0e9b5?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9"
        alt="Arrow icon"
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
      />
    </div>
  );
}

function WriteReviewButton() {
  return (
    <div className="overflow-hidden self-stretch px-5 py-3.5 text-base font-medium text-white bg-orange-300 min-h-[48px] rounded-[62px] w-[166px]">
      Write a Review
    </div>
  );
}

function MyComponent() {
  return (
    <div className="flex gap-2.5 items-start">
      <ButtonWithImage />
      <ButtonLatest />
      <WriteReviewButton />
    </div>
  );
}

export default MyComponent;
