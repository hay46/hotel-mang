// import React from "react";
// import './Gallary_nav.css'
// import { Link } from "react-router-dom"; // for client-side routing

// function Gallary_nav() {
//   return (
//     <nav className="nav">
//       <Link to="/">All</Link>
//       <Link to="/rooms">Rooms</Link>
//       <Link to="/gallery_page">Gallery_page</Link>
//       <Link to="/card_page">Card_page</Link>
//       <Link to="/Image">Image</Link>
//       <Link to="/contact_page">Contact_page</Link>
//     </nav>
//   );
// }

// export default Gallary_nav;



import React from "react";
import "./Gallary_nav.css";
import { NavLink } from "react-router-dom";

function Gallary_nav() {
  return (
    <section className="header">
      <nav className="nave">
        <NavLink to="/" end>
          All
        </NavLink>
        <NavLink to="/rooms">Rooms</NavLink>
        <NavLink to="/gallery_page">Gallery</NavLink>
        <NavLink to="/card_page">Cards</NavLink>
        <NavLink to="/image">Image</NavLink>
        <NavLink to="/contact_page">Contact</NavLink>
      </nav>
    </section>
  );
}

export default Gallary_nav;


