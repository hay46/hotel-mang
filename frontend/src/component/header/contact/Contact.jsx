import React from 'react'
import './Contact.css'
import Contact_hero from './contact_pag/Contact_hero'
import Phone from './contact_pag/phone'
import DessieMapIframe from '../home/pages/DessieMapIframe'
//import ContactForm from './contact_pag/ContactForm'
function Contact() {
  return (
    <div>
      <Contact_hero />
      <Phone />
      <DessieMapIframe />
      {/* <ContactForm/> */}
    </div>
  );
}

export default Contact