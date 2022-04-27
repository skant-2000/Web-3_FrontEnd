import React from 'react'
import { useDispatch } from "react-redux"
import { decrementByOne, incrementByOne } from '../store/action'
import styles from "../style/ByOne.module.css"

export default function ByOne() {

    const dispatch = useDispatch()

  return (
    <div className={styles.main}>
        <button onClick={() => dispatch(decrementByOne())}>Decrement by 1</button>
        <button onClick={() => dispatch(incrementByOne())}>Increment by 1</button>
    </div>
  )
}
