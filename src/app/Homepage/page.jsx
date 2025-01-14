"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../assets/b.jpg";
import CategoryImage1 from "../../assets/b.jpg"; 
import CategoryImage2 from "../../assets/b.jpg";
import ProductImage from "../../assets/b.jpg"; 

export default function HomePage() {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Vibe On Top
          </h1>
          <nav className="space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/shop" className="text-gray-600 hover:text-gray-900">
              Shop
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl sm:text-6xl font-bold">
            Elevate Your Style with VOT
          </h2>
          <p className="mt-4 text-lg">
            Shop the trendiest fashion pieces, curated just for you.
          </p>
          <div className="mt-6 space-x-4">
            <Link
              href="/shop"
              className="px-6 py-3 bg-orange-700 text-white rounded-md"
            >
              Shop Now
            </Link>
            <Link
              href="/collections"
              className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-900"
            >
              Explore Collections
            </Link>
          </div>
        </div>
        <Image
          src={HeroImage}
          alt="Hero Banner"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-50"
        />
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Shop by Category
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link href="/categories/men">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={CategoryImage1}
                alt="Men's Category"
                className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-bold text-xl">
                Men
              </div>
            </div>
          </Link>
          <Link href="/categories/women">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={CategoryImage2}
                alt="Women's Category"
                className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-bold text-xl">
                Women
              </div>
            </div>
          </Link>
          {/* Add more categories as needed */}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Featured Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((product) => (
              <div
                key={product}
                className="border border-gray-300 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={ProductImage}
                  alt={`Product ${product}`}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-800">
                    Product Name
                  </h4>
                  <p className="text-gray-600 mt-2">$99.99</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md w-full hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            What Our Customers Say
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((testimonial) => (
              <div
                key={testimonial}
                className="bg-white p-4 border border-gray-300 rounded-lg shadow"
              >
                <p className="text-gray-600">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  VOT's quality is unmatched!"
                </p>
                <h4 className="mt-4 font-bold text-gray-800">
                  - Customer Name
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold">Stay Updated</h3>
          <p className="mt-2">Subscribe to our newsletter for the latest updates and offers!</p>
          <form className="mt-6 flex justify-center">
            <input
              type="email"
              className="px-4 py-2 rounded-l-md border-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white rounded-r-md hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2024 Vibe on Top. All rights reserved.</p>
          <div className="space-x-4">
            <Link href="/" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
