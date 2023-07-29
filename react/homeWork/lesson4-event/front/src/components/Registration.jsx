import React from "react"
import { useState } from "react"
import Login from "./components/Login"


export default function Registration() {
  let nameInp = React.createRef()
  let passInp = React.createRef()
  const pass2Inp = React.createRef()
  const users = [{
    // id: 1,
    // name: 'Oksana',
    // pass: 12345
  }]

  const [out, setOut] = useState(users)

  function Registrated() {
    let newUser = nameInp.current
    let newPass = passInp.current
    let new2Pass = pass2Inp.current

    if (newPass.value !== new2Pass.value) {
      alert ("Паролі не збігаються")
      return
    }

    setOut([...out, {id: 30, name: newUser.value, pass: newPass.value}])

    newUser.value = ''
    newPass.value = ''
    new2Pass.value = ''
  }

  return (
    <div>
      <h1>Registration</h1>
      <input type="text" placeholder="Name" ref={nameInp} />
      <br />
      <input type="text" placeholder="Password" ref={passInp}/>
      <br />
      <input type="text" placeholder="Password" ref={pass2Inp}/>
      <br />
      <button onClick={Registrated}>Registration</button>
      {/* <div>{out.map(item => (
        <div key={item.id}>
          <span >{item.name}</span>
          <span>{item.pass}</span>
        </div>

      ))}</div> */}
      {console.log(out)}
      <Login item={out}/>


    </div>
  )
}