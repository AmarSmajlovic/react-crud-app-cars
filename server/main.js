const express = require('express');
const cors = require('cors');
const { connect } = require('http2');
const app = express();
const PORT = 8000;
const { getAllModels, getAllCars, getCarByModelId, getCarById, getAllModelsAndCars, getAllMarksName, getAllModelsName, addModel, delModel, editModel } = require('./controller/cars-controller');

app.use(cors({ credentials: true }))

//Cars API Start
app.get('/',getAllModelsAndCars);
app.get('/models',getAllModels);
app.get('/cars',getAllCars);
app.get('/getCar/:id',getCarById)
app.get('/getCarByModel',getCarByModelId);
app.get('/marksName',getAllMarksName);
app.get('/modelsName',getAllModelsName);
app.post('/addModel',addModel);
app.delete('/deleteModel/:id',delModel);
app.put('/editModel/:id',editModel);
//Cars API End


app.listen(PORT,()=>console.log(`Application is started at ${PORT} PORT`));