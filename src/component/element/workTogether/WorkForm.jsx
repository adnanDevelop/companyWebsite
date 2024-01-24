import React, { useState } from 'react'

const WorkForm = () => {
    const [formData, setFormData] = useState({
        fullName: 'John David',
        email: 'example@gmail.com',
        company: 'Your company name here',
        subject: 'How can we help',
        phone: '',
        jobTitle: '',
        message: 'Hello there, I would like to talk about how to...',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSubmit = () => {
        // Perform any actions with the form data
        console.log(formData);
    };

    return (
        <div className='career_form_section md:py-[100px] py-[40px]  xl:px-[70px] px-[25px]  rounded-[30px] bg-white drop-shadow-1xl  lg:mx-[150px] md:mx-[100px] mx-[30px] mb-[100px]  '>
            <div className="grid md:grid-cols-2 grid-cols-1  lg:gap-[40px] gap-[20px]  ">

                {/* NAME FIELD */}
                <div className='field_one mb-3'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >Full Name*</p>
                    <input type="text" required id='fullName' value={formData.fullName} className=' border border-[#D3D3D3] block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' onChange={handleInputChange} />
                </div>

                {/* EMAIL FIELD */}
                <div className='field_one mb-3'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >Your Email*</p>
                    <input type="email" required id='email' value={formData.email} className=' border border-[#D3D3D3] block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' onChange={handleInputChange} />
                </div>

                {/* COMPANY FIELD */}
                <div className='field_one mb-3'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >company*</p>
                    <input type="text" required id='company' value={formData.company} className=' border border-[#D3D3D3] block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' onChange={handleInputChange} />
                </div>

                {/* SUBJECT FIELD */}
                <div className='field_one mb-3'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >Subject*</p>
                    <input type="text" required id='subject' value={formData.subject} className=' border border-[#D3D3D3] block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' onChange={handleInputChange} />
                </div>

                {/* PHONE NUMBER FIELD */}
                <div className='field_one mb-3'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >Phone No*</p>
                    <input type="tel" required id='company' value={formData.phone} className=' border border-[#D3D3D3] block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' onChange={handleInputChange} />
                </div>

                {/* JOB TITLE FIELD */}
                <div className='field_one mb-3'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >Job Title*</p>
                    <input type="text" required id='subject' value={formData.jobTitle} className=' border border-[#D3D3D3] block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' onChange={handleInputChange} />
                </div>

                {/* TEXT AREA FIELD */}
                <div className='field_one mb-3 md:col-span-2  '>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >Message*</p>
                    <textarea type="tel" required id='fullName' value={formData.message} className=' border border-[#D3D3D3] block w-full h-[250px] lg:text-[15px] text-[14px]   pt-5 rounded-2xl px-5 text-gray focus:outline-sky-500 resize-none ' onChange={handleInputChange} ></textarea>
                </div>

            </div>
            {/* SUBMIT BUTTON */}
            <div className='flex items-center justify-center md:mt-5 '>
                <button type='submit' className=' inline-block mt-9 capitalize font-bold text-white bg-sky-500 rounded-full md:px-[40px] px-[30px]  py-[15px] transition duration-300 group-hover:bg-white  group-hover:text-black group-focus:text-black ' onClick={handleSubmit} >Submit</button>
            </div>

        </div>
    )
}

export default WorkForm