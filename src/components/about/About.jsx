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
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item mb-2">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button wc__accordion collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  ¿POR QUÉ WORKCORE?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
            <div className="accordion-item mb-2">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button wc__accordion collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  MISION
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div className="accordion-item mb-2">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button wc__accordion collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  SOLUCIONES
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
            <div className="accordion-item mb-2">
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  className="wc__accordion accordion-button wc__accordion collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  HISTORIA
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
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
