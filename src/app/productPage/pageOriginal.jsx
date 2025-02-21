"use client";
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

import Product from "./ProductDetails"
import Nav from "./NavigationBar"
import ProdImage from "./ProductImageGallery"
import Tab from "./TabNavigation"
import Layout from "./NewsletterLayout"
import Footer from "./Footer"
import Reco from "./ProductRecommendations"

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
                        <ProdImage />
                        <Product />
                    </div>
                    <Tab style={{ marginTop: "2rem" }} />
                    <Reco/>
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



                    <div className="p-3">
                        <section className="flex flex-col justify-center items-center w-full">
                            <div className="flex justify-center items-center">
                                <Image className="" src={Logo} alt="logo" width={150} />
                                <button className="px-7 py-2 h-10 bg-[#CEB863] shadow-md shadow-gray-300">LOGIN</button>
                            </div>
                            <Image className="" src={Merged} alt="logo" />
                        </section>

                        <div className="flex flex-col justify-center items-center">
                            <Image className="mt-3" src={Ultimate} alt="logo" />
                            <Image className="mt-3" src={Merged2} alt="logo" />
                        </div>

                        <div className="flex flex-row justify-center items-center gap-10 mt-3">
                            <button className="px-7 py-2 bg-[#CEB863] shadow-md shadow-gray-300">
                                For Business
                            </button>
                            <button className="px-7 py-2 bg-white border-zinc-950 shadow-md shadow-gray-300">
                                For Consumer
                            </button>
                        </div>

                        <div className="mt-3 flex">
                            <Image className="" src={Mixed} alt="logo" />
                        </div>

                    </div>
                    nv2
                    <div className="flex shrink-0 self-stretch my-auto rounded-full bg-zinc-400 h-[11px] w-[11px]" />
                    <div className="flex relative flex-col items-end px-16 pb-11 w-full min-h-[755px] pt-[643px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
                        <Image
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b5af165fcc82e55191558f64b0a54aaf1e52ef83c6ebc72dbcfba918fbec497?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9"
                            alt=""
                            className="object-cover absolute inset-0 size-full"
                        />
                        <div className="flex relative flex-wrap gap-10 items-start max-w-full w-[857px]">
                            {/* <div className="flex gap-5 items-center w-[120px]">
                                {dots.map((_, index) => (
                                    <DotIndicator key={index} />
                                ))}
                            </div> */}
                            <div className="text-base leading-6 text-black text-opacity-60 w-[618px] max-md:max-w-full">
                                At Jodiac, we offer stylish apparel to elevate your everyday look.
                                From comfy cotton tees and trendy oversized shirts to classic polos,
                                our collection ensures you stay effortlessly cool while showcasing
                                your unique cosmic style.
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <TrendVault />
            <Latest />
            <Service />
            <Layout />
            <Footer /> */}
                    </div>
                </div>
            )}
        </>
    );
};

export default HomePage;
