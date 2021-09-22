import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Modal from "react-bootstrap/Modal";

function Table({ products, onClick,deleteCar }) {  


  const [mark,setMark] = useState([]);
  useEffect(()=>{
      axios.get('http://localhost:8000/marksName')
      .then(res=>setMark(res.data))
      .catch(err=>console.log(err));
  },[])
  



  const handleDeleteCar = (e) => {
     axios.delete(`http://localhost:8000/deleteModel/${e.target.id}`)
     axios.get(`http://localhost:8000/cars`)
      .then(response=>{
          deleteCar(response.data);
      })
      .catch(err=>console.log(err));  
  }

  const [show,setShow] = useState(false);
  const [name,setName] = useState("");
  const [image,setImage] = useState("");
  const [price,setPrice] = useState("");
  const [model,setModel] = useState("");
  
  

  const handleEditCar = (e) => {
    axios.get(`http://localhost:8000/getCar/${e.target.id}`)
    .then(res=>{
          setName(res.data[0].name)
          setImage(res.data[0].image)
          setPrice(res.data[0].price)
          setModel(res.data[0].modelId)
    })
    setShow(true);
  };

  const submitEditCar = () => {
   console.log('susscesfully updated car!!!');
   setShow(false);
  }




  const closeModal = () => {
    setShow(false);
  }

    return (
        <div className="mt-5">
            <table className="table table-dark table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Model</th>
      <th scope="col">Price</th>
      <th scope="col">Mark</th>
      <th scope="col">Image</th>
      <th scope="col" colSpan="2">Functions</th>
    </tr>
  </thead>
  <tbody>
  {products.map(car=>
    <tr key={car.id}>
      <th scope="row">{car.id}</th>
      <td>{car.name}</td>
      <td>{car.price}$</td>
      <td>{car.markName}</td>
      <td><img src={car.image} style={{width:'5rem'}} alt="{car.model}"/></td>
      <td><button className="btn btn-outline-light" id={car.id} onClick={handleEditCar}>Edit</button></td>
      <td><button className="btn btn-outline-danger" id={car.id} onClick={(e)=>handleDeleteCar(e)}>Delete</button></td>
    </tr>
  )}
  </tbody>
</table>
<Modal show={show}>
      <Modal.Header>Edit car</Modal.Header>
      <Modal.Body className="d-flex flex-column">
          <input type="text" value={name}   className="input-form" placeholder="name"/>
          <input type="text" value={image}    placeholder="image"/>
          <input type="text" value={price}   placeholder="price"/>
          <select value={model} >
               <option value="">Select mark</option>
               {mark.map(mark=>
                  <option value={mark.id}>{mark.name}</option>
              )}
          </select>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
          <button className="btn btn-secondary" onClick={submitEditCar}>Submit</button>
          <button className="btn btn-danger" onClick={closeModal}>Close</button>
          </Modal.Footer>
    </Modal>
        </div>
    )
}

export default Table
