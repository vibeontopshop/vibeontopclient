import * as React from "react";
import Image from "next/image";

export default class TrendVault extends React.Component {
  render() {
    return (
      <div className="flex relative flex-col items-start">
<div className="p-3 relative z-0 self-stretch text-8xl leading-tight uppercase flex justify-between items-center text-[#CEB863] max-md:text-4xl max-md:flex-col  max-md:justify-center max-md:items-center">
  Trend Vault
  <button
    className=" right-[111px] top-[102px] px-14 py-5 h-14 text-base font-medium leading-none text-center text-white rounded-xl shadow-[0px_20px_35px_rgba(0,0,0,0.15)] w-[207px] bg-[#CEB863] 
      max-md:relative max-md:right-0 max-md:top-0 max-md:w-auto max-md:px-5 max-md:mt-4"
    aria-label="Shop now"
  >
    SHOP NOW
  </button>
</div>

        <div className="grid grid-cols-3 gap-4 p-4">
  <div className="grid grid-rows-2 gap-4">
    <div className="relative h-[350px]">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/870c079b3e6a574a2d3aac0ba3913700bd98f069e335baab67c45f1c8743b21a"
        alt="Fashion 1"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
        <h2 className="text-lg font-semibold">Jacquard Fabric</h2>
        <p className="text-sm">03 — Summer Sale</p>
      </div>
    </div>
    <div className="relative h-[350px]">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b00e2882d3224b98aeaf2059de3d0ed0ec3f861a95808750fd82698192525331"
        alt="Fashion 2"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
        <h2 className="text-lg font-semibold">Jacquard Fabric</h2>
        <p className="text-sm">03 — Summer Sale</p>
      </div>
    </div>
  </div>
  <div className="relative col-span-2 h-[700px]">
    <Image
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec2cc20923b386fe87b6c3d87a0ebd9c08695fc74c58ea20da839926609a267b"
      alt="Fashion 3"
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
      <h2 className="text-lg font-semibold">Jacquard Fabric</h2>
      <p className="text-sm">03 — Summer Sale</p>
    </div>
  </div>
</div>
      </div>
    );
  }
}
