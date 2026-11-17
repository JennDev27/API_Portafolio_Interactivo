const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');

const app = express();
const usuarioRoutes = require('./routes/usuarioRoutes');
const obraRoutes = require('./routes/obraRoutes');
const coleccionRoutes = require('./routes/coleccionRoutes');
const mensajeRoutes = require('./routes/mensajeRoutes');

app.use(cors());
app.use(express.json());
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/obras', obraRoutes);
app.use('/api/colecciones', coleccionRoutes);
app.use('/api/mensajes', mensajeRoutes);


app.get('/', (req, res) => {
    res.status(200).json({
        mensaje: 'API Portafolio Interactivo funcionando correctamente'
    });
});

const PORT = process.env.PORT || 3000;

const iniciarServidor = async () => {

    if (process.env.MONGODB_URI) {
        await connectDB();
    } else {
        console.log('MongoDB pendiente de configuración');
    }

    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
};

iniciarServidor();