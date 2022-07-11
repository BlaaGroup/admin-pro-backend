const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./db/config');

//Crear servidor express
const app = express();

//CORS
app.use(cors());
//DB
dbConnection();

//Rutas
app.get('/',(req,res)=>{

   res.json({
    ok:true,
    msg:'Hola mundo'
   })     
})



app.listen( process.env.PORT,()=>{
    console.log('servidor ok en puerto:' + process.env.PORT);
});