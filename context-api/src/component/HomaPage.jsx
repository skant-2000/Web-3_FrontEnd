import React from 'react'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"
import style from "../styles/HomaPage.module.css"

export default function HomaPage() {

  const {token} = useContext(AuthContext)

  return (
    <div className={style.homePage}>
        {`Token : ${token.token}`}
    </div>
  )
}
