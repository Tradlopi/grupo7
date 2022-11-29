import express from 'express'


const app = express()

app.set('port', 3007)

app.listen(app.get('port'),()=>{
    console.log('Servidor levantado en el puerto ',app.get('port'))
})

app.get('/',(req, res)=>{
    res.json({message: "BackEnd API"})
})

app.post('/',(req, res)=>{
    res.json({message: "Petición POST"})
})