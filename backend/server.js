const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
var cors = require('cors')
//require("dotenv").config()
const app = express()

let bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
// app.all("/*", function(req, res, next){
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, X-Requested-With');
//   res.header('Allow', 'GET, POST, PUT');
//   next();
// });
//Configuracion global de rutas
app.use(require('./routes/index'))
mongoose
    .connect('mongodb+srv://admin:MariMarin@cluster0.hdund4z.mongodb.net/orderDB?retryWrites=true&w=majority')
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch((err) => {
        console.error('Error connecting to mongo', err.reason)
    })
   let server = http.createServer(app);

  server.listen("8080", () => {
console.log('Escuchando puerto', "8080")
})