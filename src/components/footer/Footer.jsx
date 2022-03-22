import React from 'react'
import './footer.css'

export const Footer = () => {
  const d = new Date()
  return (
    <footer className="footer d-flex justify-content-center p-2">
      <div className="copyright fw-lighter">© {d.getFullYear()} WORKCODE</div>
    </footer>
  )
}
