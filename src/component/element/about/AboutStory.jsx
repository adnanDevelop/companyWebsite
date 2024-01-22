import React from 'react'
import { storyContent } from '../../Data/Api'

const AboutStory = () => {
    return (
        <div className='about_story_section padding-inline xl:mx-[100px] sm:mx-[30px]  padding-block '>
            <div className="story_header mb-[30px]  ">
                <h2 className='xl:text-[50px] md:text-[30px] text-[25px]  text-primary font-bold text-black  text-center lg:mx-[200px] md:mx-[100px]  leading-none'>
                    The story and values behind our company
                </h2>
            </div>
            <div className='story_card_section grid lg:grid-cols-2 grid-cols-1  gap-8 '>
                {storyContent.map((element, index) => {
                    return (
                        <div className="story_card flex lg:flex-row flex-col lg:items-center  lg:gap-x-6   bg-light-white py-5 md:px-5 px-3 rounded-[25px] " key={index} >
                            <div className="story_card_img mb-lg-0 mb-4">
                                <img src={element.icon} className=' w-[70px] h-[70px] lg:w-[150px] lg:h-[150px] ' alt="" />
                            </div>
                            <div className="story_card_content">
                                <h5 className='text-black  font-bold xl:text-[25px] text-[20px] mb-1 '>{element.title}</h5>
                                <p className=' text-gray'>{element.content}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AboutStory