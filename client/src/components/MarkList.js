import React,{useEffect,useState} from 'react'
import Card from './Card'
import axios from 'axios';

function MarkList() {

    const [models,setModels] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/models')
        .then(response=>{
          console.log(response);
          setModels(response.data);
        })
            .catch(err=>console.log(err));   
        },[]); 


    return (
        <div className="models d-flex flex-wrap">
        {models.map(model=> <Card   key={model.id} title={model.name} description={model.description} logo={model.logoImg}/>)}
    </div>
    )
}

export default MarkList
