"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";

import Logo from "../assets/logo.png";
import Kalua from "../assets/b/w.png";
import Handsome from "../assets/image.png";
import Vot1 from "../assets/Vot1.png";
import Ontop from "../assets/ontop.png";
import GroupBg from "../assets/Group 1000006046.png";
import Group from "../assets/group.png";
import Cap from "../assets/images.png";
import Text from "../assets/text.png";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get("http://localhost:8080/api/auth/getuser", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(response.data.user);
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    };
    fetchUser();
  }, []);

  const handleRedirect = () => router.push("/signup");

  const handleLoginClick = () => router.push("/login");

  return (
    <div
      id="main_container"
      className="flex flex-col h-screen overflow-x-hidden bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900"
    >
      <div id="content" className="flex flex-col md:flex-row justify-between h-full">
        {/* Left Content */}
        <div
          id="left_content"
          className="relative flex flex-col p-6 justify-center w-full md:w-[33vw] bg-white/60 backdrop-blur-md shadow-lg"
        >
          <div className="absolute inset-0 w-full md:w-[33vw] bg-white/80 shadow-lg z-0"></div>
          <div className="relative z-10">
            <Image src={Logo} alt="Logo" width={120} height={50} />
            <div className="mt-8 space-y-5">
              <Image
                className="transition-transform duration-500 hover:scale-105"
                src={Kalua}
                alt="Kalua"
                width={400}
                height={600}
              />
              <div className="absolute top-[150px] left-4">
                <Image
                  className="transition-opacity duration-500 hover:opacity-90"
                  src={Vot1}
                  alt="Vot1"
                  width={100}
                  height={50}
                />
              </div>
              <div className="absolute top-[300px] left-4">
                <Image
                  className="transition-transform duration-500 hover:translate-y-2"
                  src={Ontop}
                  alt="Ontop"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Content */}
        <div
          id="middle_content"
          className="w-full md:w-[33vw] flex flex-col justify-center items-center overflow-hidden"
        >
          <Swiper
            direction="vertical"
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            loop
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="w-full h-full"
          >
            <SwiperSlide className="relative flex items-center justify-center">
              <Image
                className="absolute w-full transition-opacity duration-700 ease-in-out hover:opacity-90"
                height={200}
                width={900}
                src={GroupBg}
                alt="Background"
              />
              <Image
                className="absolute w-full transition-transform duration-700 ease-in-out hover:scale-105"
                height={200}
                width={900}
                src={Group}
                alt="Group"
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center">
              <Image
                className="transition-transform duration-500 hover:scale-105"
                src={Text}
                alt="Text"
                width={300}
                height={100}
              />
              <div className="flex flex-col md:flex-row justify-center gap-5 mt-5">
                <button
                  className="px-7 py-2 bg-[#CEB863] shadow-md shadow-gray-300 transition-transform duration-700 ease-in-out hover:scale-110"
                  onClick={handleRedirect}
                >
                  Shop Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative flex items-center justify-center">
              <Image
                className="w-full transition-transform duration-500 hover:translate-y-2"
                src={Cap}
                alt="Cap"
                width={900}
                height={200}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Right Content */}
        <div
          id="right_content"
          className="relative flex flex-col items-center justify-between w-full md:w-[33vw] p-6 bg-white/60 backdrop-blur-md shadow-lg"
        >
          <div className="relative z-10">
            <ul className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 w-full">
              {/* Contact and About */}
              <div className="flex flex-col md:flex-row gap-5">
                <li className="text-center hover:text-gray-700 transition-colors">
                  CONTACT
                </li>
                <li className="text-center hover:text-gray-700 transition-colors">
                  ABOUT
                </li>
              </div>

              {/* Login Button */}
              <div className="flex justify-center md:ml-auto">
                {user ? (
                  <span className="text-black">Hello, {user.name}</span>
                ) : (
                  <button
                    className="bg-black text-white px-4 py-2 rounded-full"
                    onClick={handleLoginClick}
                  >
                    Login
                  </button>
                )}
              </div>
            </ul>
          </div>
          <Image
            className="transition-opacity duration-500 hover:opacity-90"
            src={Handsome}
            alt="Handsome"
            width={300}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
