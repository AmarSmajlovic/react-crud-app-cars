const conn = require('../connection');

const getAllModelsAndCars = (req,res)=>{
    const sql = 'SELECT * FROM car INNER JOIN model ON model.id';
    conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.json(results);
    })
}

 const getAllModels =  (req,res)=>{
     const sql = 'SELECT * FROM model';
    conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.json(results);
    })
}

const getAllCars = (req,res)=>{
    const sql= 'SELECT car.id,car.name,car.price,car.image,model.name as markName  FROM car JOIN model ON car.modelId=model.id ORDER BY id';
    conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.json(results);
    })
}

const getCarById = (req,res)=>{
    const sql= 'SELECT * FROM car WHERE id = ?';
    const {id} = req.params;
    conn.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.json(result);
    })
}

const getCarByModelId = (req,res)=>{
    let sql;
    const {makeId} = req.query;
    if(makeId) sql = `SELECT * FROM model JOIN car ON model.id = car.modelId WHERE car.modelId = ?`;
    else sql = `SELECT * FROM model`
    conn.query(sql,[makeId],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result)
    })
}

const getAllMarksName = (req,res) => {
    const sql = `SELECT DISTINCT name,id FROM model ORDER BY id`;
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        res.status(200).json(result)
    })
}

const getAllModelsName = (req,res) => {
    const sql = `SELECT DISTINCT name,id FROM car ORDER BY id`;
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        res.status(200).json(result)
    })
}

const addModel = (req,res) => {
    const {name,image,price,modelId} = req.query;
    const sql = `INSERT INTO car (name,image,price,modelId) VALUES (?,?,?,?)`;
    conn.query(sql,[name,image,price,modelId],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result)
    })  
}

const delModel = (req,res) => {
    const id = req.params.id;
    const sql = `DELETE FROM car WHERE id = ?`;
    conn.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
}

const editModel = (req,res) => {
    const id = +req.params.id;
    const {name,image,price,modelId} = req.body;
    console.log(req.body);
    const sql = `UPDATE car SET name = ?,image = ?,price = ?,modelId = ? WHERE id = ?`
    conn.query(sql,[name,image,price,modelId,id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
}

module.exports = { getAllModelsAndCars,getAllCars,getAllModels,getCarByModelId,getCarById,getAllMarksName,getAllModelsName,delModel,addModel,editModel};

