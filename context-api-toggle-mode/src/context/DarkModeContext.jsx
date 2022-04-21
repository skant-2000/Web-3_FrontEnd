import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const DarkModeContext = createContext()

export default function DarkModeContextProvider({children}) {

    const [darkMode, setDarkMode] = useState(false)

    console.log(darkMode)

  return (
    <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
        {children}
    </DarkModeContext.Provider>
  )
}
