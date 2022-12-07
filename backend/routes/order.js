const mongoose = require('mongoose');
const express = require('express');
const order = require('../models/order');
const app = express();

    app.get('/orders', (req, res) => {
        
            order.find({ })
            .exec((error, data) => {
                if (error) {
                    return res.status(400).json({
                        ok: false,
                        error
                    });
                }
                
                    res.json({
                        ok: true,
                        data: data
                    });
                });
    });    

    app.get('/order/:id', (req, res, next) => {
        console.log(req.params)
        order.findById(req.params.id, (error, data) => {
                if (error) {
                    return next(error)
                } else {
                    res.json(data)
                }
            })
});   
    //POST
     app.post('/order',(req, res, next) => {
     console.log(req.body);
        order.create(req.body,(error, data) => {
            if(error){
                return next(error)
            } else {
                res.json(data)
            }
      })
    })
    app.put('/order',(req, res, next)  => {
        let body = req.body;
              order.findByIdAndUpdate(body.id, body, { new: true, runValidators: true }, (error, data) => {
                if(error){
                    return next(error)
                } else {
                    res.json(data)
                }
         })    
    });
    
    module.exports = app;