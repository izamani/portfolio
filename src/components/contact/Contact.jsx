import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {FaWhatsappSquare} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact =()=> {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j6ougdu', 'template_e597vm6', form.current, 'UjMZPgVhpDGo1Ad-T')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
  <section id='contact'>
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact__container'>
      <div className="contact__options">
        <article className="contact__option">
          <MdEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>dummyemail@gmail.com</h5>
          <a href="mailto:dummy@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <FaFacebookMessenger className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Zamani Freelancer</h5>
          <a href="https://m.me/zamani4freelancer" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <FaWhatsappSquare className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+49151234567</h5>
          <a href="https://api.whatsapp.business.com/send?phone+4915773681762" target="_blank">Send a message</a>
        </article>
      </div>
      {/* End of Contact Options*/}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Your Full Name' required/>
        <input type="email" name="email" placeholder='Your Email' required/>
        <textarea name="message"  placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send a Message</button>

      </form>

    </div>
  </section>
  )
}

export default Contact