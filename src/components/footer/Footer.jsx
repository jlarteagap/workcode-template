import React from 'react'
import './footer.css'
import { HiChevronDoubleUp } from 'react-icons/hi'
import { FaFacebookF, FaLinkedinIn, FaSkype, FaTwitter } from 'react-icons/fa'
import workcorde from '../../assets/workcode-b.jpg'

export const Footer = () => {
  const d = new Date()
  return (
    <footer className="footer d-flex flex-column justify-content-center align-items-center p-5">
      <div className="pb-5">
        <HiChevronDoubleUp size={36} className="fw-bolder upButtons" />
      </div>
      <div className="footer__brand d-flex">
        <div className="footer__brand-logo px-5 pt-5 pb-3">
          <a href="/">
            <img src={workcorde} />
          </a>
        </div>
        <div className="footer__brand-social px-5 pt-5 pb-3 d-flex">
          <a
            href="#"
            className="footer__brand-icon d-flex justify-content-center align-items-center me-1"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="footer__brand-icon d-flex justify-content-center align-items-center me-1"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="footer__brand-icon d-flex justify-content-center align-items-center me-1"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="footer__brand-icon d-flex justify-content-center align-items-center me-1"
          >
            <FaSkype />
          </a>
        </div>
      </div>
      <div className="copyright fw-lighter mt-5">
        © {d.getFullYear()} WORKCODE
      </div>
    </footer>
  )
}
