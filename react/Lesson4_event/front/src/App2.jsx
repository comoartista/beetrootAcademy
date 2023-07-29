import React from "react"
import { useState } from "react"

export default function App2() {



  //геттер - результат і сеттер - змінна завдяки якій змінюємо геттер;
  //всередині useState() - може бути дефолтне значення
  const [out, setOut] = useState()
  const inp = React.createRef()

  function newUsers() {
    // setOut(inp.current.value)
    setOut("Sasha")
  }

  return (
    <div>
      <h2>Hook</h2>
      <input type="text" ref={inp}/>
      <button onClick={newUsers}>Add</button>
      <h4>{console.log(out)}</h4>
      <div>
        {/* {
          users.map(user => (
            console.log(user.name)
          ))
        } */}
      </div>
    </div>
  )
}