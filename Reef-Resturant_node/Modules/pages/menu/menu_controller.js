const express = require('express')
const router = express.Router();
const menuDb=require ('./menu_db.js');



module.exports.MenuPage = async (req,res) => {
    res.json(await menuDb.MenuPageJson(req))
}
