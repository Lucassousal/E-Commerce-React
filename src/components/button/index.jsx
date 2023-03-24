import './styles.css'
import { Link } from 'react-router-dom';

export const Button = (props) => {
  let corBtn;
  
  if(props.estado === 'success') corBtn='green'
  if(props.estado === 'warning') corBtn='yellow'
  if(props.estado === 'danger') corBtn='red'
  if(props.estado === 'details') corBtn='blue'

  return(
    <Link to={`/${props.id}`}>
      <button className='button-add-to-card' style={{backgroundColor: corBtn}}>{props.title}</button>
    </Link>
  )
}