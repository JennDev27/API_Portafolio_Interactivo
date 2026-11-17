const mongoose = require('mongoose');

const mensajeSchema = new mongoose.Schema({

    id_remitente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },

    id_destinatario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },

    asunto: {
        type: String,
        trim: true,
        default: ''
    },

    contenido: {
        type: String,
        required: [true, 'Este campo es obligatorio'],
        trim: true
    },

    leido: {
        type: Boolean,
        default: false
    },

    fecha_envio: {
        type: Date,
        default: Date.now
    }

}, {
    timestamps: true,
    collection: 'mensajes'
});

module.exports = mongoose.model('Mensaje', mensajeSchema);