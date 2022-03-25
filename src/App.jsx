import React from 'react'
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'
import { DatosCuriosos } from './components/datoscurioso/DatosCuriosos'
import { Layout } from './pages/layout/Layout'
import { Aplications } from './components/applications/Applications'
import './style.css'
import { Hero } from './components/hero/Hero'
import { AppProvider } from './context/AppContext'
function App() {
  return (
    <AppProvider>
      <Layout>
        <Hero />
        <Aplications />
        <About />
        <DatosCuriosos />
        <Contact />
      </Layout>
    </AppProvider>
  )
}

export default App
