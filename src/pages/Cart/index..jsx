import { useContext } from 'react'
import { CartContext } from '../../context/Cart-context'
import { ProductItem } from '../../components/productItem'
import { Button } from '../../components/button'
import { Link } from 'react-router-dom'

import './style.css'


export const Cart = () => {
  const {cartItems} = useContext(CartContext)

  return (
      <div>
        {
          cartItems &&
          cartItems.map((item, index) => {
            return(
            <ProductItem key={index} item={item}/>
            )
          })
        }
        <Link to={'/'}>
          <Button title='Voltar' estado='sucess'/>
        </Link>
      </div>
  )
}