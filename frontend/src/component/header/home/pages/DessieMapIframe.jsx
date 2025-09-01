import React from "react";
import "./DessieMap.css";
function DessieMapIframe() {
  return (
<div className="contacte-use">
<h1>Find Us & Contact Us</h1>
      <div style={{ width: "100%", height: "500px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.845625705525!2d39.631078535283066!3d11.124872812732008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16470adce71fa44b%3A0x74387250678173f1!2sDessie!5e0!3m2!1sen!2set!4v1756722816669!5m2!1sen!2set"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> 
    </div>  
<section className="contact-section" id="contact">
      <h2 className="section-title">Contact & Booking</h2>
      <p className="section-subtitle">
        Have questions or want to reserve your room? Send us a message!
      </p>

      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-card">
            <h3>📍 Address</h3>
            <p>Dessie, Ethiopia – Near Lake Tana</p>
          </div>

          <div className="contact-card">
            <h3>📞 Phone</h3>
            <p>+251 900 000 000</p>
          </div>

          <div className="contact-card">
            <h3>📧 Email</h3>
            <p>lodgelink@hotel.com</p>
          </div>
        </div>

        {/* Contact / Booking Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Phone Number" required />
          <select required>
            <option value="">Select Room Type</option>
            <option value="deluxe">Deluxe Room</option>
            <option value="standard">Standard Room</option>
            <option value="family">Family Suite</option>
          </select>
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="cta-btn">
            Send Booking Request
          </button>
        </form>
      </div>
      </section>

</div>
  );
}

export default DessieMapIframe;
