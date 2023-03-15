import './styles.css'
import {Button} from '../button'
import img from '../../assets/images/americanas.png'

export const Card = () => {
  return (
    <div className='card'>
      <img src={img} alt="" />
      <div>
        <span>teste</span>
        <span>teste</span>
        <p>teset stesteghetebsxgsjsh</p>
      </div>
      <Button/>
    </div>
  )
}