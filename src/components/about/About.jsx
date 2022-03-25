import React from 'react'
import office from '../../assets/office.jpeg'
import {
  FaIndustry,
  FaBriefcase,
  FaShoppingCart,
  FaTractor,
  FaBriefcaseMedical,
  FaCalculator,
  FaStoreAlt,
  FaTruck,
  FaBookOpen
} from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'
import { Accordion } from './Accordion'
export const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="wc__about d-flex justify-content-center my-5">
          <h2 className="wc__about-title wc__titles fw-lighter">
            ACERCA DE WORKCORE
          </h2>
        </div>
        <div className="col-lg-6">
          <img src={office} className="img-fluid" width="450" />
        </div>
        <div className="col-lg-6">
          <Accordion />
        </div>
      </div>
      <div className="row my-5">
        <div className="d-flex align-items-center flex-column">
          <h2 className="fw-lighter">MODELO DE NEGOCIO</h2>
          <span className="fw-lighter">
            entorno fácil de usar, totalmente adaptable a cualquier rubro
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-evenly mb-5">
        <div className="d-flex flex-column align-items-center">
          <FaIndustry fontSize={56} />
          <p className="fw-bolder">Industria</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <FaShoppingCart fontSize={56} />
          <p className="fw-bolder">Servicio</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <FaBriefcase fontSize={56} />
          <p className="fw-bolder">Comercio</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <FaTractor fontSize={56} />
          <p className="fw-bolder">Agricola</p>
        </div>
      </div>
      <div className="d-flex justify-content-evenly mb-5">
        <div className="d-flex flex-column align-items-center">
          <AiFillSetting fontSize={56} />
          <p className="fw-bolder">Construccion</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <FaBriefcaseMedical fontSize={56} />
          <p className="fw-bolder">Salud</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <FaCalculator fontSize={56} />
          <p className="fw-bolder">Contadores</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <FaStoreAlt fontSize={56} />
          <p className="fw-bolder">Bodegas</p>
        </div>
      </div>
      <div className="d-flex justify-content-evenly mb-5">
        <div className="d-flex flex-column align-items-center">
          <FaTruck fontSize={56} />
          <p className="fw-bolder">Logistica</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <FaBookOpen fontSize={56} />
          <p className="fw-bolder">Editorial</p>
        </div>
      </div>

      <div className="fw-lighter fs-3 mb-5 text-center">
        Integramos gestión de una empresa o emprendimiento, en una única base de
        datos en la nube, evitando las duplicidades e inconvenientes al trabajar
        con datos dispersos por departamentos o áreas geográficas. 219+ Módulos
        50+ Clientes 50+ Implementación ALGUNOS DATOS
      </div>
    </div>
  )
}
