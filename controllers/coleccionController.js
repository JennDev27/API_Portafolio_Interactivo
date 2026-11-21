const Coleccion = require('../models/Coleccion');

// Obtener colecciones
const obtenerColecciones = async (req, res) => {
    try {
        const colecciones = await Coleccion.find();

        res.status(200).json({
            mensaje: 'Colecciones obtenidas correctamente',
            datos: colecciones
        });

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener las colecciones',
            error: error.message
        });
    }
};

// Obtener colección por ID
const obtenerColeccionPorId = async (req, res) => {
    try {
        const coleccion = await Coleccion.findById(req.params.id);

        if (!coleccion) {
            return res.status(404).json({
                mensaje: 'Colección no encontrada'
            });
        }

        res.status(200).json({
            mensaje: 'Colección obtenida correctamente',
            datos: coleccion
        });

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener la colección',
            error: error.message
        });
    }
};

// Crear colección
const crearColeccion = async (req, res) => {
    try {
        const nuevaColeccion = new Coleccion(req.body);
        const coleccionGuardada = await nuevaColeccion.save();

        res.status(201).json({
            mensaje: 'Colección creada correctamente',
            datos: coleccionGuardada
        });

    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al crear la colección',
            error: error.message
        });
    }
};

// Actualizar colección
const actualizarColeccion = async (req, res) => {
    try {
        const coleccionActualizada = await Coleccion.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!coleccionActualizada) {
            return res.status(404).json({
                mensaje: 'Colección no encontrada'
            });
        }

        res.status(200).json({
            mensaje: 'Colección actualizada correctamente',
            datos: coleccionActualizada
        });

    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al actualizar la colección',
            error: error.message
        });
    }
};

// Eliminar colección
const eliminarColeccion = async (req, res) => {
    try {
        const coleccionEliminada = await Coleccion.findByIdAndDelete(
            req.params.id
        );

        if (!coleccionEliminada) {
            return res.status(404).json({
                mensaje: 'Colección no encontrada'
            });
        }

        res.status(200).json({
            mensaje: 'Colección eliminada correctamente',
            datos: coleccionEliminada
        });

    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al eliminar la colección',
            error: error.message
        });
    }
};

module.exports = {
    obtenerColecciones,
    obtenerColeccionPorId,
    crearColeccion,
    actualizarColeccion,
    eliminarColeccion
};