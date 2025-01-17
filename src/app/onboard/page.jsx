"use client";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import Kalua from "../../assets/b/w.png";
import Handsome from "../../assets/image.png";
import Vot1 from "../../assets/Vot1.png";
import Ontop from "../../assets/ontop.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import GroupBg from "../../assets/Group 1000006046.png";
import Group from "../../assets/group.png";
import Cap from "../../assets/images.png";
import Text from "../../assets/text.png";
import { useRouter } from "next/navigation";

export default function OnBoard() {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/signup");
  };
  const handellogin = () => {
    router.push("/signin");
  };
  return (
    <div
      id="main_container"
      className="flex flex-col h-screen overflow-hidden transition-all duration-500 ease-in-out"
    >
      <div
        id="content"
        className="flex flex-row justify-between h-full transition-all duration-700 ease-in-out"
      >
        {/* Left Content */}
        <div
          id="left_content"
          className="relative flex flex-col p-5 justify-center w-[33vw] bg-gray-100"
        >
          <div className="absolute bg-gray-400 shadow-md shadow-gray-500 border z-10 h-full left-0 top-0 w-[33vw] opacity-20 transition-opacity duration-700 ease-in-out"></div>
          <ul className="flex flex-row justify-around items-center z-10">
            <Image src={Logo} alt="logo" height={50} width={120} />
            <li className="font-bold flex flex-row items-center">
              <span className="transition-colors duration-500 ease-in-out hover:text-gray-700">
                CATEGORY
              </span>
              <svg
                className="ml-2 rotate-90 transition-transform duration-500 ease-in-out hover:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="black"
              >
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
              </svg>
            </li>
          </ul>
          <div className="relative z-10 mt-10">
            <Image
              className="transition-transform duration-700 ease-in-out hover:scale-105"
              src={Kalua}
              alt="Kalua image"
              width={440}
              height={618}
            />
            <Image
              className="absolute top-[150px] left-2 transition-opacity duration-700 ease-in-out hover:opacity-90"
              src={Vot1}
              alt="vot1"
              height={50}
              width={100}
            />
            <Image
              className="absolute top-[300px] left-2 transition-transform duration-700 ease-in-out hover:translate-y-2"
              src={Ontop}
              alt="ontop"
              height={200}
              width={400}
            />
          </div>
        </div>

        {/* Middle Content */}
        <div id="middle_content" className="w-[33vw] overflow-hidden">
          <Swiper
            direction="vertical"
            slidesPerView={2}
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            speed={1000} // Swiper animation speed for smoothness
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper h-full"
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
            <SwiperSlide className="flex flex-col justify-center items-center h-full">
              <Image
                className="mb-10 transition-transform duration-700 ease-in-out hover:scale-105"
                height={100}
                width={400}
                src={Text}
                alt="Text"
              />
                <div className="flex flex-row justify-center gap-10 mt-5">
                <button
                  className="px-7 py-2 bg-[#CEB863] shadow-md shadow-gray-300 transition-transform duration-700 ease-in-out hover:scale-110"
                    onClick={handleRedirect}
                  >
                For Business
                </button>
                <button
                  className="px-7 py-2 bg-[#CEB863] shadow-md shadow-gray-300 transition-transform duration-700 ease-in-out hover:scale-110"
                    onClick={handleRedirect}
                  >
                For Consumer
                </button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative flex items-center justify-center">
              <Image
                className="absolute w-full transition-transform duration-700 ease-in-out hover:translate-y-2"
                height={200}
                width={900}
                src={Cap}
                alt="Cap"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Right Content */}
        <div
          id="right_content"
          className="relative flex flex-col items-center justify-between w-[33vw] p-5"
        >
          <div className="absolute bg-gray-400 shadow-md shadow-gray-500 border z-10 h-full right-0 top-0 w-[33vw] opacity-20 transition-opacity duration-700 ease-in-out"></div>
          <ul className="flex flex-row justify-around items-center w-full z-10">
            <li className="font-bold transition-colors duration-500 ease-in-out hover:text-gray-700">
              CONTACT
            </li>
            <li className="font-bold transition-colors duration-500 ease-in-out hover:text-gray-700">
              ABOUT
            </li>
            <li>
              <svg
                className="transition-transform duration-500 ease-in-out hover:scale-125"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="black"
              >
                <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
              </svg>
            </li>
            <button className="px-7 py-2 bg-[#CEB863] shadow-md shadow-gray-300 transition-transform duration-700 ease-in-out hover:scale-110" onClick={handellogin}>
              Login
            </button>
          </ul>
          <Image
            className="transition-opacity duration-700 ease-in-out hover:opacity-90"
            width={280}
            height={600}
            src={Handsome}
            alt="Handsome"
          />
        </div>
      </div>
    </div>
  );
}
