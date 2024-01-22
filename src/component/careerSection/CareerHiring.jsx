import React from 'react'
import { hiringContent } from '../Data/Api'


const CareerHiring = () => {
    return (
        <div className=' hiring_section padding-block padding-inline mb-[50px] ' >
            {/* HIRING HEADER SECTION */}
            <div className="hiring_header text-left lg:ms-[100px] lg:mb-[40px] mb-[30px]  ">
                <span className='uppercase text-[12px] text-black font-light'>our hiring process</span>
                <h2 className='text-black font-bold xl:text-[50px] lg:text-[40px]  sm:text-[30px] text-[22px mt-3] capitalize  leading-none '>As simple as it could be</h2>
            </div>

            {/* HIRING CARD SECTION */}
            <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1   gap-[20px]  lg:ms-[100px] ">
                {hiringContent.map((element, index) => {
                    return (
                        <div className='hiring_card py-[80px] sm:px-[20px] px-[20px] sm:rounded-t-full sm:rounded-b-full rounded-[100px]   text-center border border-[#DFDFDF]' key={index} >
                            <img src={element.img} className='mx-auto block lg:mb-4 mb-3 w-[80px] h-[80px]' alt="" />
                            <h4 className='text-black font-medium text-[50px] leading-none mb-2 '>{element.title}</h4>
                            <p className='text-[16px] text-black uppercase font-semibold mb-2 font-secondary'>{element.subtitle}</p>
                            <p className='text-black font-normal font-secondary text-[14px] '>{element.content}</p>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default CareerHiring