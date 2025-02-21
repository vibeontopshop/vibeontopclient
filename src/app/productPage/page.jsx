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

import ProductDetails from "./ProductDetails"
import Nav from "./NavigationBar"
import ProductThumbnailGallery from "./ProductImageGallery"
import Tab from "./TabNavigation"
import Layout from "./NewsletterLayout"
import Footer from "./Footer"
import ProductRecommendation from "./ProductRecommendations"
import TabNavigation from "../productPage/TabNavigation"

import { FaBars } from 'react-icons/fa';

const HomePage = () => {
    const [isTabView, setisTabView] = useState(false);
    const [isMobileView, setisMobileView] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility
    const [scrolled, setScrolled] = useState(false);


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
                    <Nav />
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", gap: "7rem", marginTop: "2rem", marginBottom: "2rem" }}>
                        <ProductThumbnailGallery />
                        <ProductDetails />
                    </div>
                    <Tab style={{ marginTop: "2rem" }} />
                    <ProductRecommendation/>
                    <Layout />
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
                        <ProductThumbnailGallery />
                        <div>
                        <ProductDetails />
                        <TabNavigation />
                        <ProductRecommendation />
                        </div>
                                            nv2
                    <div className="flex shrink-0 self-stretch my-auto rounded-full bg-zinc-400 h-[11px] w-[11px]" />
            <Layout />
            <Footer />
                </div>
            )}
        </>
    );
};

export default HomePage;
