const genrateRandomText = require("../helpers/genrateRandomText")
const urlModel = require("../models/urlModel")


const getUrl_controller = async (req , res)=>{

    const {longUrl} = req.body
    const randomText = genrateRandomText()
    
    await new urlModel({longUrl , shortCode: randomText}).save()
    
    console.log(randomText)
    res.status(200).send(`localhost:8000/url/${randomText}`)
}


module.exports = {getUrl_controller}