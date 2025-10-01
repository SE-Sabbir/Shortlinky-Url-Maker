const genrateRandomText = require("../helpers/genrateRandomText")
const urlModel = require("../models/urlModel")


const getUrl_controller = async (req , res)=>{

    try{
        const {longUrl} = req.body
        const randomText = genrateRandomText()
        
        await new urlModel({longUrl , shortCode: randomText}).save()
        
        res.status(200).send({longUrl:longUrl , shortUrl:`http://localhost:8000/url/${randomText}`})
    }
    catch(err){
        res.status(501).send({message:'internal server error' , error:err})
    }
}


module.exports = {getUrl_controller}