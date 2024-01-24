import React from 'react'
import { solutionTabContent } from '../../Data/Api'


const Solutions = () => {
    return (
        <div className='communication_solution padding-block padding-inline'>
            <h3 className='text-black font-extrabold xl:text-[50px] md:text-[40px] text-[30px] sm:mb-[50px] mb-[30px] text-center '>Our VoIP Solutions</h3>

            {/* SOLUTIONS TABS */}
            <div className='grid lg:grid-cols-12 gap-x-[15px] lg:mx-[70px] '>
                <div className='solution_tabs xl:col-span-3 lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-1 gap-4 flex-wrap'>
                    {solutionTabContent.map((element, index) => {
                        return (
                            <div key={index} className="tab pt-[50px] px-[40px] pb-[34px]  text-center rounded-[15px] border border-[#CBCBCB] bg-light-white basis-1/4 lg:basis-0 ">
                                <img src={element.icon} className='block mx-auto mb-2' alt="" /> 
                                <p className='text-black font-bold md:text-[20px] text-[16px] mt-4 leading-none '>{element.title}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='solution_content xl:col-span-9 lg:col-span-8  bg-blue text-white rounded-[15px] md:pt-[50px] pt-[20px] md:px-[50px] px-[20px]   lg:pb-0 pb-[30px]  flex items-center justify-center lg:mt-0 mt-4 '>
                    <p className='xl:text-[35px]  md:text-[25px] sm:text-[20px]  text-[16px] text-justify '>
                        Say goodbye to traditional PBX hassles. Our hosted PBX, a cloud-based system accessible via an IP network, eliminates hefty upfront investments and ongoing maintenance. With no IT or installation costs, businesses can seamlessly manage their phone systems through a user-friendly control panel. Experience the ease, cost-effectiveness, and popularity of our hosted PBX solutions for modern businesses.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Solutions