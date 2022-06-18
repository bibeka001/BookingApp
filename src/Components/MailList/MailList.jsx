import React from "react";
import "./MailList.css";
const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" className="mailInput" />
        <button>Subscribe</button>
        <br />
      </div>
        <div className="check">
          <label htmlFor="">
            <input type="checkbox" />
            Send me a link to get the FREE Booking.com app!
          </label>
        </div>
    </div>
  );
};

export default MailList;
