import { Link } from 'react-router-dom'
import img404 from './404_error.png'

function Error404() {
  return (
    <div>
      <h1>Ooops :(</h1>
      <img src={img404} alt="new" />
      <Link to="/">Home</Link>
    </div>
  )
}
export default Error404
