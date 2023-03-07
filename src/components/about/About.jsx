import React from 'react'
import './about.css'
import ME from "../../assets/me2.jpg"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className='about_me'>
          <div className="about_me-image">
            <img src={ME} alt="About_Image"></img>
          </div>

        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className="about_icons"/>
              <h5>Expeience</h5>
              <small>1+ year Working as Frelanching</small>

            </article>
            <article className='about_card'>
              <FiUsers className="about_icons"/>
              <h5>Clients</h5>
              <small>200+ Clients</small>

            </article>
            <article className='about_card'>
              <VscFolderLibrary className="about_icons"/>
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>

            </article>
          </div>

            <p>
            To secure a challenging position in a reputable organization to expand my learnings, knowledge,
             and skills. To deploy the knowledge that I have earned from my university throughout my degree in Cyber Security
              and Digital Marketing. I also learn Full Stack Development and am trying to give my best in every field.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>



      </div>

    </section>
  )
}
