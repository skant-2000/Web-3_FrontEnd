import React from 'react'
import { useContext } from 'react'
import { RegistrationContext } from '../context/RegistrationContext'
import { Link } from "react-router-dom"
import styles from "../styles/Users.module.css"


export default function UsersList() {

    const { form, userDetails} = useContext(RegistrationContext)

    if ( form.id === "" ) {
        return <div>
            <p>You are not Authenticated</p>
            <Link to='/registration/one'>First Fill the Form</Link>
        </div>
    }

  return (
    <div className={styles.users}>
        {
            userDetails.map(item => (
                <div key={item.id}>
                    <p>{`Name - ${form.name}`}</p>
                    <p>{`Age - ${form.age}`}</p>
                    <p>{`D.O.B - ${form.dob}`}</p>
                    <p>{`State of residence - ${form.stateOfResidence}`}</p>
                    <p>{`Address - ${form.address}`}</p>
                    <p>{`Pin - ${form.pin}`}</p>
                </div>
            ))
        }
    </div>
  )
}
