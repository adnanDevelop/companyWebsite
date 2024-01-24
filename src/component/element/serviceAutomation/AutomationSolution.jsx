import React from 'react'
import { automationTabContent } from '../../Data/Api'

const AutomationSolution = () => {
  return (
    <div className='communication_solution padding-block padding-inline'>
      <h3 className='text-black font-extrabold xl:text-[50px] md:text-[40px] text-[30px] sm:mb-[50px] mb-[30px] text-center '>Our VoIP Solutions</h3>

      {/* SOLUTIONS TABS */}
      <div className='grid lg:grid-cols-12 gap-x-[15px] lg:mx-[70px] '>
        <div className='solution_tabs xl:col-span-3 lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-1 sm:gap-8 gap-4  flex-wrap'>
          {automationTabContent.map((element, index) => {
            return (
              <div key={index} className="tab pt-[50px] px-[20px] pb-[40px]  text-center rounded-[15px] border border-[#CBCBCB] bg-light-white basis-1/4 lg:basis-0 ">
                <img src={element.icon} className='block mx-auto mb-2' alt="" />
                <p className='text-black font-bold md:text-[20px] text-[16px] mt-4 leading-none '>{element.title}</p>
              </div>
            )
          })}
        </div>
        <div className='solution_content xl:col-span-9 lg:col-span-8  bg-blue text-white rounded-[15px] md:pt-[50px] pt-[20px] md:px-[50px] px-[20px]   pb-[30px]  flex items-center justify-center lg:mt-0 mt-4 '>
          <p className='md:text-[25px] sm:text-[20px]  text-[16px] text-justify '>
            Unlock the potential of automation with GoMarkho, empowering your organization to leverage digital labor for enhanced business continuity. Our technologists collaborate with clients globally, seamlessly transforming industry-specific functions into efficient automated workflows aligned with operational goals. Utilizing real-world data, GoMarkho optimizes your workflow through automation, ensuring higher-quality results, reduced costs, and minimized risks.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AutomationSolution