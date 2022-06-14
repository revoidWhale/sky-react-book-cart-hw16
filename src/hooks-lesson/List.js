/* eslint-disable no-shadow */
/* eslint-disable react/no-access-state-in-setstate */
import { useState } from 'react'
import ListFnHooks from './ListFnHooks'

function List() {
  const [visible, setVisisble] = useState(true)

  const toogleVisible = () => {
    setVisisble((visible) => !visible)
  }
  console.log()

  return (
    <div>
      {visible && <ListFnHooks />}
      <button type="button" onClick={toogleVisible}>
        Показать / скрыть
      </button>
    </div>
  )
}

export default List
