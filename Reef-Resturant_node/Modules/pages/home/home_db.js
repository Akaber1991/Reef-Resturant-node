const express = require('express')
const router = express.Router();
// const galleryJson=require ('./gallery_json.json');
// const carouselJson=require ('./carousel_json.json');
const header=require ('../../parts/header/navbar/navbar_controller.js');
const footer=require ('../../parts/footer/footer_controller.js');

const generalDB=require ('../../../generalDB.js');


let Gallery =()=> {
  return generalDB.query("SELECT * FROM gallery_items INNER JOIN gallery_list ON gallery_items.gallery_id=gallery_list.id WHERE gallery_id=1");
}
let Carousel =()=> {
return generalDB.query("SELECT * FROM introduction_items");
}

let Content= async ()=>{
  return JSON.parse('{"Gallery":'+JSON.stringify(await Gallery())+',"Carousel":'+JSON.stringify(await Carousel())
    +"}")
}

module.exports.HomePageJson= async (req) => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.Navbar(req))
  +',"Content":'+JSON.stringify(await Content())+
  ',"Footer":'+JSON.stringify(footer.footerJson())+"}")
}
