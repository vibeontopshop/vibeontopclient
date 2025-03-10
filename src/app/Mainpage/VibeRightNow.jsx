"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SliderComponent = () => {
  const [imageList, setImageList] = useState([]);
  const [isSliding, setIsSliding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://vibeontopbackend.onrender.com/api/productdetails/getproduct");
        const data = await response.json();

        // Grab the first image from the images array of each product
        const mappedImages = data.map(item => ({
          src: item.images[0],  // Use the first image in the 'images' array
          id: item._id,
        }));

        setImageList(mappedImages);
      } catch (err) {
        console.error(err);
        setError("Failed to load images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const nextSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
      setImageList((prev) => [...prev.slice(1), prev[0]]);
      setIsSliding(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
      setImageList((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
      setIsSliding(false);
    }, 500);
  };

  const handleRedirect = (id) => {
    router.push(`/productPage/${id}`);
  };

  if (loading) return <p className="text-center text-gray-700">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="w-screen flex flex-col items-center bg-gray-100 py-16">
      <h2
        className="z-10 p-5 text-4xl md:text-8xl leading-tight uppercase text-center md:text-left w-full pl-5 md:pl-10"
        style={{ color: "#CEB863" }}
      >
        Vibe Right Now !!
      </h2>

      <div className="relative flex gap-8 w-[90%] overflow-hidden pt-10">
        {imageList.map((img, index) => (
          <div
            key={index}
            onClick={() => handleRedirect(img.id)}
            className={`relative shrink-0 cursor-pointer transition-all duration-500 ease-in-out transform
              ${index === 0 ? "w-[60vw] md:w-[30%] scale-105 opacity-100" : "w-[50vw] md:w-[25%] scale-95 opacity-80"}
              ${isSliding ? "translate-x-[-10px]" : "translate-x-0"}
            `}
          >
            <Image
              src={img.src}
              alt={`Image ${index + 1}`}
              width={800}
              height={500}
              className="rounded-lg shadow-lg object-cover w-full h-[300px] md:h-[530px]"
            />

            {index === 0 && (
              <div className="absolute bottom-5 left-5 bg-white p-4 shadow-md transition-opacity duration-500">
                <p className="text-gray-600 text-sm">01 — Spring Sale</p>
                <p className="text-2xl font-bold">30% OFF</p>
              </div>
            )}

            {index === 0 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 flex justify-center items-center w-10 h-10 p-2 rounded-full bg-white hover:bg-gray-400 transition shadow-lg text-xl md:w-12 md:h-12"
                >
                  &lt;
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 flex justify-center items-center w-10 h-10 p-2 rounded-full bg-white hover:bg-gray-400 transition shadow-lg text-xl md:w-12 md:h-12"
                >
                  &gt;
                </button>
              </>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 text-gray-700 text-center w-11/12 md:w-3/4 px-4">
        At Jodiac, we offer stylish apparel to elevate your everyday look. From comfy cotton tees and trendy oversized shirts to classic polos, our collection ensures you stay effortlessly cool while showcasing your unique cosmic style.
      </p>
    </div>
  );
};

export default SliderComponent;
