import React from 'react'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter
} from 'react-icons/fa'

export const Social = ({ company }) => {
  console.log(company.facebook)
  return (
    <div className="footer__brand-social px-5 pt-5 pb-3 d-flex">
      <h4>Agregar Redes sociales</h4>
      {company.facebook ? (
        <a
          href={company.facebook}
          className="footer__brand-icon d-flex justify-content-center align-items-center me-1"
        >
          <FaFacebookF />
        </a>
      ) : (
        ''
      )}
      {company.twitter ? (
        <a
          href={company.twitter}
          className="footer__brand-icon d-flex justify-content-center align-items-center me-1"
        >
          <FaTwitter />
        </a>
      ) : (
        ''
      )}
      {company.linkedin ? (
        <a
          href={company.linkedin}
          className="footer__brand-icon d-flex justify-content-center align-items-center me-1"
        >
          <FaLinkedinIn />
        </a>
      ) : (
        ''
      )}
      {company.telegram ? (
        <a
          href={company.telegram}
          className="footer__brand-icon d-flex justify-content-center align-items-center me-1"
        >
          <FaTelegramPlane />
        </a>
      ) : (
        ''
      )}
    </div>
  )
}
