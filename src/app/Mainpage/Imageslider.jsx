import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "https://c0.wallpaperflare.com/preview/192/66/526/front-view-of-man-s-face.jpg" },
  { src: "https://images.unsplash.com/photo-1563170446-9c3c0622d8a9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0JTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D" },
  { src: "https://img.freepik.com/free-photo/close-up-portrait-young-african-man-with-stubble_171337-1296.jpg" },
  { src: "https://cdn.mos.cms.futurecdn.net/p5quSf4dZXctG9WFepXFdR.jpg" },
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex w-[90%] overflow-hidden mx-auto">
      <div
        className="flex transition-transform duration-500 ease-in-out gap-1"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative shrink-0 transition-all duration-500 ${
              index === activeIndex ? "w-[30%] h-[530px]" : "w-[25%] h-[450px]"
            }`}
          >
            <div className="w-full h-full">
              <Image
                src={img.src}
                alt={`Image ${index + 1}`}
                width={500}
                height={500}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
            {index === activeIndex && (
              <div className="absolute bottom-5 left-5 bg-white p-4 shadow-md">
                <p className="text-gray-600 text-sm">01 — Spring Sale</p>
                <p className="text-2xl font-bold">30% OFF</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 flex justify-center items-center w-12 h-12 p-3 rounded-full bg-white hover:bg-gray-400 transition shadow-lg text-2xl"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 flex justify-center items-center w-12 h-12 p-3 rounded-full bg-white hover:bg-gray-400 transition shadow-lg text-2xl"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
