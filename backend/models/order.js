const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let order = new Schema({
    noServicio:{
        type: String,
    },
    fecha:{
        type: String,
    },
    ciudadEntrega:{
        type: String,
    },
    direccionEntrega:{
        type: String,
    },
    estado:{
        type: String,
    },
    largo:{
        type: String,
    },
    ancho:{
        type: String,
    },
    alto:{
        type: String,
    },
    peso:{
        type: String,
    },
    direccionRecogida:{
        type: String,
    },
    ciudadRecogida:{
        type: String,
    },
    destinatario:{
        type: String,
    },
    identificacion:{
        type: String,
    },

},{
    collection:'orders'
});

module.exports = mongoose.model('Order', order)