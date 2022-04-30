import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeTodo } from '../store/action'

export default function TodoList() {

    const dispatch = useDispatch()

    const { todo } = useSelector(store => store)

  return (
    <div>
        {
            todo.map((item) => (
                <div key={item.id}>
                    <Link to={`/${item.id}`}>{item.value}</Link>
                    <button onClick={() => dispatch(removeTodo(item.id))}>Remove</button>
                </div>
            ))
        }
    </div>
  )
}
