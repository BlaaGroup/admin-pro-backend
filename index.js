const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./db/config');

//Crear servidor express
const app = express();

//CORS
app.use(cors());

//Lectura y parseo body
app.use(express.json());
//DB
dbConnection();

//Rutas
app.use('/api/usuarios',require('./routes/usuarios'));
app.use('/api/login',require('./routes/auth'));




app.listen( process.env.PORT,()=>{
    console.log('servidor ok en puerto:' + process.env.PORT);
});