/* eslint-disable prettier/prettier */
import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import useData from '../../hooks/useData'
import './contact.css'
import { Form } from './Form'

export const Contact = () => {
  const {empresa} = useData()

  return (
    <div className="container py-5">
      <div className="contact__header d-flex justify-content-center flex-column align-items-center">
        <h2 className="contact__header-title wc__titles fw-lighter">
          CONTACTANOS
        </h2>
        <p className="fw-light">Puedes ponerte en contacto cuando desees</p>
      </div>
      <div className="contact__address d-flex justify-content-around py-5">
        <div className="contact__address-data d-flex align-items-center flex-column text-center">
          <a
            href={`https://www.google.com/maps/@${empresa.latitud},${empresa.longitud},15z`}
            target="_blank"
            className="contact__icons d-flex justify-content-center align-items-center mb-2"
            rel="noreferrer"
          >
            <FaMapMarkerAlt size={32} />
          </a>
          <span>{empresa.domicilio}</span>
        </div>
        <div className="contact__address-data d-flex align-items-center flex-column">
          <a
            href={`mailto:${empresa.email}`}
            target="_blank"
            className="contact__icons d-flex justify-content-center align-items-center mb-2"
            rel="noreferrer"
          >
            <FaEnvelope size={32} />
          </a>
          <span>{empresa.email}</span>
        </div>
        <div className="contact__address-data d-flex align-items-center flex-column">
          <a
            href={`tel: ${empresa.telefono}`}
            target="_blank"
            className="contact__icons d-flex justify-content-center align-items-center mb-2"
            rel="noreferrer"
          >
            <FaPhoneAlt size={32} />
          </a>
          <span>{empresa.telefono}</span>
        </div>
      </div>

      <Form />
    </div>
  )
}
