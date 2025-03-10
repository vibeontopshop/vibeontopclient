import * as React from "react";
import Image from "next/image";
function TopBanner() {
  return (
    <div className="flex flex-wrap justify-between items-center px-4 py-0 text-base leading-none text-center text-white bg-black min-h-[40px]">
      <div className="flex-1 self-stretch mx-0 my-auto">
        <span>Discount 20% For New Member,</span>
        <span className="font-extrabold">ONLY FOR TODAY</span>
        <span>!!</span>
      </div>
      <Image
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f01c2f9aa8f7abfc6bef0be7e38aa6732f53cc8c71d720e31f0777aa73049b6?apiKey=bee90f4503074c6fb2a2afcb7f5d52b9&"
  alt="Close banner"
  width={20} // width in px
  height={20} // height in px
  className="object-contain cursor-pointer"
  role="button"
  tabIndex={0}
  onKeyPress={(e) => {
    if (e.key === 'Enter') {
      // Close banner logic here
    }
  }}
/>
    </div>
  );
}

export default TopBanner;