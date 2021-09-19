import React,{ useState } from 'react'
import './Card.css';



function Card({ title,description,logo}) {
    const [show,setShow] = useState(false);

  const showDescription = ()=> {
        if(show === true) setShow(false);
        else setShow(true)
    }


    return (
        <div  className="card" style={{width: "15rem"}}>
        <img src={logo} className="card-img-top" alt="logo" />
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          {show && <p className="card-text">{description}</p>}
         {!show && <a className="btn btn-secondary" onClick={showDescription}>Details</a>}
         {show && <a  className="btn btn-danger" onClick={showDescription}>Back</a>}
        </div>
      </div>
    )
}

export default Card
