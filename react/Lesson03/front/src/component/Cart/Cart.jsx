export function Cart({ name, age, email }) {
  return (
    <div className={"cart"}>
    <h3>{name}</h3>
    <h5>{age}</h5>
    <a href={`mailto:${email}`}>Email</a>
  </div>
    )
}

export function Cart2({ item }) {
  return (
    <div className={"cart"}>
    <h3>{item.name}</h3>
    <h5>{item.age}</h5>
    <a href={`mailto:${item.email}`}>Email</a>
  </div>
    )
}