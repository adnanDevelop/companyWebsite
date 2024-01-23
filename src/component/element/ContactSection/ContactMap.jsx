import React from 'react'

const ContactMap = () => {
    return (
        <div className='contact_map-section padding-inline lg:mb-[100px] md:mb-[70px] mb-[50px] '>
            <h2 className='text-black font-bold text-primary xl:text-[50px] md:text-[40px] text-[30px]  leading-none lg:mb-10 mb-6  text-center capitalize' >Find us here</h2>
            <div className="map_section">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26564.417938139624!2d73.05693788253866!3d33.668762011132124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9b9a26d10f%3A0x4673dd03bcb7dd01!2sGoMarkho!5e0!3m2!1sen!2s!4v1706017592671!5m2!1sen!2s" allowfullscreen="" title='GoMarkho location' loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full lg:h-[450px] h-[350px]  rounded-3xl ' ></iframe>
            </div>
        </div>
    )
}

export default ContactMap