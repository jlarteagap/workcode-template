import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import './contact.css'
export const Contact = () => {
  return (
    <div className="container py-5">
      <div className="contact__header d-flex justify-content-center flex-column align-items-center">
        <h2 className="contact__header-title wc__titles fw-light">
          CONTACTANOS
        </h2>
        <p className="fw-light">Puedes ponerte en contacto cuando desees</p>
      </div>
      <div className="contact__address d-flex justify-content-around py-5">
        <div className="contact__address-data d-flex align-items-center flex-column">
          <a
            href="#"
            className="contact__icons d-flex justify-content-center align-items-center mb-2"
          >
            <FaMapMarkerAlt size={32} />
          </a>
          <span>text</span>
          <span>text 2</span>
        </div>
        <div className="contact__address-data d-flex align-items-center flex-column">
          <a
            href=""
            className="contact__icons d-flex justify-content-center align-items-center mb-2"
          >
            <FaEnvelope size={32} />
          </a>
          <span>text</span>
          <span>text 2</span>
        </div>
        <div className="contact__address-data d-flex align-items-center flex-column">
          <a
            href="#"
            className="contact__icons d-flex justify-content-center align-items-center mb-2"
          >
            <FaPhoneAlt size={32} />
          </a>
          <span>text</span>
          <span>text 2</span>
        </div>
      </div>
    </div>
  )
}
