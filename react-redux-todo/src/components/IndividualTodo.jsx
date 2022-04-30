import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toggleStatus } from '../store/action'

export default function IndividualTodo() {

    const dispatch = useDispatch()

    const [item, setItem] = useState({})

    const { todo } = useSelector(store => store)

    const {id} = useParams()

    useEffect(() => {
        for ( let i = 0; i < todo.length; i++ ) {
            if ( todo[i].id === id ) {
                setItem(todo[i])
            }
        }
    }, [id, todo])

  return (
      <>
          {item ? (
              <div>
                <p>{item.value} - {item.status ? "completed" : "Not Completed"}</p>
                <button onClick={() => dispatch(toggleStatus(id))}>Toggle Task</button>
              </div>
          ) : null}
      </>
  )
}
