import React from 'react'
import { Link } from "react-router-dom"
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <Link to='/'>Home</Link>
        <Link className={styles.link} to='/about'>About</Link>
        <Link className={styles.link} to='/contact'>Contact</Link>
        <Link className={styles.link} to='/users'>Users</Link>
        <Link className={styles.link} to='/login'>Login</Link>
    </div>
  )
}
