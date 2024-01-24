import React from 'react'

const FeatureCard = () => {
    return (
        <div className='solution_feature_section  padding-inline '>
            <h3 className='text-black font-extrabold xl:text-[50px] md:text-[40px] text-[30px] sm:mb-[50px] mb-[30px] text-center '>Key Features</h3>

            {/* FEATURE CARD ONE */}
            <div className="feature_card_section grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-[20px] xl:mx-[100px]  ">
                <div className={`feature_card  rounded-[20px] pt-[20px] pb-[50px]  transition duraiton-300 bg-white hover:bg-light-white `}>
                    <img src='/image/solution/feature/img-1.png' className='mx-auto' alt="" />
                    <div className="feature_card_body text-center md:px-[20px] px-[15px] ">
                        <h4 className='my-3 xl:text-[30px] text-[22px]  text-black font-bold leading-none '>Secured Platform</h4>
                        <p className='text-gray font-secondary font-normal'>
                            We make sure every system we make stay safe for users as well as customers, as security is our key component.
                        </p>
                    </div>
                </div>

                {/* FEATURE CARD ONE */}
                <div className={`feature_card bg-light-white rounded-[20px] pt-[20px] pb-[50px]  transition duraiton-300`}>
                    <img src='/image/solution/feature/img-1.png' className='mx-auto' alt="" />
                    <div className="feature_card_body text-center md:px-[20px] px-[15px] ">
                        <h4 className='my-3 xl:text-[30px] text-[22px]  text-black font-bold leading-none '>Unlimited Scalability</h4>
                        <p className='text-gray font-secondary font-normal'>
                            We provide multiple iterations and leave space for scalability in future maintenance phases.
                        </p>
                    </div>
                </div>

                {/* FEATURE CARD ONE */}
                <div className={`feature_card  rounded-[20px] pt-[20px] pb-[50px]  transition duraiton-300 bg-white hover:bg-light-white `}>
                    <img src='/image/solution/feature/img-1.png' className='mx-auto' alt="" />
                    <div className="feature_card_body text-center md:px-[20px] px-[15px] ">
                        <h4 className='my-3 xl:text-[30px] text-[22px]  text-black font-bold leading-none '>Automated calls</h4>
                        <p className='text-gray font-secondary font-normal'>
                            It involves auto attendant, calling in business hours, block calls, voicemails, call transfer, call recording and monitoring, etc.
                        </p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default FeatureCard