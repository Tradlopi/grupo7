const express = require('express');
const user = require('../models/user');
const app = express();

const lstUsers = []
app.post('/login', (req, res) => {
    let body = req.body;
    console.log(body);

    user.findOne({ email: body.email }, (error, userDB) => {
        if (error) {
            return res.status(500).json({
                ok: 'Error al conectarse',
                error
            });
        }
        if (!userDB) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: '(Usuario) o contraseña incorrectos'
                }
            });
        }
        
        if (userDB.password == body.password) {
            res.json({
                ok : true,
                data:userDB
              });
        } else 
        {
            return res.status(400).json({
                ok: false,
                error: {
                    message: '(Usuario) o contraseña incorrectos'
                }
            });
        }
    });

});
//POST
app.post('/user',(req, res, next) => {
        user.create(req.body,(error, data) => {
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
    })
module.exports = app;