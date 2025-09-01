import React from 'react'
import './Home_pages'
function Home_pages({id ,title,para,read}) {
  return (
      <div>
        <div className="home-card">
          <div className="card-icon">{id}</div>
          <h2>{title}</h2>
          <p>{para}</p>
          <a href="/" className="read-more">
            {read} →
          </a>
        </div>
      </div>
  );
}

export default Home_pages
