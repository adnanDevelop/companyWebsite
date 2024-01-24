import React from "react";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [itemActive, setItemActive] = useState(false);
  const [scrollAnimation, setScrollAnimation] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 50 ? setScrollAnimation(true) : setScrollAnimation(false);
  });

  /* border-[#FFFFFF38] */

  return (
    <div
      className={`navbar fixed top-0 left-0 z-20 w-full h-auto padding-inline   border-b-[2px] border-b-[#FFFFFF38]  flex items-center justify-between  ${scrollAnimation ? 'nav-scroll shadow ' : ' '}`}
    >
      <div className="logo py-3">
        <Link to="/">
          <img src="/image/logo.png" alt="" />
        </Link>
      </div>

      <div className="links_section lg:block hidden">
        <ul className="list-none flex items-center gap-6">
          <li className=" py-3" >
            <button className="capitalize me-6 font-semibold text-slate-500 transition duration-500 hover:text-sky-500 relative dropdown">
              Services{" "}
              <span className=" ms-1 caret transition duration-500 inline-block ">
                <FaCaretDown />
              </span>
              <ul className="list-none dropdown bg-white absolute top-[250%] left-[-10%] w-[230px]  p-4 rounded-md  z-10  border border-soft-white  opacity-0 text-start">
                <li>
                  <Link
                    to="/servicesolution"
                    className="font-lg capitalize font-normal text-black transition duration-500 hover:text-sky-500 inline-block mb-3"
                  >
                    communication solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servicesoftware"
                    className="font-lg capitalize font-normal text-black transition duration-500 hover:text-sky-500 inline-block mb-3"
                  >
                    software development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/serviceautomation"
                    className="font-lg capitalize font-normal text-black transition duration-500 hover:text-sky-500 inline-block"
                  >
                    process automation
                  </Link>
                </li>
              </ul>
            </button>
          </li>
          <li className=" py-3">
            <Link
              to="/about"
              className="capitalize font-semibold text-slate-500 transition duration-500 hover:text-sky-500"
            >
              about us
            </Link>
          </li>
          <li className=" py-3">
            <Link
              to="/career"
              className="capitalize font-semibold text-slate-500 transition duration-500 hover:text-sky-500"
            >
              careers
            </Link>
          </li>
          <li className=" py-3">
            <Link
              to="/blog"
              className="capitalize font-semibold text-slate-500 transition duration-500 hover:text-sky-500"
            >
              blogs
            </Link>
          </li>
          <li className=" py-3">
            <Link to="/contact" className="btn-primary-sm ">
              contact us
            </Link>
          </li>
        </ul>
      </div>

      <button
        className={`menu lg:hidden block text-[20px] text-gray p-2 border border-gray transition duration-300 ${
          active ? " focus:border-sky-500 focus:text-sky-500" : ""
        } `}
        onClick={() => setActive(!active)}
      >
        <FaBarsStaggered />
      </button>

      {/* MOBILE MENU */}
      <div
        className={`mobile_menu lg:hidden block fixed top-0  bg-white shadow-lg md:w-[35%] sm:w-[60%] w-[70%] h-screen z-50 duration-300 bg-blue-500 px-6 pt-4 ${
          active ? "left-[0%]" : "left-[-100%]"
        } `}
      >
        {/* MOBILE MENU HEADER SECTION */}
        <div className="menu_header flex items-center justify-between">
          <div className="logo">
            <Link to="/">
              <img
                src="/image/logo.png"
                alt=""
                className="inline-block w-[150px] h-auto object-cover"
              />
            </Link>
          </div>
          <button
            className="close_btn text-[16px] text-black p-2 border-2  border-black rounded-md transition duration-300 hover:border-sky-500 hover:text-sky-500 "
            onClick={() => setActive(false)}
          >
            <GrClose />
          </button>
        </div>
        {/* MOBILE MENU LNIKS SECTION */}
        <div className="w-full h-[80vh] flex items-start justify-start flex-col pt-[60px] ">
          <ul className="list-none flex items-start justify-start flex-col gap-6   ">
            <li>
              <button
                className="capitalize font-semibold text-start text-slate-500 transition duration-500 hover:text-sky-500 relative mobile_menu"
                onClick={() => setItemActive(!itemActive)}
              >
                Service
                <ul
                  className={`list-none dropdown w-full transition duration-300 shadow  ${
                    itemActive
                      ? "h-auto mt-4  p-4  opacity-100  "
                      : "h-0 mt-0 opacity-0 "
                  }  rounded-md  bg-white  `}
                >
                  <li>
                    <Link
                      to="/servicesolution"
                      className="font-xs capitalize font-normal  text-black transition duration-500 hover:text-sky-500   inline-block mb-3 "
                      onClick={() => setActive(false)}
                    >
                      communication solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicesoftware"
                      className="font-xs  capitalize font-normal text-black transition duration-500 hover:text-sky-500   inline-block mb-3 "
                      onClick={() => setActive(false)}
                    >
                      software development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/serviceautomation"
                      className="font-xs  capitalize font-normal text-black transition duration-500 hover:text-sky-500 inline-block  "
                      onClick={() => setActive(false)}
                    >
                      process automation
                    </Link>
                  </li>
                </ul>
              </button>
            </li>
            <li>
              <Link
                to="/about"
                className="capitalize font-semibold text-black transition duration-500 hover:text-blue-500"
                onClick={() => setActive(false)}
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="capitalize font-semibold text-black transition duration-500 hover:text-blue-500"
                onClick={() => setActive(false)}
              >
                service
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className="capitalize font-semibold text-black transition duration-500 hover:text-blue-500"
                onClick={() => setActive(false)}
              >
                careers
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="capitalize font-semibold text-black transition duration-500 hover:text-blue-500"
                onClick={() => setActive(false)}
              >
                blogs
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="capitalize font-semibold text-black transition duration-500 hover:text-blue-500"
                onClick={() => setActive(false)}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
