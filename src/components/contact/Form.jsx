import React from 'react'

export const Form = () => {
  return (
    <div>
      <div className="d-flex justify-content-center ">
        <h2 className="fw-light">DEJA TUS DATOS</h2>
      </div>
      <form>
        <div className="row">
          <div className="wc__form col-lg-4 my-3">
            <input
              type="text"
              name="name"
              className="wc__form-input form-control"
              placeholder=" "
            />
            <label className="wc__form-label form-label">Your name</label>
          </div>
          <div className="wc__form col-lg-4 my-3">
            {' '}
            <input
              type="text"
              name="name"
              className="wc__form-input form-control"
              placeholder=" "
            />
            <label className="wc__form-label form-label">Your phone</label>
          </div>
          <div className="wc__form col-lg-4 my-3">
            {' '}
            <input
              type="text"
              name="name"
              className="wc__form-input form-control"
              placeholder=" "
            />
            <label className="wc__form-label form-label">Your email</label>
          </div>
          <div className="wc__form col-12-my-3">
            <textarea
              className="wc__form-textarea form-control w-100"
              placeholder=" "
              rows="4"
            ></textarea>
            <label className="wc__form-label form-label">Your message</label>
          </div>
        </div>
        <button className="wc__form-button btn btn-outline-primary mt-3">
          SEND MESSAGE
        </button>
      </form>
    </div>
  )
}
