import React from 'react'

const AutomationFeature = () => {
  return (
    <div className='development_feature_section  padding-inline '>
      <h3 className='text-black font-extrabold xl:text-[50px] md:text-[40px] text-[30px] sm:mb-[50px] mb-[30px] text-center '>Key Features</h3>

      {/* FEATURE CARD ONE */}
      <div className="development_card_section grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-[20px] xl:mx-[100px]  ">
        <div className={`development_feature_card  rounded-[20px] pt-[20px] pb-[50px]  transition duraiton-300 bg-white hover:bg-light-white `}>
          <img src='/image/service-automation/feature/img-1.png' className='mx-auto w-[280px] h-auto' alt="" />
          <div className="development_feature_card_body text-center md:px-[20px] px-[15px] ">
            <h4 className='my-3  2xl:text-[30px] lg:text-[20px]  text-[22px]  text-black font-bold leading-none '>Consultation</h4>
            <p className='text-gray font-secondary font-normal'>
              Expert consultations tailor process automation solutions to your unique business needs, ensuring optimal efficiency.
            </p>
          </div>
        </div>

        {/* FEATURE CARD ONE */}
        <div className={`development_feature_card bg-light-white rounded-[20px] pt-[20px] pb-[50px]  transition duraiton-300`}>
          <img src='/image/service-automation/feature/img-2.png' className='mx-auto w-[280px] h-auto' alt="" />
          <div className="development_feature_card_body text-center md:px-[20px] px-[15px] ">
            <h4 className='my-3 2xl:text-[30px] lg:text-[20px]  text-[22px]  text-black font-bold leading-none '>Plan, Pilot, Scale</h4>
            <p className='text-gray font-secondary font-normal'>
              Strategically plan and pilot-scale your automation initiatives for seamless integration and maximum impact.
            </p>
          </div>
        </div>

        {/* FEATURE CARD ONE */}
        <div className={`development_feature_card  rounded-[20px] pt-[20px] pb-[50px]  transition duraiton-300 bg-white hover:bg-light-white `}>
          <img src='/image/service-automation/feature/img-3.png' className='mx-auto ' alt="" />
          <div className="development_feature_card_body text-center md:px-[20px] px-[15px] ">
            <h4 className='my-3 2xl:text-[30px] lg:text-[20px]  text-[22px]  text-black font-bold leading-none '>Data Capture</h4>
            <p className='text-gray font-secondary font-normal'>
              Efficiently capture and utilize crucial data with our advanced automation processes, driving informed decision-making.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AutomationFeature