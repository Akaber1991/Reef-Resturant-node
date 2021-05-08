const express = require('express')
const router = express.Router();
const galleryJson=require ('./gallery_json.json');
const header=require ('../../parts/header/navbar/navbar_controller.js');
const footer=require ('../../parts/footer/footer_controller.js');

let Gallery =()=> {
  return(galleryJson)
}

// let Content=()=>{
//   return JSON.parse('{"Steps":'+JSON.stringify(Steps())+',"Suggestion":'+JSON.stringify(Suggestion())
//     +',"Carousel":'+JSON.stringify(Carousel())+"}")
// }

module.exports.HomePageJson= () => {
  return JSON.parse('{"Header":'+JSON.stringify(header.navbarJson())
  +',"Content":'+JSON.stringify(Gallery())+
  ',"Footer":'+JSON.stringify(footer.footerJson())+"}")
}
