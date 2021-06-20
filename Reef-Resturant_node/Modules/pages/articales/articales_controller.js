const express = require('express')
const router = express.Router();
const articalesDb= require('./articales_db.js');



module.exports.ArticalesPage = async (req,res) => {
    res.json(await articalesDb.ArticalesPageJson(req))
}
