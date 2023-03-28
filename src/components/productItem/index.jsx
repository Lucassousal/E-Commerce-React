import { useContext } from 'react'
import { CartContext } from '../../context/Cart-context';
import './style.css'

export const ProductItem = ({item}) =>{

  const {handleProductDeletion} = useContext(CartContext);

  return(
    <div className='product-item--container'>
      <img src={item.images[0]} alt="" />
      <span>{item.title}</span>
      <span>{item.description}</span>
      <span>R$ {item.price},00</span>
      <span onClick={() => handleProductDeletion(item.id)} className='btn-remove'>&#10007;</span>
    </div>
  )
}