import React from 'react'
import heroImg from '../../assets/top.jpg'
import laptop from '../../assets/mac.png'
import './hero.css'
export const Hero = () => {
  return (
    <div className="row">
      <div className="container my-5">
        <div className="text-center">
          <img src={heroImg} alt="" className="img-fluid" width="900px" />
          <h1 className="wc__hero-title text-uppercase fs-1 fw-bolder">
            Bienvenidos a workcore
          </h1>
        </div>
      </div>
      <div className="wc__hero-quote py-5">
        <h2 className="fw-ligther text-center my-5 pb-5">
          "<span className="fw-bolder">Nos adaptamos a tu empresa</span>,"{' '}
          <br /> no tu empresa a nosotros
        </h2>
      </div>
      <div className="wc__hero-laptop-content position-relative">
        <div className="wc__hero-laptop text-center position-absolute d-block"></div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-center my-5">
          <h3 className="d-block fw-lighter">
            sistema de planificación de recursos empresariales
          </h3>
        </div>
      </div>
    </div>
  )
}
