import React from 'react'
import { Link } from 'react-router-dom'

const AboutWork = () => {
  return (
    <div className=' text-center about_work_section padding-inline padding-block flex items-center justify-center flex-col  '>
        <h2 className='text-black font-bold text-primary xl:text-[50px] md:text-[40px] text-[30px]  ' >How can we help you</h2>
        <p className='text-black font-normal text-secondary xl:text-[20px] md:text-[18px] text-[16px]  mb-3 '>Are you ready to push boundaries and explore new frontiers of innovation?</p>
        <Link to='/worktogether' className='btn-primary-md' >LET'S WORK TOGETHER</Link>
    </div>
  )
}

export default AboutWork