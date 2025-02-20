import React from 'react';

const ProductRecommendations = () => {
  const products = [
    {
      id: 1,
      name: 'VOT~ Vibe On Top',
      originalPrice: 160,
      discountedPrice: 120,
      discount: 30,
      rating: 5,
      reviews: 88,
      image: 'https://placehold.co/372x483/333333/333333',
      inStock: true,
    },
    {
      id: 2,
      name: 'VOT~ Vibe On Top',
      originalPrice: 160,
      discountedPrice: 120,
      discount: 30,
      rating: 5,
      reviews: 88,
      image: 'https://placehold.co/372x483/333333/333333',
      inStock: true,
    },
    {
      id: 3,
      name: 'VOT~ Vibe On Top',
      originalPrice: 160,
      discountedPrice: 120,
      discount: 30,
      rating: 5,
      reviews: 88,
      image: 'https://placehold.co/372x483/333333/333333',
      inStock: true,
    },
    {
      id: 4,
      name: 'VOT~ Vibe On Top',
      originalPrice: 160,
      discountedPrice: 120,
      discount: 30,
      rating: 5,
      reviews: 88,
      image: 'https://placehold.co/372x483/333333/333333',
      inStock: true,
    },
  ];

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@500;600&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      <div className="px-5 py-10 mx-auto my-0 max-w-[1643px]">
        <h2 className="text-8xl leading-tight text-customYellow uppercase max-md:text-6xl max-sm:text-4xl">
          You may also like
        </h2>
        <div className="grid gap-12 mt-8 grid-cols-[repeat(auto-fit,minmax(372px,1fr))] max-md:gap-8 max-sm:gap-5 max-sm:grid-cols-[1fr]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="relative w-full max-w-[372px] max-sm:max-w-full">
      <div className="absolute left-0 px-3 py-1.5 text-xl font-semibold leading-9 text-white bg-black top-[13px]">
        -{product.discount}%
      </div>
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full aspect-[0.77] bg-neutral-100"
        />
        {product.inStock && (
          <div className="absolute bottom-0 left-0 mb-2 ml-2 flex items-center gap-1 p-2.5 rounded border-white border-solid bg-zinc-300 bg-opacity-50 border-[0.855px] shadow-[0_17.099px_44.705px_rgba(68,68,68,0.04),0_36.219px_26.181px_rgba(68,68,68,0.08)]">
            <img
              src="https://placehold.co/19x19/000000/000000"
              alt="In Stock Icon"
              className="h-[19px] w-[19px]"
            />
            <span className="text-base text-black">In Stock</span>
          </div>
        )}
      </div>
      <div className="mt-2">
        <div className="mb-2 text-2xl font-medium text-black">{product.name}</div>
        <div className="flex gap-5 items-center mb-2">
          <span className="text-2xl font-medium text-black line-through opacity-50">
            ${product.originalPrice}
          </span>
          <span className="text-2xl font-medium text-black">${product.discountedPrice}</span>
        </div>
        <div className="flex gap-3.5 items-center mb-4">
          <StarRating rating={product.rating} />
          <span className="text-2xl font-semibold text-black opacity-50">
            ({product.reviews})
          </span>
        </div>
        <button className="p-3 w-full text-2xl text-white uppercase bg-customYellow cursor-pointer border-[none]">
          go to product
        </button>
      </div>
    </div>
  );
};


const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, index) => (
        <i
          key={index}
          className={`ti ti-star${index < rating ? '-filled' : ''}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default ProductRecommendations;