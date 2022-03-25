import React, { createContext, useState, useEffect } from 'react'
import { API_HOST, A, E, UB } from '../utils/constant'
export const AppContext = createContext({
  empresa: undefined
})

export function AppProvider({ children }) {
  const [empresa, setEmpresa] = useState([])

  useEffect(async () => {
    const url = `${API_HOST}/empresa/?a=${A}&e=${E}&ub=${UB}`

    const res = await fetch(url)
    const data = await res.json()

    setEmpresa(data.records)
  }, [])

  const value = {
    empresa
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
