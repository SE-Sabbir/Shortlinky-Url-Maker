const express = require('express')
const { getUrl_controller } = require('../../controllers/getUrl')
const runUrl = require('../../controllers/runUrl')
const urlApi = express.Router()

urlApi.post('/sendLongUrl' , getUrl_controller)
urlApi.get('/:shortId' , runUrl)


module.exports = urlApi