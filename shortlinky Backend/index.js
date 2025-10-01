const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')
const route = require('./src/routes/routes')
const { default: mongoose } = require('mongoose')

// --------------middle ware-----------
app.use(cors())
app.use(express.json())
app.use(route)
// --------------db connection----------
mongoose.connect('mongodb+srv://testproject2404:222156hp@cluster0.qlehpzv.mongodb.net/testproject2404?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('db connected')
})
.catch((err)=>{
    console.log(err)
})
// --------------run port--------------
app.listen( port , (err)=>{
    if(err) return console.log(err)
        console.log(`This server running at ${port}`)
} )