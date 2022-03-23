import React from 'react'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'

export const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
