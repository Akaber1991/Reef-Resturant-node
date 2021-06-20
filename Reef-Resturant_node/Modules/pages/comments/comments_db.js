const express = require('express')
const header=require ('../../parts/header/navbar/navbar_controller.js');
const footer=require ('../../parts/footer/footer_controller.js');
const generalDB=require ('../../../generalDB.js');

let Comments = async () => {
  return await generalDB.query("SELECT * FROM comments JOIN user ON comments.userid = user.iduser");
}

module.exports.commentsPageJson =async (req)=>{
  return JSON.parse('{"Header":' + JSON.stringify(await header.Navbar(req))
    + ',"Content":' + JSON.stringify(await Comments())
    + ',"picture_url":' + (JSON.stringify(req.session.picture_url) || false)
    + ',"Footer":' + JSON.stringify(footer.footerJson()) + "}")
}
