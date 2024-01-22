import React from "react";

const AboutCounter = () => {
  return (
    <div className=" about_counter_section margin-inline sm:py-[50px] py-[25px]   margin-block  rounded-[30px] bg-light-white  flex sm:flex-row flex-col flex-wrap items-center  ">
      {/* CLIENT */}
      <div className="lg:basis-1/4 sm:basis-2/4 basis-full  lg:mb-0 mb-4   text-center ">
        <h2 className="text-black font-extrabold text-primary lg:text-[40px] sm:text-[35px] text-[30px]   leading-tight ">
          100<span className="text-sky-900">M</span>
        </h2>
        <p className="text-black text-secondary font-bold capitalize sm:text-[16px] text-[14px]   ">
          client satisfaction
        </p>
      </div>
      {/* SUPPORT */}
      <div className="lg:basis-1/4 sm:basis-2/4 basis-full  lg:mb-0 mb-4   text-center ">
        <h2 className="text-black  font-extrabold  text-primary lg:text-[40px] sm:text-[35px] text-[30px]   leading-tight ">
          24<span className="text-sky-900">h</span>
        </h2>
        <p className="text-black text-secondary font-bold capitalize sm:text-[16px] text-[14px]   ">
          Expert support team
        </p>
      </div>
      {/* SALES */}
      <div className="lg:basis-1/4 sm:basis-2/4 basis-full sm:mb-0 mb-4   text-center ">
        <h2 className="text-black font-extrabold text-primary lg:text-[40px] sm:text-[35px] text-[30px]  leading-tight ">
          98<span className="text-sky-900">k+</span>
        </h2>
        <p className="text-black text-secondary font-bold capitalize sm:text-[16px] text-[14px]  ">
          sales count
        </p>
      </div>
      {/*  CLIENT */}
      <div className="lg:basis-1/4 sm:basis-2/4 basis-full  sm:mb-0 mb-4  text-center ">
        <h2 className="text-black font-extrabold text-primary lg:text-[40px] sm:text-[35px] text-[30px]  leading-tight ">
          208<span className="text-sky-900">+</span>
        </h2>
        <p className="text-black text-secondary font-bold capitalize sm:text-[16px] text-[14px]  ">
          client worldwide
        </p>
      </div>
    </div>
  );
};

export default AboutCounter;
