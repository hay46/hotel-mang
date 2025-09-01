import React from "react";
import "./Card_pa.css";

function Card_pa({ icon, title }) {
  return (
    <div className="my-image-gap">
      <div className="icon">{icon}</div>
      <h1>{title}</h1>
    </div>
  );
}

export default Card_pa;
