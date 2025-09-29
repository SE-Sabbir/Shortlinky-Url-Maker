const express = require('express')
const { getUrl_controller } = require('../../controllers/getUrl')
const urlApi = express.Router()

urlApi.post('/sendlongurl' , getUrl_controller)


module.exports = urlApi