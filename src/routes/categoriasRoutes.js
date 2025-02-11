const express = require("express");
const router = express.Router();
const categoriasController = require('../controllers/categoriasController')

//Crear un produccto
router.post('/categoria', categoriasController.createCategoria)

//obtener todos los productos
router.get('/obtenerCategoria', categoriasController.obtenerCategoria)

//obtener un producto por ID
router.get('/obtenerCategoriaporID/:id', categoriasController.obtenerCategoriaPorID)

//actualizar un producto 
router.post('/actualizarCategoria/:id', categoriasController.actualizarCategoria)

//eliminiar un producto
router.delete('/eliminarCategoria/:id', categoriasController.eliminarProducto)

module.exports = router;