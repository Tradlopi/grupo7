import express from 'express'
import mongoose from 'mongoose'

const app = express()

app.set('port', 8080)

app.listen(app.get('port'),()=>{
    console.log('Servidor levantado en el puerto ',app.get('port'))
})

app.get('/',(req, res)=>{
    res.json({message: "BackEnd API"})
})

app.post('/',(req, res)=>{
    res.json({message: "Petición POST"})
});

mongoose
    .connect('mongodb+srv://admin:MariMarin@cluster0.z44iqlc.mongodb.net/?retryWrites=true&w=majority')
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch((err) => {
        console.error('Error connecting to mongo', err.reason)
    })