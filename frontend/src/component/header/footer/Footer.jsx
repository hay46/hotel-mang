import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        {" "}
        <div className="footer-content">
          {" "}
          {/* About Section */}{" "}
          <div className="footer-section">
            {" "}
            <h3>LodgeLink</h3>{" "}
            <p>
              {" "}
              Experience comfort and Ethiopian hospitality with modern rooms,
              delicious cuisine, and breathtaking views of Lake Tana.{" "}
            </p>{" "}
          </div>{" "}
          {/* Quick Links */}{" "}
          <div className="footer-section">
            {" "}
            <h3>Quick Links</h3> <Link to="/">Home</Link> <br />{" "}
            <Link to="/rooms">Rooms</Link> <br /> <Link to="/about">About</Link>{" "}
            <br /> <Link to="/contact">Contact</Link>{" "}
          </div>{" "}
          {/* Contact Info */}{" "}
          <div className="footer-section">
            {" "}
            <h3>Contact</h3> <p>📍 Bahir Dar, Ethiopia</p>{" "}
            <p>📞 +251 912345678</p> <p>✉️ info@lodgelink.com</p>{" "}
          </div>{" "}
        </div>{" "}
        {/* Social Icons */}{" "}
        <div className="social-icons">
          {" "}
          <a href="#">
            {" "}
            <FaFacebook />{" "}
          </a>{" "}
          <a href="#">
            {" "}
            <FaTwitter />{" "}
          </a>{" "}
          <a href="#">
            {" "}
            <FaInstagram />{" "}
          </a>{" "}
          <a href="#">
            {" "}
            <FaWhatsapp />{" "}
          </a>{" "}
        </div>{" "}
        {/* Bottom */}{" "}
        <div className="footer-bottom">
          {" "}
          © {new Date().getFullYear()} LodgeLink | All Rights Reserved{" "}
        </div>{" "}
      </footer>
    </div>
  );
}

export default Footer;
