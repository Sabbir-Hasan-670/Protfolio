import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'

export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>SABBIR HASAN</a>
      <ul className='permalinks'>
        <li> <a href="#">Home</a></li>
        <li> <a href="about">About</a></li>
        <li> <a href="experience">Experience</a></li>
        <li> <a href="services">Services</a></li>
        <li> <a href="contact">Contact</a></li>
      </ul>

      <div className='footer_social'>
        <a href="https://linkedin.com/in/sabbir670/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Sabbir-Hasan-670" target="_blank"><AiFillGithub /></a>
        <a href="www.twitter.com"><AiFillTwitterCircle /></a>
      </div>

      <div className='footer_copyrights'>
          <small>All Rights Reserved to &copy; SABBIR HASAN. </small>
        </div>
    </footer>
  )
}
