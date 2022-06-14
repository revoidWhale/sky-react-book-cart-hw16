import { useState, useEffect } from 'react'

function ListFnHooks() {
  const [numbers, setNumbers] = useState([1, 2, 3, 5, 8])
  const [count, setCounter] = useState(0)

  const addNumber = () => {
    const min = 10
    const max = 100
    const randNum = Math.round(min + Math.random() * (max - min))
    const newNumbers = [...numbers, randNum]
    setNumbers(newNumbers)
  }

  const addOne = () => {
    setCounter(count + 1)
  }

  // componentDidMount
  // в зависимости был добавлен [] -пустой,
  // означает что следить ни за каким параметрами не надо,
  // отработает точно componentDidMount
  // запустится один раз
  useEffect(() => {
    console.log('Компонент был смонтирован')
  }, [])

  // componentDidUpdate
  // Зависимостей нет
  // Значит следим за всеми изменениями параметров
  useEffect(() => {
    console.log('Компонет был обновлён')
  })

  // componentDidMount + componentWillUnmount
  useEffect(() => {
    console.log('Компонент создался/will mount')

    // возвращаем аннонимную функцию
    // она укажет нам что компонент будет удалить
    // componentWillUnmount
    return () => {
      console.log('Компонент удалился/will unmount')
    }
  }, [])

  // componentDidUpdate для numbers
  // условия сравнения внутри компонент не нужны, так как изначальные зависимости
  // которые следят за изменением параметра в целом
  useEffect(() => {
    console.log(numbers, 'numbers Обновлен')
  }, [numbers])

  // componentDidUpdate для count
  useEffect(() => {
    console.log(count, 'count обновился')
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={addOne}>
        + 1
      </button>
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

export default ListFnHooks
