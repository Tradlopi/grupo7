
const express = require('express')

const app = express()

app.use(require('./order'));
app.use(require('./login'));

module.exports = app;