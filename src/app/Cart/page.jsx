"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Navbar from "../Shipping/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function Cart() {
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter(); // Initialize router

    useEffect(() => {
        fetchCart();
    }, []);

    async function fetchCart() {
        const token = localStorage.getItem("token");
        if (!token) {
            setError("No token found, please log in.");
            setLoading(false);
            return;
        }
        try {
            const res = await fetch("https://vibeontopbackend.onrender.com/api/cart", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) throw new Error("Failed to fetch cart");

            const data = await res.json();
            setCart(data.cart);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    async function handleRemoveItem(productId) {
        const token = localStorage.getItem("token");
        if (!token) {
            setError("No token found, please log in.");
            return;
        }

        try {
            const res = await fetch("https://vibeontopbackend.onrender.com/api/cart/remove", {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ productId }),
            });

            if (!res.ok) throw new Error("Failed to remove item");
            setCart((prevCart) => ({
                ...prevCart,
                products: prevCart.products.filter((item) => item.productId._id !== productId),
            }));
        } catch (err) {
            setError(err.message);
        }
    }

    function calculateTotal() {
        return cart?.products?.reduce((acc, item) => acc + item.productId.price * item.quantity, 0) || 0;
    }

    function handleRedirect(item) {
        const selectedProductDetails = {
            productId: item.productId._id,
            name: item.productId.name,
            color: item.color,
            size: item.size,
            weight: item.Weight,
            quantity: item.quantity,
            price: item.productId.price,
            discount: item.productId.discount,
        };
        localStorage.setItem("selectedProduct", JSON.stringify(selectedProductDetails));
        console.log(selectedProductDetails);
        router.push("/Shipping");
    }

    if (loading) return <p className="flex justify-center items-center h-screen text-lg">Loading...</p>;

    if (error) return <p className="text-center text-red-500 text-lg font-semibold">{error}</p>;

    return (
        <div className="p-6 min-h-screen bg-gray-100">
            <Navbar />
            <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
            <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 bg-white p-6 rounded-lg shadow-lg h-fit border border-gray-200">
    <h2 className="text-xl font-semibold mb-4 text-gray-700">Cart Summary</h2>
    
    <ul className="text-gray-900 text-md">
        {cart?.products?.map((item) => (
            <li key={item.productId._id} className="flex justify-between mb-2">
                <span>{item.productId.name} × {item.quantity}</span>
                <span className="font-semibold">₹{item.productId.price * item.quantity}</span>
            </li>
        ))}
    </ul>

    <div className="flex items-center justify-between text-lg font-bold text-gray-900 border-t pt-3 mt-2">
        <span>Total:</span>
        <span className="text-green-600">₹{calculateTotal()}</span>
    </div>
</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
                    {cart?.products?.map((item) => (
                        <div
                            key={item._id}
                            className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
                        >
                            <Link href={`/productPage/${item.productId._id}`}>
                                <Image
                                    src={item.productId.images[0]}
                                    alt={item.productId.name}
                                    className="w-full h-48 object-cover rounded-md mb-3 cursor-pointer"
                                />
                            </Link>
                            <Link href={`/productpage/${item.productId._id}`}>
                                <h2 className="text-lg font-semibold cursor-pointer hover:underline">
                                    {item.productId.name}
                                </h2>
                            </Link>
                            <p className="text-sm text-gray-600">{item.productId.description}</p>
                            <div className="flex items-center justify-between mt-2">
                                <p className="text-red-500 font-bold">₹{item.productId.price}</p>
                                <p className="text-gray-500 line-through text-sm">
                                    ₹{item.productId.oldPrice}
                                </p>
                            </div>
                            <div className="mt-3 text-sm text-gray-700">
                                <p>
                                    <span className="font-medium">Quantity:</span> {item.quantity}
                                </p>
                                <p>
                                    <span className="font-medium">Size:</span> {item.size}
                                </p>
                                <p>
                                    <span className="font-medium">Color:</span> {item.color}
                                </p>
                                <p>
                                    <span className="font-medium">Weight:</span> {item.Weight}
                                </p>
                            </div>
                            <button
                                onClick={() => handleRemoveItem(item.productId._id)}
                                className="w-full bg-red-500 text-white py-3 mt-4 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105"
                            >
                               Remove  Item
                            </button>
                            <button
                                onClick={() => handleRedirect(item)}
                                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-3 mt-4 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
