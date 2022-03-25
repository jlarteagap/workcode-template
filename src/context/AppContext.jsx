import React, { createContext, useState, useEffect } from 'react'

export const AppContext = createContext({
  empresa: undefined
})

export function AppProvider({ children }) {
  const [empresa, setEmpresa] = useState([])

  useEffect(async () => {
    const url = `https://workcore.net/apiv2/web/empresa/?a=124&e=28&ub=http://workcore.net/`

    const res = await fetch(url)
    const data = await res.json()

    setEmpresa(data.records)
  }, [])

  const value = {
    empresa
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
