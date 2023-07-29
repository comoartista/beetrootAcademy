import { useState, useRef } from "react";
import "./App.css"

function App() {
  const inp1 = useRef();
  const inp2 = useRef();

  const [out, setOut] = useState()

  function Sum () {
    setOut(+inp1.current.value +  +inp2.current.value)
  }

  const inp3 = useRef();
  const inp4 = useRef();
  const inpSelect = useRef();

  const [out2, setOut2] = useState()
  
  function Price () {
 (inpSelect.current.value === "+" ? setOut2(+inp3.current.value +  +inp4.current.value) : setOut2(+inp3.current.value -  +inp4.current.value))
    // if(inpSelect.current.value === "+") {
    //   setOut2(+inp3.current.value +  +inp4.current.value)
    // } else {
    //   setOut2(+inp3.current.value -  +inp4.current.value)
    // }
  }
    // Виводимо результат і out useState
    return (
        <div className="App">
            <h2>Додавання</h2>
            <input type="text" ref={inp1}/>
            <input type="text" ref={inp2}/>
            <button onClick={Sum}>result</button>
            <div>{out}</div>

            <h2>Ціна</h2>
            <div className="div">
                <input type="text" ref={inp3}/>
                <select ref={inpSelect}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                </select>
                <input type="text" ref={inp4}/>
            </div>

            <button onClick={Price}>result</button>
            <div>{out2}</div>
        </div>
    );
}

export default App;