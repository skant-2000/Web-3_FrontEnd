import React from 'react'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"
import style from "../styles/Navbar.module.css"

export default function Navbar() {

  const {setToken, setShowLoginPage} = useContext(AuthContext)


    const handleLogin = () => {
        setShowLoginPage(true)
    }

    const handleLogout = () => {
        setToken("")
    }

  return (
    <div className={style.navbar}>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
