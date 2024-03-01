import React from 'react';
import './App.css';  
import hospitalImage from './hospital.png';  

function Navbar() {
  return (
    <div className="common-div">
      <h1 className="hospital-name">HOSPITAL</h1> 
      <img src={hospitalImage} alt="Hospital" className="hospital-logo" /> 
    </div>
  );
}

function Profile() {
  return (
    <div className="profile">
      <p className="profile-text">Profile</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <div className="content">
       
        {/* Image upload box */}
        <div className="image-upload">
          <input type="file" accept="image/*" />
        </div>
        {/* Submit button */}
        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </div>
   
      <div className="custom-div">
     
        <div className="details-container">
          <label htmlFor="name1">Hospital Name</label><br />
          <input type="text" id="name1" name="name1" placeholder="Hospital Name" />
        </div>
        <div className="details-container">
          <label htmlFor="name2">Services </label><br />
          <input type="text" id="name2" name="name2" placeholder="Services " />
        </div>
        <div className="details-container">
          <label htmlFor="name3">Contact info</label><br />
          <input type="text" id="name3" name="name3" placeholder="Contact info" />
        </div>
        <div className="details-container">
          <label htmlFor="name4">Appointment booking </label><br />
          <input type="text" id="name4" name="name4" placeholder="Appointment booking " />
        </div>
        <div className="details-container">
          <label htmlFor="name5">Facilities</label><br />
          <input type="text" id="name5" name="name5" placeholder="Facilities" />
        </div>
      
        <div className="details-container">
          <label htmlFor="name6">Quality & Accreditations</label><br />
          <input type="text" id="name6" name="name6" placeholder="Quality & Accreditations" />
        </div>
        <div className="details-container">
          <label htmlFor="name7">Medical staff profile</label><br />
          <input type="text" id="name7" name="name7" placeholder="Medical staff profile" />
        </div>
        <div className="details-container">
          <label htmlFor="name8">Patient testimonials</label><br />
          <input type="text" id="name8" name="name8" placeholder="Patient testimonials" />
        </div>
        <div className="details-container">
          <label htmlFor="name9">Insurance & Payment Info</label><br />
          <input type="text" id="name9" name="name9" placeholder="Insurance & Payment Info" />
        </div>
        <div className="details-container">
          <label htmlFor="name10">Overview</label><br />
          <input type="text" id="name10" name="name10" placeholder="Overview" />
        </div>
      </div>
      <div className="submit-button-below-custom-div">
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default App;
