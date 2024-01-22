import React from 'react'
import { Link } from 'react-router-dom'

const CareerHero = () => {
    return (
        <div className='career_hero_section  pb-[80px] padding-inline  ' >
            <div className=' text-center about_work_section  pt-[100px] pb-[30px] flex items-center justify-center flex-col  '>
                <h2 className='text-black font-bold text-primary xl:text-[50px] md:text-[40px] text-[30px]  leading-none' >Career</h2>
                <p className='text-gray font-normal text-secondary xl:text-[20px] md:text-[18px] text-[16px]  my-4 '>Take your career to the next level</p>
                <Link to='/' className='btn-primary-md capitalize ' >Browse Open positions</Link>
            </div>

        {/* CAREER GALLERY SECTION */}
        <div className="lg:mx-[100px] md:mx-[50px]  grid sm:grid-cols-2 grid-cols-1 sm:gap-y-0 gap-y-4  lg:gap-x-[30px] md:gap-x-[20px]  gap-x-[15px]    ">
            <div className='' >
                <img src="/image/career/career-header/img-1.jpg" className='w-full lg:h-[600px] h-[300px] lg:rounded-[50px] md:rounded-[30px] rounded-[20px]    ' alt="" />
            </div>
            <div className='' >
                <img src="/image/career/career-header/img-2.jpg" className='w-full lg:h-[600px] h-[300px] lg:rounded-[50px] md:rounded-[30px] rounded-[20px]    ' alt="" />
            </div>
        </div>

        </div>
    )
}

export default CareerHero