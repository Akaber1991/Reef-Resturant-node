const express = require('express')
const router = express.Router();
const businessDb=require ('./business_db.js');



module.exports.BusinessPage = async (req,res) => {
    res.json(await businessDb.BusinessPageJson())
}
