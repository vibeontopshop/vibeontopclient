export default function Home() {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/signup");
  };
  const handleLogin = () => {
    router.push("/signin");
  };

  return (
    <div
      id="main_container"
      className="flex flex-col h-screen overflow-x-hidden bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900"
    >
      <div
        id="content"
        className="flex flex-col md:flex-row justify-between h-full"
      >
        {/* Left Content */}
        <div
          id="left_content"
          className="relative flex flex-col p-6 justify-center w-full md:w-[33vw] bg-white/60 backdrop-blur-md shadow-lg"
        >
          <Image src={Logo} alt="Logo" width={120} height={50} />
          <div className="relative mt-8">
            <Image
              className="transition-transform duration-500 hover:scale-105"
              src={Kalua}
              alt="Kalua"
              width={400}
              height={600}
            />
            <Image
              className="absolute top-[150px] left-4 transition-opacity duration-500 hover:opacity-90"
              src={Vot1}
              alt="Vot1"
              width={100}
              height={50}
            />
            <Image
              className="absolute top-[300px] left-4 transition-transform duration-500 hover:translate-y-2"
              src={Ontop}
              alt="Ontop"
              width={200}
              height={200}
            />
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
            loop={true}
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
              <div className="flex flex-col md:flex-row justify-center gap-5 mt-5 w-full">
                <button
                  className="w-full md:w-auto px-5 py-3 bg-[#CEB863] shadow-md shadow-gray-300 rounded-lg transition-transform duration-700 ease-in-out hover:scale-110"
                  onClick={handleRedirect}
                >
                  For Business
                </button>
                <button
                  className="w-full md:w-auto px-5 py-3 bg-[#CEB863] shadow-md shadow-gray-300 rounded-lg transition-transform duration-700 ease-in-out hover:scale-110"
                  onClick={handleRedirect}
                >
                  For Consumer
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
          <ul className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
            <div className="flex flex-col md:flex-row gap-5">
              <li className="text-center hover:text-gray-700 transition-colors">
                CONTACT
              </li>
              <li className="text-center hover:text-gray-700 transition-colors">
                ABOUT
              </li>
            </div>
            <button
              className="w-full md:w-auto px-8 py-3 bg-[#CEB863] rounded-lg shadow-lg text-center transition-transform ease-in-out hover:scale-105 duration-300"
              onClick={handleLogin}
            >
              Login
            </button>
          </ul>
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
