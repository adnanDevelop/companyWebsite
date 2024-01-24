import React from 'react'
import { Link } from 'react-router-dom'


const Help = ({title , content}) => {
  return (
    <div className='help_section padding-block padding-inline flex items-center justify-center flex-col text-center '>
         <h2 className='text-black font-bold xl:text-[45px] lg:text-[40px] md:text-[30px] text-[25px]  leading-none mb-3'>{title}</h2>
         <p className='text-black font-normal font-secondary mb-6 sm:text-[20px] text-[15px]'>{content}</p>
         <Link to='/worktogether ' className='btn-primary-md uppercase' >let's work together</Link>
    </div>
  )
}

export default Help