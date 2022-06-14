import { useState } from 'react'
import React from 'react'

function ListFn() {
  // const numbers = [1, 2, 3, 5, 8]

  const [numbers, setNumbers] = useState([1, 2, 3, 5, 8])

  const addNumber = () => {
    const randNum = Math.round(Math.random() * 100)
    const newNumbers = [...numbers, randNum]
    setNumbers(newNumbers)
  }
  console.log(numbers)

  return (
    <div>
      <ul>
        {numbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
        <button type="button" onClick={addNumber}>
          Новое число
        </button>
      </ul>
    </div>
  )
}

export default ListFn
