import React, { useState } from 'react'

export const Form = () => {
  const [data, setData] = useState('')
  const [status, setStatus] = useState(false)

  const updateState = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    fetch(
      'https://workcore.net/apiv2/web/contactos/?a=124&e=28&ub=http://workcore.net/',
      {
        method: 'POST',
        body: JSON.stringify(data),
        'Content-Type': 'application/json'
      }
    ).then(function (response) {
      if (response.status === 200) {
        setStatus(true)
      }
      setTimeout(() => {
        setStatus(false)
      }, 2000)
    })
  }
  return (
    <div className="row">
      <div className="d-flex justify-content-center ">
        <h2 className="fw-light">DEJA TUS DATOS</h2>
      </div>
      {status && (
        <div className="alert alert-success">
          Su mensaje ha sido correctamente enviado{' '}
        </div>
      )}
      {status ? (
        ''
      ) : (
        <form onSubmit={e => handleSubmit(e)}>
          <div className="row">
            <div className="wc__form col-lg-4 my-3">
              <input
                type="text"
                name="nombre"
                onChange={updateState}
                className="wc__form-input form-control"
                placeholder=" "
              />
              <label className="wc__form-label form-label">Your name</label>
            </div>
            <div className="wc__form col-lg-4 my-3">
              {' '}
              <input
                type="text"
                name="telefono"
                onChange={updateState}
                className="wc__form-input form-control"
                placeholder=" "
              />
              <label className="wc__form-label form-label">Your phone</label>
            </div>
            <div className="wc__form col-lg-4 my-3">
              {' '}
              <input
                type="text"
                name="email"
                className="wc__form-input form-control"
                onChange={updateState}
                placeholder=" "
              />
              <label className="wc__form-label form-label">Your email</label>
            </div>
            <div className="wc__form col-12-my-3">
              <textarea
                className="wc__form-textarea form-control w-100"
                placeholder=" "
                name="mensaje"
                onChange={updateState}
                rows="6"
              ></textarea>
              <label className="wc__form-label form-label">Your message</label>
            </div>
          </div>
          <button className="wc__form-button btn btn-outline-secondary mt-3">
            SEND MESSAGE
          </button>
        </form>
      )}
    </div>
  )
}
