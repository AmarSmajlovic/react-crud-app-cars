import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Modal from "react-bootstrap/Modal";

function Table({ products, onClick,deleteCar }) {  



  const handleDeleteCar = (e) => {
     axios.delete(`http://localhost:8000/deleteModel/${e.target.id}`)
     axios.get(`http://localhost:8000/cars`)
      .then(response=>{
          deleteCar(response.data);
      })
      .catch(err=>console.log(err));  
  }

  
  

  const editCar = () => {
  // function for edit car need imput
  };



  const [show,setShow] = useState(false);

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
      <td><button className="btn btn-outline-light" id={car.id} onClick={()=>{setShow(true)}}>Edit</button></td>
      <td><button className="btn btn-outline-danger" id={car.id} onClick={(e)=>handleDeleteCar(e)}>Delete</button></td>
    </tr>
  )}
  </tbody>
</table>
<Modal show={show}>
      <Modal.Header>Edit car</Modal.Header>
      <Modal.Body className="d-flex flex-column">
          <input type="text"   className="input-form" placeholder="name"/>
          <input type="text"     placeholder="image"/>
          <input type="text"   placeholder="price"/>
          <select >
               <option value="">Select mark</option>
          </select>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
          <button className="btn btn-secondary">Edit</button>
          <button className="btn btn-danger" onClick={closeModal}>Close</button>
          </Modal.Footer>
    </Modal>
        </div>
    )
}

export default Table
