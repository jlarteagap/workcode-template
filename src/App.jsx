import React from 'react'
import { Contact } from './components/contact/Contact'
import { Layout } from './pages/layout/Layout'
import './style.css'
function App() {
  return (
    <Layout>
      <div className="App">
        <Contact />
      </div>
    </Layout>
  )
}

export default App
