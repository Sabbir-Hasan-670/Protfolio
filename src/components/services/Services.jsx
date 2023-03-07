import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'

export const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>services
      </h2>
      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>Cyber Securty</h3>

          </div>
          <ul className='service_list'>
            <li>
              <BsCheck2 className=' service_list-icon' />
              <p>Information Gathering</p>
              </li>
              <li>
              <BsCheck2 className=' service_list-icon' />
              <p>Security awareness training</p>
              </li>
              <li>
              <BsCheck2 className=' service_list-icon' />
              <p>Penetration testing </p>
              </li>
              <li>
              <BsCheck2 className=' service_list-icon' />
              <p>Incident response</p>
              </li>
              <li>
              <BsCheck2 className=' service_list-icon' />
              <p>Compliance and regulatory support </p>
              </li>
                
          </ul>
          
        </article>
        {/*End of Cyber Security */}

        <article className='service'>
          <div className='service_head'>
            <h3>Digital Marketing</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck2 className=' service_list-icon' />
              <p>Search engine optimization (SEO) </p>
              </li>
              <li>
              <BsCheck2 className=' service_list-icon' />
              <p>Social Media Marketing</p>
              </li>
              <li>
              <BsCheck2 className=' service_list-icon' />
              <p>Email Marketing</p>
              </li>
              <li>
              <BsCheck2 className=' service_list-icon' />
              <p>Display advertising</p>
              </li>
              <li>
              <BsCheck2 className=' service_list-icon' />
              <p>Pay-per-click advertising (PPC)</p>
              </li>
                
          </ul>
          
        </article>
        {/*end of Digital Marketing */}
        <article className='service'>
          <div className='service_head'>
            <h3>Web Development
            </h3>

          </div>
          <ul className='service_list'>
            <li>
              <BsCheck2 className=' service_list-icon' />
              <p>E-commerce development</p>
              </li>
              <li>
              <BsCheck2 className=' service_list-icon' />
              <p>Website design and development</p>
              </li>
              <li>
              <BsCheck2 className=' service_list-icon' />
              <p>Content management systems (CMS)</p>
              </li>
              <li>
              <BsCheck2 className=' service_list-icon' />
              <p>Responsive design</p>
              </li>
              <li>
              <BsCheck2 className=' service_list-icon' />
              <p>Website maintenance and support</p>
              </li>
                
          </ul>
          
        </article>
        {/*ennd of Web Devolipoing */}
      </div>
      </section>
  )
}
