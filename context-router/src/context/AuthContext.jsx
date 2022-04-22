import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext()

export default function AuthContextProvider({children}) {

    const [token, setToken] = useState("")

  return (
    <AuthContext.Provider value={{token, setToken}}>
        {children}
    </AuthContext.Provider>
  )
}