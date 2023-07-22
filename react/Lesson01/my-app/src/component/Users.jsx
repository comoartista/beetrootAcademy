export default function Users ({item, children}) {
  return (
    <div className={"cart"}>
    <div className="cart__name">{item.name}</div>
    <div className="cart__age">{item.age}</div>

    {
      item.age > 18 ? 
        <div className="cart__age">Підходиш</div>
        : <div className="cart__age">Не підходиш</div>
    }
    {
      item.age > 18 && <button>Login</button>
    }

    { children }

    </div>
  )
}