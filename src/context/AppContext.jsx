import React, { createContext, useState, useEffect } from 'react'
export const AppContext = createContext({
  empresa: undefined,
  api: undefined
})

export function AppProvider({ children }) {
  const [empresa, setEmpresa] = useState([])

  const [api, setApi] = useState({
    url: 'https://workcore.net/apiv2/web/',
    a: '124',
    e: '28',
    ub: 'http://workcore.net/'
  })

  const updateApi = e => {
    setApi({
      ...api,
      [e.target.name]: e.target.value
    })
  }

  useEffect(async () => {
    const url = `${api.url}/empresa/?a=${api.a}&e=${api.e}&ub=${api.ub}`

    const res = await fetch(url)
    const data = await res.json()

    setEmpresa(data.records)
  }, [])

  const value = {
    empresa,
    api,
    updateApi
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
