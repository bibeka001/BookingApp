import React from "react";
import "./FeaturedProperties.css";
import Fitem1 from "../Assets/Fitem1.jpg";
import Fitem2 from "../Assets/Fitem2.jpg";
import Fitem3 from "../Assets/Fitem3.jpg";
import Fitem4 from "../Assets/Fitem4.jpg";
const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src={Fitem1} alt="" className="fpImg" />
        <span className="fpName">Aparthotel Staree Miasto</span>
        <span className="fpCiy">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>EXcellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={Fitem2} alt="" className="fpImg" />
        <span className="fpName">Aparthotel Staree Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>EXcellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={Fitem3} alt="" className="fpImg" />
        <span className="fpName">Aparthotel Staree Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Marvellous</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={Fitem4} alt="" className="fpImg" />
        <span className="fpName">Tour de Spain</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Superb</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
