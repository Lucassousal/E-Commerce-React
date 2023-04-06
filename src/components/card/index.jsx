import './styles.css'
import {Button} from '../button'
import { Link } from 'react-router-dom'

import { useContext } from "react"
import { CartContext } from "../../context/Cart-context"

export const Card = ({item}) => {

  const {handleCart} = useContext(CartContext)

  const handleAddToCart = () => {
    console.log('entrou')
    handleCart(item)
  }

  return (
    <div className='card'>
      <img src={item.images[0]} alt="" />
      <div>
        <span>{item.title}</span>
        <span>{item.price}</span>
        <p>{item.description}</p>
      </div>
      <div className='buttons-container'>
        <Link to={`/${item.id}`}>
          <Button title="Ver Detalhes" type="secundary "/>
        </Link>
          <Button onClick={handleAddToCart} title="Adicionar ao Carrinho" type="primary"/>
      </div>
    </div>
  )
}