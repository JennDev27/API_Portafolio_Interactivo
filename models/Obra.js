const mongoose = require('mongoose');

const obraSchema = new mongoose.Schema({

    titulo: {
        type: String,
        required: [true, 'Este campo es obligatorio'],
        trim: true
    },

    descripcion: {
        type: String,
        required: [true, 'Este campo es obligatorio'],
        trim: true
    },

    categoria: {
        type: String,
        required: true,
        enum: ['ilustracion', 'modelado_3d', 'animacion', 'videojuego', 'otro']
    },

    etiquetas: [{
        type: String,
        trim: true
    }],

    multimedia: [{
        tipo: {
            type: String,
            enum: ['imagen', 'video', 'audio'],
            required: true
        },
        metadatos: {
            url: {
                type: String,
                required: true
            },
            formato: String,
            peso_kb: Number,
            resolucion: String,
            codec: String
        }
    }],

    metricas: {
        favoritos: { type: Number, default: 0, min: 0 },
        vistas: { type: Number, default: 0, min: 0 },
        descargas: { type: Number, default: 0, min: 0 },
        likes: { type: Number, default: 0, min: 0 }
    },

    comentarios: [{
        usuario: String,
        comentario: String,
        fecha: {
            type: Date,
            default: Date.now
        }
    }],

    id_autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },

    id_coleccion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coleccion',
        default: null
    },

    fecha_publicacion: {
        type: Date,
        default: Date.now
    }

}, {
    timestamps: true,
    collection: 'obras'
});

module.exports = mongoose.model('Obra', obraSchema);