import express from 'express';
import dataBase  from './database/conexionDatabase.js';

const app = express();
const port = 3100;

try {
    await dataBase.authenticate()
    console.log('Conexion exitosa a la base de datos')
} catch (error) {
    console.log('Conexion no exitosa')
}

app.listen(port, () =>{
    console.log(`Servidor corriendo en el puerto ${port}`)
    console.log(`Servidor corriendo en el puerto http://localhost:3100`)
});