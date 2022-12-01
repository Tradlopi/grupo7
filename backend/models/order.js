const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let order = new Schema({
    id:{
        type: String,
    },
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
    }
});

module.exports = mongoose.model('order', order)