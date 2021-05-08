const express = require('express')
const router = express.Router();
const header=require ('../../parts/header/navbar/navbar_controller.js');
const footer=require ('../../parts/footer/footer_controller.js');

module.exports.StoryPageJson= () => {
  return JSON.parse('{"Header":'+JSON.stringify(header.navbarJson())
  +',"Footer":'+JSON.stringify(footer.footerJson())+"}")
}
