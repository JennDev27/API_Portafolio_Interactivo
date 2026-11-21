const express = require('express');
const router = express.Router();

const {
    obtenerMensajes,
    obtenerMensajePorId,
    crearMensaje,
    actualizarMensaje,
    eliminarMensaje
} = require('../controllers/mensajeController');


router.get('/', obtenerMensajes);

router.get('/:id', obtenerMensajePorId);

router.post('/', crearMensaje);

router.put('/:id', actualizarMensaje);

router.delete('/:id', eliminarMensaje);

module.exports = router;