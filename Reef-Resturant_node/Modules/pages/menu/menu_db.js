const express = require('express')
const router = express.Router();
// const menuJson=require ('./menu.json');
const header=require ('../../parts/header/navbar/navbar_controller.js');
const footer=require ('../../parts/footer/footer_controller.js');
const generalDB=require ('../../../generalDB.js');


let Menu =()=> {
  return generalDB.query("SELECT * FROM gallery_items WHERE gallery_id=2");
}

// let Content=()=>{
//   return JSON.parse('{"Steps":'+JSON.stringify(Steps())+',"Suggestion":'+JSON.stringify(Suggestion())
//     +',"Carousel":'+JSON.stringify(Carousel())+"}")
// }

module.exports.MenuPageJson= async () => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.Navbar())
  +',"Content":'+JSON.stringify(await Menu())+
  ',"Footer":'+JSON.stringify(footer.footerJson())+"}")
}
