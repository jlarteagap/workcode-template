import React from 'react'
import { ChangeApi } from '../../components/changeApi/changeApi'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'

export const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <Header />
      <ChangeApi />
      {children}
      <Footer />
    </div>
  )
}
