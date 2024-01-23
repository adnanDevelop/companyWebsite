import React from 'react'

const ContactHeader = () => {
    return (
        <div className='contact_header padding-inline xl:mx-[100px] md:mx-[50px] padding-block sm:mt-2 mt-[50px] sm:mb-0 mb-[30px] '>
            <div className=' text-center about_work_section  sm:pb-[30px] flex items-center justify-center flex-col  '>
                <h2 className='text-black font-bold text-primary xl:text-[50px] md:text-[40px] text-[30px]  leading-none' >Get in touch today!</h2>
            </div>
            {/* DETAIL SECTION */}
            <div className="grid lg:grid-cols-2 grid-cols-1  lg:gap-[25px] gap-[20px]   mt-[30px]">
                <div className='contact_header_card sm:py-5 py-3  xl:px-8 px-4  rounded-3xl shadow-xl border border-[#E8E8E8] bg-white flex items-center justify-between' >
                    <div className='icon_section flex items-center'>
                        <img src="/image/contact/img-1.svg" className='sm:w-[60px] w-[50px]  sm:h-[60px] h-[50px]  object-cover' alt="" />
                        <p className='text-[#1B2534] sm:text-[20px] text-[16px]  font-bold font-secondary capitalize ps-3 '>mail us</p>
                    </div>
                    <a href="mailto:hr@gomarkho.com" target='_blank' rel="noreferrer" className='no-underline text-gray sm:text-[20px] text-[16px]  font-secondarys'>hr@gomarkho.com</a>
                </div>
                {/* 2ND CARD */}
                <div className='contact_header_card sm:py-5 py-3  xl:px-8 px-4  rounded-3xl shadow-xl border border-[#E8E8E8] bg-white flex items-center justify-between' >
                    <div className='icon_section flex items-center'>
                        <img src="/image/contact/img-2.svg" className='sm:w-[60px] w-[50px]  sm:h-[60px] h-[50px]  object-cover' alt="" />
                        <p className='text-[#1B2534] sm:text-[20px] text-[16px]  font-bold font-secondary capitalize ps-3 '>call us</p>
                    </div>
                    <a href="tel:0518895778" target='_blank' rel="noreferrer" className='no-underline text-gray sm:text-[20px] text-[16px]  font-secondarys'>051 8895778</a>
                </div>
            </div>
        </div>
    )
}

export default ContactHeader