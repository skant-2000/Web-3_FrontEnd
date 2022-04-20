import React from 'react'
import { useState } from 'react'
import TodoList from './TodoList'
import style from "./Todo.module.css"

export default function Todo() {

    const [input, setInput] = useState("")
    const [todoArray, setTodoArray] = useState([])

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleAddTodo = () => {
        setTodoArray([...todoArray, input])
        setInput("")
    }

  return (
    <div className={style.todo}>
        <input type="text" value={input} placeholder='add todo' onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add Todo</button>
        <TodoList todoArray={todoArray} />
    </div>
  )
}
