import {useState, useRef} from "react";

export default function App2() {

    const arr = ["Sasha", "Sveta", "Olya", "Dima"]

    const [out1, setOut1] = useState(arr[0])
    function lastUser() {
      setOut1(arr[arr.length - 1])
    }

    let inp = useRef()

    const [out2, setOut2] = useState()
    function Search() {
      // arr.map(item => (
      //   (inp.current.value === item && setOut2(item))
      // ))
    }

    return (
        <>
            <h2>Вивести останього</h2>
            <div>Name: {out1}</div>
            <button onClick={lastUser}>Show last</button>
            <hr/>
            <h2>Пошук</h2>
            <input type="text" ref={inp}/>
            <div>Name: {out2}</div>
            <button onClick={Search}>Search</button>
        </>
    )
}