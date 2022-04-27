import React from 'react'
import { useSelector } from "react-redux"

export default function DisplayCount() {

    const { count } = useSelector(store => store)

  return (
    <div><h1>{count}</h1></div>
  )
}
