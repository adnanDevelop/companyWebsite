import React, { useRef } from 'react'
import { MdUpload } from "react-icons/md";

const CareerForm = () => {
    const fileInputRef = useRef(null);


    const handleDivClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className='career_form_section md:py-[100px] py-[40px]  xl:px-[70px] px-[25px]  rounded-[20px] bg-blue lg:mx-[150px] md:mx-[100px] mx-[30px] mb-[100px] '>
            <div className="grid md:grid-cols-2 grid-cols-1  lg:gap-[40px] gap-[20px]  ">
                {/* NAME FIELD */}
                <div className='field_one mb-4'>
                    <p className='text-white font-normal  md:text-[18px] text-[16px] mb-2 ' >Full Name*</p>
                    <input type="text" required id='fullName' value='John david' className='block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' />
                </div>
                {/* EMAIL FIELD */}
                <div className='field_one mb-4'>
                    <p className='text-white font-normal  md:text-[18px] text-[16px] mb-2 ' >Your Email*</p>
                    <input type="email" required id='email' value='example@gmail.com' className='block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' />
                </div>
                {/* UPLOAD FILE FIELD */}
                <div className='field_one mb-4'>
                    <p className='text-white font-normal  md:text-[18px] text-[16px] mb-2 ' >Resume*</p>
                    <div className='w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl lg:px-5 px-2  text-gray bg-white flex justify-between items-center ' onClick={handleDivClick} >
                        Upload your resume
                        <input type="file" id='fullName' className='text-transparent hidden ' required ref={fileInputRef} />
                        <div className='flex items-center text-black lg:text-[18px] text-[12px] font-medium py-2 px-3 rounded-[5px] bg-soft-white cursor-pointer '>
                            upload file <span className='ms-2'> <MdUpload /></span>
                        </div>
                    </div>
                </div>
                {/* PHONE NUMBER FIELD */}
                <div className='field_one mb-4'>
                    <p className='text-white font-normal  md:text-[18px] text-[16px] mb-2 ' >Phone</p>
                    <input type="tel" required id='fullName' value='how can we help' className='block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' />
                </div>
                {/* TEXT AREA FIELD */}
                <div className='field_one mb-4 md:col-span-2  '>
                    <p className='text-white font-normal  md:text-[18px] text-[16px] mb-2 ' >CoverLetter</p>
                    <textarea type="tel" required id='fullName' value='tell about yourself a bit' className='block w-full h-[250px] lg:text-[15px] text-[14px]   pt-5 rounded-2xl px-5 text-gray focus:outline-sky-500 resize-none '></textarea>
                </div>
            </div>
            {/* SUBMIT BUTTON */}
            <div className='flex items-center justify-center md:mt-5 '>
                <button type='submit' className=' inline-block mt-9 capitalize font-bold text-white bg-sky-500 rounded-full md:px-[40px] px-[30px]  py-[15px] transition duration-300 group-hover:bg-white  group-hover:text-black group-focus:text-black ' >Submit</button>
            </div>


        </div>
    )
}

export default CareerForm