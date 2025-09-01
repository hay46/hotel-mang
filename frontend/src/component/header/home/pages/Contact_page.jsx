import React from "react";
import "./Contact_page.css";
import { FaWhatsapp, FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";

function Contact_page() {
  return (
    <div className="whatsApp-us">
      <h1>Book your room now and enjoy the best stay in Dessie.</h1>

      <button className="whatsapp-btn">
        <FaWhatsapp /> WhatsApp Us
      </button>

      <button className="call-btn">
        <FaPhoneAlt /> Call +251 946-xxx-xxx
      </button>

      <button className="availability-btn">
        <FaCalendarCheck /> Check Availability
      </button>
    </div>
  );
}

export default Contact_page;
