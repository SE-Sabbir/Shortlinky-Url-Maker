const express = require('express')
const app = express()
const port = 8000
const cors = require('express')
const route = require('./src/routes/routes')

// --------------middle ware-----------
app.use(express.json())
app.use(cors)
app.use(route)
// --------------run port
app.listen( port , (err)=>{
    if(err) return console.log(err)
        console.log(`This server running at ${port}`)
} )