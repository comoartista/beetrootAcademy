import React from "react"
import { useState } from "react"

export default function Login({item}) {

  function LogIn() {
    //  if (item.name !==  )
  }

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Name" ref={nameInp} />
      <br />
      <input type="text" placeholder="Password" ref={passInp}/>
      <br />
      <button onClick={LogIn}>Log in</button>
      {/* <div>{out.map(item => (
        <div key={item.id}>
          <span >{item.name}</span>
          <span>{item.pass}</span>
        </div>

      ))}</div> */}
      {console.log(out)}
    </div>
  )
}