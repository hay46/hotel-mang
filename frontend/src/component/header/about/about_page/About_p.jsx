import React from 'react'
import "./About_p.css";
import Gallery7 from "../../../../../../frontend/src/assets/hotel_app_image/gallary7.jpg"
function About_p() {
  return (
    <div className="Our-Story">
      <h1>
        {" "}
        <b>Our Story:</b> More Than Just a Stay
      </h1>
      <p>
        Established in **2019**, LodgeLink Bahir Dar was founded with a singular
        vision: to offer travelers a serene retreat that perfectly blends modern
        comfort with the rich traditions of Ethiopian hospitality. We believe
        that a true travel experience goes beyond just a place to sleep; it's
        about genuine connections, cultural immersion, and moments of profound
        peace.
      </p>
      <p>
        Our journey began with a passion for showcasing the unparalleled beauty
        of Dessie – the vibrant culture, the breathtaking landscapes, and the
        serene tranquility of Lake Tana. We meticulously designed every aspect
        of LodgeLink to be an extension of this beauty, a 'home away from home'
        where guests can relax, explore, and create lasting memories.
      </p>
      <h2>Our Core Values:</h2>
      <h3>
        <b> Genuine Ethiopian Hospitality:</b> Warm welcomes, attentive service,
        and a truly caring approach from our local team.
      </h3>
      <h3>
        <b> Pristine Cleanliness: </b> Meticulous attention to hygiene and
        comfort in every corner of our lodge.
      </h3>
      <h3>
        <b> Ultimate Guest Comfort: </b> Thoughtfully designed rooms, modern
        amenities, and a peaceful ambiance for relaxation.
      </h3>
      <h3>
        <b> Community Engagement: </b>Supporting local businesses, sourcing
        regional produce, and embracing our community.
      </h3>
      <h3>
        <b> Respect for Local Culture:</b> Integrating Ethiopian artistry,
        cuisine, and traditions into the guest experience.
      </h3>
      <div className="Our-Vision">
        <h2>
          <b>**Our Vision:** </b> To be the preferred choice for discerning
          travelers seeking an authentic, comfortable, and memorable experience
          in Dessie, leaving them with a deeper appreciation for Ethiopian
          culture and a desire to return.
        </h2>
        <hr />
        <h2>
          "Our dream was to create a sanctuary in Bahir Dar, a place where every
          guest feels like family, connected to the heart of Ethiopia."
        </h2>
        <h2>-ato abebe fentay,founder</h2>
      </div>
      <hr />
      <div className='img-photo'>
        <img src={Gallery7} alt="" />
      </div>
    </div>
  );
}

export default About_p