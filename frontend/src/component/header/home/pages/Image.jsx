import React from "react";
import "./Image.css";

function Image({ myimage, title, birr, but }) {
  return (
    <div className="card-container">
      <div className="home-section">
        <img src={myimage} alt="" className="card-image" />
        <div className="card-icon">{title}</div>
        <h4 className="card-price">{birr}</h4>
        <button className="card-button">{but}</button>
      </div>
    </div>
  );
}

export default Image;
