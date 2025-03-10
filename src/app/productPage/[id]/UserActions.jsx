import * as React from "react";
import Image from "next/image";
function UserActions() {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff7162ba267f9aee4b9a6b8cca4da82d3c838ee58130652d35fe98ac3416755a?apiKey=bee90f4503074c6fb2a2afcb7f5d52b9&", alt: "Social media icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/65a74161a86553713f1157699b336ad985f6ba020ae481d08c604ba01887f414?apiKey=bee90f4503074c6fb2a2afcb7f5d52b9&", alt: "Social media icon 2" },
  ];

  return (
    <div className="flex gap-5 items-center min-w-[240px] w-[377px] max-sm:justify-between max-sm:w-full">
      <div className="flex gap-5 items-center">
        <div className="text-2xl text-black">Contact</div>
        <div className="text-2xl text-black">About</div>
        <div className="flex gap-2.5 items-center w-20">
          {socialIcons.map((icon, index) => (
            <Image
              key={index}
              src={icon.src}
              width={20}
              height={20}
              alt={icon.alt}
              className="object-contain w-6 aspect-square"
            />
          ))}
        </div>
      </div>
      <button
        style={{ backgroundColor: "#CEB863" }}
        className="px-10 py-3.5 text-base font-medium leading-none text-center rounded cursor-pointer duration-[0.3s] ease-[ease] min-h-[40px] shadow-[0_22px_39px_rgba(0,0,0,0.15)] text-neutral-900 transition-[background-color] w-[119px] max-md:px-5 max-md:py-3.5 max-sm:w-full"
      >
        Log In
      </button>
    </div>
  );
}

export default UserActions;