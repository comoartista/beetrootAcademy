export default function ListApi({item}) {
  return (
    <div>
      <img src={item.image} alt="" />
      <h3>{item.name}</h3>
    </div>
  )
}