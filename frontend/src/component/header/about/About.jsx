import React from 'react'
import './About.css'
import About_hero from './about_page/About_hero'
import About_p from './about_page/About_p'
import Home_pages from '../home/pages/Home_pages'
import Gallery_page from '../home/pages/Gallery_page'
import Card_page from '../home/pages/Card_page'
import Contact_page from '../home/pages/contact_page'
function About() {
  return (
    <div>
        <About_hero/>
        <About_p/>
        <Home_pages/>
        <Gallery_page/>
        <Card_page/>
        <Contact_page/>
    </div>
  )
}

export default About