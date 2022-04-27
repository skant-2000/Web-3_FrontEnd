import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { decrementByX, divideByX, incrementByX, multiplyByX } from '../store/action'
import styles from "../style/ByX.module.css"

export default function ByX() {

    const dispatch = useDispatch()

    const [num, setNum] = useState(null)

    const handleIncrementByX = () => {
        if ( num ) {
            dispatch(incrementByX(num))
        }
    }

    const handleDecrementByX = () => {
        if ( num ) {
            dispatch(decrementByX(num))
        }
    }

    const handleMultiplyByX = () => {
        if( num ) {
            dispatch(multiplyByX(num))
        }
    }

    const handleDivideByX = () => {
        if ( num ) {
            dispatch(divideByX(num))
        }
    }

  return (
    <div className={styles.main}>
        <div>
            <label>let X : </label>
            <input type="number" onChange={(e) => setNum(Number(e.target.value))}/>
        </div>
        <div>
            <button onClick={handleIncrementByX}>Increment by X</button>
            <button onClick={handleDecrementByX}>Decrement by X</button>
            <button onClick={handleMultiplyByX}>Multiply by X</button>
            <button onClick={handleDivideByX}>Divide by X</button>
        </div>
    </div>
  )
}
