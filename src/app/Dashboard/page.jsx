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

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { FaBars } from 'react-icons/fa';
import { useRouter } from "next/navigation";


const Home = () => {
  const [isTabView, setisTabView] = useState(false);
  const [isMobileView, setisMobileView] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility
  const Router = useRouter();
  const handelredirect= ()=>{
    Router.push("/signup")
  }
  const handellogin= ()=>{
    Router.push("/signin")
  }

  
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
    const handleResize = () => {
      setisTabView(window.innerWidth <= 1200);
    };
  
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize); // Add resize listener
  
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);
  
  return (
    <>
    {!isMobileView ? (
    <div className="h-lvh flex flex-col">
        <div className="bg-black text-white h-10 flex justify-center items-center">Disconut 20% for new members. <b>ONLY FOR TODAY!!!</b></div>
      <main className="flex flex-1 flex-col md:flex-row">
        <section className="flex-1 flex flex-col bg-custom-section-color">
          <header className="h-20 py-6 bg-custom-section-color flex items-center justify-between px-8 font-smooch">
            <div className="text-xl font-bold">
            {!isTabView ? (              
              <Image className="" src={Logo} alt="logo"width={180}/>
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
    <Image src={LeftMainPicture} alt="img" layout="fill" objectFit="contain"/>
    <div className="absolute z-10 bottom-52 left-16 flex flex-col">
    <Image src={Vot1} alt="img"objectFit="contain" width={50}/>
    <Image src={Ontop} alt="img"objectFit="contain" width={300}/>          
        </div>       
    </div>
          </div>
        </section>

        <section className="flex-1 bg-white flex items-center justify-center flex-col">
        {isTabView ? (
            <div className="flex flex-row justify-center items-center">
              <Image className="" src={Logo} alt="logo" width={100} />
              <button className="px-7 py-2 bg-[#CEB863] shadow-md shadow-gray-300">
                LOGIN
              </button>
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
    // pagination={{ clickable: true }}
    modules={[FreeMode, Pagination, Autoplay]}
    className="mySwiper h-[50vh] flex items-center justify-center bg-white"
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
         layout="" objectFit="contain"
        src={Text}
        alt="text"
      />
      {/* <div className="flex flex-row justify-around items-center gap-10 mt-10">
        <button className="px-7 py-2 bg-[#CEB863] shadow-md shadow-gray-300">
          For Business
        </button>
        <button className="px-7 py-2 bg-[#CEB863] shadow-md shadow-gray-300">
          For Consumer
        </button>
      </div> */}
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
  <div className="flex flex-row justify-around items-center gap-10 mt-10">
        <button className="px-7 py-2 bg-[#CEB863] shadow-md shadow-gray-300" onClick={handelredirect}>
          For Business
        </button>
        <button className="px-7 py-2 bg-[#CEB863] shadow-md shadow-gray-300" onClick={handelredirect}>
          For Consumer
        </button>
      </div>
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

                <button className="px-7 py-2 bg-[#CEB863] shadow-md shadow-gray-300" onClick={handellogin}>
                LOGIN
              </button>
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
    />            </div>
          </div>     
          </section>
      </main>
      <div className="bg-black text-white h-10 flex justify-center items-center gap-2">
        <div className="border border-solid border-white p-1 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"white"}>
    <path fillRule="evenodd" clipRule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
        </div>

        <div className="border border-solid border-white p-1 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="white">
    <path d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg></div>
        <span>www.vibeontop.com</span>
        <div className="border border-solid border-white p-1 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="white">
    <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg>
        </div>
        <div className="border border-solid border-white p-1 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg></div>
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
    onClick={() => setMenuOpen(true)} // Open menu on click
    className="cursor-pointer"
  />
</div>

{/* Full-Screen Menu */}
<div
  className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ease-in-out ${
    menuOpen ? 'bg-black bg-opacity-50 opacity-100 visible' : 'opacity-0 invisible'
  }`}
  onClick={() => setMenuOpen(false)} // Close menu on backdrop click
>
  {/* Sidebar Menu */}
  <div
    className={`bg-white w-3/5 h-full shadow-md transform transition-transform duration-300 ease-in-out ${
      menuOpen ? 'translate-x-0' : 'translate-x-full'
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
                <Image className="" src={Logo} alt="logo" width={150}/>
                <button className="px-7 py-2 h-10 bg-[#CEB863] shadow-md shadow-gray-300">LOGIN</button>
                  </div>
                <Image className="" src={Merged} alt="logo"/>
                </section>

                <div className="flex flex-col justify-center items-center">                  
                <Image className="mt-3" src={Ultimate} alt="logo"/>
                <Image className="mt-3" src={Merged2} alt="logo"/>
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
        <Image className="" src={Mixed} alt="logo"/>
        </div>
        
        </div>
        <div className="bg-black text-white h-10 flex justify-center items-center gap-2 p-6">
        <div className="border border-solid border-white p-1 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"white"}>
    <path fillRule="evenodd" clipRule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
        </div>

        <div className="border border-solid border-white p-1 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="white">
    <path d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg></div>
        <span>www.vibeontop.com</span>
        <div className="border border-solid border-white p-1 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="white">
    <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg>
        </div>
        <div className="border border-solid border-white p-1 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg></div>
         </div>
        </div>
)}
    </>
  );
};

export default Home;
