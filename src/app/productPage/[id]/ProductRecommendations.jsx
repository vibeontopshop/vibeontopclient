'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const ProductRecommendations = () => {
  const params = useParams();
  const id = params.id;
  const router = useRouter();

  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      try {
        const res = await fetch(`https://vibeontopbackend.onrender.com/api/Products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        setSimilarProducts(data.similarProducts || []);
      } catch (error) {
        console.error("Error fetching similar products:", error);
      }
    };

    if (id) fetchSimilarProducts();
  }, [id]);

  // Sub-component for rendering star ratings
  const StarRating = ({ rating }) => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, index) => (
        <motion.i
          key={index}
          className={`ti ti-star${index < rating ? "-filled text-yellow-400" : " text-gray-300"}`}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        />
      ))}
    </div>
  );
  const ProductCard = ({ product }) => {
    const handleRedirect = (id) => {
      router.push(`/productPage/${id}`);
    };

    return (
      <motion.div
        className="relative w-full max-w-[372px] max-sm:max-w-full cursor-pointer"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.15)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          className="absolute left-0 px-3 py-1.5 text-xl font-semibold leading-9 text-white bg-gradient-to-r from-yellow-500 to-orange-500 rounded-r-xl top-[13px] shadow-md"
          initial={{ y: 0 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          -30%
        </motion.div>

        <motion.div
          className="relative rounded-xl overflow-hidden"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            onClick={() => handleRedirect(product._id)}
            width={372}
            height={483}
            className="object-cover w-full aspect-[0.77] bg-neutral-100 transition-all duration-300 ease-in-out hover:brightness-110 hover:shadow-lg"
            priority
          />
          <div className="absolute bottom-3 left-3 flex items-center gap-1 px-3 py-2 rounded-xl border-white border bg-white bg-opacity-80 backdrop-blur-sm shadow-sm">
            <span className="text-sm font-semibold text-black">In Stock</span>
          </div>
        </motion.div>

        <div className="mt-3 space-y-3 px-2">
          <h3 className="text-2xl font-semibold text-black transition-colors duration-300 hover:text-customYellow">
            {product.name}
          </h3>

          <div className="flex gap-3 items-center">
            <span className="text-xl font-medium text-gray-500 line-through">
              {product.price}
            </span>
            <span className="text-xl font-bold text-black">{product.oldPrice}</span>
          </div>

          <div className="flex gap-2 items-center">
            <StarRating rating={5} />
            <span className="text-lg font-medium text-gray-600">(88)</span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="px-5 py-10 mx-auto my-0 max-w-[1643px]">
      <h2 className="text-8xl leading-tight text-customYellow uppercase max-md:text-6xl max-sm:text-4xl">
        You may also like
      </h2>
      <div className="grid gap-12 mt-8 grid-cols-[repeat(auto-fit,minmax(372px,1fr))] max-md:gap-8 max-sm:gap-5 max-sm:grid-cols-[1fr]">
        {similarProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductRecommendations;
