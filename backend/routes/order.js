const express = require('express');
const order = require('../models/order');
const app = express();
    //Get
    const lstOrdenes = [
        {
            id: '1',
            noServicio: '1',
            fecha: '11/11/2022',
            ciudadEntrega: 'Barranquilla',
            direccionEntrega: 'Calle 1 #12-54',
            estado: 'Guardado'
        },
        {
            id: '2',
            noServicio: '2',
            fecha: '15/11/2022',
            ciudadEntrega: 'Bogotá',
            direccionEntrega: 'Carrera 13 #5-36',
            estado: 'Cancelado'
          },
          {
            id: '3',
            noServicio: '3',
            fecha: '20/12/2022',
            ciudadEntrega: 'Cartagena',
            direccionEntrega: 'Calle 1A #12-75',
            estado: 'Cumplido'
        }]

    app.get('/orders', (req, res) => {
        
        // userAdmin.find({ estado: 'PENDINGSTORE_STATE' }, 'nombre email role estado google')
        //     .skip(desde)
        //     .limit(limite)
        //     .exec((error, useradmins) => {
        //         if (error) {
        //             return res.status(400).json({
        //                 ok: false,
        //                 error
        //             });
        //         }
        //         userAdmin.count({ estado: true }, (err, conteo) => {
    
        //             res.json({
        //                 ok: true,
        //                 useradmins,
        //                 cuantos: conteo
        //             });
        //         });
        //     });
        res.json({
            ok: true,
            lstOrdenes,
        });
    });    
    //POST
     app.post('/order',(req, res) => {
     let body = req.body;
     let oOrder = new order({
        id: Math.random(),
         noServicio : body.noServicio,
         fecha : body.fecha,
         ciudadEntrega : body.ciudadEntrega,
         direccionEntrega : body.direccionEntrega,
         estado : body.estado
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
    lstOrdenes.push(oOrder);
        res.json({
             ok : true,
             lstOrdenes: lstOrdenes
           });
     })
    app.put('/order',(req, res)  => {
        //let id = req.params.id;
        let body = req.body;
        // const body = lstOrdenes.find((obj) => {
        //     return obj.id == id;
        //   });
        lstOrdenes.forEach( (element) => {
            if (element.id==body.id){
                element.id= body.id;
                element.noServicio = body.noServicio;
                element.fecha = body.fecha;
                element.ciudadEntrega = body.ciudadEntrega;
                element.direccionEntrega = body.direccionEntrega;
                element.estado = body.estado;
            }
            
        });
             res.json({
                ok : true,
                lstOrdenes: lstOrdenes
              }); 
        // userAdmin.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (error, usuarioDB) => {
        //     if (error) {
        //         return res.status(400).json({
        //             ok: false,
        //             error
        //         });
        //     }
        //     res.json({
        //         ok: true,
        //         usuario: usuarioDB
        //     });
        // })    
    });
    
    module.exports = app;