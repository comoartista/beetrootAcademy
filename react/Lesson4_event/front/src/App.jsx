import React from "react";

export default function App() {
  const out = React.createRef()
  const inp = React.createRef()
  
  function testClick() {
    out.current.innerHTML = inp.current.value
  }

  function changeInp() {
    // out.current.innerHTML = inp.current.value
  }

  return (
    <div>
      <h2>Old version</h2>
      <input type="text" onInput={changeInp} ref={inp} />
      <button onClick={testClick}>Add</button>
      <div ref={out}></div>
    </div>
  )
}