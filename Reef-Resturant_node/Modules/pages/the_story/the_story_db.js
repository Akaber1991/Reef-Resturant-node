const express = require('express')
const router = express.Router();
const header=require ('../../parts/header/navbar/navbar_controller.js');
const footer=require ('../../parts/footer/footer_controller.js');

module.exports.StoryPageJson= async () => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.Navbar())
  +',"Footer":'+JSON.stringify(footer.footerJson())+"}")
}
