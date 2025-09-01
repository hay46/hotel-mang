import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">LodgeLink</div>

      {/* Desktop Navigation */}
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/about">About</Link>
        <Link to="/testimonials">Gallary</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/WhatsApp">WhatsApp</Link>
        <Link to="/book-now" className="Book">
          Book Now
        </Link>
      </nav>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="nav-mobile">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/rooms" onClick={() => setMenuOpen(false)}>
            Rooms
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
           About
          </Link>
          <Link to="/gallary" onClick={() => setMenuOpen(false)}>
            Gallary
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
