import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useParams} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'

export default function UserDetail() {

    const { id } = useParams()

    const { token } = useContext(AuthContext)

    const [singleUser, setSingleUser] = useState({})

    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`)
        .then(res => res.json())
        .then(data => setSingleUser(data.data))
    }, [])

    if ( !token.token ) {
        return <div>You are not Authenticated</div>
    }

  return (
    <div>
        {singleUser !== [] ? (
            <div>
                <img src={singleUser.avatar} alt="" />
                <p>{`Name - ${singleUser.first_name} ${singleUser.last_name}`}</p>
                <p>{`Email - ${singleUser.email}`}</p>
            </div>
        ) : null}
    </div>
  )
}
