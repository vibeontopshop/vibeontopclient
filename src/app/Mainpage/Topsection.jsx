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
import Cap from "../../assets/images.png";
import Text from "../../assets/text.png";
import Merged from "../../assets/merged.png";
import Ultimate from "../../assets/ULTIMATE.png";
import Merged2 from "../../assets/SALE-removebg.png";
import Mixed from "../../assets/mixed.png";
import axios from "axios";
import { FaBars } from 'react-icons/fa';
import Link from "next/link";


const Home = ({ onCategoryClick }) => {
  const [isTabView, setisTabView] = useState(false);
  const [isMobileView, setisMobileView] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
  const [user, setUser] = useState(null);

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
  useEffect(() => {
    const handleResize = () => {
      setisMobileView(window.innerWidth <= 765);
    };
  
    handleResize();
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setisTabView(window.innerWidth <= 1200);
    };
  
    handleResize(); 
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize); 
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
              <a href="/Mainpage" className="hover:text-gray-500">HOME</a>
              <a onClick={onCategoryClick} className="hover:text-gray-500 cursor-pointer">CATEGORY</a>
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
              <Link href="/" className="hover:text-gray-500">CONTACT</Link>
              <Link href="/Aboutus" className="hover:text-gray-500">ABOUT</Link>
              <Link href="/Cart" className="hover:text-gray-500">                
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                  <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                </svg></Link>

              <Link href="/Cart" className="hover:text-gray-500">                
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                  <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                </svg></Link>
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
    />            </div>
          </div>     
          </section>
      </main>
    </div>
    ) : (
      <div className="h-lvh flex flex-col">
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
  className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ease-in-out ${
    menuOpen ? 'bg-black bg-opacity-50 opacity-100 visible' : 'opacity-0 invisible'
  }`}
  onClick={() => setMenuOpen(false)} 
>
  <div
    className={`bg-white w-3/5 h-full shadow-md transform transition-transform duration-300 ease-in-out ${
      menuOpen ? 'translate-x-0' : 'translate-x-full'
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
        <li><Link href="#home" className="hover:text-gray-600 list-none">Home</Link></li>
        <li><Link href="#about" className="hover:text-gray-600 list-none">About</Link></li>
        <li><Link href="/Cart" className="hover:text-gray-600 list-none">Cart</Link></li>
        <li><Link href="#contact" className="hover:text-gray-600 list-none">Contact</Link></li>
      </ul>
    </nav>
  </div>
</div>
        <div className="p-3">
                <section className="flex flex-col justify-center items-center w-full">
                  <div className="flex justify-center items-center">
                <Image className="" src={Logo} alt="logo" width={150}/>
                {user && user.name ? (
<span className="text-black">Hello, {user.name}</span>
) : (
<span className="text-black">You need to sign in</span>
)}

                  </div>
                <Image className="" src={Merged} alt="logo"/>
                </section>

                <div className="flex flex-col justify-center items-center">                  
                <Image className="mt-3" src={Ultimate} alt="logo"/>
                <Image className="mt-3" src={Merged2} alt="logo"/>
                </div>
        <div className="mt-3 flex">
        <Image className="" src={Mixed} alt="logo"/>
        </div>
        
        </div>
        </div>
)}
    </>
  );
};

export default Home;