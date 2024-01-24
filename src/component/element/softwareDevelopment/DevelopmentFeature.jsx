import React from 'react'

const DevelopmentFeature = () => {
    return (
        <div className='development_feature_section  padding-inline '>
            <h3 className='text-black font-extrabold xl:text-[50px] md:text-[40px] text-[30px] sm:mb-[50px] mb-[30px] text-center '>Key Features</h3>

            {/* FEATURE CARD ONE */}
            <div className="development_card_section grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-[20px] xl:mx-[100px]  ">
                <div className={`development_feature_card  rounded-[20px] pt-[20px] pb-[50px]  transition duraiton-300 bg-white hover:bg-light-white `}>
                    <img src='/image/software-development/feature/img-1.png' className='mx-auto w-[280px] h-auto' alt="" />
                    <div className="development_feature_card_body text-center md:px-[20px] px-[15px] ">
                        <h4 className='my-3 2xl:text-[30px] lg:text-[25px]  text-[22px]  text-black font-bold leading-none '>Task Management</h4>
                        <p className='text-gray font-secondary font-normal'>
                            Effortlessly organize and track tasks with our intuitive task management feature, streamlining project workflows.
                        </p>
                    </div>
                </div>

                {/* FEATURE CARD ONE */}
                <div className={`development_feature_card bg-light-white rounded-[20px] pt-[20px] pb-[50px]  transition duraiton-300`}>
                    <img src='/image/software-development/feature/img-2.png' className='mx-auto w-[280px] h-auto' alt="" />
                    <div className="development_feature_card_body text-center md:px-[20px] px-[15px] ">
                        <h4 className='my-3 2xl:text-[30px] lg:text-[25px]  text-[22px]  text-black font-bold leading-none '>Financial Management</h4>
                        <p className='text-gray font-secondary font-normal'>
                            Empower financial control and transparency with our comprehensive financial management tools, ensuring precision in financial operations.
                        </p>
                    </div>
                </div>

                {/* FEATURE CARD ONE */}
                <div className={`development_feature_card  rounded-[20px] pt-[20px] pb-[50px]  transition duraiton-300 bg-white hover:bg-light-white `}>
                    <img src='/image/software-development/feature/img-3.png' className='mx-auto ' alt="" />
                    <div className="development_feature_card_body text-center md:px-[20px] px-[15px] ">
                        <h4 className='my-3 2xl:text-[30px] lg:text-[25px]  text-[22px]  text-black font-bold leading-none '>ERP Systems  </h4>
                        <p className='text-gray font-secondary font-normal'>
                            Experience seamless integration and optimization of your business processes through our robust ERP systems, enhancing overall efficiency and coordination.
                        </p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default DevelopmentFeature