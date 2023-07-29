import React from "react"
import { useState } from "react"

export default function CountPro() {

  const [count, setCount] = useState(0)
  function countMinus () {
    (count > 0 && setCount(count - 1))
    
  }

  function countPlus () {
    // count(num + 1)
    (count < 10 && setCount(count + 1))
  }

  return (
    <>
      <button onClick={countMinus}>-</button>
      <span>{count}</span>
      <button onClick={countPlus}>+</button>
    </>
  )
} 