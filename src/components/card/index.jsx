import './styles.css'
import {Button} from '../button'
import { Link } from 'react-router-dom'

export const Card = ({item}) => {

  return (
    <div className='card'>
      <img src={item.images[0]} alt="" />
      <div>
        <span>{item.title}</span>
        <span>{item.price}</span>
        <p>{item.description}</p>
      </div>
      <Link to={`/${item.id}`}>
        <Button title="Ver Detalhes" estado="details "/>
      </Link>
    </div>
  )
}