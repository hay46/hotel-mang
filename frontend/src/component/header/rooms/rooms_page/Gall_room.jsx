import React from 'react'
import './Gall_room.css'
function Gall_room({myImage,title,birr,qane,but}) {
  return (
    <div>
      <div className="card-contair">
        <div className="gall-section">
          <img src={myImage} alt="" className="card-image" />
          <div className="care-icon">{title}
            <h2>{birr}</h2>
          </div>
          <h3 className="care-price">{qane}</h3>
          <button className="care-button">{but}</button>
        </div>
      </div>
    </div>
  );
}

export default Gall_room