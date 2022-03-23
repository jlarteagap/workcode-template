import React from 'react'
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'
import { DatosCuriosos } from './components/datoscurioso/DatosCuriosos'
import { Layout } from './pages/layout/Layout'
import './style.css'
function App() {
  return (
    <Layout>
      <About />
      <DatosCuriosos />
      <Contact />
    </Layout>
  )
}

export default App
