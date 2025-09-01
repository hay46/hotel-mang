import React from 'react'
import './Rooms.css'
import Hero_room from './rooms_page/Hero_room'
import Gall_room from './rooms_page/Gall_room'
import Card_pa from './rooms_page/Card_pa'
import Contact_page from '../home/pages/contact_page'
import room3 from "../../../../../frontend/src/assets/hotel_app_image/room3.jpg"
import room1 from "../../../../../frontend/src/assets/hotel_app_image/room1.jpg";
import room2 from "../../../../../frontend/src/assets/hotel_app_image/room2.jpg";
import room4 from "../../../../../frontend/src/assets/hotel_app_image/room4.jpg";
import room5 from "../../../../../frontend/src/assets/hotel_app_image/room5.jpg";
import room6 from "../../../../../frontend/src/assets/hotel_app_image/room6.jpg";
function Rooms() {
  return (
    <div>
      <Hero_room />
      <div className="Our-Comfrtable">
        <h1>Our Comfortable Rooms</h1>
        <div className="Starting-bad">
          <Gall_room
            myImage={room3}
            title="Deluxe Queen Room"
            birr="Starting from $95 / night"
            qane="🛌 Queen Bed
📺 Flat-screen TV
📶 Free Wi-Fi"
            but="view details"
          />
          <Gall_room
            myImage={room1}
            title="Spacious Family Suite"
            birr="Starting from $150 / night"
            qane="👨‍👩‍👧‍👦 Sleeps 4
🛋️ Living Area
🍽️ Dining Nook"
            but="view details"
          />
          <Gall_room
            myImage={room2}
            title="Comfort Twin Room"
            birr="Starting from $80 / night"
            qane="🛌 2 Single Beds
🚿 Hot Shower
❄️ A/C"
            but="view details"
          />
        </div>
        <div className="Executive">
          <Gall_room
            myImage={room4}
            title="Executive King Suite"
            birr="Starting from $180 / night"
            qane="👑 King Bed
🌄 Balcony View
🛁 Bathtub"
            but="view details"
          />
          <Gall_room
            myImage={room5}
            title="Deluxe Queen Room"
            birr="Starting from $95 / night"
            qane="👑 King Bed
🌄 Balcony View
🛁 Bathtub"
            but="view details"
          />
          <Gall_room
            myImage={room6}
            title="Executive King Suite"
            birr="Starting from $200 / night"
            qane="🛌 Queen Bed
📺 Flat-screen TV
📶 Free Wi-Fi"
            but="view details"
          />
        </div>
      </div>
      <div className="Free-Wi-Fi">
        <Card_pa icon="📶" title="Free Wi-Fi" />
        <Card_pa icon="❄️" title="Air Conditioning" />
        <Card_pa icon="🚿" title="Hot Shower" />
        <Card_pa icon="📺" title="Flat-screen TV" />
        <Card_pa icon="☕" title="Coffee Maker" />
      </div>

      <div className="Flat-screen-TV">
        <Card_pa icon="🔒" title="Safe Lock" />
        <Card_pa icon="🧹" title="Daily Cleaning" />
        <Card_pa icon="📞" title="Room Service" />
      </div>
      <Contact_page/>
    </div>
  );
}

export default Rooms