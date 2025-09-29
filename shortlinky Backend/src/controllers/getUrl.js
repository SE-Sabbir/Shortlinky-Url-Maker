const genrateRandomText = require("../helpers/genrateRandomText")

const getUrl_controller = (req , res)=>{

    const {longUrl} = req.body
    const randomText = genrateRandomText()
    console.log(randomText)
    res.send(req.body)
}


module.exports = {getUrl_controller}