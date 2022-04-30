import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from "react-redux"
import DeleteButton from './DeleteButton'
import ToggleStatus from './ToggleStatus'
import styles from "../styles/TodoList.module.css"

export default function TodoList() {

    const [notCompletedData, setNotCompletedData] = useState([])
    const [searchItem, setSearchItem] = useState("")

    const { todos } = useSelector(store => store)

    useEffect(() => {
        let data = todos.filter(item => item.isComplete === false)
        setNotCompletedData(data)
    }, [todos])

    const handleSearch = () => {
        let matchedItem;

        if ( searchItem !== "" ) {
            matchedItem = notCompletedData.filter((item => item.title.includes(searchItem)))
        }
        else {
            matchedItem = todos.filter(item => item.isComplete === false)
        }

        setNotCompletedData(matchedItem)
    }

  return (
    <div className={styles.main}>
        <div>
            <input type="text" onChange={(e) => setSearchItem(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
        <div>Todos</div>
        <div>
        {
            notCompletedData.map((item) => (
                <div key={item.id}>
                    <div>{item.title}</div>
                    <DeleteButton id={item.id} />
                    <ToggleStatus id={item.id} />
                </div>
            ))
        }
        </div>
    </div>
  )
}
