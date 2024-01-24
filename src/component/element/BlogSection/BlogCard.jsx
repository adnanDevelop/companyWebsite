import React from 'react'
import { blogContent } from '../../Data/Api'
import { Link } from 'react-router-dom'

const BlogCard = () => {

    return (
        <div className=' blog_card_section grid sm:grid-cols-2 grid-cols-1  md:gap-[30px] gap-[20px]   padding-inline  lg:mx-[100px] md:mb-[80px] mb-[40px]  '>
            {blogContent.map((element, index) => {
                return (
                    <div className={`career_card   border border-[#CBCBCB]  rounded-[30px] xl:px-[40px] px-[25px]  pt-[30px] pb-[30px] bg-light-white  transition duration-500 group hover:bg-blue`} key={index}>
                        <span className='text-black transition duration-300 group-hover:text-white block mb-5  '>{element.date}</span>
                        <h3 className='text-black xl:text-[30px] font-[800] font-blog  text-[20px] leading-none mb-2  transition duration-500  group-hover:text-white group-focus:text-white    '>{element.title}</h3>
                        <div className="content_section lg:my-5 my-4 ">
                            <p className='text-gray font-secondary md:text-[16px] text-[15px]  font-normal text-justify transition duration-500 group-hover:text-white group-focus:text-white '>{element.content}</p>
                        </div>
                        <Link to={`/`} className=' block mt-4 text-sky-900 group-hover:text-sky-900 underline font-bold md:text-[18px] text-[16px]  transition duration-300 ' >Read More</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default BlogCard 