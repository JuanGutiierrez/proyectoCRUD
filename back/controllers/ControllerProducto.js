import Producto from "../models/ModelProducto.js";

const crearProducto = async(req/* request */, res/* response */) => {
    try {
        await Producto.create(req.body)
        res.json({
            message: 'Usuario creado correctamente'
        })
    } catch (error) {
        res.json({
            message: `No se pudo registrar el usuario: ${error}`
        })
    }
}

export { crearProducto }

/* 
async function crearProducto(){

} */