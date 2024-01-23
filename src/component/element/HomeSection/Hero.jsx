import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation , Autoplay } from "swiper/modules";

const Hero = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 10000,
        }}
        modules={[Navigation , Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero_section w-full lg:h-[90vh] h-screen  bg-cover bg-fixed " style={{background : `url(${'/image/hero-bg-1.gif'}) no-repeat center   `}} >

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero_section w-full lg:h-[90vh] h-screen  bg-cover bg-fixed " style={{background : `url(${'/image/hero-bg-2.gif'}) no-repeat center   `}} >

          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Hero;
