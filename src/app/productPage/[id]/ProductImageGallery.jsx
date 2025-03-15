"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import axios from "axios"; // Make sure axios is imported!

function ProductImageGallery() {
  const [selectedImage, setSelectedImage] = useState(0);
  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(`https://vibeontopbackend.onrender.com/api/product/${id}`);
        setProduct(res.data.product);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Something went wrong while fetching product details");
        setLoading(false);
      }
    };

    if (id) {
      fetchProductDetails();
    }
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-700">Loading product details...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  // Fallback if there are no images
  const productImages = product?.images || [];

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center">
      {/* Selected Main Image */}
      <div className="w-full md:w-[372px] order-1 md:order-none transition-all duration-300 ease-in-out">
        {productImages.length > 0 ? (
          <Image
            key={selectedImage}
            loading="lazy"
            src={productImages[selectedImage]}
            alt={`Product image ${selectedImage + 1}`}
            width={372}
            height={480}
            className="object-cover w-full rounded-md aspect-[0.77] transition-opacity duration-300 ease-in-out"
          />
        ) : (
          <div className="flex justify-center items-center w-full h-[480px] bg-gray-100 rounded-md">
            <span className="text-gray-500">No images available</span>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex flex-row md:flex-col gap-2 md:order-none order-last">
        {productImages.map((src, index) => (
          <button
            key={`thumb-${index}`}
            onClick={() => handleThumbnailClick(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleThumbnailClick(index);
            }}
            tabIndex={0}
            className={`p-0 border-0 bg-transparent rounded-md hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              selectedImage === index ? "ring-2 ring-blue-500" : ""
            }`}
            aria-label={`View product image ${index + 1}`}
          >
            <Image
              loading="lazy"
              src={src}
              alt={`Product thumbnail ${index + 1}`}
              width={124}
              height={124}
              className="object-cover rounded-md aspect-square w-[80px] md:w-[124px]"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductImageGallery;
