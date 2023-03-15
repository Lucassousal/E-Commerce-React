import './styles.css'
import img from '../../assets/images/americanas.png'

export const Footer = () => {
  return(
    <div className='footer-container'>
      <a href="https://polotech.americanas.io/" target={'_blank'} rel="noopener noreferrer">
        <img src={img} alt="" />
      </a>
    </div>
  )
}