import React from 'react';
import EventsSlider from './EventsSlider';

const Events = () => {
  return (
    <div id="events" className="Mwidth bg-gradient-to-b from-gray-800 to-black h-auto w-full py-5 text-white ">
      <div className="">
      <h1 className="text-7xl font-title font-bold mt-28 mb-10 flex justify-center items-center">Events</h1>
      <p className="text-2xl flex flex-col justify-center items-center">Our Events Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.</p>
        <EventsSlider />
      </div>
    </div>
  )
}

export default Events;
