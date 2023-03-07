import React from 'react'
import './header.css'
import {CTA} from './CTA'
import ME from '../../assets/sabbir.png'
import Hsocial from './Hsocial'

export const Header = () =>  {
  return (
    <header>
      <div className='container header_container' id='header'>
        <h5>Hello I'm</h5>
        <h1>SABBIR HASAN</h1>
        <h5 className='text-light'>Full Stack Devoloper / Cyber Security / Digital Marketer</h5>
        <CTA />
        <Hsocial />
        
        <div className='sabbir'>
          <img src={ME} alt="sabbir"/>
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
    
  )
}
