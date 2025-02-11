const collectionName = "provedores";

function getProvedorModel(){
    return{
        name: "",
        number: 0,
        direccion: {
            calle: "",
            ciudad: "",
            estado: "",
            codigopostal: 0,
            pais: ""
        }
    }
}



module.exports = {
    collectionName,
    getProvedorModel
}