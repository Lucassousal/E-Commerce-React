import { useContext } from 'react'
import { CartContext } from '../../context/Cart-context'
import { ProductItem } from '../../components/productItem'
import { Button } from '../../components/button'
import { Link } from 'react-router-dom'

import './style.css'


export const Cart = () => {
  const {cartItems, handleSun, handleCleanCart} = useContext(CartContext)

  return (
      <div className='cart-container'>
        <h2>Carrinho de Compras</h2>
        <div className='productItems-container'>
          {
            cartItems &&
            cartItems.map((item, index) => {
              return(
              <ProductItem key={index} item={item}/>
              )
            })
          }
          <p>Total: R${handleSun(cartItems)},00</p>
          <Button onClick={handleCleanCart} title='Limpar Carrinho' estado='danger'/>
        </div>
        <Link to={'/'}>
          <Button title='Voltar' estado='sucess'/>
        </Link>
      </div>
  )
}