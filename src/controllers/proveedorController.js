const {ObjectId} = require('mongodb');
const { client } = require('../config/db');
const {collectionName} = require('../models/provedores');

//agregar un nuevo proveedor
async function agregarPorveedor(req, res) {
    try {
        const db = client.db();
        const result = await db.collection(collectionName).insertOne(req.body);
        res.status(201).json(result);
      } catch (error) {
        res.status(500).json({error: error.message});
      }
}

//obtener todos los proveedores
async function obtenerProveedores(req, res){
    try {
      const db = client.db();
      const products  = await db.collection(collectionName).find().toArray();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({error : error.message});
    }
  }

//obtener proveedor por ID
async function obtenerProveedoresPorID(req, res) {
    try {
    const db = client.db();
    const product = await db.collection(collectionName).findOne({_id: new ObjectId(req.params.id)});
    if(!product) return res.status(404).json({message: "Proveedor no encontrado"});
    res.status(200).json(product); 
    } catch (error) {
      res.status(500).json({error : error.message});
    }
  }

//actualizar un proveedor
async function actualizarProveedor(req, res){
    try {
      const db = client.db();
      const result = await db.collection(collectionName).updateOne(
        {_id: new ObjectId(req.params.id)},
        {$set: req.body}
      );
      if (result.matchedCount === 0 ) return res.status(404).json({message: "Proveedor no encontrado"});
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({error : error.message});
    }
  }

//eliminiar un proveedor
async function eliminarProveedor(req, res){
    try {
      const db = client.db();
      const result = await db.collection(collectionName).deleteOne({_id: new ObjectId(req.params.id)});
      if (result.deletedCount === 0) return res.status(404).json({message: "Falló al eliminr el Proveedor"});
      res.status(200).json({message: "proveedor eliminado "});
    } catch (error) {
      res.status(500).json({error : error.message});
    }
  }

  module.exports = {
    agregarPorveedor,
    obtenerProveedores,
    obtenerProveedoresPorID,
    actualizarProveedor,
    eliminarProveedor
}



