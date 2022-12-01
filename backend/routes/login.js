const express = require('express');
const user = require('../models/user');
const app = express();

const lstUsers = []
app.post('/login', (req, res) => {
    let body = req.body;
    if (body!=undefined && body.email!=undefined || body.password!=undefined) {
        return res.json({
            ok: false
        });
    }
    if (body.email=="prueba@prueba.com"  && body.password=="prueba123")
    {
        return res.json({
            ok: true
        });
    } else {
        return res.json({
            ok: false
        });
    }
    //User.findOne({ email: body.email }, (error, userDB) => {

        // if (error) {
        //     return res.status(500).json({
        //         ok: false,
        //         error
        //     });
        // }

        // if (!userDB) {
        //     return res.status(400).json({
        //         ok: false,
        //         error: {
        //             message: '(Usuario) o contraseña incorrectos'
        //         }
        //     });
        // }
        // if (userDB.estado == 'PENDINGUSER_STATE' || userDB.estado == 'BLOCKUSER_STATE') {
        //     return res.status(400).json({
        //         ok: false,
        //         error: {
        //             message: 'Su Usuario no se encuentra activo'
        //         }
        //     });
        // }
        // if (!bcrypt.compareSync(body.password, userDB.password)) {
        //     return res.status(400).json({
        //         ok: false,
        //         error: {
        //             message: 'Usuario o (contraseña) incorrectos'
        //         }
        //     });
        // }

        // let oUser = new User({
        //     localId: userDB._id,
        //         name: userDB.name,
        //         email: userDB.email,
        //         expiresIn: new Date().getTime() * 100,
        //         role: userDB.role,
        //         type: userDB.type
        // });

        // let token = jwt.sign({
        //     user: oUser
        // }, process.env.SEED301, { expiresIn: "365d" });

        


    //});

});
//POST
app.post('/user',(req, res) => {
    let body = req.body;
    let oUser = new user({
       id: Math.random(),
        nombres : body.nombres,
        apellidos : body.apellidos,
        email : body.email,
        password : body.password,
    }); 

   //  usuariostore.save((error, usuarioStoreDB) => {
   //      if(error){
   //          return res.status(400).json({
   //              ok:false,
   //              error
   //          });
   //      }
   //      res.json({
   //          ok : true,
   //          usuario: usuarioStoreDB
   //        });
   //  })
   lstUsers.push(oUser);
       res.json({
            ok : true,
            lstUsers: lstUsers
          });
    })
module.exports = app;