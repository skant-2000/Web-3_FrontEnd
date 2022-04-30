import React from 'react'
import { useState } from 'react'
import { v4 } from "uuid"
import { fetchTodo } from '../store/action'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import styles from "../styles/TodoInput.module.css"

export default function TodoInput() {

    const [input, setInput] = useState("")

    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handlePostTodo = () => {
        fetch('http://localhost:8080/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'id': v4(),
                'title': input,
                'isComplete': false
            })
        })
        .then(() => {dispatch(fetchTodo())})
    }

    useEffect(() => {
        dispatch(fetchTodo())
    }, [])

  return (
    <div className={styles.todoInput}>
        <input type="text" onChange={handleInputChange}/>
        <button onClick={handlePostTodo}>Add</button>
    </div>
  )
}
