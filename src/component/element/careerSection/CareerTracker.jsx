import React from 'react'
import { trackerContent } from '../../Data/Api'

const CareerTracker = () => {


    return (
        <div className='padding-block padding-inline  '>
            {/* TRACKER HEADER SECTION */}
            <div className="tracker_header text-center xl:max-w-[50%] lg:max-w-[65%] md:max-w-[80%]  mx-auto mb-[30px]" >
                <h2 className='text-black font-bold xl:text-[50px] lg:text-[40px] text-[30px]  md:mb-4 mb-2   '>Career trackers</h2>
                <p className='text-gray font-normal text-secondary  lg:px-[50px] md:px-[30px] lg:text-justify text-justify text-last-justify ' >
                    Techies, innovators, developers, and free-thinkers… you’ve come to the
                    right place. Whether you’re an experienced professional or a recent graduate, working with GoMarkho will give you opportunities to
                    excel and achieve the global recognition that you deserve!
                </p>
            </div>

            {/* TRACKER CARD SECTION */}
            <div className='tracker_card_section grid md:grid-cols-3 sm:grid-cols-2  place-items-center  lg:gap-5 gap-4  xl:w-[75%] lg:w-[80%] mx-auto '>
                {trackerContent.map((element, index) => {
                    return (
                        <div className='tracker_card' key={index} >
                            <img src={element.img} alt="" />
                            <p className='font-normal text-black lg:text-[20px] text-secondary  text-center mt-3 leading-none'>{element.title}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default CareerTracker