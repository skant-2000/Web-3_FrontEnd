import React from 'react'
import TodoItem from './TodoItem'
import style from "./TodoList.module.css"

export default function TodoList({ todoArray }) {
  return (
    <div className={style.todoList}>
        {todoArray.map(item => (
            <TodoItem key={item} item={item} />
        ))}
    </div>
  )
}
