const collectionName = "products";

function getProductModel(){
    return{
        name: "",
        category: "",
        price: 0.0,
        stock: 0,
        ubicacion: "",
        distribuidorID: 0
    }
}



module.exports = {
    collectionName,
    getProductModel
}