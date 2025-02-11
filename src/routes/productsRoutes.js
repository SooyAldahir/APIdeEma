const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController')

//Crear un produccto
router.post('/producto', productController.createProduct)

//obtener todos los productos
router.get('/obtenerProducto', productController.obtenerProductos)

//obtener un producto por ID
router.get('/obtenerporID/:id', productController.obtenerProductosPorID)

//actualizar un producto 
router.post('/actualizar/:id', productController.actualizarProducto)

//eliminiar un producto
router.delete('/eliminar/:id', productController.eliminarProducto)

module.exports = router;