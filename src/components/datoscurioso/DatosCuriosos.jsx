import React from 'react'
import './datoscuriosos.css'

export const DatosCuriosos = () => {
  return (
    <div className="row datos__curiosos py-5">
      <div className="container">
        <div className="d-flex justify-content-center ">
          <h2 className="datos__curiosos-titles wc__titles fw-lighter mb-5">
            ALGUNOS DATOS CURIOSOS
          </h2>
        </div>
        <div className="datos__curiosos-counters d-flex justify-content-evenly">
          <div className="d-flex flex-column align-items-center">
            <div>Módulos</div>
            <div>219+</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>Cliente</div>
            <div>50+</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>Implementación</div>
            <div>50+</div>
          </div>
        </div>
      </div>
    </div>
  )
}
