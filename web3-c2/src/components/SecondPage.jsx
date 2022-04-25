import React from 'react'
import { useContext } from 'react'
import { RegistrationContext } from '../context/RegistrationContext'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { v4 } from "uuid"
import styles from "../styles/SecondPage.module.css"


export default function SecondPage() {

    const navigate = useNavigate()

    const { form, setForm, fillSecondForm, userDetails, setUserDetails } = useContext(RegistrationContext)

    const handleChangeInput = (e) => {
        setForm({
            ...form,
            id: v4(),
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmitClick = () => {
        if ( form.stateOfResidence === "" || form.address === "" || form.pin === "" ) {
            alert("fill all the details")
        }
        else if ( form.stateOfResidence !== "" && form.address !== "" && form.pin !== "" ) {
            setUserDetails([...userDetails, form])
            navigate('/users')
        }
    }

    if ( !fillSecondForm ) {
        return <div className={styles.secondPageError}>
            <div>You first have to fill the first form</div>
            <Link to='/registration/one'>Go to First Form</Link>
        </div>
    }

  return (
    <div className={styles.secondPage}>
        <div>
            <label>State of residence : </label>
            <input type="text" name="stateOfResidence" value={form.stateOfResidence} onChange={handleChangeInput}/>
        </div>
        <div>
            <label>Address : </label>
            <input type="text" name="address" value={form.address} onChange={handleChangeInput}/>
        </div>
        <div>
            <label>Pin : </label>
            <input type="number" name="pin" value={form.pin} onChange={handleChangeInput}/>
        </div>
        <button onClick={handleSubmitClick}>Submit</button>
    </div>
  )
}
