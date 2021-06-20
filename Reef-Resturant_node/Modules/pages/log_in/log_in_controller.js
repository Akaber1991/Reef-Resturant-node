const express = require('express')
const router = express.Router();
const logInDb=require ('./log_in_db.js');



module.exports.LogInPage = async (req,res) => {
    res.json(await logInDb.LogInPageJson(req))
}
