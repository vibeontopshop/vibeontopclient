import React, { useState } from 'react';
import StarRating from './StarRating';
import StockIndicator from './StockIndicator';

export default function ReviewCard({ 
  image, 
  discount, 
  name, 
  originalPrice, 
  discountedPrice, 
  rating, 
  reviews 
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="flex relative flex-col w-full">
      <div className="relative mb-4 w-full aspect-[0.77] bg-neutral-100">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full"
        />
        {discount && (
          <div className="absolute left-0 px-3 py-1.5 text-xl font-semibold leading-9 text-white bg-black top-[15px]">
            -{discount}%
          </div>
        )}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute w-12 h-12 cursor-pointer right-[15px] top-[15px]"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <img
            src={isFavorite ? "/heart-filled.svg" : "/heart-outline.svg"}
            alt=""
            className="w-full h-full"
          />
        </button>
        <button
          className="absolute w-9 h-9 cursor-pointer bottom-[15px] right-[15px]"
          aria-label="Share product"
        >
          <img src="/share-icon.svg" alt="" className="w-full h-full" />
        </button>
        <StockIndicator inStock={true} />
      </div>
      <h2 className="mb-2.5 text-2xl font-medium text-black max-sm:text-2xl">
        {name}
      </h2>
      <div className="flex gap-5 items-center mb-2.5 max-sm:text-2xl">
        <span className="text-2xl font-medium text-black line-through opacity-50">
          ${originalPrice}
        </span>
        <span className="text-2xl font-medium text-black">
          ${discountedPrice}
        </span>
      </div>
      <div className="flex gap-3.5 items-center">
        <StarRating rating={rating} />
        <span className="text-2xl font-semibold text-black opacity-50">
          ({reviews})
        </span>
      </div>
    </div>
  );
}