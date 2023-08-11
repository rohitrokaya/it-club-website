import React, { useState } from "react";
import Logo from "../images/logo-rem.png";
import Close from "./Close";

import { FaBars, FaTimes, FaFacebook } from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import {BsFillPersonLinesFill, BsYoutube} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
 
const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    // Logo
    <div className="Mwidth flex justify-between items-center fixed w-full h-20 px-6 bg-neutral-900 text-white z-10">
      <div className=" w-24 h-24 py-1 px-2">
        <a href="/">
          <img src={Logo} alt="LOGO" className="w-50 h-50 hover:scale-90 duration-200" />
        </a>
      </div>
      <div>

        {/* Navbar compoenets */}
      </div>
      <ul className=" hidden md:flex">
        <li className="px-6 cursor-pointer font-medium text-gray-400 hover:scale-110 hover:text-gray-300 duration-300">
          <a href="#home">Home</a>
        </li>
        <li className="px-6 cursor-pointer font-medium text-gray-400 hover:scale-110 hover:text-gray-300 duration-300">
          <a href="#aboutPage">About Us</a>
        </li>
        <li className="px-6 cursor-pointer font-medium text-gray-400 hover:scale-110 hover:text-gray-300 duration-300">
          <a href="#alumni">Alumni</a>
        </li>
        <li className="px-6 cursor-pointer font-medium text-gray-400 hover:scale-110 hover:text-gray-300 duration-300">
          <a href="#events">Events</a>
        </li>
        <li className="px-6 cursor-pointer font-medium text-gray-400 hover:scale-110 hover:text-gray-300 duration-300">
          <a href="#notice">Notice</a>
        </li>
        <li className="px-6 cursor-pointer font-medium text-gray-400 hover:scale-110 hover:text-gray-300 duration-300">
          <a href="#forms">Forms</a>
        </li>
        <li className="px-6 cursor-pointer font-medium text-gray-400 hover:scale-110 hover:text-gray-300 duration-300">
          <a href="#support">Support</a>
        </li>
        
      </ul>
      
      {nav && (
        <ul onClick={() => {
          setNav(!nav);
        }} className="Mwidth flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <a href="#home">Home</a>
            </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
          <a href="#aboutPage">About Us</a>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
          <a href="#alumni">Alumni</a>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
          <a href="#events">Events</a>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
          <a href="#notice">Notice</a>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
          <a href="#forms">Forms</a>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
          <a href="#support">Support</a>
          </li>
          
        </ul>
      )}
      

      <div>
        {/* <Popup/> One Error I guess But its working */}
        <Close/>
      </div>

      <div
        onClick={() => {
          setNav(!nav);
        }}
        className=" cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      
      {/* Social Links  */}
      <div className="hidden lg:flex fixed flex-col top-[35%] right-0">
            
              <div className="px-3  w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-500 bg-[#3b5998]">
                <a href="https://www.facebook.com/ccrcinfotechclub" className="flex justify-between items-center w-full text-[18px] font-bold">
                  <FaFacebook size={30}/>Facebook
                </a>
              </div>
              <div className="px-3 w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-500 bg-[#C13584]">
                <a href="https://www.instagram.com/ccrc.it.club/?igshid=MzRlODBiNWFlZA%3D%3D" className="flex justify-between items-center w-full text-[18px] font-bold">
                  <AiFillInstagram size={30}/> Instagram
                </a>
              </div>
              <div className="px-3 w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-500 bg-[#c90303]">
                <a href="https://www.youtube.com/@CCRCITClub" className="flex justify-between items-center w-full text-[18px] font-bold">
                  <BsYoutube size={30}/> YouTube
                </a>
              </div>
              <div className="px-3 w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-500 bg-[#4285f4]">
                <a href="mailto:ccrcitclub2077@gmail.com" className="flex justify-between items-center w-full text-[18px] font-bold">
                  <SiGmail size={30}/> Gmail
                </a>
              </div>
          
          </div>
    </div>
  );
};

export default Navbar;
