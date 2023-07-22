
function ButtonProps (props) {
  return (
    <>
      <button>{props.item}</button>
      {props.children}
    </>
    
  )
}

export default ButtonProps;