import { Sequelize } from "sequelize";
import dataBase from "../database/conexionDatabase.js";

const Producto = dataBase.define('productos', {
    nombre: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    }
})

export default Producto