import React, { useState } from "react";
import img1 from "../../images/alumni.png";

import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";


const Support = () => {
  const [fromsMsg, setFromsMsg] = useState(false);
  const handleSendMsg = () => {
    setFromsMsg(!fromsMsg);
    if(fromsMsg == true){
      document.getElementById("msg-forms").innerText = 'Your message is sent. Thank you!'; //Wanted to make the reverse button but cant make
    }
  } // Make these! Means style it, Just written only ryt now!
  return (
    
    <div>
      <div
        id="support"
        className="Mwidth w-full h-auto bg-gradient-to-b from-black to-gray-800 text-white"
      >
        <h1 className="text-7xl font-title font-bold text-white flex flex-col justify-center items-center p-10">
          Support Page!
        </h1>
        <div className="get-intouch">
          <div className="text-5xl p-4 mx-20 mt-8 titlekumbh">
            <h1>Get In Touch with:</h1>
          </div>
          <div className="support flex flex-col justify-center items-center ">
            <h1 className="text-5xl p-5 font-oswald">
              Our Teams are here to help
            </h1>
            <div className="members">
              <div className="frame1 p-2 my-4">
                <div className="flex justify-center items-center p-5 font-title2 text-5xl text-[#94a8ac] font-bold ">
                  <h1>Technical Support</h1>
                </div>
                <div className="content flex flex-row gap-24 p-1">
                  <div className="per gap-3 p-10 flex flex-col items-center ">
                    <a href="#alumniS" className="text-2xl">
                      <h2>Sushant Shah</h2>
                    </a>
                    <img src={img1} alt="" className="w-32" />
                    <span>Post</span>
                    <div className="sociallinks flex flex-col p-5 gap-3">
                      <a href="https://www.facebook.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-blue-500 duration-200">
                          <FaFacebook size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Facebook
                          </span>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#C13584] duration-200">
                          <AiFillInstagram size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Instagram
                          </span>
                        </div>
                      </a>
                      <a href="mailto:ccrcitclub2077@gmail.com">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#4285f4] duration-200">
                          <SiGmail size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Gmail
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="per gap-3 p-10 flex flex-col items-center ">
                    <a href="#alumniS" className="text-2xl">
                      <h2>Sushant Shah</h2>
                    </a>
                    <img src={img1} alt="" className="w-32" />
                    <span>Post</span>
                    <div className="sociallinks flex flex-col p-5 gap-3">
                      <a href="https://www.facebook.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-blue-500 duration-200">
                          <FaFacebook size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Facebook
                          </span>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#C13584] duration-200">
                          <AiFillInstagram size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Instagram
                          </span>
                        </div>
                      </a>
                      <a href="mailto:ccrcitclub2077@gmail.com">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#4285f4] duration-200">
                          <SiGmail size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Gmail
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="per gap-3 p-10 flex flex-col items-center ">
                    <a href="#alumniS" className="text-2xl">
                      <h2>Sushant Shah</h2>
                    </a>
                    <img src={img1} alt="" className="w-32" />
                    <span>Post</span>
                    <div className="sociallinks flex flex-col p-5 gap-3">
                      <a href="https://www.facebook.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-blue-500 duration-200">
                          <FaFacebook size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Facebook
                          </span>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#C13584] duration-200">
                          <AiFillInstagram size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Instagram
                          </span>
                        </div>
                      </a>
                      <a href="mailto:ccrcitclub2077@gmail.com">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#4285f4] duration-200">
                          <SiGmail size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Gmail
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame2  p-2 m-5">
                <div className="flex justify-center items-center p-5 font-title2 text-5xl text-[#94a8ac] font-bold ">
                  <h1>Other Support</h1>
                </div>
                <div className="content flex flex-row gap-24 p-10">
                  <div className="per gap-3 p-10 flex flex-col items-center ">
                    <a href="#alumniS" className="text-2xl">
                      <h2>Sushant Shah</h2>
                    </a>
                    <img src={img1} alt="" className="w-32" />
                    <span>Post</span>
                    <div className="sociallinks flex flex-col p-5 gap-3">
                      <a href="https://www.facebook.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-blue-500 duration-200">
                          <FaFacebook size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Facebook
                          </span>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#C13584] duration-200">
                          <AiFillInstagram size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Instagram
                          </span>
                        </div>
                      </a>
                      <a href="mailto:ccrcitclub2077@gmail.com">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#4285f4] duration-200">
                          <SiGmail size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Gmail
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="per  gap-3 p-10 flex flex-col items-center ">
                    <a href="#alumniS" className="text-2xl">
                      <h2>Sushant Shah</h2>
                    </a>
                    <img src={img1} alt="" className="w-32" />
                    <span>Post</span>
                    <div className="sociallinks flex flex-col p-5 gap-3">
                      <a href="https://www.facebook.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-blue-500 duration-200">
                          <FaFacebook size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Facebook
                          </span>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#C13584] duration-200">
                          <AiFillInstagram size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Instagram
                          </span>
                        </div>
                      </a>
                      <a href="mailto:ccrcitclub2077@gmail.com">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#4285f4] duration-200">
                          <SiGmail size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Gmail
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="per  gap-3 p-10 flex flex-col items-center ">
                    <a href="#alumniS" className="text-2xl">
                      <h2>Sushant Shah</h2>
                    </a>
                    <img src={img1} alt="" className="w-32" />
                    <span>Post</span>
                    <div className="sociallinks flex flex-col p-5 gap-3">
                      <a href="https://www.facebook.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-blue-500 duration-200">
                          <FaFacebook size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Facebook
                          </span>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#C13584] duration-200">
                          <AiFillInstagram size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Instagram
                          </span>
                        </div>
                      </a>
                      <a href="mailto:ccrcitclub2077@gmail.com">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#4285f4] duration-200">
                          <SiGmail size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Gmail
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className=" text-5xl mt-5 flex justify-center items-center font-title2 ">Any Queries?</h1>
        <div className="contactUs w-full h-auto flex flex-row justify-between p-10">
          
          <div className="left w-[30%] p-5 flex flex-col justify-center">
            <div className="gmail flex items-center p-3 gap-5 hover:text-[#6AD053]">
            <SiGmail size={50}  /> <span>Gmail</span>
            <p>ccrcitclub2077@gmail.com</p>
            </div>
            <div className="contactNum flex items-center p-3 gap-5 hover:text-[#4285f4]">
              <BiSolidPhoneCall size={50} className=""/> <span>Call Us</span>
              <p>+977-9841414141</p>
            </div>
          </div>
          <div className="right w-[70%] p-2">
            <div className="container">
              <h1 className=" text-3xl text-blue-300 font-para p-4">Send Us Message: </h1>
              <div id="msg-forms" className="flex flex-col p-3 gap-3 text-[18px]">
                <div className="mem-name flex flex-row items-center gap-3">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname"/>
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname"/>
                </div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
                <label htmlFor="message">Message</label>
                <textarea type="text" id="message" >Hello there!,</textarea>
                <div className="button">
                  <button className="border-2 rounded-xl p-3 bg-[#20AD96]" onClick={handleSendMsg}>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
