import React from 'react'
import styles from "./Search.scss"

const Search = ({setSearch, setPageNumber}) => {
  return (
    <form className='d-flex justify-content-center gap-4 mb-5'>
        <input 
        onChange={e => {
          setPageNumber(1)
          setSearch(e.target.value)
        }}
        placeholder="Search for characters" type="text" className='input' />
        <button onClick={e=>{e.preventDefault()}} className='btn btn-primary fs-5'>Search</button>
    </form>
  )
}

export default Search