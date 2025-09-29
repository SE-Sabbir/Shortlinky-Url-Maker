const express = require('express')
const urlApi = require('./api/url')
const route = express.Router()

route.use('/url' , urlApi)


module.exports = route