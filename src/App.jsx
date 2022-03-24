import React from 'react'
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'
import { DatosCuriosos } from './components/datoscurioso/DatosCuriosos'
import { Layout } from './pages/layout/Layout'
import { Aplications } from './components/applications/Applications'
import './style.css'
import { Hero } from './components/hero/Hero'
function App() {
  return (
    <Layout>
      <Hero />
      <Aplications />
      <About />
      <DatosCuriosos />
      <Contact />
    </Layout>
  )
}

export default App
