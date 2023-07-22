import './Button.scss'
function Button ({item, className}) {
  return <button className={`btn ${className || ""}`}>{item || "login"}</button>
}

export default Button;