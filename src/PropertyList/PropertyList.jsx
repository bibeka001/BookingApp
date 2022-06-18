import React from "react";
import "./PropertyList.css";
import Appartment from "../Assets/Appartment.jpg";
import Cabin from "../Assets/Cabin.jpg";
import Hotel from "../Assets/Hotel.jpg";
import Villas from "../Assets/Villas.jpg";
import Resort from "../Assets/Resort.jpg";
const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src={Appartment} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Appartments</h1>
          <h2>294 apartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Cabin} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>294 cabins</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Hotel} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>294 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Villas} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>294 villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Resort} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>294 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
