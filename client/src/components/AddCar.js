import axios from 'axios';
import React,{useState,useEffect} from 'react'
import Modal from "react-bootstrap/Modal";

function AddCar({ addCar }) {

   const [cars,setCars] = useState([]);
   const [show,setShow] = useState(false);
   const [name,setName] = useState("");
   const [image,setImage] = useState("");
   const [price,setPrice] = useState("");
   const [model,setModel] = useState("");

  
   const handleAddCar = () => {
        axios.post(`http://localhost:8000/addModel?name=${name}&image=${image}&price=${price}&modelId=${model}`)
        axios.get(`http://localhost:8000/cars`)
        .then(response=>{
            addCar(response.data);
        })
        .catch(err=>console.log(err));  
        setShow(false);
        resetInput();
    }
    
    const resetInput = () => {
        setName("");
        setImage("");
        setPrice("")
        setModel("");
    } 
    
    const closeModal = () => {
        resetInput();
        setShow(false);
    }


    const [mark,setMark] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/marksName')
        .then(res=>setMark(res.data))
        .catch(err=>console.log(err));
    },[])
    




    return (
        <div className="mt-5">
        <button className="btn btn-outline-primary" onClick={()=>{setShow(true)}}>Add Car</button>
        <Modal show={show}>
      <Modal.Header>Add new car model</Modal.Header>
      <Modal.Body className="d-flex flex-column">
          <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} className="input-form" placeholder="name"/>
          <input type="text" value={image}  onChange={(e)=>setImage(e.target.value)}  placeholder="image"/>
          <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}  placeholder="price"/>
          <select 
           value={model} onChange={(e)=>setModel(e.target.value)} >
               <option value="">Select mark</option>
              {mark.map(mark=>
                  <option value={mark.id}>{mark.name}</option>
              )}
          </select>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
          <button className="btn btn-primary" onClick={(e)=>{handleAddCar(e)}}>Add</button>
          <button className="btn btn-danger" onClick={closeModal}>Close</button>
          </Modal.Footer>
    </Modal>
        </div>
    )
}

export default AddCar
