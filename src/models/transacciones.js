const collectionName = "transacciones";

function getTransaccionModel(){
    return{
        productoId: "",
        fecha: "",
        tipo: "",
        cantidad: 0,
        montoTotal: 0.00,
        clienteId: 0
    }
}



module.exports = {
    collectionName,
    getTransaccionModel
}