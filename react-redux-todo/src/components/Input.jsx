import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux" 
import { addTodo } from '../store/action'

export default function Input() {

    const dispatch = useDispatch()

    const [input, setInput] = useState("")

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleAdd = () => {
        dispatch(addTodo(input))
    }

  return (
    <div>
        <input type="text" onChange={handleInputChange} />
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}
