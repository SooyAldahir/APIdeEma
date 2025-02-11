const {ObjectId} = require('mongodb');
const {client} = require('../config/db');
const {collectionName} = require('../models/categorias');

//crear categoria
async function createCategoria(req, res) {
  try {
    const db = client.db();
    const result = await db.collection(collectionName).insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

//obtener todos los categorias
async function obtenerCategoria(req, res){
  try {
    const db = client.db();
    const products  = await db.collection(collectionName).find().toArray();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({error : error.message});
  }
}

//obtener una categoria por ID
async function obtenerCategoriaPorID(req, res) {
  try {
  const db = client.db();
  const product = await db.collection(collectionName).findOne({_id: new ObjectId(req.params.id)});
  if(!product) return res.status(404).json({message: "categoria no encontrado"});
  res.status(200).json(product); 
  } catch (error) {
    res.status(500).json({error : error.message});
  }
}

//actualizar una categoria
async function actualizarCategoria(req, res){
  try {
    const db = client.db();
    const result = await db.collection(collectionName).updateOne(
      {_id: new ObjectId(req.params.id)},
      {$set: req.body}
    );
    if (result.matchedCount === 0 ) return res.status(404).json({message: "Categoria no encontrado"});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({error : error.message});
  }
}

//eliminiar una categoria
async function eliminarProducto(req, res){
  try {
    const db = client.db();
    const result = await db.collection(collectionName).deleteOne({_id: new ObjectId(req.params.id)});
    if (result.deletedCount === 0) return res.status(404).json({message: "Falló al eliminr categoria"});
    res.status(200).json({message: "categoria eliminada "});
  } catch (error) {
    res.status(500).json({error : error.message});
  }
}



module.exports = {
    createCategoria,
    obtenerCategoria,
    obtenerCategoriaPorID,
    actualizarCategoria,
    eliminarProducto
}