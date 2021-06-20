const express = require('express')
const router = express.Router();
const contactDb= require('./contact_us_db.js');



module.exports.ContactUsPage = async (req,res) => {
    res.json(await contactDb.ContactUsPageJson(req))
}
