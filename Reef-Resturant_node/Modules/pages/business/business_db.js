const express = require('express')
const router = express.Router();
// const businessJson=require ('./business.json');
const header=require ('../../parts/header/navbar/navbar_controller.js');
const footer=require ('../../parts/footer/footer_controller.js');
const generalDB=require ('../../../generalDB.js');

let Business = ()=> {
  return generalDB.query("SELECT * FROM articales_business_items INNER JOIN articales_business_list ON articales_business_items.cards_id=articales_business_list.id WHERE cards_id=2");
}

// let Content=()=>{
//   return JSON.parse('{"Steps":'+JSON.stringify(Steps())+',"Suggestion":'+JSON.stringify(Suggestion())
//     +',"Carousel":'+JSON.stringify(Carousel())+"}")
// }

module.exports.BusinessPageJson= async (req) => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.Navbar(req))
  +',"Content":'+JSON.stringify(await Business())+
  ',"Footer":'+JSON.stringify(footer.footerJson())+"}")
}
