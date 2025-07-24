'use client';
import * as React from "react";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { FiShare2 } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

function ProductDetails() {
  const [userRole, setUserRole] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = useParams();
  const router = useRouter();
  const id = params?.id;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token || !id) return;

    const fetchUserRole = async () => {
      try {
        const res = await axios.get('https://vibeontopbackend.onrender.com/api/auth/getuser', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserRole(res.data.user.role);
        console.log('User role fetched:', res.data.user.role);
      } catch (err) {
        console.error('Error fetching user role:', err);
      }
    };

    fetchUserRole();
  }, [id]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(`https://vibeontopbackend.onrender.com/api/product/${id}`);
        const data = res.data.product;
        setProduct(data);

        setSelectedColor(data.color?.[0] || null);
        setSelectedSize(data.size?.[0] || null);
        setSelectedWeight(data.weight?.[0] || null);
      } catch (err) {
        setError("Something went wrong while fetching product details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProductDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  const handleRedirect = () => {
    const selectedProductDetails = {
      productId: id,
      name: product.name,
      color: selectedColor,
      size: selectedSize,
      weight: selectedWeight,
      quantity,
      price: product.price,
      discount: product.discount,
    };

    localStorage.setItem('selectedProduct', JSON.stringify(selectedProductDetails));
    router.push('/Shipping');
  };

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('You must be logged in to add items to your cart.');
        return;
      }

      const res = await axios.post(
        'https://vibeontopbackend.onrender.com/api/Cart/addcart',
        {
          productId: id,
          quantity,
          color: selectedColor,
          size: selectedSize,
          weight: selectedWeight,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        alert('Product added to cart!');
        console.log(res.data);
      } else {
        alert('Failed to add to cart.');
      }
    } catch (err) {
      console.error('Error adding to cart:', err);
      alert('An error occurred while adding the product to cart.');
    }
  };

  return (
    <div className="flex flex-col items-start max-w-[590px] p-3">
      <h1 className="text-5xl text-black max-md:text-4xl">{product.name}</h1>

      <div className="flex gap-5 items-end mt-10 max-md:mt-10">
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-start my-auto">
            {[1, 2, 3, 4, 5].map(num => (
              <span key={num} className={`text-2xl ${num <= Math.round(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
            ))}
          </div>
          <div className="text-base text-black">{product.rating}/<span>5</span></div>
          <div className="text-sm text-gray-500">({product.reviews} Reviews)</div>
        </div>
        <div className="px-2 py-0.5 bg-white border rounded text-sm text-green-700">In stock</div>
      </div>

      <div className="flex gap-4 mt-4 w-[260px]">
        <div className="flex gap-3 text-3xl font-bold">
          <div className="text-black">₹{product.price}</div>
          <div className="text-black text-opacity-30 line-through">₹{product.oldPrice}</div>
        </div>
        <div className="px-3.5 py-1.5 text-base text-red-500 bg-red-500 bg-opacity-10 rounded-full">
          -{product.discount}%
        </div>
      </div>

      <p className="mt-7 text-base text-black text-opacity-60">{product.description}</p>

      {/* Color Selection */}
      <div className="mt-8 w-full">
        <h3 className="text-lg font-medium mb-2">Select Color:</h3>
        <div className="flex gap-3 flex-wrap">
          {product.color?.map((color, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedColor(color)}
              className={`px-4 py-2 rounded-full border transition ${selectedColor === color ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300 hover:bg-gray-100'}`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 w-full">
        <h3 className="text-lg font-medium mb-2">Select Size:</h3>
        <div className="flex gap-3 flex-wrap">
          {product.size?.map((size, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-full border transition ${selectedSize === size ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300 hover:bg-gray-100'}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Weight Selection */}
      <div className="mt-6 w-full">
        <h3 className="text-lg font-medium mb-2">Select Weight:</h3>
        <div className="flex gap-3 flex-wrap">
          {product.weight?.map((weight, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedWeight(weight)}
              className={`px-4 py-2 rounded-full border transition ${selectedWeight === weight ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300 hover:bg-gray-100'}`}
            >
              {weight}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity Selector */}
      {userRole && (
        <div className="mt-6 w-full">
          <h3 className="text-lg font-medium mb-2">Select Quantity:</h3>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity(prev => Math.max(userRole === "Business" ? 100 : 1, prev - 1))}
              className="w-10 h-10 flex items-center justify-center rounded-full border text-xl font-bold hover:bg-gray-100"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              min={userRole === "Business" ? 100 : 1}
              onChange={(e) => {
                const val = parseInt(e.target.value) || 1;
                setQuantity(userRole === "Business" ? Math.max(100, val) : Math.max(1, val));
              }}
              className="w-16 text-center border rounded-md py-1 px-2"
            />
            <button
              onClick={() => setQuantity(prev => prev + 1)}
              className="w-10 h-10 flex items-center justify-center rounded-full border text-xl font-bold hover:bg-gray-100"
            >
              +
            </button>
          </div>
          {userRole === "Business" && quantity < 100 && (
            <p className="text-sm text-red-500 mt-1">
              Business users must order a minimum of 100 items.
            </p>
          )}
        </div>
      )}

      <div className="flex gap-2 items-center self-stretch mt-8">
        <div className="flex flex-col items-center gap-6 w-full">
          <button
            onClick={handleAddToCart}
            className="group relative flex justify-center items-center px-10 py-4 rounded-full bg-gradient-to-r from-[#ffdc4e] to-[#1c1a01] shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 w-full"
          >
            <span className="text-lg font-semibold text-black tracking-widest flex items-center gap-2">
              🛒 ADD TO CART
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ffdc4e] to-[#1c1a01] opacity-25 blur-lg rounded-full group-hover:opacity-50"></div>
          </button>

          <button
            onClick={handleRedirect}
            className="group relative flex justify-center items-center px-10 py-4 rounded-full bg-gradient-to-r from-[#1c1a01] to-[#ffdc4e] shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 w-full"
          >
            <span className="text-lg font-semibold text-white tracking-widest flex items-center gap-2">
              💳 Checkout
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ffdc4e] to-[#1c1a01] opacity-25 blur-lg rounded-full group-hover:opacity-50"></div>
          </button>
        </div>

        {/* Share & Wishlist Icons */}
        <div className="flex flex-col gap-2">
          <button
            aria-label="Share product"
            className="flex justify-center items-center w-[50px] h-[50px] rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            <FiShare2 size={24} color="#333" />
          </button>
          <button
            aria-label="Add to wishlist"
            className="flex justify-center items-center w-[50px] h-[50px] rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            <AiOutlineHeart size={24} color="#333" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
