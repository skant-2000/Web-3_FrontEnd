import React from 'react'
import { fetchTodo } from '../store/action'
import { useDispatch } from 'react-redux'

export default function DeleteButton({ id }) {

    const dispatch = useDispatch()

    const handleDeleteStatus = (id) => {
        fetch(`http://localhost:8080/todos/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(() => dispatch(fetchTodo()))
    }

  return (
    <div>
        <button onClick={() => handleDeleteStatus(id)}>Delete</button>
    </div>
  )
}
