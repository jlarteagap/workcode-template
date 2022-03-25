/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'

import { getData } from '../../api/api'

export const Accordion = () => {
  const [about, setAbout] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const res = await getData('acercade')
        setAbout(res.records)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
        {about.map((item,index) => {
            return(<div className="accordion-item mb-2" key={index}>
            <h2 className="accordion-header" id={`flush-heading${index}`}>
              <button
                className="accordion-button wc__accordion collapsed text-uppercase"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-heading${index}`}
                aria-expanded="false"
                aria-controls={`flush-heading${index}`}
              >
                    {item.TITULO}
                </button>
                </h2>
                <div
                id={`flush-heading${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`flush-heading${index}`}
                data-bs-parent="#accordionFlushExample"
                >
                <div className="accordion-body">
                    <div dangerouslySetInnerHTML={{ __html: item.CONTENIDO }} />
                </div>
                </div>
            </div>)
        })}
    </div>
  )
}
