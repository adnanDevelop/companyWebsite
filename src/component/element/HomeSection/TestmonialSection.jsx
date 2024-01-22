import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { testCotent } from "../../Data/Api";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const TestmonialSection = () => {
  return (
    <div className="testmonial_section  padding-inline">
      {/* HEADER SECTION */}
      <div className="testmonial_header flex items-center justify-between ">
        <h2 className="text-black font-semibold capitalize  xl:text-[50px] sm:text-[30px] text-[25px]  ">
          client testmonials
        </h2>
        <div className="slider_btn flex items-center gap-2">
          <button className="w-[40px] h-[40px] rounded-md flex items-center justify-center bg-sky-500 text-white transition duration-300 focus:bg-sky-900 text[20px] ">
            <FaArrowLeft />
          </button>
          <button className="w-[40px] h-[40px] rounded-md flex items-center justify-center bg-sky-500 text-white transition duration-300 focus:bg-sky-900 text[20px] ">
            <FaArrowRight />
          </button>
        </div>
      </div>
      {/* CARD SECTION */}
      <div className="testmonial_card_section ">
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          grabCursor={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {testCotent.map((element, index) => {
            return (
              <SwiperSlide>
                <div
                  className="mb-[100px] mt-[40px] basis testmonial_card shadow-lg rounded-xl bg-white  py-[40px] px-[30px]"
                  key={index}
                >
                  <p className="text-justify mb-[20px] text-[20px]">{element.content}</p>
                  <div className="flex items-center gap-4   ">
                    <img
                      src={element.img}
                      className="xl:w-[70px] w-[60px]  xl:h-[70px] h-[60px]  object-cover"
                      alt=""
                    />
                    <div>
                      <h4 className="text-black font-medium text-secondary ">
                        {element.title}
                      </h4>
                      <p className=" font-light  text-black text-secondary text-[12px]  ">
                        {element.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TestmonialSection;
