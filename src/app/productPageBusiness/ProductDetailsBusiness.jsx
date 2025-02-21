import * as React from "react";
import Image from "next/image";

function ProductDetails() {
  const [quantity, setQuantity] = React.useState(1);

  const colors = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c561ffed449dd91aaf9ee0a34bf994dabed4bc43c4e23810877d390152d6563a?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9" },
    { bgClass: "bg-cyan-500", name: "cyan" },
    { bgClass: "bg-pink-500", name: "pink" },
    { bgClass: "bg-yellow-500", name: "yellow" },
    { bgClass: "bg-stone-300", name: "stone" }
  ];

  const sizes = [
    { label: "S" },
    { label: "M" },
    { label: "L" },
    { label: "XL" },
    { label: "XXL" }
  ];

  const weights = [
    ["120 gsm", "220 gsm"],
    ["180 gsm", "260 gsm"],
    ["320 gsm", "420 gsm"]
  ];

  return (
    <div className="flex flex-col items-start rounded-none max-w-[590px] p-3">
      <h1 className="text-5xl leading-tight text-black max-md:text-4xl">
        Jacquard woven Fabric
      </h1>
      <div className="flex gap-5 items-end mt-10 max-md:mt-10">
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-start self-stretch my-auto">
            {[1, 2, 3, 4, 5].map((num) => (
              <span key={num} className="text-yellow-500 text-2xl">★</span>
            ))}
          </div>
          <div className="self-stretch my-auto text-base text-black">
            4.5/<span className="text-black">5</span>
          </div>
        </div>
        <div className="flex flex-col items-start text-sm leading-6 text-green-700 w-[117px]">
          <div className="flex gap-1 px-2 py-0.5 bg-white rounded border border-solid border-slate-50">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c385657863cff1f67914b2c5817a2c8572cc6065a955e9ab3f75bdd1a9815d9?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9"
              alt=""
              className="object-contain shrink-0 my-auto w-4 aspect-square"
            />
            <div>In stock </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-4 max-w-full whitespace-nowrap w-[260px]">
        <div className="flex gap-3 items-start text-3xl font-bold">
          <div className="text-black">$260</div>
          <div className="text-black text-opacity-30">$300</div>
        </div>
        <div className="overflow-hidden gap-3 self-stretch px-3.5 py-1.5 my-auto text-base font-medium text-red-500 bg-red-500 bg-opacity-10 rounded-[62px]">
          -30%
        </div>
      </div>
      <div className="mt-7 text-base leading-6 text-black text-opacity-60 max-md:max-w-full">
        Ride the waves and feel the breeze, where ocean vibes put your mind at
        ease, sandy shores and endless skies, find your peace where the horizon
        lies.
      </div>
<div className="p-4 space-y-4">
  <div className="flex flex-wrap gap-2">
    <select className="border p-2 rounded w-full sm:w-40">
      <option>Choose Color</option>
    </select>
    <select className="border p-2 rounded w-full sm:w-40">
      <option>Choose Weight</option>
    </select>
    <select className="border p-2 rounded w-full sm:w-40">
      <option>Choose Size</option>
    </select>
    <input type="number" className="border p-2 rounded w-full sm:w-20" placeholder="Qty" />
    <button className="bg-gray-800 text-white px-4 py-2 rounded w-full sm:w-auto">ADD</button>
  </div>

  <div className="overflow-x-auto">
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left border-b">
          <th className="p-2 text-left">Quantity</th>
          <th className="p-2 text-left">Discount</th>
          <th className="p-2 text-left">Price net</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3].map((_, index) => (
          <tr key={index} className="text-center">
            <td className="p-2 text-left">50 items</td>
            <td className="p-2 text-red-500 text-left">30%</td>
            <td className="p-2 text-left">$23.35 NET</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-center sm:text-left">
    <p className="text-sm text-gray-600">* Minimum Order Quantity For Any Product must be at least 25 Pcs</p>
    <p className="text-lg font-semibold">YOUR PRICE: <span className="text-yellow-600">$45.00</span></p>
  </div>
  <button className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold">ADD TO CART</button>
</div>



    </div>
  );
}

export default ProductDetails;