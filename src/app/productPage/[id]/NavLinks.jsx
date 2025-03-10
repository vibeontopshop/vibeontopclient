import * as React from "react";
import Image from "next/image";
function NavLinks() {
  const links = [
    { text: "Home", hasDropdown: false },
    { text: "Category", hasDropdown: true },
  ];

  return (
    <div className="flex gap-8 items-center text-2xl whitespace-nowrap w-[173px] max-sm:hidden">
      {links.map((link, index) => (
        <div key={index} className="flex gap-0.5 items-center text-neutral-900">
          <div>{link.text}</div>
          {link.hasDropdown && (
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/80b646fe13176b55b816e47c9502095643ce247a0568fc3e5be86cc7cfa89095?apiKey=bee90f4503074c6fb2a2afcb7f5d52b9&"
              alt=""
              className="object-contain w-3.5 aspect-square"
              width={20}
              height={20}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default NavLinks;