import React, { useState, useEffect } from "react";
import AlumniData from "./AlumniInfo.json";

// importing swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// importing req module
import { Autoplay, Pagination } from "swiper/modules";

const AlumniSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteractionChange: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {AlumniData.map((item, index) => {
          const { image, alumniName, position, contact, email } = item;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
                <div className="w-48 h-48 lg:w-[328px] lg:h-[328px]">
                  <img
                    src={image}
                    className="rounded-2xl w-56 h-56"
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <p className="text-6xl text-[#CFECEC] font-bold my-5 font-title">
                    {alumniName}
                  </p>
                  <p className="text-3xl">{position}</p>
                  <p className="text-2xl">{contact}</p>
                  <p className="text-2xl">{email}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default AlumniSlider;
