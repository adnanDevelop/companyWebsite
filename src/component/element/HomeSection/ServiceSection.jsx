import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { serviceData } from "../../Data/Api";

const ServiceSection = () => {
  return (
    <div className="service_section padding-inline flex padding-block ">
      <div className="service_heading_section flex lg:items-center lg:flex-row flex-col ">
        <div className=" basis-full lg:basis-1/2 ">
          <p className="mb-2 text-sky-500 font-medium sm:text-[20px] text-[18px]  capitalize">
            services
          </p>
          <p className="gradient_color 2xl:text-[45px] lg:text-[35px] sm:text-[30px] text-[25px]  font-semibold font-primary lg:pe-[50px] relative">
            Experience tailored excellence, designed to elevate your
            connectivity, deliver personalized solutions, and streamline
            operations.
            <img src="/image/service-icon.png" alt="" />
          </p>
        </div>
        <div className="basis-full lg:basis-1/2  lg:mt-0 mt-[30px]">
          {serviceData.map((element, index) => {
            return (
              <div key={index} className="service_question pb-3 border-b-[1px] border-b-soft-white">
                <p className="2xl:text-[60px] sm:text-[40px] text-[30px] text-outline ">{element.count}</p>
                <h3 className=" sm:ps-[50px] ps-[30px]   font-normal font-secondary 2xl:text-[30px] text-[20px] text-black  ">
                  {element.title}
                </h3>
                <p className="  sm:ps-[50px] ps-[30px]  font-light  text-black md:text-[18px] text-[16px] font-secondary ">
                  {element.content}
                </p>
                <Link
                  to="/"
                  className="sm:ps-[50px] ps-[30px]  text-sky-500 md:text-[18px] text-[16px] text-center flex items-center gap-2 font-roboto  font-bold transition duration-500 hover:text-sky-900 focus:text-sky-900 "
                >
                  Learn more{" "}
                  <span className=" ">
                    <FaArrowRight />
                  </span>{" "}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
