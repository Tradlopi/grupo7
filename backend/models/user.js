const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let user = new Schema({
    // _id:{
    //     type: String,
    // },
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
    
}, {
    collection:'users'
});

module.exports = mongoose.model('User', user)