import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsTwitter } from 'react-icons/bs'

function Footer() {
  return (
    <section id='footer'>
      <a href="#" className="footer__logo">Zamani Freelancer</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><BsFacebook /></a>
        <a href="https://instagram.com"><FaInstagramSquare /></a>
        <a href="https://twitter.com"><BsTwitter /></a>
      </div>
    </section>
  )
}

export default Footer