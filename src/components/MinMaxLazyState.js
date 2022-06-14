import { useEffect, useState } from 'react'

function MinMaxLazy({ min = 1, max, current, onChange }) {
  const [inpVal, setInpVal] = useState(current)
  const onInput = (e) => setInpVal(e.target.value)

  function parseCurrentStr() {
    const num = parseInt(inpVal, 10)
    applyCurrent(isNaN(num) ? min : num)
  }

  function onKeyPress(e) {
    if (e.key === 'Enter') {
      parseCurrentStr(e)
    }
  }

  function applyCurrent(num) {
    const validNum = Math.max(min, Math.min(max, num))
    setInpVal(validNum)
    onChange(validNum)
  }

  const inc = () => applyCurrent(current + 1)
  const dec = () => applyCurrent(current - 1)

  useEffect(() => {
    setInpVal(current)
  }, [current])

  return (
    <div>
      <button className="btn btn-warning" type="button" onClick={dec}>
        -
      </button>
      <input
        type="text"
        value={inpVal}
        onChange={onInput}
        onBlur={parseCurrentStr}
        onKeyPress={onKeyPress}
      />
      <button className="btn btn-success" type="button" onClick={inc}>
        +
      </button>
    </div>
  )
}



export default MinMaxLazy
