/* eslint-disable react/no-access-state-in-setstate */
import React from 'react'

class ListClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numbers: [1, 2, 3, 5, 8],
    }
  }

  componentDidMount() {
    console.log('Компонент создан/отображен')
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.prevState !== this.state) {
      console.log('state Обновлен')
    } else {
      console.log({
        prevProps,
        prevState,
        nextProps: this.props,
        nextState: this.state,
      })
      console.log('Компонент Обновлен')
    }
  }

  componentWillUnmount() {
    console.log('Компонент Будет Удален!')
  }

  addNumber = () => {
    const randNum = Math.round(Math.random() * 100)
    this.setState({
      numbers: [...this.state.numbers, randNum],
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.numbers.map((num) => (
            <li key={num}>{num}</li>
          ))}
          <button type="button" onClick={this.addNumber}>
            Новое число
          </button>
        </ul>
      </div>
    )
  }
}

export default ListClass

// import React from 'react'

// function ListFn() {
//   // const numbers = [1, 2, 3, 5, 8]

//   const [numbers, setNumbers] = useState([1, 2, 3, 5, 8])

// const addNumber = () => {
//   const randNum = Math.round(Math.random() * 100)
//   const newNumbers = [...numbers, randNum]
//   setNumbers(newNumbers)
// }
// console.log(numbers)

//   return (
//     <div>
//       <ul>
//         {numbers.map((num) => (
//           <li key={num}>{num}</li>
//         ))}
//         <button type="button" onClick={addNumber}>
//           Новое число
//         </button>
//       </ul>
//     </div>
//   )
// }

// export default ListFn
