import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext()

export default function AuthContextProvider({children}) {

    const [showLoginPage, setShowLoginPage] = useState(false)
    const [token, setToken] = useState("")

    console.log(token)

  return (
    <AuthContext.Provider value={{token, setToken, showLoginPage, setShowLoginPage}}>
        {children}
    </AuthContext.Provider>
  )
}
