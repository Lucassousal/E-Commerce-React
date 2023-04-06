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
            cartItems.length > 0 ?(
              cartItems.map((item, index) => {
                return(
                <ProductItem key={index} item={item}/>
                )
              })
            ) : (
              <div className='no-products'> Não existe nenhum produto no carrinho </div>
            )           
          }
          {
            cartItems.length > 0 &&
            <>
              <p>Total: R${handleSun(cartItems)},00</p>
              <Button onClick={handleCleanCart} title='Limpar Carrinho' type='secundary'/>
            </>
          }
        </div>
        <Link to={'/'}>
          <Button title='Voltar para Página Inicial' type='primary'/>
        </Link>
      </div>
  )
}