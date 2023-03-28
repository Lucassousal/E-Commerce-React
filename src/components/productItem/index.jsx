import './style.css'

export const ProductItem = ({item}) =>{
  return(
    <div className='product-item--container'>
      <img src={item.images[0]} alt="" />
      <span>{item.title}</span>
      <span>{item.price}</span>
      <span>X</span>
    </div>
  )
}