import React from 'react'
import styles from './Cards.scss'


const Cards = ({results}) => {
  let display ;

  if(results) {
    display = results.map((item) => {
      let {id, name, image, location, status} = item
      return (
        <div key={id}className="col-4 mb-4 position-relative">
          <div className="cards">
            <img src={image} alt="" className="img-fluid"/>
            <div style={{padding: "10px"}} className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          {(()=> {
            if(status === "Dead") {
              return <div className={`${styles.badge} badge bg-danger position-absolute`}>{status}</div>
            } else if(status === "Alive") {
              return <div className={`${styles.badge} badge bg-success position-absolute`}>{status}</div>
            } else {
              return  <div className={`${styles.badge} badge bg-secondary position-absolute`}>{status}</div>
            }
          }) ()}
        
        </div>
      ) 
    });
  } else {
    display = "No Characters Found :/";
  }

  return (
    <>{display}</> 
  )
}

export default Cards