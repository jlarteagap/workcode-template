import React from 'react'
import './changeApi.css'
import useData from '../../hooks/useData'
export const ChangeApi = () => {
  const { api, updateApi } = useData()

  return (
    <div className="card changeApi py-4 px-3">
      <div>
        <h4 className="text-center pb-3">Cambiar servidor</h4>
        <form>
          <div className="mb-3">
            <label className="form-label">Cliente</label>
            <input
              type="text"
              className="form-control"
              value={api.a}
              onChange={updateApi}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input
              type="text"
              className="form-control"
              value={api.e}
              onChange={updateApi}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Ubicación</label>
            <input
              type="text"
              className="form-control"
              defaultValue={api.ub}
              onChange={updateApi}
            />
          </div>

          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-danger">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
