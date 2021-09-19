import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Table({ products, onClick}) {  

  const [cars,setCars] = useState([]);

  useEffect(()=>{
    refreshTable();
  })

  const deleteCar = (e) => {
     axios.delete(`http://localhost:8000/deleteModel/${e.target.id}`)
  }
  
  const refreshTable = () => {
    axios.get(`http://localhost:8000/cars`)
    .then(res=>setCars(res.data));
  }


  const editCar = () => {
  // function for edit car need imput
  };



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
  {cars.map(car=>
    <tr key={car.id}>
      <th scope="row">{car.id}</th>
      <td>{car.name}</td>
      <td>{car.price}$</td>
      <td>{car.markName}</td>
      <td><img src={car.image} style={{width:'5rem'}} alt="{car.model}"/></td>
      <td><button className="btn btn-outline-light" id={car.id} onClick={onClick}>Edit</button></td>
      <td><button className="btn btn-outline-danger" id={car.id} onClick={deleteCar}>Delete</button></td>
    </tr>
  )}
  </tbody>
</table>
        </div>
    )
}

export default Table
