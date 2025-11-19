import React from 'react'
import './About.css'
import About_hero from './about_page/About_hero'
import About_p from './about_page/About_p'
import Home_pages from '../home/pages/Home_pages'
import Gallery_page from '../home/pages/Gallery_page'
import Card_page from '../home/pages/Card_page'
import Contact_page from '../home/pages/contact_page'
import Image from '../home/pages/image'
import room3 from "../../../../../frontend/src/assets/hotel_app_image/room3.jpg";
import room1 from "../../../../../frontend/src/assets/hotel_app_image/room1.jpg";
import room5 from "../../../../../frontend/src/assets/hotel_app_image/room5.jpg";
import room6 from "../../../../../frontend/src/assets/hotel_app_image/room6.jpg";
import dining from "../../../../../frontend/src/assets/hotel_app_image/dining.jpg";
import exteror from "../../../../../frontend/src/assets/hotel_app_image/exteror.jpg";
import Gallary1 from "../../../../../frontend/src/assets/hotel_app_image/Gallary1.jpg";
import poll from "../../../../../frontend/src/assets/hotel_app_image/poll.jpg";
import loby from "../../../../../frontend/src/assets/hotel_app_image/loby.jpg";
import Gallary6 from "../../../../../frontend/src/assets/hotel_app_image/Gallary6.jpg";

// import Home_pages from '../home/pages/Home_pages'
// import Gallery_page from '../home/pages/Gallery_page'
// import Card_page from '../home/pages/Card_page'
// import Contact_page from '../home/pages/contact_page'
function About() {
  return (
    <div>
      <About_hero />
      <About_p />
      <div className="Why-Choose-lod">
        <h1>Why Choose LodgeLink dessie?</h1>
        <p>
          At LodgeLink, we blend modern comfort with genuine Ethiopian <br />
          hospitality. Located conveniently near Bahir Dar's vibrant <br />
          attractions, we are committed to making your stay unforgettable,{" "}
          <br />
          whether for business or leisure.
        </p>
      </div>
      <div className="abebe">
        <div className="web-development">
          <Home_pages
            id="🛏️"
            title="Comfortable Rooms"
            para="Modern, clean, and peaceful spaces designed for your ultimate relaxation."
            read="Read more"
          />
          <Home_pages
            id="🌐"
            title="Complimentary Wi-Fi"
            para="Stay connected with high-speed internet access available throughout the"
            read="Read more"
          />
          <Home_pages
            id="🛎️"
            title="24/7 Dedicated Service"
            para="Our friendly and professional team is always available to assist you."
            read="Read more"
          />
        </div>

        <div className="on-timet">
          <Home_pages
            id="🍽️"
            title="Authentic Ethiopian Cuisine"
            para="Savor delicious local dishes prepared with fresh, traditional ingredients."
            read="Read more"
          />
          <Home_pages
            id="🚘"
            title="Airport/City Pickup"
            para="Convenient and reliable transport services to and from our hotel."
            read="Read more"
          />
          <Home_pages
            id="🏞️"
            title="Lake Tana Views"
            para="Wake up to breathtaking panoramic views of the majestic Lake Tana."
            read="Read more"
          />
        </div>
      </div>
      <div className="convenience">
        <h1>Our Comfortable Rooms & Suites</h1>
        <p>
          Discover a variety of beautifully appointed rooms designed for your{" "}
          <br />
          comfort and convenience, each offering a unique experience during your{" "}
          <br />
          stay in dessie.
        </p>
      </div>
      <div className="gallalry-2">
        <Image
          myimage={room3} // fixed prop name and passed the actual image
          title="Standard Double Room"
          birr="King Size Bed
Spacious Living Area
Balcony with Lake Tana View
Mini-Bar
ETB 2,500/night"
          but="Book Now"
        />
        <Image
          myimage={room1} // fixed prop name and passed the actual image
          title="Lake View Suite"
          birr="King Size Bed
Spacious Living Area
Balcony with Lake Tana View
Mini-Bar
ETB 2,500/night"
          but="Book Now"
        />
        <Image
          myimage={room5} // fixed prop name and passed the actual image
          title="Family Room"
          birr="Two Queen Beds
Connecting Rooms Available
Large Bathroom
Garden Access
ETB 1,800/night"
          but="Book Now"
        />
      </div>
      <div>
        <Image
          myimage={room6} // fixed prop name and passed the actual image
          title="Executive Studio"
          birr="Work Desk & Chair
High-Speed Wi-Fi
Complimentary Breakfast
City View
ETB 1,500/night"
          but="Book Now"
        />
      </div>
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
      <div className="What-Our-Guests">
        <h1>What Our Guests Say</h1>
      </div>
      <div className="Since-you-wan">
        <Card_page
          id="★★★★★"
          para="LodgeLink Dessie exceeded all my expectations! The rooms were incredibly clean and comfortable, and the staff were exceptionally friendly and helpful. A truly peaceful stay near Lake Tana."
          gust="-Dr.minilk desalegn."
        />
        <Card_page
          id="★★★★☆"
          para="Great value for money! The location is perfect for exploring Bahir Dar, and the free Wi-Fi was a lifesaver. I particularly enjoyed the breakfast and the beautiful garden."
          gust="-pro.Bahiru.legese"
        />
        <Card_page
          id="★★★★☆"
          para="Our family had a wonderful time. The service was impeccable, and they went above and beyond to ensure our kids were comfortable. Highly recommend LodgeLink for a memorable trip."
          gust="-mr.besfat mebra"
        />
        <Card_page
          id="★★★★☆"
          para="As a frequent traveler to Bahir Dar, LodgeLink has become my go-to. The quiet ambiance, delicious local food, and convenient airport pickup service make it stand out. Ethiopian hospitality at its best!"
          gust="dr.fasicaw.m"
        />
      </div>
      <Contact_page />

    </div>
  );
}

export default About