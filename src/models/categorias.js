const collectionName = "categorias";

function getCategoriaModel(){
    return{
        name: "",
        descripcion: ""
    }
}



module.exports = {
    collectionName,
    getCategoriaModel
}