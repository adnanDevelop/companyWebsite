import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";


const ProjectSection = () => {
  return (
    <div className="project_section relative xl:py-[40px] lg:py-[30px] pb-[40px] " >
        
      <div className="flex  lg:items-center lg:flex-row flex-col  padding-inline ">
        <div className="project_img_section  lg:basis-1/3 md:basis-2/4 basis-full   ">
          <img
            src="/image/about-img.png"
            className=" xl:w-[450px] lg:w-[350px] sm:w-[400px] w-full xl:h-[600px] sm:h-[400px] h-[350px] "
            alt=""
          />
        </div>
        <div className="project_content  lg:basis-2/3 md:basis-2/4 basis-full  lg:py-[100px] lg:mt-0 mt-[50px]">
          <p className="text-white xl:text-[30px] lg:text-[25px]  text-[20px] text-justify xl:ps-[100px] lg:ps-[50px]">
            Specializing in VoIP, software development, and intelligent
            automation, we offer tailored solutions that resonate with your
            unique needs. Elevate your communication experience with us – your
            trusted one-stop provider for all your business needs.
          </p>
          <div className="flex items-center lg:justify-end justify-start lg:gap-[70px] sm:gap-[40px] gap-[20px] md:mt-6 mt-4">
              <div className="text-center project_counter">
                <p className="text-sky-500 2xl:text-[50px] md:text-[40px] text-[30px] font-semibold">150+</p>
                <p className="text-[12px] text-white font-light capitalize ">project completed</p>
              </div>
              <div className="text-center project_counter">
                <p className="text-sky-500 2xl:text-[50px] md:text-[40px] text-[30px] font-semibold">200+</p>
                <p className="text-[12px] text-white font-light capitalize ">client satisfied</p>
              </div>
              <div className="text-center project_counter">
                <p className="text-sky-500 2xl:text-[50px] md:text-[40px] text-[30px] font-semibold">10+</p>
                <p className="text-[12px] text-white font-light capitalize ">years of experience</p>
              </div>
          </div>
          <div className="flex justify-end  lg:mt-[50px] mt-[30px]">
            <Link to='/about' className="flex items-center capitalize font-bold text-white bg-sky-500 rounded-full px-[30px] py-[15px] transition duration-300  hover:text-white focus:text-white hover:scale-105 " >About Us <span className="ps-3"> <FaArrowRight /> </span> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
