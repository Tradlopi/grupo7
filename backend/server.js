const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
var cors = require('cors');

const app = express()
app.use(cors());
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, X-Requested-With');
  res.header('Allow', 'GET, POST, PUT');
  next();
});
//Configuracion global de rutas
app.use(require('./routes/index'))
//   mongoose.connect(process.env.URLDB, {
//   useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify: false },(error, res) => {
//        if(error)throw error; 
//        console.log('Base de datos online');
//    });
   let server = http.createServer(app);

  server.listen("8080", () => {
console.log('Escuchando puerto', "8080")
})