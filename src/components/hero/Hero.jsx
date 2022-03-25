import React, { useEffect, useState } from 'react'
import { getData } from '../../api/api'

import './hero.css'
import { Slide } from './Slide'
export const Hero = () => {
  const [empresa, setEmpresa] = useState('')
  useEffect(() => {
    ;(async () => {
      try {
        const res = await getData('empresa')
        setEmpresa(res.records)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  return (
    <div className="row">
      <div className="container my-5">
        <div className="text-center">
          <Slide />
          <h1 className="wc__hero-title text-uppercase fs-1 fw-bolder">
            Bienvenidos a {empresa.nombre}
          </h1>
        </div>
      </div>
      <div className="wc__hero-quote py-5">
        <h2 className="fw-ligther text-center my-5 pb-sm-0 pb-5">
          <div dangerouslySetInnerHTML={{ __html: empresa.descripcion }} />
        </h2>
      </div>
      <div className="wc__hero-laptop-content position-relative">
        <div className="wc__hero-laptop text-center position-absolute d-block"></div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-center my-5">
          <h3 className="d-block fw-lighter text-center">
            <div dangerouslySetInnerHTML={{ __html: empresa.descripcion }} />
          </h3>
        </div>
      </div>
    </div>
  )
}
