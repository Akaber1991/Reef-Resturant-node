const express = require('express')
const router = express.Router();
const homeDb=require ('./home_db.js');



module.exports.homePage = (req,res) => {
    res.json(homeDb.HomePageJson())
}
