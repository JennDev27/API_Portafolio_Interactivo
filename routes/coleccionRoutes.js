const express = require('express');
const router = express.Router();

const {
    obtenerColecciones,
    crearColeccion,
    actualizarColeccion,
    eliminarColeccion
} = require('../controllers/coleccionController');

router.get('/', obtenerColecciones);

router.post('/', crearColeccion);

router.put('/:id', actualizarColeccion);

router.delete('/:id', eliminarColeccion);

module.exports = router;