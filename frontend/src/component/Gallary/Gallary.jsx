import React from 'react'
import './Gallary.css'
import Gallary_hero from './Gallary_pages/Gallary_hero'
import Gallary_nav from './Gallary_pages/Gallary_nav'
import Gallery_page from '../header/home/pages/Gallery_page'
import room3 from "../../../../frontend/src/assets/hotel_app_image/room3.jpg"
import room1 from "../../../../frontend/src/assets/hotel_app_image/room1.jpg";
import room5 from "../../../../frontend/src/assets/hotel_app_image/room5.jpg";
import room4 from "../../../../frontend/src/assets/hotel_app_image/room4.jpg";
import dining from "../../../../frontend/src/assets/hotel_app_image/dining.jpg";
import exteror from "../../../../frontend/src/assets/hotel_app_image/exteror.jpg";
import Gallary1 from "../../../../frontend/src/assets/hotel_app_image/Gallary1.jpg";
import poll from "../../../../frontend/src/assets/hotel_app_image/poll.jpg";
import loby from "../../../../frontend/src/assets/hotel_app_image/loby.jpg";
import Gallary6 from "../../../../frontend/src/assets/hotel_app_image/Gallary6.jpg";
import Contact_page from '../header/home/pages/contact_page'

function Gallary() {
  return (
    <div>
      <Gallary_hero />
      <Gallary_nav />
      <h1>View All Rooms & Book</h1>
      <div className="gallery-aba">
        <Gallery_page myImage1={dining} />
        <Gallery_page myImage1={exteror} />
        <Gallery_page myImage1={Gallary1} />
      </div>
      <div className="gallery-abb">
        <Gallery_page myImage1={poll} />
        <Gallery_page myImage1={loby} />
        <Gallery_page myImage1={Gallary6} />
      </div>
      <div className="gallery-about-us">
        <Gallery_page myImage1={room3} />
        <Gallery_page myImage1={room1} />
        <Gallery_page myImage1={room5} />
        <Gallery_page myImage1={room4} />
      </div>
      <div className="Read-to">
        <h1>Ready to experience LodgeLink Dessie?</h1>
        <p>
          See yourself relaxing in our comfortable rooms and enjoying our
          amenities. Let's plan your stay.
        </p>
        <button className="primary-btn">Book Your Stay</button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/251946215450"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <i className="fab fa-whatsapp"></i> Contact via WhatsApp
        </a>
      </div>
      
      <Contact_page />
    </div>
  );
}

export default Gallary