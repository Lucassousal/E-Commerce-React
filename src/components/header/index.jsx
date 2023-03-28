import { Link } from 'react-router-dom'
import './styles.css'
import logo from '../../assets/images/americanas.png'
import cart from '../../assets/images/cart.png'
import { useContext } from 'react'
import { CartContext } from '../../context/Cart-context'



export const Header = () => {

  const {cartItems} = useContext(CartContext)

  return(
    <div className='header-container'>
      <div className='logo-side'>
        <img src={logo} alt="" />
        <Link to={'/'}>
          <h1>Loja Online</h1>
        </Link>
      </div>
      <Link to={'/cart'}>
        <div className='icon-container'>
          <img src={cart} alt="" />
          <div className='qtd-products'>{cartItems.length}</div>
        </div>
      </Link>
    </div>
  )
}