export default function List({item}) {
  return (
      <div>
          <img src={item.image} alt=""/>
          <h1>{item.name}</h1>
      </div>
  )
}