import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const RegistrationContext = createContext()

export default function RegistrationContextProvider({ children }) {

    const [form, setForm] = useState({name: "", age: "", dob: "", stateOfResidence: "", address: "", pin: "", id: ""})

    const [fillSecondForm, setFillSecondForm] = useState(false)

    const [userDetails, setUserDetails] = useState([])

  return (
    <RegistrationContext.Provider value={{form, setForm, fillSecondForm, setFillSecondForm, userDetails, setUserDetails}}>
        { children }
    </RegistrationContext.Provider>
  )
}
