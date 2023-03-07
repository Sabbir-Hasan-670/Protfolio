import React from 'react'
import './contact.css'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'
import {AiFillMessage} from 'react-icons/ai'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_okia5j1', 'template_tdn8vr6', form.current, 'QymaT0AmCDN7pXArg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineMarkEmailUnread  className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>contact@sabbir.com</h5>
            <a href="mailto:contact@gmail.com" target="_blank"> Send a Message</a>
            
          </article>

          <article className='contact_option'>
            <SiMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Messege Me on Facebook</h5>
            <a href="https://www.facebook.com/profile.php?id=100089053031496" target="_blank"> Send a Message</a>
            
          </article>

          <article className='contact_option'>
            <AiFillMessage className='contact_option-icon' />
            <h4>+123456789</h4>
            <h5> </h5>
            <a href="https://api.whatsapp.com/send?phone=+91 86951 36609" target="_blank"> Send a Message</a>
            
          </article>

          
        </div>
        {/*end of contact form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name"  placeholder='Your Full Name' required />
          <input type="email" name="email"  placeholder='Your Email' required />
          <textarea rows="7" cols="" name='Message' placeholder='Your Message' required ></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
        
      </div>
    </section>
  )
}
