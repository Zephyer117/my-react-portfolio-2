import React from 'react'
import Form from './Form'
import './Footer.css'
import { FaLocationArrow, FaMailBulk, FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="text-white">
      <div className="Footer">
        <div className="footer-dvd">
          <div className="left-text">
            <div className="footer-text">
              <h1>Contact Us</h1>
              <h1>Let Us Dicusss</h1>
              <div className="contact-list">
                <ul>
                  <li className="list-footer">
                    <FaPhoneAlt className="icon-ft"></FaPhoneAlt>
                    Number: +8801756680320
                  </li>
                  <li className="list-footer">
                    <a href="mailto:msutsho556@gmail.com">
                      <FaMailBulk className="icon-ft"></FaMailBulk>
                    </a>
                    E-mail: msutsho556@gmail.com
                  </li>
                  <li className="list-footer">
                    <FaLocationArrow className="icon-ft"></FaLocationArrow>
                    Location: Satkhira, Bangladesh
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-form">
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
