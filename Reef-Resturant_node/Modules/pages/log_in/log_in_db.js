const express = require('express')
const router = express.Router();
const header=require ('../../parts/header/navbar/navbar_controller.js');
const footer=require ('../../parts/footer/footer_controller.js');

const generalDB=require ('../../../generalDB.js');


let FormLogIn =()=> {
  return generalDB.query("SELECT * FROM form_items INNER JOIN form_list ON form_items.form_id=form_list.id WHERE form_id=2");
}


module.exports.LogInPageJson= async (req) => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.Navbar(req))
  +',"Content":'+JSON.stringify(await FormLogIn())+
  ',"Footer":'+JSON.stringify(footer.footerJson())+"}")
}
