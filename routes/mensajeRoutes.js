const express = require('express');
const router = express.Router();

const {
    obtenerMensajes,
    crearMensaje,
    actualizarMensaje,
    eliminarMensaje
} = require('../controllers/mensajeController');


router.get('/', obtenerMensajes);

router.post('/', crearMensaje);

router.put('/:id', actualizarMensaje);

router.delete('/:id', eliminarMensaje);

module.exports = router;