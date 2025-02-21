import * as React from "react";
import { useState } from "react";
import Image from "next/image";

function ProductImageGallery() {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const thumbnails = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/e578f34a0e1a896c8836f4aa3caed89f95c9f960659a40e6103fbcbd0a15dc9a?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9",
    "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
    "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=",
    "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  ];

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center">
      {/* Large Image */}
      <div className="w-full md:w-[372px] order-1 md:order-none">
        <Image
          loading="lazy"
          src={thumbnails[selectedImage]}
          alt={`Product image ${selectedImage + 1}`}
          className="object-cover w-full rounded-md aspect-[0.77]"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex flex-row md:flex-col gap-2 md:order-none order-last">
        {thumbnails.map((src, index) => (
          <button
            key={`thumb-${index}`}
            onClick={() => handleThumbnailClick(index)}
            className={`p-0 border-0 bg-transparent ${
              selectedImage === index ? "ring-2 ring-blue-500" : ""
            }`}
            aria-label={`View product image ${index + 1}`}
          >
            <Image
              loading="lazy"
              src={src}
              alt={`Product thumbnail ${index + 1}`}
              className="object-cover rounded-md aspect-square w-[80px] md:w-[124px]"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductImageGallery;
