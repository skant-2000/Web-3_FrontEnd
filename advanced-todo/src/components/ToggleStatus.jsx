import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodo } from '../store/action'

export default function ToggleStatus({ id }) {

    const dispatch = useDispatch()

    const [status, setStatus] = useState(null)

    const { todos } = useSelector(store => store)

    useEffect(() => {
        todos.map((item) => item.id === id ? setStatus(item.isComplete) : null)
    }, [])

    const toggleStatus = (id) => {
        fetch(`http://localhost:8080/todos/${id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'isComplete': !status
            })
        })
        .then(res => res.json())
        .then(() => dispatch(fetchTodo()))
    }
  return (
    <div>
        <button onClick={() => toggleStatus(id)}>Toggle Status</button>
    </div>
  )
}
