"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../assets/logoEdit.png";
import LeftMainPicture from "../../assets/b/w.png";
import RightMainPicture from "../../assets/image.png";
import Vot1 from "../../assets/VOTEdit.png";
import Ontop from "../../assets/OnTopEdit.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import GroupBg from "../../assets/Group 1000006046.png";
import Group from "../../assets/group.png";
import Cap from "../../assets/images.png"
import Text from "../../assets/text.png"
import Merged from "../../assets/merged.png"
import Ultimate from "../../assets/ULTIMATE.png"
import Merged2 from "../../assets/SALE-removebg.png"
import Mixed from "../../assets/mixed.png"


import Footer from '../Mainpage/Footer'
import TrendVault from "../Mainpage/TrendVault"
import Service from "../Mainpage/ServiceSection"
import TabNavigation from "../productPage/TabNavigation"
import MyOrders from "./MyOrders"
import MyWishlist from "./MyWishlist"
import Notifications from "./Notification"

import { FaBars } from 'react-icons/fa';

const Profile = () => {
    const [isTabView, setisTabView] = useState(false);
    const [isMobileView, setisMobileView] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility
    const [scrolled, setScrolled] = useState(false);
    const [ordersActive, setOrdersActive] = useState(true);
    const [wishlistActive, setWishlistActive] = useState(false);
    const [notificationsActive, setNotificationsActive] = useState(false);
  
    const handleOrdersClick = () => {
      setOrdersActive(true);
      setWishlistActive(false);
      setNotificationsActive(false);
    };
  
    const handleWishlistClick = () => {
      setOrdersActive(false);
      setWishlistActive(true);
      setNotificationsActive(false);
    };
  
    const handleNotificationsClick = () => {
      setOrdersActive(false);
      setWishlistActive(false);
      setNotificationsActive(true);
    };
  


    useEffect(() => {
        const handleResize = () => {
            setisMobileView(window.innerWidth <= 765);
        };

        handleResize(); // Set initial state
        window.addEventListener("resize", handleResize); // Add resize listener

        return () => {
            window.removeEventListener("resize", handleResize); // Cleanup listener
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);








    useEffect(() => {
        const handleResize = () => {
            setisTabView(window.innerWidth <= 1200);
        };

        handleResize(); // Set initial state
        window.addEventListener("resize", handleResize); // Add resize listener

        return () => {
            window.removeEventListener("resize", handleResize); // Cleanup listener
        };
    }, []);
    const dots = Array(3).fill(null);

    return (
        <>
            {!isMobileView ? (
                <div className="h-lvh flex flex-col">
                    



                    <div className="bg-black text-white h-10 flex justify-center items-center">Disconut 20% for new members. <b>ONLY FOR TODAY!!!</b></div>


<div className="flex justify-between">
                    <header className="h-20 py-6 bg-custom-section-color flex items-center justify-between px-8 font-smooch">
                <div className="text-xl font-bold">
                    <Image className="" src={Logo} alt="logo" width={180} />

                </div>
                <nav className="flex gap-4 justify-evenly items-center w-full">
                  <a href="#home" className="hover:text-gray-500">HOME</a>
                  <a href="#category" className="hover:text-gray-500">CATEGORY</a>
                </nav>
              </header>
                            <header className="h-20 py-6 bg-custom-section-color flex items-center justify-evenly px-8 w-[500px]">
                <nav className="flex items-center justify-evenly w-full">
                  <a href="#home" className="hover:text-gray-500">CONTACT</a>
                  <a href="#category" className="hover:text-gray-500">ABOUT</a>
                  <a href="#category" className="hover:text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                      <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                    </svg></a>

                  <a href="#category" className="hover:text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                      <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                    </svg></a>
                    <button className="px-7 py-2 bg-[#CEB863] shadow-md shadow-gray-300">
                      LOGIN
                    </button>

                </nav>
              </header>
              </div>












                    <div className="flex justify-between items-center p-4 bg-white shadow-md mb-3">
  <h1 className="text-xl font-semibold">My Profile</h1>
  <div className="flex items-center space-x-4">
    {/* Search Bar */}
    <div className="relative">
      <input 
        type="text" 
        placeholder="Search" 
        className="pl-8 pr-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-gray-300 outline-none"
      />
      <svg 
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m2.85-6.15a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    </div>

    {/* Filter Button */}
    <button className="bg-yellow-600 text-white px-4 py-2 rounded-md text-sm flex items-center space-x-2">
      <span>Filter</span>
      <svg 
        className="w-4 h-4 text-white" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18l-7 8v8l-4-4v-4z"/>
      </svg>
    </button>
  </div>
</div>



<div className="flex gap-3 justify-center p-6">
  {/* Sidebar (Fixed Position) */}
  <div className="bg-white shadow-xl rounded-md p-6 w-64 h-fit sticky top-6">
    {/* Profile Section */}
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
        <svg
          className="w-10 h-10 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <p className="text-gray-500 mt-2 text-sm">Hello 👋</p>
      <p className="text-black font-semibold">Zyphr Ayo</p>
    </div>

    {/* Sidebar Menu */}
    <div className="mt-6">
      <ul>
        <li
          className={`flex items-center px-4 py-3 rounded-md cursor-pointer ${
            ordersActive ? "bg-yellow-500 text-white" : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={handleOrdersClick}
        >
          <svg
            className="w-5 h-5 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          My Orders
        </li>
        <li
          className={`flex items-center px-4 py-3 rounded-md cursor-pointer ${
            wishlistActive ? "bg-yellow-500 text-white" : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={handleWishlistClick}
        >
          <svg
            className="w-5 h-5 mr-3 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z" />
          </svg>
          My Wishlists
        </li>
        <li
          className={`flex items-center px-4 py-3 rounded-md cursor-pointer ${
            notificationsActive ? "bg-yellow-500 text-white" : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={handleNotificationsClick}
        >
          <svg
            className="w-5 h-5 mr-3 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11M9 21v-6m0-6V3m0 6h6" />
          </svg>
          Notifications
        </li>
      </ul>
    </div>
  </div>

  {/* Dynamic Content Section */}
  <div className="flex-1">
    {ordersActive && <MyOrders />}
    {wishlistActive && <MyWishlist />}
    {notificationsActive && <Notifications />}
  </div>
</div>



                    <Footer />
                </div>


            ) : (









































                <div className="h-lvh flex flex-col">
                    {/* Top Bar */}
                    <div className="bg-black text-white h-10 flex justify-between items-center p-6 text-xs">
                        <div className="w-2/4">
                            Discount 20% for new members. <b>ONLY FOR TODAY!!!</b>
                        </div>
                        <FaBars
                            size={30}
                            color="white"
                            onClick={() => setMenuOpen(true)} // Open menu on click
                            className="cursor-pointer"
                        />
                    </div>

                    {/* Full-Screen Menu */}
                    <div
                        className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ease-in-out ${menuOpen ? 'bg-black bg-opacity-50 opacity-100 visible' : 'opacity-0 invisible'
                            }`}
                        onClick={() => setMenuOpen(false)} // Close menu on backdrop click
                    >
                        {/* Sidebar Menu */}
                        <div
                            className={`bg-white w-3/5 h-full shadow-md transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                                }`}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 text-black text-xl"
                                onClick={() => setMenuOpen(false)} // Close on button click
                            >
                                ✖
                            </button>
                            {/* Menu Items */}
                            <nav className="space-y-4 text-xl font-medium p-6">
                                <ul>
                                    <li><a href="#home" className="hover:text-gray-600 list-none">Home</a></li>
                                    <li><a href="#about" className="hover:text-gray-600 list-none">About</a></li>
                                    <li><a href="#services" className="hover:text-gray-600 list-none">Services</a></li>
                                    <li><a href="#contact" className="hover:text-gray-600 list-none">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>





                    
                    <div className="flex justify-between items-center p-4 bg-white shadow-md mb-3">
  <h1 className="text-xl font-semibold">My Profile</h1>
  <div className="flex items-center space-x-4">
    {/* Search Bar */}
    <div className="relative">
      <input 
        type="text" 
        placeholder="Search" 
        className="pl-8 pr-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-gray-300 outline-none"
      />
      <svg 
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m2.85-6.15a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    </div>

    {/* Filter Button */}
    <button className="bg-yellow-600 text-white px-4 py-2 rounded-md text-sm flex items-center space-x-2">
      <span>Filter</span>
      <svg 
        className="w-4 h-4 text-white" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18l-7 8v8l-4-4v-4z"/>
      </svg>
    </button>
  </div>
</div>
                        <div>
                        </div>
                    <div className="flex flex-col md:flex-row gap-3 justify-center p-6">
  {/* Navigation (Displayed on top in mobile view) */}
  <div className="bg-white shadow-xl rounded-md p-4 w-full md:w-64 h-fit sticky top-0 md:top-6 z-10">
    {/* Profile Section */}
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
        <svg
          className="w-10 h-10 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <p className="text-gray-500 mt-2 text-sm">Hello 👋</p>
      <p className="text-black font-semibold">Zyphr Ayo</p>
    </div>

    {/* Sidebar Menu */}
    <div className="mt-4 md:mt-6">
      <ul className="flex md:flex-col gap-2 md:gap-0">
        <li
          className={`flex items-center justify-center md:justify-start px-4 py-3 rounded-md cursor-pointer ${
            ordersActive ? "bg-yellow-500 text-white" : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={handleOrdersClick}
        >
          <svg className="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          My Orders
        </li>
        <li
          className={`flex items-center justify-center md:justify-start px-4 py-3 rounded-md cursor-pointer ${
            wishlistActive ? "bg-yellow-500 text-white" : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={handleWishlistClick}
        >
          <svg className="w-5 h-5 mr-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z" />
          </svg>
          My Wishlists
        </li>
        <li
          className={`flex items-center justify-center md:justify-start px-4 py-3 rounded-md cursor-pointer ${
            notificationsActive ? "bg-yellow-500 text-white" : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={handleNotificationsClick}
        >
          <svg className="w-5 h-5 mr-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11M9 21v-6m0-6V3m0 6h6" />
          </svg>
          Notifications
        </li>
      </ul>
    </div>
  </div>

  {/* Dynamic Content Section */}
  <div className="flex-1">
    {ordersActive && <MyOrders />}
    {wishlistActive && <MyWishlist />}
    {notificationsActive && <Notifications />}
  </div>
</div>

            <Footer />
                </div>
            )}
        </>
    );
};

export default Profile;
