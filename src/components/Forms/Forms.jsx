import React from 'react';
import "../component.css";

const Forms = () => {
  return (
    <div id="forms" className="Mwidth flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black w-full h-auto p-10 py-32">
      <h1 className="text-7xl font-title font-bold text-white p-10">Form  Page!</h1>
      <div className="border-4 border-white text-white">
        <div className="title flex flex-col justify-center items-center p-8">CCRC IT CLUB FORM</div>
        <form action="/">
          <div className="user-details flex flex-wrap justify-between">
            <div className="input-box flex flex-col p-10">
              <label className="forms-details" htmlFor="fname">Full Name</label>
              <input type="text" placeholder="Enter your name" id="fname" required/>
              <label className="forms-details" htmlFor="grade">Grade</label>
              <input type="text" placeholder="Grade" id="grade" required/>
              <label className="forms-details" htmlFor="email">Email</label>
              <input type="email" placeholder="Enter your email" id="email" required/>

              <h2 className="forms-details">Select your gender:</h2>
              <div className="gender flex flex-row p-4">
                <label className="forms-details cursor-pointer" htmlFor="male">Male</label>
                <input type="radio" name="gender" id="male" />
                <label className="forms-details cursor-pointer" htmlFor="female">Female</label>
                <input type="radio" name="gender" id="female" />
              </div>
              <label className="forms-details" htmlFor="id4">Why do you want to join this club?</label>
              <textarea type="text" placeholder="Enter here.." id="id4" required> </textarea>
              <label className="forms-details" htmlFor="id5">What technological skills do you possess?</label>
              <textarea type="text" placeholder="Enter here.." id="id5" required>
              </textarea>
              <label className="forms-details" htmlFor="id6">Why should we select you?</label>
              <textarea type="text" placeholder="Enter here.." id="id6" required>
              </textarea>
              <label className="forms-details" htmlFor="id7">Would you be interested in organizing or leading any events or workshops for the IT club?</label>
              <textarea type="text" placeholder="Enter here.." id="id7" required>
              </textarea>
              <label className="forms-details" htmlFor="id8">How Important is community engagement and outreach in the I club's activities to you?</label>
              <textarea type="text" placeholder="Enter here.." id="id8" required>
              </textarea>
              <label className="forms-details" htmlFor="id9">Are you open to participating in hackathons or other competitive events related to IT?</label>
              <textarea type="text" placeholder="Enter here.." id="id9" required>
              </textarea>
              <label className="forms-details" htmlFor="id10">Are there any time commitments or limitations that might affect your involvement in the IT club?</label>
              <textarea type="text" placeholder="Enter here.." id="id10" required>
              </textarea>
              <div className="forms-sr flex flex-row justify-evenly items-center">
                <button className="font-bold p-1" type="submit">Submit</button>
                <button className="font-bold p-1" type="reset">Reset</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Forms;

// All the input fields are required 
// so make one span for saying "Enter nothing if not have" or sthg like that