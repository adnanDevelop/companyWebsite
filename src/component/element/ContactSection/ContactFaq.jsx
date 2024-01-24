import React, { useState } from 'react'
import { accordinContent } from '../../Data/Api';

const ContactFaq = () => {
    const [openIndex, setOpenIndex] = useState(1);

    // FUNCTION TO COLLAPSE ACCORDIN
    const handleItemClick = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='md:py-[60px] py-[40px]  xl:px-[70px] px-[25px]  rounded-[30px] bg-blue drop-shadow-1xl lg:mx-[150px] md:mx-[100px] mx-[30px] md:mb-[100px] mb-[50px]' >
            <h2 className='text-white font-bold text-primary md:text-[35px] sm:text-[30px] text-[25px] md:leading-none  leading-tight  lg:mb-10 mb-6  text-center capitalize' >Frequently Asked Questions</h2>
            <div className='mt-8 accordin_section  '>
                {accordinContent.map((element, index) => {
                    const counting = index + 1;
                    return (
                        <button key={index} className={`accordin md:py-[20px] py-[15px]  sm:ps-[25px] ps-[15px]  md:pe-[0px] pe-[10px] select-none bg-white rounded-3xl mb-[30px]   ${openIndex === index ? 'xl:mx-[120px] md:mx-[40px] ' : 'xl:mx-[140px] md:mx-[60px] '} cursor-pointer   `}
                            onClick={() => handleItemClick(index)} >
                            <h4 className='text-black font-bold  xl:text-[20px] text-[14px] text-left '>{counting}.  {element.title}</h4>
                            <div className={`accordin_body  transition duration-500 ${openIndex === index ? 'md:max-h-[200px] max-h-[300px]  ' : 'max-h-0 overflow-hidden'}`}  >
                                <p className=' text-justify text-last-left text-gray xl:text-[18px] md:text-[16px] text-[14px]  pt-[20px]  md:ps-[30px] pe-[20px]  '>{element.content}</p>
                            </div>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default ContactFaq