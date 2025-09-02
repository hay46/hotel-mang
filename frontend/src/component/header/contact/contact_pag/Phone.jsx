import React from "react";
import "./Phone.css";

function Phone() {
  return (
    <div className="get-in-touch">
      <div className="contact-card">
        <h1>📞 Phone Number</h1>
        <h3>+251946215450</h3>
      </div>
      <div className="contact-card whatsapp">
        <h1>📱 WhatsApp</h1>
        <h2>Chat on WhatsApp</h2>
      </div>
      <div className="contact-card">
        <h1>📧 Email Address</h1>
        <h2>info@lodgelinkDessie.com</h2>
      </div>
      <div className="contact-card">
        <h1>📍 Our Location</h1>
        <h2>Kebele 0X, Near [Landmark], Dessie, Ethiopia</h2>
      </div>
      <div className="contact-card">
        <h1>⏰ Operating Hours</h1>
        <h2>Reception: 24/7 | Restaurant: 7:00 AM - 10:00 PM</h2>
      </div>
    </div>
  );
}

export default Phone;
