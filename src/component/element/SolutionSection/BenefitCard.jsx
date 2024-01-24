import React from 'react'
import { solutionCardContent } from '../../Data/Api'

const BenefitCard = () => {
    return (
        <div className='benefit_card padding-block padding-inline xl:mx-[200px] lg:mx-[100px]   '>
            <h3 className='text-black font-extrabold xl:text-[50px] md:text-[40px] text-[30px] sm:mb-[50px] mb-[30px] text-center '>Benefits of VoIP</h3>

            {/* BENEFIT CARD SECTION  */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-[30px]'>
                {solutionCardContent.map((element, index) => {
                    return (
                        <div key={index} className='benefit_card lg:h-[350px] h-auto lg:py-0 py-[50px]  px-[30px] border border-[#CBCBCB] bg-[#F9F9F9] rounded-[15px]  flex items-center justify-center flex-col' style={{ boxShadow: '0px 5px 25px 0px rgba(0, 0, 0, 0.07)' }} >
                            <img src={element.icon} alt="" />
                            <h5 className=' my-4 font-semibold text-[20px] capitalize '>{element.title}</h5>
                            <p className='text-center text-gray '>{element.content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BenefitCard