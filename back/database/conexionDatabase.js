import { Sequelize } from "sequelize";

const dataBase = new Sequelize('nombre_basedatos', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default dataBase