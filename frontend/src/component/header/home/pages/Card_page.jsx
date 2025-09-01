import React from 'react'
import './Card_page.css'
function Card_page({id,para,gust}) {
  return (
    <div className="Home-icon-page">
      <div className="Home-icon">{id}</div>
      <p>{para}</p>
      <h3>{gust}</h3>
    </div>
  );
}

export default Card_page