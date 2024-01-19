import React from 'react'
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState(false)
    // const [navAnimate, setNavAnimate] = useState(false)

    // window.addEventListener('scroll', () => {
    //     (window.scrollY > 100) ? setNavAnimate(true) : setNavAnimate(false);
    // })

    /* border-[#FFFFFF38] */


    return (
        <div className={`navbar fixed top-0 left-0 z-20 w-full h-auto py-3 lg:px-[100px] sm:px-[60px] px-[30px]  border-b-[1px] border-b-green-500  flex items-center justify-between  `} >
            <div className="logo">
                <Link to='/' >
                    <img src="/image/logo.png" alt="" />
                </Link>
            </div>
            <div className="links_section lg:block hidden">
                <ul className="list-none flex items-center gap-6">
                    <li>
                        <a href='#home' className='capitalize font-semibold text-slate-500 transition duration-500 hover:text-sky-500 relative dropdown'>Services <span className='inline-block ms-1 '><FaCaretDown /></span>
                            <ul className='list-none dropdown  absolute top-[250%] left-[-10%] w-[230px]  p-4 rounded-md  z-10  border border-soft-white  opacity-0' >
                                <li><Link to="/servicesolution" className='font-lg capitalize font-normal  text-black transition duration-500 hover:text-sky-500   inline-block mb-3 '>communication solutions</Link></li>
                                <li><Link to="/servicesoftware" className='font-lg  capitalize font-normal text-black transition duration-500 hover:text-sky-500   inline-block mb-3 '>software development</Link></li>
                                <li><Link to="/serviceautomation" className='font-lg  capitalize font-normal text-black transition duration-500 hover:text-sky-500 inline-block  '>process automation</Link></li>
                            </ul>
                        </a>
                    </li>
                    <li><Link to="/about" className='capitalize font-semibold text-slate-500 transition duration-500 hover:text-sky-500'>about us</Link></li>
                    <li><Link to="/career" className='capitalize font-semibold text-slate-500 transition duration-500 hover:text-sky-500'>careers</Link></li>
                    <li><Link to="/blog" className='capitalize font-semibold text-slate-500 transition duration-500 hover:text-sky-500'>blogs</Link></li>
                    <li><Link to="/contact" className='btn-primary-sm '>contact us</Link></li>
                </ul>
            </div>

            <button className={`menu lg:hidden block text-[20px] text-gray p-2 border border-gray transition duration-300 ${active ? ' focus:border-sky-500 focus:text-sky-500' : ''} `} onClick={() => setActive(!active)} >
                <FaBarsStaggered />
            </button>

            {/* MOBILE MENU */}
            <div className={`mobile_menu lg:hidden block fixed top-0  shadow-lg md:w-[35%] sm:w-[60%] w-[70%] h-screen z-50 bg-sky-300 duration-300 bg-blue-500 px-6 pt-4 ${active ? 'left-[0%]' : 'left-[-100%]'} `}>
                <div className="menu_header flex items-center justify-between">
                    <div className="logo">
                        <Link to='/' >
                            <img src="/image/logo.png" alt="" className='inline-block w-[150px] h-auto object-cover' />
                        </Link>
                    </div>
                    <button className="close_btn text-[16px] text-black p-2 border-2  border-black rounded-md transition duration-300 hover:border-white hover:text-white " onClick={() => setActive(false)} >
                        <GrClose />
                    </button>

                </div>
                <div className="w-full h-[80vh] flex items-start justify-start flex-col pt-[100px] ">
                    <ul className="list-none flex items-start justify-start flex-col gap-6  *:uppercase *:font-bold *:text-white *:transition *:duration-500 *:hover:text-black ">
                        <li>
                            <a href='#home' className='capitalize font-semibold text-slate-500 transition duration-500 hover:text-sky-500 relative mobile_menu'>Service
                                <ul className='list-none dropdown w-full h-auto mt-4  p-4 rounded-md  z-10 bg-white   ' >
                                    <li><Link to="/servicesolution" className='font-xs capitalize font-normal  text-black transition duration-500 hover:text-sky-500   inline-block mb-3 ' onClick={() => setActive(false)}>communication solutions</Link></li>
                                    <li><Link to="/servicesoftware" className='font-xs  capitalize font-normal text-black transition duration-500 hover:text-sky-500   inline-block mb-3 ' onClick={() => setActive(false)}>software development</Link></li>
                                    <li><Link to="/serviceautomation" className='font-xs  capitalize font-normal text-black transition duration-500 hover:text-sky-500 inline-block  ' onClick={() => setActive(false)}>process automation</Link></li>
                                </ul>
                            </a>
                        </li>
                        <li><Link to="/about" className='capitalize font-semibold text-black transition duration-500 hover:text-blue-500' onClick={() => setActive(false)}>about</Link></li>
                        <li><Link to="/service" className='capitalize font-semibold text-black transition duration-500 hover:text-blue-500' onClick={() => setActive(false)}>service</Link></li>
                        <li><Link to="/career" className='capitalize font-semibold text-black transition duration-500 hover:text-blue-500' onClick={() => setActive(false)}>careers</Link></li>
                        <li><Link to="/blog" className='capitalize font-semibold text-black transition duration-500 hover:text-blue-500' onClick={() => setActive(false)}>blogs</Link></li>
                        <li><Link to="/contact" className='capitalize font-semibold text-black transition duration-500 hover:text-blue-500' onClick={() => setActive(false)}>contact</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar