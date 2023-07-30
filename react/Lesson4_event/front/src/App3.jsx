import React from "react"
import { useState } from "react"
import Users from './component/User';


export default function App3() {
  const users = [
    {id:1, name: 'John', age: 25},
    {id:2, name: 'Sebastian', age: 15},
    {id:3, name: 'Luka', age: 55}
  ]

  //геттер - результат і сеттер - змінна завдяки якій змінюємо геттер;
  //всередині useState() - може бути дефолтне значення
  const [out, setOut] = useState(users)

  let inp = React.createRef()

  function newUsers() {
    const newUser = inp.current.value
    setOut([...out, {name: newUser}])
    console.log(out);
    // const newUser = inp.current.value

    // setOut([...out, {id: 66, name: newUser, age: 55}])
  }

  return (
    <div>
      <h2>Hook</h2>
      <input type="text" ref={inp}/>
      <button onClick={newUsers}>Add</button>
      <div>{
         <Users item={out}/>
      }</div>
    </div>
  )
}