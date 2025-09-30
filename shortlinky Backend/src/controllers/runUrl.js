const urlModel = require("../models/urlModel")

const runUrl =async (req ,res)=>{
    const {shortId} = req.params

    const existUrl =await urlModel.findOne({shortCode:shortId})

    if(!existUrl) return res.status(400).send('url not found')
    res.redirect(existUrl.longUrl)
}


module.exports = runUrl