const express = require('express')
const router = express.Router();
const header=require ('../../parts/header/navbar/navbar_controller.js');
const footer=require ('../../parts/footer/footer_controller.js');
const generalDB=require ('../../../generalDB.js');

let ContactUs = ()=> {
  return generalDB.query("SELECT * FROM form_items INNER JOIN form_list ON form_items.form_id=form_list.id WHERE form_id=1");
  // return(articalesJson)
}


// let Content=()=>{
//   return JSON.parse('{"Steps":'+JSON.stringify(Steps())+',"Suggestion":'+JSON.stringify(Suggestion())
//     +',"Carousel":'+JSON.stringify(Carousel())+"}")
// }

module.exports.ContactUsPageJson= async (req) => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.Navbar(req))
  +',"Content":'+JSON.stringify(await ContactUs())+
  ',"Footer":'+JSON.stringify(footer.footerJson())+"}")
}
