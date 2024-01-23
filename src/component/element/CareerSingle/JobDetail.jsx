import React from 'react'
import { Link } from 'react-router-dom';
import { jobDetail } from '../../Data/Api';

const JobDetail = ({ data }) => {
  const { role, requirement } = jobDetail

  return (
    <>
      <div className='career_job_section padding-block  md:mt-[80px] mt-[60px]  '>
        {/* JOB HEADER SECTION */}
        <div className="career_job_header mb-6 text-center flex items-center justify-center flex-col ">
          <h2 className='text-black font-bold xl:text-[50px] lg:text-[40px]  sm:text-[30px] text-[22px] capitalize  leading-none pb-3 '>{data[0].title}</h2>
          <p className='text-black pb-4 text-[14px]  border-b border-b-soft-white w-full '>{data[0].location} <span className='mx-2'>|</span> <span className='text-sky-500'>{data[0].jobType}</span></p>
          <Link to='/' className='btn-primary-md capitalize md:mt-5 mt-3 ' >Apply Now</Link>

        </div>

        {/* JOB DETAIL SECTION */}
        <div className="detail_section md:py-[100px] py-[40px]  lg:px-[70px] px-[40px]  rounded-[20px] bg-light-white lg:mx-[150px] md:mx-[100px] mx-[30px] margin-block">
          <div className='detail_header flex md:justify-between md:items-center md:flex-row flex-col '>
            <h3 className='lg:text-[35px] md:text-[30px] text-[25px]  text-[#242331] font-extrabold capitalize '>About the role</h3>
            <p className='font-semibold md:text-[16px] text-[14px]  text-black text-secondary'>Posted : <span className='ms-2 font-normal text-gray'> 25 November, 2021 </span> </p>
          </div>

          {/* ROLE POINTS */}
          <div className='detail_points mt-4'>
            <p className='text-normal text-gray text-secondary mb-4 sm:text-[16px] text-[14px] '  >Review, analyse and evaluate product code according to system specifications.</p>
            <ul className='list-disc ' >
              {role.map((element, index) => {
                return (
                  <li className=' text-[#242331] ' key={index} >
                    <p className='mb-3 font-normal text-gray text-secondary sm:text-[16px] text-[14px]  '>{element}</p>
                  </li>
                )
              })}
            </ul>

            {/* RESPONSIBILITIES SECTION */}
            <h3 className='lg:text-[35px] md:text-[30px] text-[25px]  text-[#242331] font-extrabold   my-5'>Requirement</h3>
            <ul className='list-disc  lg:mb-[50px] mb-[30px] ' >
              {requirement.map((element, index) => {
                return (
                  <li className=' text-[#242331] ' key={index} >
                    <p className='mb-3 font-normal text-gray text-secondary sm:text-[16px] text-[14px] '>{element}</p>
                  </li>
                )
              })}
            </ul>

            { /* COMPANY CONTACT DETAILS  */}
            <div className="company_detail">
              <h3 className='lg:text-[35px] md:text-[30px] text-[25px]  text-[#242331] font-extrabold   my-4'>Contact us!</h3>
              <p className='text-normal text-gray text-secondary sm:mb-8  mb-4 sm:text-[16px] text-[14px] '>Reach out to discuss the opportunity & send your answers to:</p>
              <p className='font-semibold  text-[#242331] capitalize sm:text-[20px] text-[18px] '>Aman khan</p>
              <p className='text-normal text-gray text-secondary sm:text-[16px] text-[14px] '>hr@gomarkho.com</p>
              <p className='text-normal text-gray text-secondary sm:text-[16px] text-[14px] '>+342 343 34676</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JobDetail