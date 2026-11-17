const Mensaje = require('../models/Mensaje');

// Obtener todos los mensajes
const obtenerMensajes = async (req, res) => {
    try {
        const mensajes = await Mensaje.find();

        res.status(200).json({
            mensaje: 'Mensajes obtenidos correctamente',
            datos: mensajes
        });

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener los mensajes',
            error: error.message
        });
    }
};

// Crear un mensaje
const crearMensaje = async (req, res) => {
    try {
        const nuevoMensaje = new Mensaje(req.body);
        const mensajeGuardado = await nuevoMensaje.save();

        res.status(201).json({
            mensaje: 'Mensaje creado correctamente',
            datos: mensajeGuardado
        });

    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al crear el mensaje',
            error: error.message
        });
    }
};

// Actualizar mensaje
const actualizarMensaje = async (req, res) => {
    try {
        const mensajeActualizado = await Mensaje.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!mensajeActualizado) {
            return res.status(404).json({
                mensaje: 'Mensaje no encontrado'
            });
        }

        res.status(200).json({
            mensaje: 'Mensaje actualizado correctamente',
            datos: mensajeActualizado
        });

    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al actualizar el mensaje',
            error: error.message
        });
    }
};

// Eliminar mensaje
const eliminarMensaje = async (req, res) => {
    try {
        const mensajeEliminado = await Mensaje.findByIdAndDelete(
            req.params.id
        );

        if (!mensajeEliminado) {
            return res.status(404).json({
                mensaje: 'Mensaje no encontrado'
            });
        }

        res.status(200).json({
            mensaje: 'Mensaje eliminado correctamente',
            datos: mensajeEliminado
        });

    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al eliminar el mensaje',
            error: error.message
        });
    }
};

module.exports = {
    obtenerMensajes,
    crearMensaje,
    actualizarMensaje,
    eliminarMensaje
};