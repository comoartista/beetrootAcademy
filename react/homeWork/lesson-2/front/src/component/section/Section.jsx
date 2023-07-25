import "./section.css"
import Button from "../button/Button.jsx"


const Section = ({title, text, img, children}) => {
  // let children = true;

  return (
    <section className="props">
      <div className="container props__container">
        <h1 className="props__title">{title || "Title"}</h1>
        <p className="props__text">{text} </p>
        <Button title="Read more"/>
        <img src={img} alt="img" className="props__img" />
        {/* <img src={img} alt="img" className="props__img"  style={{marginBottom: ch}}/> */}
  
        {/* {children ? (<img src={img} alt="img" className="props__img children" />) : <img src={img} alt="img" className="props__img" />} */}
    
      </div>
    </section>
  )
}

export default Section