const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: [true, 'Este campo es obligatorio'],
        trim: true
    },

    email: {
        type: String,
        required: [true, 'Este campo es obligatorio'],
        unique: true,
        lowercase: true,
        trim: true
    },

    rol: {
        type: String,
        enum: ['artista', 'administrador', 'visitante'],
        default: 'artista'
    },

    bio: {
        type: String,
        default: ''
    }

}, {
    timestamps: true,
    collection: 'usuarios'
});

module.exports = mongoose.model('Usuario', usuarioSchema);