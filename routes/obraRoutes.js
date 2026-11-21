const express = require('express');
const router = express.Router();

const {
    obtenerObras,
    obtenerObraPorId,
    crearObra,
    actualizarObra,
    eliminarObra
} = require('../controllers/obraController');

router.get('/', obtenerObras);

router.get('/:id', obtenerObraPorId);

router.post('/', crearObra);

router.put('/:id', actualizarObra);

router.delete('/:id', eliminarObra);

module.exports = router;