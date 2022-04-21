import React from 'react'
import { MdOutlineAlignVerticalBottom } from "react-icons/md";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { MdFileCopy } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import styles from "../styles/Sidebar.module.css"
import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'

export default function Sidebar() {

    const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? `${styles.darkSidebar}` : `${styles.sidebar}`}>
        <div>
            <img src="https://static.remove.bg/remove-bg-web/5cc729f2c60683544f035949b665ce17223fd2ec/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" alt="" />
        </div>
        <div>
            <MdOutlineAlignVerticalBottom />
        </div>
        <div>
            <MdOutlineDoubleArrow />
        </div>
        <div>
            <MdShoppingCart />
        </div>
        <div>
            <MdMessage />
        </div>
        <div>
            <MdFileCopy />
        </div>
        <div>
            <MdSettings />
        </div>
        <div>
            <MdAddCircle />
        </div>
    </div>
  )
}
