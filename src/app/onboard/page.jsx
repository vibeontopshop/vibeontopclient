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

export default function Home() {
  return (
    <>
      <div
        id="main_container"
        className="flex flex-col h-screen overflow-hidden"
      >
        <div id="content" className="flex flex-row justify-between">
          <div
            id="left_content"
            className="flex flex-col p-5 justify-center w-[33vw] overflow-hidden"
          >
            <div className="bg-gray-400 shadow-md shadow-gray-500 border z-10 absolute h-[98vh] left-0 top-0 w-[33vw] opacity-20 overflow-hidden"></div>
            <ul className="flex flex-row justify-around">
              <Image
                className=""
                src={Logo}
                alt="logo"
                height={10}
                width={120}
              />
              <li className="font-bold mt-5">HOME</li>
              <li className="flex flex-row font-bold mt-5">
                <span>CATEGORY</span>
                <svg
                  className="rotate-90 mt-1"
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
            <Image src={Kalua} alt="Kalua image" width={440.6} height={618.9} />
            <Image
              className="absolute mt-36 ml-2"
              src={Vot1}
              alt="vot1"
              height={50}
              width={100}
            />
            <Image
              className="absolute mt-[250px] ml-2"
              src={Ontop}
              alt="ontop"
              height={200}
              width={400}
            />
          </div>
          <div id="middle_content" className="w-[33vw] overflow-y-hidden">
            <Swiper
              direction={"vertical"}
              slidesPerView={2}
              autoplay={true}
              spaceBetween={30}
              // freeMode={true}
              loop={true}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination, Autoplay]}
              className="mySwiper max-h-screen"
            >
              <SwiperSlide>
                <Image
                  className="absolute aspect-auto"
                  height={200}
                  width={900}
                  src={GroupBg}
                  alt="bg"
                />
                <Image
                  className="absolute aspect-auto"
                  height={200}
                  width={900}
                  src={Group}
                  alt="bg"
                />
              </SwiperSlide>
              <SwiperSlide className="flex flex-col justify-center items-center h-[60vh]">
                <Image
                  className="absolute aspect-auto ml-10"
                  height={100}
                  width={400}
                  src={Text}
                  alt="bg"
                />
                <div className="flex flex-row justify-around items-center gap-10 mt-[20rem]">
                  <button className="px-7 py-2 bg-[#CEB863] shadow-md shadow-gray-300">
                    For Business
                  </button>
                  <button className="px-7 py-2 bg-[#CEB863] shadow-md shadow-gray-300">
                    For Consumer
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className="absolute aspect-auto"
                  height={200}
                  width={900}
                  src={Cap}
                  alt="bg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div id="right_content" className="w-[33vw] overflow-hidden p-5 py-8">
            <div className="bg-gray-400 shadow-md shadow-gray-500 right-0 border z-10 absolute h-[98vh] top-0 w-[33vw] opacity-20 overflow-hidden"></div>
            <ul className="flex flex-row justify-around items-center ">
              {/* <img src="" alt="" /> */}
              <li className="font-bold">CONTACT</li>
              <li className="font-bold">ABOUT</li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="black"
                >
                  <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="black"
                >
                  <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                </svg>
              </li>
              <button className="px-7 py-2 bg-[#CEB863] shadow-md shadow-gray-300">
                Login
              </button>
            </ul>
            <Image width={280} height={600} src={Handsome} alt="Handsome" />
          </div>
        </div>
        <div id="footer"></div>
      </div>
    </>
  );
}
