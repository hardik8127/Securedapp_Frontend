import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import the Link component
import './RegistrationForm.css';


const RegistrationForm = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="container" style={{ position: "relative" }}>
      <div className="HamBurger" onClick={handleClick} style={{ position: "absolute", top: "25px", right: "10px", cursor: "pointer" }}>
       
      {click ? (
          <FaTimes size={20} style={{ color: "#944" }} />
        ) : (
          <FaTimes size={20} style={{ color: "#d11" }} />
        )}
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-">
          <div className="title">Tell Us About Your Project</div>
          <div className="content">
            <form action="#">
              <UserDetails />
              <div className="input-box">
                <span className="details">Enter Details of the Project</span>
                <textarea
                  id="textbox"
                  name="textbox"
                  className="form-control"
                  rows="6"
                  cols="97.5"
                ></textarea>

                <div className="form-check" style={{ marginTop: "1rem" }}>
                  <input type="checkbox" className="form-check-input" id="privacyCheckbox" />
                  <label className="form-check-label" htmlFor="privacyCheckbox">
                    I have read and agree to the privacy policy.
                  </label>
                </div>
                <div className="form-check" style={{ marginTop: "1rem" }}>
                  <input type="checkbox" className="form-check-input" id="researchReportsCheckbox" />
                  <label className="form-check-label" htmlFor="researchReportsCheckbox">
                    Get Cyber-Security research reports.
                  </label>
                </div>
                <div className="button">
                  <input type="submit" className="btn btn-primary" value="Send Request" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserDetails = () => {
  return (
    <div className="user-details">
      <div className="input-box">
        <span className="details">Full Name</span>
        <input type="text" className="form-control" placeholder="Enter your name" required />
      </div>
      <div className="input-box">
        <span className="details">Nickname</span>
        <input type="text" className="form-control" placeholder="Enter your Nickname" required />
      </div>
      <div className="input-box">
        <span className="details">Email</span>
        <input type="email" className="form-control" placeholder="Corporate Email" required />
      </div>
      <div className="input-box">
        <span className="details">Services</span>
        <input type="text" className="form-control" placeholder="Services" required />
      </div>
    </div>
  );
};

export default RegistrationForm;
