import React from 'react'
import { useSelector } from "react-redux"
import DeleteButton from './DeleteButton'
import ToggleStatus from './ToggleStatus'
import styles from "../styles/CompleteTodoList.module.css"

export default function CompleteTodoList() {

    const { todos } = useSelector(store => store)

  return (
    <div className={styles.main}>
        <div>Completed Todos</div>
        <div>
            {
                todos.map((item) => (
                    item.isComplete ? (
                    <div key={item.id}>
                        <div>{item.title}</div>
                        <DeleteButton id={item.id} />
                        <ToggleStatus id={item.id} />
                    </div>) : null
                ))
            }
        </div>
    </div>
  )
}
