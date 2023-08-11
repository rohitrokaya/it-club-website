import React, { useRef, useEffect } from "react";
import img1 from "../images/about/farewell.jpeg";
import img2 from "../images/about/donationToOrphanage.jpg";
import img3 from "../images/about/ccrcitfest.jpg";
import img4 from "../images/about/Farewell.jpg";

const About = () => {

  return (
    <section
      id="aboutPage"
      className="Mwidth w-full h-auto bg-gradient-to-b from-gray-800 to-black"
    >
      {/* animation */}
      
      <div className="">
        <div className="flex flex-col items-center p-10 text-gray-50">
          <h1 className="text-7xl font-title font-bold my-10">About Us</h1>
          <h3 className="text-3xl font-another">Making a difference</h3>
        </div>
        <div className="text-gray-50 flex flex-col items-center">
          <p className="text-2xl mx-10 py-4">
            At <span className="text-blue-600 text-3xl">IT CLUB</span>, we are a
            passionate community of tech enthusiasts, innovators, and learners,
            coming together to explore the fascinating world of Information
            Technology. Whether you're a seasoned IT professional or just
            starting your journey in the digital realm, we have something to
            offer for everyone.
          </p>
        </div>
        <div className="flex flex-col mx-28 my-16">
          <p className="text-5xl my-10 flex flex-col items-center text-white">
            What we do:
          </p>
          <p className="text-2xl text-gray-100 py-1">
            <span className=" text-3xl text-gray-500 font-bold pr-3">
              Workshops & Seminars:{" "}
            </span>
            Learn cutting-edge technologies and cybersecurity from experts.
          </p>
          <p className="text-2xl text-gray-100 py-1">
            <span className=" text-3xl text-gray-500 font-bold pr-3">
              Hackathons & Projects:
            </span>
            Unleash creativity, solve real problems, and build innovative
            solutions
          </p>
          <p className="text-2xl text-gray-100 py-1">
            <span className=" text-3xl text-gray-500 font-bold pr-3">
              Networking:
            </span>
            Connect with industry professionals and potential employers.
          </p>
          <p className="text-2xl text-gray-100 py-1">
            <span className=" text-3xl text-gray-500 font-bold pr-3">
              Tech Talks & Webinars:
            </span>
            Stay updated on the latest IT trends and breakthroughs.
          </p>
          <p className="text-2xl text-gray-100 py-1">
            <span className=" text-3xl text-gray-500 font-bold pr-3">
              Supportive Community:
            </span>
            Join a welcoming space to share ideas and collaborate on projects.
          </p>
        </div>
      </div>
      <div className="image py-10">
        <div className="flex justify-evenly py-10">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="flex justify-evenly my-5">
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
