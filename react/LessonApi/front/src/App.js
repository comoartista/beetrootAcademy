import React from "react";
import useFetch from "react-fetch-hook";
import ListApi from './components/List'


export default function List () {
  const {data, isLoading} = useFetch("https://rickandmortyapi.com/api/character");
  console.log(data?.results)

  const List = data?.results.map(item => <ListApi item={item}/>)
  return isLoading ? (
    <div>Loading...</div>
) : (
    <>
      <h2>Rick and Morty</h2>
      <ul className="cart">
          {List}
      </ul> 
    </>
)
};