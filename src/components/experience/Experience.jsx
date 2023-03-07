import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skill I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className='experience_CyberSecurity'>
          <h3>Cyber Security</h3>
          <div className='experience_content'>
          <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'  />
              <div>
              <h4>Information Gathering</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>SQL Injection</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>Metasploit</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Nmap</h4>
              </div>
              </article>
          </div>

        </div>
        <div className='experience_digitalmarketing'>
          <h3>Digital Marketing</h3>
          <div className='experience_content'>
          <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>SEO</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Social Media Marketing</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Google Search Console</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Google Analytics</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience_frontend'>
          <h3>Frontend Devolopment</h3>
          <div className='experience_content'>
          <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience_backend'>
        <h3>Backend Devolopment</h3>
          <div className='experience_content'>
          <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Nodejs</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>My SQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>

        </div>


        
      </div>
    </section>
  )
}

