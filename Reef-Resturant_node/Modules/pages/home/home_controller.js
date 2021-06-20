const express = require('express')
const router = express.Router();
const homeDb=require ('./home_db.js');



module.exports.HomePage = async (req,res) => {
    res.json(await homeDb.HomePageJson(req))
}
