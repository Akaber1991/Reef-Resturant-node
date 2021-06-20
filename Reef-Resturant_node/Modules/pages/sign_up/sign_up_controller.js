const express = require('express')
const router = express.Router();
const signUpDb=require ('./sign_up_db.js');



module.exports.SignUpPage = async (req,res) => {
    res.json(await signUpDb.SignUpPageJson(req))
}
