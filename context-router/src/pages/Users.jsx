import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'

export default function Users() {

    const { token }  = useContext(AuthContext)

    const [userList, setUserList] = useState([])

    useEffect(() => {
        if ( token.token ) {
            fetch('https://reqres.in/api/users?page=1', {
            headres: {
                "Auth": token.token
            }
        })
        .then(res => res.json())
        .then(data => setUserList(data.data))
        }
    }, [])

    if (!token.token) {
        return <div>You are not Authenticated</div>
    }

  return (
    <div>
        {userList.map((user) => (
            <div key={user.id}>
                <img src={user.avatar} alt="" />
                <p>{`Name - ${user.first_name} ${user.last_name}`}</p>
                <Link to={`/users/${user.id}`}>More Details</Link>
            </div>
        ))}
    </div>
  )
}
