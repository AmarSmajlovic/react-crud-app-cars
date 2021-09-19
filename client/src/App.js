import { useState,useEffect,useMemo } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Filters from './components/Filters';
import axios from 'axios';
import Table from './components/Table';
import Search from './components/Search';
import MarkList from './components/MarkList';
import AddCar from './components/AddCar';


function App() {

    const [cars,setCars] = useState([]);
  useEffect(()=>{
      axios.get(`http://localhost:8000/cars`)
      .then(response=>{
          setCars(response.data);
      })
      .catch(err=>console.log(err));   
  },[]); 
  

    //Logika za search 
   const [q,setQ] = useState("");

   function search(rows){
     return rows.filter(row=> row.name.toLowerCase().indexOf(q.toLowerCase()) > -1  || row.markName.toLowerCase().indexOf(q.toLowerCase()) > -1);
   };


   //Marks
   const [marks,setMarks] = useState([]);

   useEffect(()=>{
       axios.get('http://localhost:8000/marksName')
       .then(response=>{
           setMarks(response.data);
       })
       .catch(err=>console.log(err));   
   },[]); 
 
   //Models
    const [models,setModels] = useState([]);
 
   useEffect(()=>{
     axios.get('http://localhost:8000/modelsName')
     .then(response=>{
       setModels(response.data);
     })
     .catch(err=>console.log(err));   
   },[]); 
   

   const getCarInfo = (e) => {
    axios.get(`http://localhost:8000/getCar/${e.target.id}`)
    .then(res=>console.log(res.data));
 }


  return (

    <div className="container">
      <h1 className="text-center">Car Application</h1>
      <MarkList />
      <AddCar />
      <div className="d-flex">
      <Search onChange={(e)=>setQ(e.target.value)} />
      <Filters options={models} placeholder={'model'} onChange={(e)=>setQ(e.target.value)} />
      </div>
    <Table onClick={getCarInfo} products={search(cars)}/>
    </div>
  );
}

export default App;
