import React from 'react';
import useFetch from "react-fetch-hook";
import {useState, useRef} from 'react'
import "./App.css"

/*
 1: По кліку на Карточку потрібно робити подію множення
 (input.value * item.rate) і виводимо в такому форматі "0 €"

  2: Зробити клас ".active" на актуальній карточці
*/

export default function App() {

    const inp = useRef()
    const [out, setOut] = useState(0)
    const [activeCardIndex, setActiveCardIndex] = useState(null);

    const {data, isLoading} = useFetch('https://www.binance.com/bapi/asset/v1/public/asset-service/product/currency')
    // console.log(data?.data)

    function Res(result, i) {
      setActiveCardIndex(i)
      setOut((inp.current.value * result.rate).toFixed(2))
    }
  

    const List = data?.data.map((item, i) => (
        <div onClick={() => Res(item, i)}
          className={`cart ${activeCardIndex === i ? 'active' : ''}`}>
            <img src={item.imageUrl} alt=""/>
            <h2>{item.pair}</h2>
        </div>
    ))
    return isLoading ? (
        <div>Loading...</div>
    ) : (
        <>
            <h1>Курс валют у USD</h1>
            <h2>Load</h2>
            <input type="number" ref={inp}/>$
            <span>Результат: {out} €</span>

            <div className={"carts"}>
                {List}
            </div>
        </>

    )
}