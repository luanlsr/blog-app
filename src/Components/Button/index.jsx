import './style.css'

export const Button = ({onClick, text, disabled}) => {

    return(
        <button disabled={disabled} className="button" onClick={onClick}>{text}</button>
    )
}
