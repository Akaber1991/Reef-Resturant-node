const express = require('express')
const router = express.Router();
const header=require ('../../parts/header/navbar/navbar_controller.js');
const footer=require ('../../parts/footer/footer_controller.js');

const generalDB=require ('../../../generalDB.js');


let FormLogIn = async () => {
  res = { "data": await generalDB.query("SELECT * FROM `management_items`"), "headers": await generalDB.query("SELECT * FROM `management_headers` WHERE `table_id`=0") };
  return res;
}


module.exports.ManagemenPageJson= async (req) => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.Navbar(req))
  +',"Content":'+JSON.stringify(await FormLogIn())+
  ',"Footer":'+JSON.stringify(footer.footerJson())+"}")
}
