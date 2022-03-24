import React from 'react'
import { Fa500Px, FaDatabase, FaQuoteLeft } from 'react-icons/fa'
import './applications.css'

export const Aplications = () => {
  return (
    <div className="row">
      <div className="container my-5">
        <div className="d-flex justify-content-center my-5">
          <h2 className="wc__applications wc__titles fw-lighter">
            Aplicaciones
          </h2>
        </div>
        <div className="d-flex justify-content-evenly mb-5">
          <div className="text-center">
            <div className="wc__applications mb-3">
              <Fa500Px size={45} />
            </div>
            <h4 className="fw-bolder text-uppercase fs-5">Administracion</h4>
            <p className="fw-lighter">
              La base principal de todas las aplicaciones, y los cuales, a su
              vez, pueden ser personalizados o customizados
            </p>
          </div>
          <div className="text-center">
            <div className="wc__applications mb-3">
              <Fa500Px size={45} />
            </div>
            <h4 className="fw-bolder text-uppercase fs-5">Administracion</h4>
            <p className="fw-lighter">
              La base principal de todas las aplicaciones, y los cuales, a su
              vez, pueden ser personalizados o customizados
            </p>
          </div>
          <div className="text-center">
            <div className="wc__applications mb-3">
              <Fa500Px size={45} />
            </div>
            <h4 className="fw-bolder text-uppercase fs-5">Administracion</h4>
            <p className="fw-lighter">
              La base principal de todas las aplicaciones, y los cuales, a su
              vez, pueden ser personalizados o customizados
            </p>
          </div>
          <div className="text-center">
            <div className="wc__applications mb-3">
              <Fa500Px size={45} />
            </div>
            <h4 className="fw-bolder text-uppercase fs-5">Administracion</h4>
            <p className="fw-lighter">
              La base principal de todas las aplicaciones, y los cuales, a su
              vez, pueden ser personalizados o customizados
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-evenly mb-5">
          <div className="text-center">
            <div className="wc__applications mb-3">
              <Fa500Px size={45} />
            </div>
            <h4 className="fw-bolder text-uppercase fs-5">Administracion</h4>
            <p className="fw-lighter">
              La base principal de todas las aplicaciones, y los cuales, a su
              vez, pueden ser personalizados o customizados
            </p>
          </div>
          <div className="text-center">
            <div className="wc__applications mb-3">
              <Fa500Px size={45} />
            </div>
            <h4 className="fw-bolder text-uppercase fs-5">Administracion</h4>
            <p className="fw-lighter">
              La base principal de todas las aplicaciones, y los cuales, a su
              vez, pueden ser personalizados o customizados
            </p>
          </div>
          <div className="text-center">
            <div className="wc__applications mb-3">
              <Fa500Px size={45} />
            </div>
            <h4 className="fw-bolder text-uppercase fs-5">Administracion</h4>
            <p className="fw-lighter">
              La base principal de todas las aplicaciones, y los cuales, a su
              vez, pueden ser personalizados o customizados
            </p>
          </div>
          <div className="text-center">
            <div className="wc__applications mb-3">
              <Fa500Px size={45} />
            </div>
            <h4 className="fw-bolder text-uppercase fs-5">Administracion</h4>
            <p className="fw-lighter">
              La base principal de todas las aplicaciones, y los cuales, a su
              vez, pueden ser personalizados o customizados
            </p>
          </div>
        </div>

        <div className="wc__our-habilities">
          <div className="wc__our-habilities-title d-flex align-items-center flex-column">
            <h2 className="fw-lighter text-uppercase">nuestras habilidades</h2>
            <span className="fw-lighter">
              Contamos con experiencia y destreza en tecnologias
            </span>
          </div>
          <div className="d-flex justify-content-evenly my-5">
            <div className="wc__our-habilities-icons d-flex flex-column justify-content-center align-items-center">
              <FaDatabase size={36} />
              <p className="text-uppercase p-0 m-0">bases de datos</p>
            </div>
            <div className="wc__our-habilities-icons d-flex flex-column justify-content-center align-items-center">
              <FaDatabase size={36} />
              <p className="text-uppercase p-0 m-0">bases de datos</p>
            </div>
            <div className="wc__our-habilities-icons d-flex flex-column justify-content-center align-items-center">
              <FaDatabase size={36} />
              <p className="text-uppercase p-0 m-0">bases de datos</p>
            </div>
            <div className="wc__our-habilities-icons d-flex flex-column justify-content-center align-items-center">
              <FaDatabase size={36} />
              <p className="text-uppercase p-0 m-0">bases de datos</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wc__our-habilities-banner py-5">
        <div className="d-flex justify-content-center">
          <h2 className="wc__habilities-quote wc__titles">
            <FaQuoteLeft />
          </h2>
        </div>
        <h3 className="fw-lighter fs-1 text-center my-5">
          Simplifica todos los procesos, de tu organización
        </h3>

        <div className="d-flex justify-content-center my-5">
          <h4 className="wc__our-habilities-brand">WORKCORE</h4>
        </div>
      </div>
    </div>
  )
}
