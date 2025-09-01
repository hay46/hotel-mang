import React from 'react'

function Gallery_page({ myImage1 }) {
  return (
    <div className="gallery-card">
      <img src={myImage1} alt="Room preview" />
      <div className="caption">
        <span className="title">Deluxe Queen</span>
        <button className="btn">Book</button>
      </div>
    </div>
  );
}

export default Gallery_page