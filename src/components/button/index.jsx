import './styles.css'

export const Button = (props) => {

  return(
    <button onClick={props.onClick} className={`button-add-to-card btn-${props.type}`}>{props.title}</button>
  )
}