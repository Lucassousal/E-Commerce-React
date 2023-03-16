import './styles.css'

export const Button = (props) => {
  let corBtn;
  
  if(props.estado === 'success') corBtn='green'
  if(props.estado === 'warning') corBtn='yellow'
  if(props.estado === 'danger') corBtn='red'

  return(
    <button className='button-add-to-card' style={{backgroundColor: corBtn}}>{props.title}</button>
  )
}