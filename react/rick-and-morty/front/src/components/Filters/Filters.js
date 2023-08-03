import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ({setStatus, setGender, setSpecies, setPageNumber}) => {
  let clear = ()  => {
    setStatus("")
    setGender("")
    setSpecies("")
    setPageNumber("")
  }
  return (
    <div className='col-3'>
      <div className="text-center fw-bold fs-4">Filter</div>
      <div 
        onClick={clear} 
        style={{cursor: "pointer"}} 
        className="text-center text-decoration-underline mb-4 text-primary">Clear Filters</div>
      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber}/>
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
        <Gender setGender={setGender} setPageNumber={setPageNumber}/>
      </div>
    </div>
  )
}

export default Filters