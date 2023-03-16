import './styles.css'
import {Button} from '../button'

export const Card = ({item}) => {
  return (
    <div className='card'>
      <img src={item.images[0]} alt="" />
      <div>
        <span>{item.title}</span>
        <span>{item.price}</span>
        <p>{item.description}</p>
      </div>
      <Button title="Adicionar ao Carrinho" estado="success "/>
    </div>
  )
}