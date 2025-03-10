import * as React from "react";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import WeightSelector from "./WeightSelector";
import QuantitySelector from "./QuantitySelector";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const params = useParams();       
  const id = params.id;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(`https://vibeontopbackend.onrender.com/api/product/${id}`);
        setProduct(res.data.product);
        setLoading(false);
      } catch (err) {
        setError("Something went wrong while fetching product details");
        setLoading(false);
      }
    };

    if (id) {  
      fetchProductDetails();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const colors = [
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
        {product.name || "Jacquard woven Fabric"}
      </h1>

      <div className="flex gap-5 items-end mt-10 max-md:mt-10">
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-start self-stretch my-auto">
            {[1, 2, 3, 4, 5].map((num) => (
              <span key={num} className="text-yellow-500 text-2xl">★</span>
            ))}
          </div>
          <div className="self-stretch my-auto text-base text-black">
            {product.rating || 4.5}/<span className="text-black">5</span>
          </div>
        </div>

        <div className="flex flex-col items-start text-sm leading-6 text-green-700 w-[117px]">
          <div className="flex gap-1 px-2 py-0.5 bg-white rounded border border-solid border-slate-50">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c385657863cff1f67914b2c5817a2c8572cc6065a955e9ab3f75bdd1a9815d9?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9"
              alt=""
              width={10}
              height={10}
              className="object-contain shrink-0 my-auto w-4 aspect-square"
            />
            <div>In stock</div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-4 max-w-full whitespace-nowrap w-[260px]">
        <div className="flex gap-3 items-start text-3xl font-bold">
          <div className="text-black">${product.price || 260}</div>
          <div className="text-black text-opacity-30">$300</div>
        </div>
        <div className="overflow-hidden gap-3 self-stretch px-3.5 py-1.5 my-auto text-base font-medium text-red-500 bg-red-500 bg-opacity-10 rounded-[62px]">
          -30%
        </div>
      </div>

      <div className="mt-7 text-base leading-6 text-black text-opacity-60 max-md:max-w-full">
        {product.description ||
          "Ride the waves and feel the breeze, where ocean vibes put your mind at ease, sandy shores and endless skies, find your peace where the horizon lies."}
      </div>

      <div className="flex flex-col mt-7 w-full max-w-[556px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
          <ColorSelector colors={colors} />
          <SizeSelector sizes={sizes} />
        </div>

        <div className="flex flex-wrap gap-10 items-center mt-4 w-full max-md:max-w-full">
          <WeightSelector weights={weights} />
          <QuantitySelector
            value={quantity}
            onIncrease={() => setQuantity((prev) => prev + 1)}
            onDecrease={() => setQuantity((prev) => Math.max(1, prev - 1))}
          />
        </div>
      </div>

      <div className="flex gap-2 items-center self-stretch mt-8 text-xl leading-none text-center max-md:max-w-full">
        <button
          className="flex justify-center items-center px-20 py-3 bg-customYellow rounded border-white border border-solid min-w-[240px] w-[491px] max-md:px-5 max-md:max-w-full"
          aria-label="Add to cart"
        >
          <span className="bg-clip-text bg-[linear-gradient(95deg,#CEB863_3.88%,#9C9C9C_246.6%)]">
            ADD TO CART
          </span>
        </button>

        <div className="flex gap-2">
          <button aria-label="Share product">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e0702359c2d497e3374df4fba4741ad7d6225fb83d60fd66907c97e2d1f5de1?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9"
              alt="Share"
              className="object-contain aspect-square w-[50px]"
              width={20}
              height={20}
            />
          </button>

          <button aria-label="Add to wishlist">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3a984a7021fb10cdcda5558588cc312d62da33576ae63277c9d451276dbd92b?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9"
              alt="Wishlist"
              className="object-contain aspect-square w-[50px]"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
