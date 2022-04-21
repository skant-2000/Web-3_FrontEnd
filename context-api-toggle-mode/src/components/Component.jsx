import React from 'react'
import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'
import styles from "../styles/Component.module.css"

export default function Component() {

    const {darkMode, setDarkMode} = useContext(DarkModeContext)

    const handleDarkMode = (e) => {
        const {checked} = e.currentTarget
        setDarkMode(checked)
    }

  return (
    <div className={darkMode ? `${styles.darkMain}` : `${styles.main}`}>
        <div>
            <p>My Dashboard</p>
            <p>Dark Mode</p>
            <input type="checkbox" name='darkmode' onChange={handleDarkMode} />
        </div>

        <div className={darkMode ? `${styles.darkUsers}` : `${styles.users}`}>
            <div>
                <p>Active Users</p>
                <p><span>for </span>August 2020</p>
            </div>
            <div>
                <div>
                    <img src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" alt="" />
                </div>
                <div>
                    <p>Shreeya</p>
                    <p>Banglore, India</p>
                </div>
            </div>
            <div>
                <p>Professional level 15</p>
                <p>2837 Points</p>
            </div>
        </div>
    </div>
  )
}
