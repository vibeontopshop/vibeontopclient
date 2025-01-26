import React from 'react';
import ReviewCard from './ReviewCard';
import { products } from './productData';

export default function LatestDrip() {
  return (
    <div className="flex flex-col items-center px-5 py-10 mx-auto my-0 bg-white max-w-[1380px]">
      <h1
        className="mb-5 text-8xl leading-tight text-center uppercase max-md:text-7xl max-sm:text-4xl"
        style={{ color: '#CEB863' }}>
        LATEST DRIP
      </h1>
      <p className="mb-16 text-base leading-6 text-center max-w-[618px] text-black text-opacity-60 max-sm:text-sm max-sm:leading-5">
        At VOT, we offer stylish apparel to elevate your everyday look. From
        comfy cotton tees and trendy oversized shirts to classic polos, our
        collection ensures you stay effortlessly cool while showcasing your
        unique cosmic style.
      </p>
      <div className="grid gap-10 mb-12 w-full grid-cols-[repeat(3,1fr)] max-w-[1278px] max-md:gap-8 max-md:grid-cols-[repeat(2,1fr)] max-sm:gap-5 max-sm:grid-cols-[1fr]">
        {products.map((product) => (
          <ReviewCard key={product.id} {...product} />
        ))}
      </div>
      <button
        className="px-14 py-5 mt-8 text-base font-medium text-white uppercase rounded-xl cursor-pointer border-[none] shadow-[0px_20px_35px_rgba(0,0,0,0.15)] max-sm:px-5 max-sm:py-4 max-sm:w-full"
        style={{ backgroundColor: '#CEB863' }}>
        SHOP NOW
      </button>
    </div>
  );
}