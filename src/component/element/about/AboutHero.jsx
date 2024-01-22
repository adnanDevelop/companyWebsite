import React from "react";

const AboutHero = () => {
  return (
    <>
    <div className="padding-block padding-inline md:mt-0 mt-[40px] ">
      <div className="header_section text-center sm:mb-[50px] mb-[30px] ">
        <h2 className="text-black  font-extrabold  lg:text-[50px] sm:text-[40px] text-[30px]  ">About our company</h2>
        <p className="text-[20px] text-secondary font-normal text-[#797979] ">
          Enabling a digital tomorrow
        </p>
      </div>

        {/* IMAGE SECTION */}
        <div className="flex items-center lg:gap-6 gap-4 md:px-[50px] ">
            <div className="lg:basis-2/3 sm:basis-2/4 basis-full " >
            <img src="/image/about/img-1.jpg" className='w-full md:h-[400px] h-[300px]  object-cover rounded-3xl'  alt="" />
            </div>
            <div className="lg:basis-1/3 sm:basis-2/4 basis-full " >
                <img src="/image/about/img-2.jpg" className='w-full md:h-[400px] h-[300px]  object-cover rounded-3xl'  alt="" />
            </div>
        </div>

    </div>
      {/* CONTENT SECTION */}
      <div className="flex md:flex-row flex-col items-start padding-inline  " >
          <div className="md:ps-[50px] lg:basis-1/3 md:basis-2/5" >
            <h2 className="text-black font-primary font-bold lg:text-[40px] sm:text-[30px] text-[25px] md:mb-0 mb-2  ">What we do</h2>
          </div>
          <div className="md:pe-[50px] lg:basis-2/3  md:basis-3/5 ">
            <p className="font-normal text-gray text-justify md:text-[18px] text-[15px] " >
            At GoMarkho, we specialize in offering a comprehensive suite of solutions designed to meet the diverse communication needs of businesses. With a profound focus on Voice over Internet Protocol (VoIP), our expertise extends to encompass software development and intelligent automation. As a dynamic provider, we take pride in being the singular destination for businesses seeking to optimize their communication infrastructure. Whether it's establishing robust VoIP systems for seamless and cost-effective voice communication, developing cutting-edge software solutions tailored to specific business objectives, or integrating intelligent automation to streamline workflows, our team of experts is committed to delivering high-quality, innovative, and customized services. We strive to empower businesses with the tools and technologies necessary to thrive in today's dynamic market landscape.
            </p>
          </div>
      </div>
    </>
  );
};

export default AboutHero;
