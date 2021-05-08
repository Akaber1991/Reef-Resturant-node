const express = require('express');
const router = express.Router();
const jsonArticales=require ('./articales.json');

module.exports.articalesPage = (req,res) => {
    res.json(jsonArticales)
}
