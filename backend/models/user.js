const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let user = new Schema({
    id:{
        type: String,
    },
    nombres:{
        type: String,
    },
    apellidos:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    }
    
});

module.exports = mongoose.model('user', user)