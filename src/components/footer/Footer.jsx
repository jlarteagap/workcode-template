import React, { useEffect, useState } from 'react'
import './footer.css'
import { HiChevronDoubleUp } from 'react-icons/hi'
import workcorde from '../../assets/workcode-b.jpg'
import { Social } from './Social'

export const Footer = () => {
  const [empresa, setEmpresa] = useState('')
  useEffect(async () => {
    const url =
      'https://workcore.net/apiv2/web/empresa/?a=124&e=28&ub=http://workcore.net/'
    const res = await fetch(url)
    const result = await res.json()
    setEmpresa(result.records)
  }, [])

  const d = new Date()
  return (
    <footer className="footer row">
      <div className="d-flex flex-column justify-content-center align-items-center p-5">
        <div className="pb-5">
          <HiChevronDoubleUp size={36} className="fw-bolder upButtons" />
        </div>
        <div className="footer__brand d-flex">
          <div className="footer__brand-logo px-5 pt-5 pb-3">
            <a href="/">
              <img src={workcorde} />
            </a>
          </div>
          <Social company={empresa} />
        </div>
        <div className="copyright fw-lighter mt-5">
          © {d.getFullYear()} {empresa.nombre}
        </div>
      </div>
    </footer>
  )
}
