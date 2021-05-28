const express = require('express');
const app = express();
var mysql = require('mysql');

const home=require('./Modules/pages/home/home_controller.js');
const story=require('./Modules/pages/the_story/the_story_controller.js');
const menu=require('./Modules/pages/menu/menu_controller.js');
const business=require('./Modules/pages/business/business_controller.js');
const articales=require('./Modules/pages/articales/articales_controller.js');
const contactUs=require('./Modules/pages/contact_us/contact_us_controller.js');


const port = 8000;


app.get('/home', home.HomePage);

app.get('/story',story.StoryPage);

app.get('/menu',menu.MenuPage);

app.get('/business',business.BusinessPage);

app.get('/articales', articales.ArticalesPage);

// app.get('/comments',);

app.get('/contactus',contactUs.contactUsPage);





app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
