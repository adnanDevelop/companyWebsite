import React, { useState } from 'react'

const ContactFaq = () => {
    const [openIndex, setOpenIndex] = useState(2);

    const handleItemClick = (index) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
        <div className='md:py-[60px] py-[40px]  xl:px-[70px] px-[25px]  rounded-[30px] bg-blue drop-shadow-1xl lg:mx-[150px] md:mx-[100px] mx-[30px] md:mb-[100px] mb-[50px]' >
            <h2 className='text-white font-bold text-primary md:text-[35px] text-[30px] leading-none lg:mb-10 mb-6  text-center capitalize' >Frequently Asked Questions</h2>
            <div className='mt-8 accordin_section  '>
                {/* ITEM 1 */}
                <button className={`accordin p-[20px] select-none bg-white rounded-3xl mb-[30px]   ${openIndex === 0 ? 'mx-[120px]' : 'mx-[150px]'} cursor-pointer   `}  onClick={() => handleItemClick(0)} >
                    <h4 className='text-black font-bold xl:text-[25px] text-[20px]  '>1. How can GoMarkho enhance business communication?</h4>
                    <div className={`accordin_body  transition duration-500 ${openIndex === 0 ? 'max-h-[200px]' : 'max-h-0 overflow-hidden'}`}  >
                        <p className=' text-justify text-last-left text-gray xl:text-[18px] pt-[20px] text-[16px] px-[40px]  '>
                            What distinguishes GoMarkho is our commitment to innovation, customization, and seamless integration. We offer a comprehensive suite of services, combining expertise in VoIP, software development, and intelligent automation, ensuring that your business receives a unique, end-to-end solution tailored to your specific needs.
                        </p>
                    </div>
                </button>
                {/* ITEM 2 */}
                <button className={`accordin p-[20px] select-none bg-white rounded-3xl mb-[30px]   ${openIndex === 1 ? 'mx-[120px]' : 'mx-[150px]'} cursor-pointer   `} onClick={() => handleItemClick(1)}  >
                    <h4 className='text-black font-bold xl:text-[25px] text-[20px] '>1. How can GoMarkho enhance business communication?</h4>
                    <div className={`accordin_body  transition duration-500 ${openIndex === 1 ? 'max-h-[200px]' : 'max-h-0 overflow-hidden'}`}  >
                        <p className=' text-justify text-last-left text-gray xl:text-[18px] pt-[20px] text-[16px] px-[40px]  '>
                            What distinguishes GoMarkho is our commitment to innovation, customization, and seamless integration. We offer a comprehensive suite of services, combining expertise in VoIP, software development, and intelligent automation, ensuring that your business receives a unique, end-to-end solution tailored to your specific needs.
                        </p>
                    </div>
                </button>
                {/* ITEM 3 */}
                <button className={`accordin p-[20px] select-none bg-white rounded-3xl mb-[30px]   ${openIndex === 2 ? 'mx-[120px]' : 'mx-[150px]'} cursor-pointer   `} onClick={() => handleItemClick(2)}  >
                    <h4 className='text-black font-bold xl:text-[25px] text-[20px] '>1. How can GoMarkho enhance business communication?</h4>
                    <div className={`accordin_body  transition duration-500 ${openIndex === 2 ? 'max-h-[200px]' : 'max-h-0 overflow-hidden'}`}  >
                        <p className=' text-justify text-last-left text-gray xl:text-[18px] pt-[20px] text-[16px] px-[40px]  '>
                            What distinguishes GoMarkho is our commitment to innovation, customization, and seamless integration. We offer a comprehensive suite of services, combining expertise in VoIP, software development, and intelligent automation, ensuring that your business receives a unique, end-to-end solution tailored to your specific needs.
                        </p>
                    </div>
                </button>
                {/* ITEM 4 */}
                <button className={`accordin p-[20px] select-none bg-white rounded-3xl mb-[30px]   ${openIndex === 3 ? 'mx-[120px]' : 'mx-[150px]'} cursor-pointer   `} onClick={() => handleItemClick(3)}  >
                    <h4 className='text-black font-bold xl:text-[25px] text-[20px] '>1. How can GoMarkho enhance business communication?</h4>
                    <div className={`accordin_body  transition duration-500 ${openIndex === 3 ? 'max-h-[200px]' : 'max-h-0 overflow-hidden'}`}  >
                        <p className=' text-justify text-last-left text-gray xl:text-[18px] pt-[20px] text-[16px] px-[40px]  '>
                            What distinguishes GoMarkho is our commitment to innovation, customization, and seamless integration. We offer a comprehensive suite of services, combining expertise in VoIP, software development, and intelligent automation, ensuring that your business receives a unique, end-to-end solution tailored to your specific needs.
                        </p>
                    </div>
                </button>
                {/* ITEM 5 */}
                <button className={`accordin p-[20px] select-none bg-white rounded-3xl mb-[30px]   ${openIndex === 4 ? 'mx-[120px]' : 'mx-[150px]'} cursor-pointer   `} onClick={() => handleItemClick(4)}  >
                    <h4 className='text-black font-bold xl:text-[25px] text-[20px] '>1. How can GoMarkho enhance business communication?</h4>
                    <div className={`accordin_body  transition duration-500 ${openIndex === 4 ? 'max-h-[200px]' : 'max-h-0 overflow-hidden'}`}  >
                        <p className=' text-justify text-last-left text-gray xl:text-[18px] pt-[20px] text-[16px] px-[40px]  '>
                            What distinguishes GoMarkho is our commitment to innovation, customization, and seamless integration. We offer a comprehensive suite of services, combining expertise in VoIP, software development, and intelligent automation, ensuring that your business receives a unique, end-to-end solution tailored to your specific needs.
                        </p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default ContactFaq