const express = require("express");
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

//Crear un produccto
router.post('/proveedor', proveedorController.agregarPorveedor)

//obtener todos los productos
router.get('/obtenerProveedor', proveedorController.obtenerProveedores)

//obtener un producto por ID
router.get('/obtenerProvePorID/:id', proveedorController.obtenerProveedoresPorID)

//actualizar un producto 
router.post('/actualizarProveedor/:id', proveedorController.actualizarProveedor)

//eliminiar un producto
router.delete('/eliminarProveedor/:id', proveedorController.eliminarProveedor)

module.exports = router;