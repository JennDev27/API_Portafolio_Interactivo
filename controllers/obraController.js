const Obra = require('../models/Obra');

// Obtener las obras
const obtenerObras = async (req, res) => {
    try {
        const obras = await Obra.find();

        res.status(200).json({
            mensaje: 'Obras obtenidas correctamente',
            datos: obras
        });

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener las obras',
            error: error.message
        });
    }
};

// Obtener obra por ID
const obtenerObraPorId = async (req, res) => {
    try {
        const obra = await Obra.findById(req.params.id);

        if (!obra) {
            return res.status(404).json({
                mensaje: 'Obra no encontrada'
            });
        }

        res.status(200).json({
            mensaje: 'Obra obtenida correctamente',
            datos: obra
        });

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener la obra',
            error: error.message
        });
    }
};

// Crear obra
const crearObra = async (req, res) => {
    try {
        const nuevaObra = new Obra(req.body);
        const obraGuardada = await nuevaObra.save();

        res.status(201).json({
            mensaje: 'Obra creada correctamente',
            datos: obraGuardada
        });

    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al crear la obra',
            error: error.message
        });
    }
};

// Actualizar obra
const actualizarObra = async (req, res) => {
    try {
        const obraActualizada = await Obra.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!obraActualizada) {
            return res.status(404).json({
                mensaje: 'Obra no encontrada'
            });
        }

        res.status(200).json({
            mensaje: 'Obra actualizada correctamente',
            datos: obraActualizada
        });

    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al actualizar la obra',
            error: error.message
        });
    }
};

// Eliminar obra
const eliminarObra = async (req, res) => {
    try {
        const obraEliminada = await Obra.findByIdAndDelete(
            req.params.id
        );

        if (!obraEliminada) {
            return res.status(404).json({
                mensaje: 'Obra no encontrada'
            });
        }

        res.status(200).json({
            mensaje: 'Obra eliminada correctamente',
            datos: obraEliminada
        });

    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al eliminar la obra',
            error: error.message
        });
    }
};

module.exports = {
    obtenerObras,
    obtenerObraPorId,
    crearObra,
    actualizarObra,
    eliminarObra
};