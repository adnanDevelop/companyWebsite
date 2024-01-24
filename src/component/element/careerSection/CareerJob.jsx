import React from 'react'
import { jobContent } from '../../Data/Api';
import { Link } from 'react-router-dom';

const CareerJob = () => {
    return (
        <div className='career_job_section padding-block padding-inline'>
            {/* JOB HEADER SECTION */}
            <div className="career_job_header mb-6 text-center  ">
                <h2 className='text-black font-bold xl:text-[50px] lg:text-[40px]  sm:text-[30px] text-[22px] capitalize  leading-none '>Current job open positions</h2>
            </div>

            {/* JOB CARD SECTION */}
            <div className="career_job_card grid md:grid-cols-2  grid-cols-1 md:gap-[20px] gap-[15px]  xl:mx-[100px]   ">
                {jobContent.map((element, index) => {
                    return (
                        <div className='career_card   border border-[#CBCBCB]  rounded-[20px] xl:px-[30px] px-[25px]  pt-[30px] pb-[30px]   transition duration-500 group hover:bg-blue  ' key={index}>
                            <h3 className='text-black xl:text-[30px] font-bold  text-[20px] leading-none mb-2  transition duration-500  group-hover:text-white group-focus:text-white    '>{element.title}</h3>
                            <p className='text-black mb-4 text-[14px] transition duration-500 group-hover:text-white group-focus:text-white '>{element.location} <span className='mx-2'>|</span> <span className='text-sky-500 group-hover:text-white group-focus:text-white '>{element.jobType}</span></p>
                            <div className="content_section  ">
                                <p className='text-gray font-secondary font-normal text-justify transition duration-500 group-hover:text-white group-focus:text-white '>{element.content}</p>
                            </div>
                            <Link to={`/career/${element.id}`} className=' inline-block mt-9 capitalize font-bold text-white bg-sky-500 rounded-full px-[30px] py-[15px] transition duration-300 group-hover:bg-white  group-hover:text-black group-focus:text-black ' >apply now</Link>
                        </div>
                    )
                })}

                {/* CAN'T FIND CARD */}
                <div className=' md:col-span-2  career_card border  md:py-[100px] py-[50px] sm-px-1 px-[20px]  border-[#CBCBCB]  rounded-[20px] flex items-center justify-center flex-col transition duration-500 group hover:bg-blue   '>
                    <h3 className='text-black sm:text-[30px] text-[20px] font-bold  leading-none mb-3 text-center transition duration-500  group-hover:text-white group-focus:text-white '>Can't find position you are looking for?</h3>
                    <p className='text-black font-secondary sm:text-[18px] text-[14px]  font-normal text-justify text-last-justify transition duration-500  group-hover:text-white group-focus:text-white '>
                        Don't worry, get in touch with us anyways, we are always <br className='md:block hidden' /> looking for great team members to join us.
                    </p>
                    <Link to='/' className=' inline-block mt-4 capitalize font-bold text-white bg-sky-500 rounded-full px-[30px] py-[15px] transition duration-300 group-hover:bg-white  group-hover:text-black group-focus:text-black  ' >apply now</Link>

                </div>
            </div>
        </div>
    )
}

export default CareerJob