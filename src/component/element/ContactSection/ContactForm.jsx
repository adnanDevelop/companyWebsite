import React from 'react'

const ContactForm = () => {
    return (
        <div className='career_form_section md:py-[100px] py-[40px]  xl:px-[70px] px-[25px]  rounded-[30px] bg-white drop-shadow-1xl  lg:mx-[150px] md:mx-[100px] mx-[30px] mb-[100px]  '>
            <div className="grid md:grid-cols-2 grid-cols-1  lg:gap-[40px] gap-[20px]  ">
                {/* NAME FIELD */}
                <div className='field_one mb-4'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >Full Name*</p>
                    <input type="text" required id='fullName' value='John david' className=' border border-[#D3D3D3] block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' />
                </div>
                {/* EMAIL FIELD */}
                <div className='field_one mb-4'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >Your Email*</p>
                    <input type="email" required id='email' value='example@gmail.com' className=' border border-[#D3D3D3] block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' />
                </div>
                {/* EMAIL FIELD */}
                <div className='field_one mb-4'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >company*</p>
                    <input type="text" required id='company' value='Your company name here' className=' border border-[#D3D3D3] block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' />
                </div>

                {/* PHONE NUMBER FIELD */}
                <div className='field_one mb-4'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >Subject*</p>
                    <input type="text" required id='subject' value='how can we help' className=' border border-[#D3D3D3] block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' />
                </div>
                {/* TEXT AREA FIELD */}
                <div className='field_one mb-4 md:col-span-2  '>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >Message*</p>
                    <textarea type="tel" required id='fullName' value='Hello there,I would like to talk about how to...' className=' border border-[#D3D3D3] block w-full h-[250px] lg:text-[15px] text-[14px]   pt-5 rounded-2xl px-5 text-gray focus:outline-sky-500 resize-none '></textarea>
                </div>
            </div>
            {/* SUBMIT BUTTON */}
            <div className='flex items-center justify-center md:mt-5 '>
                <button type='submit' className=' inline-block mt-9 capitalize font-bold text-white bg-sky-500 rounded-full md:px-[40px] px-[30px]  py-[15px] transition duration-300 group-hover:bg-white  group-hover:text-black group-focus:text-black ' >Submit</button>
            </div>


        </div>
    )
}

export default ContactForm