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

async function mostrarProductos(req, res){
    try {
        const productos = await Producto.findAll()
        res.json(productos)
    } catch (error) {
        res.json({
            message: `No se encontraron productos ${error}`
    })
    }
}


const mostrarProducto = async(req, res) => {
    try {
        const producto = await Producto.findOne({where: {id: req.params.id}})
        res.json(producto)
    } catch (error) {
        res.json({
            message: `Producto no existe en la base de datos: ${error}`
        })
    }
}

const editarProducto = async(req, res) => {
    try {
        res.json({
            message: 'editado correctamente'
        })
    } catch (error) {
        res.json({
            message: `No se pudo editar: ${error}`
        })
    }
}

const eliminarProducto = async(req, res) => {
    try {
        res.json({
            message: 'eliminado correctamente'
        })
    } catch (error) {
        res.json({
            message: `No se pudo eliminar: ${error}`
        })
    }
}


export {
    mostrarProductos,
    crearProducto,
    editarProducto,
    eliminarProducto,
    mostrarProducto
}