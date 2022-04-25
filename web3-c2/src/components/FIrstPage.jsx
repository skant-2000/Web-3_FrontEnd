import React from 'react'
import { useContext } from 'react'
import { RegistrationContext } from '../context/RegistrationContext'
import { useNavigate } from "react-router-dom"
import styles from "../styles/FirstPage.module.css"

export default function FIrstPage() {

    const navigate = useNavigate()

    const { form, setForm, setFillSecondForm } = useContext(RegistrationContext)

    const handleChangeInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleNextClick = () => {
        if ( form.name !== "" && form.age !== "" && form.dob !== "" ) {
            setFillSecondForm(true)
            navigate('/registration/two')
        }
    }

  return (
    <div className={styles.firstPage}>
        <div>
            <label>Name : </label>
            <br />
            <input type="text" name="name" value={form.name} onChange={handleChangeInput}/>
        </div>
        <div>
            <label>Age : </label>
            <br />
            <input type="number" name="age" value={form.age} onChange={handleChangeInput}/>
        </div>
        <div>
            <label>D.O.B : </label>
            <br />
            <input type="date" name="dob" value={form.dob} onChange={handleChangeInput}/>
        </div>
        <button onClick={handleNextClick}>Next</button>
    </div>
  )
}
