require('dotenv').config();
const express = require('express');
const cors = require('cors');
const productsRoutes = require('./routes/productsRoutes');
const categoriasRoutes = require('./routes/categoriasRoutes');
const transaccionesRoutes = require('./routes/transaccionesRoutes');
const proveedoresRoutes = require('./routes/proveedoresRoutes');
const { connectDB } = require('./config/db');


const app = express();

app.use(cors());
app.use(express.json());


// rutas

app.use('/api', productsRoutes);
app.use('/api', categoriasRoutes);
app.use('/api', proveedoresRoutes);
app.use('/api', transaccionesRoutes);


//Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, async ()=>{
    await connectDB();
    console.log(`Servidor corriendo en http://localhost:${PORT}`); 
});