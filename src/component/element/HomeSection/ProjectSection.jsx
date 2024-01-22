import React from "react";

const ProjectSection = () => {
  return (
    <div className="project_section relative  lg:py-[20px] pb-[40px] " >
        
      <div className="flex  lg:items-center lg:flex-row flex-col  padding-inline ">
        <div className="project_img_section rounded-[10px] lg:basis-1/3 md:basis-2/4 basis-full  ">
          <img
            src="/image/about-img.png"
            className="block lg:w-[350px] sm:w-[400px] w-full sm:h-[400px] h-[350px]"
            alt=""
          />
        </div>
        <div className="project-overlay"></div>
        <div className="project_content  lg:basis-2/3 md:basis-2/4 basis-full  lg:py-[100px] lg:mt-0 mt-[50px]  ">
          <p className="text-white  lg:text-[20px]  text-[18px] text-justify lg:ps-[50px] ">
            Specializing in VoIP, software development, and intelligent
            automation, we offer tailored solutions that resonate with your
            unique needs. Elevate your communication experience with us – your
            trusted one-stop provider for all your business needs.
          </p>
          <div className="flex items-center lg:justify-end justify-start lg:gap-[70px] sm:gap-[40px] gap-[20px]  mt-4">
              <div className="text-center project_counter">
                <p className="text-sky-500 2xl:text-[50px] md:text-[40px] text-[30px] font-semibold  ">150+</p>
                <p className="text-[12px] text-white font-light capitalize ">project completed</p>
              </div>
              <div className="text-center project_counter">
                <p className="text-sky-500 2xl:text-[50px] md:text-[40px] text-[30px] font-semibold  ">200+</p>
                <p className="text-[12px] text-white font-light capitalize ">client satisfied</p>
              </div>
              <div className="text-center project_counter">
                <p className="text-sky-500 2xl:text-[50px] md:text-[40px] text-[30px] font-semibold  ">10+</p>
                <p className="text-[12px] text-white font-light capitalize ">years of experience</p>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectSection;