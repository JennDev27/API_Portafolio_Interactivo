const mongoose = require('mongoose');

const coleccionSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: [true, 'Este campo es obligatorio'],
        trim: true
    },

    descripcion: {
        type: String,
        trim: true,
        default: ''
    },

    id_creador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },

    obras_ids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Obra'
    }],

    fecha_creacion: {
        type: Date,
        default: Date.now
    }

}, {
    timestamps: true,
    collection: 'colecciones'
});

module.exports = mongoose.model('Coleccion', coleccionSchema);