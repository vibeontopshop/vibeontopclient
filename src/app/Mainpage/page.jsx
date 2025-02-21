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
import TrendVault from "./TrendVault";
import Service from "./ServiceSection"
import Layout from "./NewsletterLayout"
import Footer from "./Footer"
import axios from "axios"
import { FaBars } from 'react-icons/fa';
const images = [
  { src: "https://c0.wallpaperflare.com/preview/192/66/526/front-view-of-man-s-face.jpg" },
  { src: "https://images.unsplash.com/photo-1563170446-9c3c0622d8a9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0JTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D" },
  { src: "https://img.freepik.com/free-photo/close-up-portrait-young-african-man-with-stubble_171337-1296.jpg" },
  { src: "https://cdn.mos.cms.futurecdn.net/p5quSf4dZXctG9WFepXFdR.jpg" },
];
const HomePage = () => {
  const [isTabView, setisTabView] = useState(false);
  const [isMobileView, setisMobileView] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imageList, setImageList] = useState(images);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [user, setUser] = useState(null);


  const prevSlide = () => {
    setImageList((prev) => [...prev.slice(1), prev[0]]);
  };

  const nextSlide = () => {
    setImageList((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setisMobileView(width <= 765);
      setisTabView(width <= 1200);
    };
  
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleResize();
    handleScroll();
  
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
  
      if (!token) {
        console.error('Token not available. You need to sign up to view the page.');
        return;
      }
  
      try {
        const response = await axios.get('https://vibeontopbackend.onrender.com/api/auth/getuser', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
  
    fetchUser();
  }, []);
  return (
    <>
      {!isMobileView ? (
        <div className="h-lvh flex flex-col">
          <div className="bg-black text-white h-10 flex justify-center items-center">Disconut 20% for new members. <b>ONLY FOR TODAY!!!</b></div>
          <main className="flex flex-1 flex-col md:flex-row min-h-screen">
            <section className="flex-1 flex flex-col bg-custom-section-color">
              <header className="h-20 py-6 bg-custom-section-color flex items-center justify-between px-8 font-smooch">
                <div className="text-xl font-bold">
                  {!isTabView ? (
                    <Image className="" src={Logo} alt="logo" width={180} />
                  ) : (
                    <div className="flex flex-col items-center">
                      <p></p>
                    </div>
                  )}
                </div>
                <nav className="flex gap-4 justify-evenly items-center w-full">
                  <a href="#home" className="hover:text-gray-500">HOME</a>
                  <a href="#category" className="hover:text-gray-500">CATEGORY</a>
                </nav>
              </header>
              <div className="bg-custom-section-color flex-1 flex items-center justify-center">
                <div className="text-center relative w-full h-full">
                  <Image src={LeftMainPicture} alt="img" layout="fill" objectFit="contain" />
                  <div className="absolute z-10 bottom-52 left-16 flex flex-col">
                    <Image src={Vot1} alt="img" objectFit="contain" width={50} />
                    <Image src={Ontop} alt="img" objectFit="contain" width={300} />
                  </div>
                </div>
              </div>
            </section>

            <section className="flex-1 bg-white flex items-center justify-center flex-col">
              {isTabView ? (
                <div className="flex flex-row justify-center items-center">
                  <Image className="" src={Logo} alt="logo" width={100} />
                  {user && user.name ? (
  <span className="text-black">Hello, {user.name}</span>
) : (
  <span className="text-black">You need to sign in</span>
)}

                </div>
              ) : (
                ""
              )}
              <Swiper
                direction={"vertical"}
                slidesPerView={1}
                autoplay={true}
                spaceBetween={30}
                loop={true}
                centeredSlides={true}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper h-[75vh] flex items-center justify-center bg-white"
              >
                <SwiperSlide className="flex flex-col items-center justify-center relative">
                  <Image
                    className="aspect-auto"
                    layout="fill" objectFit="contain"
                    src={GroupBg}
                    alt="bg"
                  />
                  <Image
                    className="absolute aspect-auto top-0"
                    layout="fill" objectFit="contain"
                    src={Group}
                    alt="group"
                  />
                </SwiperSlide>
                <SwiperSlide className="flex flex-col justify-center items-center">
                  <Image
                    className="aspect-auto"
                    src={Text}
                    alt="text"
                  />
                </SwiperSlide>
                <SwiperSlide className="flex flex-col items-center justify-center">
                  <Image
                    className="aspect-auto"
                    layout="fill" objectFit="contain"
                    src={Cap}
                    alt="cap"
                  />
                </SwiperSlide>
              </Swiper>
            </section>

            <section className="flex-1 flex flex-col bg-custom-section-color">
              <header className="h-20 py-6 bg-custom-section-color flex items-center justify-evenly px-8">
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
                  {!isTabView ? (
                    user && user.name ? (
  <span className="text-black">Hello, {user.name}</span>
) : (
  <span className="text-black">You need to sign in</span>
)

                  ) : (
                    <div className="flex flex-col items-center">
                      <p></p>
                    </div>
                  )}
                </nav>
              </header>
              <div className="bg-custom-section-color flex-1 flex items-center justify-center">
                <div className="text-center relative w-full h-full">
                  <Image
                    src={RightMainPicture}
                    alt="img"
                    layout="fill"
                    objectFit="contain"
                    className="aspect-auto"
                  />
                </div>
              </div>
            </section>
          </main>

          <div id="vibe-right-now" className="vibe-section">
            <div className="z-0 self-stretch text-8xl leading-tight uppercase max-md:text-4xl" style={{ color: '#CEB863' }}>
              Vibe Right Now !!
            </div>
            <div className="pagination">
              <button className="active"></button>
              <button></button>
              <button></button>
            </div>
          </div>
          <div className="flex shrink-0 self-stretch my-auto rounded-full bg-zinc-400 h-[11px] w-[11px]" />
<div className="w-full flex flex-col items-center bg-gray-100 py-10"> 
  {/* Slider Container */}
  <div className="relative flex space-x-4 w-[90%] overflow-hidden">
    <div className="flex transition-transform duration-500 gap-1">
      {imageList.map((img, index) => (
        <div
          key={index}
          className={`relative shrink-0 ${index === 0 ? "w-[30%]" : "w-[25%]"} transition-all duration-500`}
        >
          <Image
            src={img.src}
            alt={`Image ${index + 1}`}
            className={`rounded-lg shadow-lg object-cover w-full h-[450px] ${index == 0 ? "h-[530px]" : ""}`}
          />
          {/* Sale Banner on First Image */}
          {index === 0 && (
            <div className="absolute bottom-5 left-5 bg-white p-4 shadow-md">
              <p className="text-gray-600 text-sm">01 — Spring Sale</p>
              <p className="text-2xl font-bold">30% OFF</p>
            </div>
          )}

          {/* Navigation Buttons inside First Image */}
          {index === 0 && (
            <>
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
            </>
          )}
        </div>
      ))}
    </div>
  </div>

  {/* Description Below */}
  <p className="mt-6 text-gray-700 text-center w-3/4">
    At Jodiac, we offer stylish apparel to elevate your everyday look. From comfy cotton tees and trendy oversized shirts to classic polos, our collection ensures you stay effortlessly cool while showcasing your unique cosmic style.
  </p>
</div>

          <div>
            <TrendVault />
            <Service />
            <Layout />
            <Footer />
          </div>
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
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer"
            />
          </div>
          <div
            className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ease-in-out ${menuOpen ? 'bg-black bg-opacity-50 opacity-100 visible' : 'opacity-0 invisible'
              }`}
            onClick={() => setMenuOpen(false)}
          >
            <div
              className={`bg-white w-3/5 h-full shadow-md transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-black text-xl"
                onClick={() => setMenuOpen(false)}
              >
                ✖
              </button>
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
                {user && user.name ? (
                  <span className="text-black">Hello, {user.name}</span>
                    ) : (
                  <span className="text-black">You need to sign in</span>
                    )}

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
          <div className="z-0 self-stretch text-8xl leading-tight uppercase max-md:text-4xl flex justify-center items-center" style={{ color: '#CEB863' }}>
              Vibe Right Now !!
            </div>
            <div className="w-full flex flex-col items-center bg-gray-100 py-10">
  {/* Slider Container */}
  <div className="relative w-[90%] overflow-hidden">
    <div className="relative w-full h-[450px] md:h-[530px]">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.src}
            alt={`Image ${index + 1}`}
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
          {/* Sale Banner on Current Image */}
          {index === currentIndex && (
            <div className="absolute bottom-5 left-5 bg-white p-4 shadow-md">
              <p className="text-gray-600 text-sm">01 —— Spring Sale</p>
              <p className="text-2xl font-bold">30% OFF</p>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
        className="absolute top-1/2 left-4 transform -translate-y-1/2 flex justify-center items-center w-12 h-12 md:w-16 md:h-16 p-4 rounded-full bg-white hover:bg-gray-400 transition shadow-lg text-2xl"
      >
        &lt;
      </button>

      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }
        className="absolute top-1/2 right-4 transform -translate-y-1/2 flex justify-center items-center w-12 h-12 md:w-16 md:h-16 p-4 rounded-full bg-white hover:bg-gray-400 transition shadow-lg text-2xl"
      >
        &gt;
      </button>
    </div>
  </div>

  {/* Description Below */}
  <p className="p-3 text-gray-700 text-left w-full leading-tight">
    At Jodiac, we offer stylish apparel to elevate your everyday look. Our
    collection ensures you stay effortlessly cool while showcasing your unique
    cosmic style.
  </p>
</div>

          <div>
            <TrendVault />
            <Service />
            <Layout />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;