import React from "react";
import "./Featured.css";
import Dub from "../../Assets/dublin.jpg";
import Lon from "../../Assets/london.jpg";
import Ma from "../../Assets/madrid.jpg";
import Pa from "../../Assets/paris.jpg";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={Dub} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>533 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={Lon} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>202 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={Ma} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Madrid</h1>
          <h2>120 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={Pa} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Paris</h1>
          <h2>169 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
