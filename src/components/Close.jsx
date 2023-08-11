import React,{useState} from 'react';
import Popup from "./Popup";
import {CgSearch} from "react-icons/cg";

const Close = () => {
    // Search Bar Popup and Close 
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="">
      <input type="text" placeholder="Search" onClick={togglePopup} className=""/>
      {/* <CgSearch size={30}/> */}
      
      <button>Search</button>

      {showPopup && (
        <div className="popup-container">
          <Popup onClose={togglePopup} />
        </div>
      )}
    </div>
  );
};

export default Close;

