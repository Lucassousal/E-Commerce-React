import './styles.css'
import logo from '../../assets/images/americanas.png'

export const Header = () => {
  return(
    <div className='header-container'>
      <img src={logo} alt="" />
      <h1>Loja Online</h1>
    </div>
  )
}