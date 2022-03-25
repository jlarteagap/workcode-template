/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'

import { getData } from '../../api/api'

export const Slide = () => {
  const [slide, setSlide] = useState([''])

  useEffect(async () => {
    (async () => {
      try {
        const res = await getData('portada')
        setSlide(res.records)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
        <div className="carousel-inner">
        {slide.map((item, index) => {
            return(
        <div className={`carousel-item ${index === 0 ? 'active' : ''} `} key={index}>
          <img src={item.URL} className="d-block w-100" alt={item.ID_FOTO} />
        </div>)
        })}
      </div>
    </div>
  )
}