const express = require ("express");
const router = express.Router();
const transaccionController = require('../controllers/transaccionController');

//Crear un produccto
router.post('/transaccion', transaccionController.crearTransaacion)

//obtener todos los productos
router.get('/obtenerTransaccion', transaccionController.obtenerTransaccion)

//obtener un producto por ID
router.get('/obtenerTransacPorID/:id', transaccionController.obtenerTransaccionPorID)

//actualizar un producto 
router.post('/actualizarTransac/:id', transaccionController.actualizarTransaccion)

//eliminiar un producto
router.delete('/eliminarTransac/:id', transaccionController.eliminarTransaccion)

module.exports = router;