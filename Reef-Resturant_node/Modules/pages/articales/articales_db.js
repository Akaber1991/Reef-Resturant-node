const express = require('express')
const router = express.Router();
const header=require ('../../parts/header/navbar/navbar_controller.js');
const footer=require ('../../parts/footer/footer_controller.js');
const generalDB=require ('../../../generalDB.js');

let Articales = ()=> {
  return generalDB.query("SELECT * FROM articales_business_items INNER JOIN articales_business_list ON articales_business_items.cards_id=articales_business_list.id WHERE cards_id=1");
  // return(articalesJson)
}


// let Content=()=>{
//   return JSON.parse('{"Steps":'+JSON.stringify(Steps())+',"Suggestion":'+JSON.stringify(Suggestion())
//     +',"Carousel":'+JSON.stringify(Carousel())+"}")
// }

module.exports.ArticalesPageJson= async (req) => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.Navbar(req))
  +',"Content":'+JSON.stringify(await Articales())+
  ',"Footer":'+JSON.stringify(footer.footerJson())+"}")
}
