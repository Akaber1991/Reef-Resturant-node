const express = require('express');
const app = express();
const articales=require('./Modules/pages/articales/articales_controller.js');
const business=require('./Modules/pages/business/business_controller.js');
const contactUs=require('./Modules/pages/contact_us/contact_us_controller.js');
const home=require('./Modules/pages/home/home_controller.js');
const story=require('./Modules/pages/the_story/the_story_controller.js');
const port = 8000;

app.get('/home', home.homePage);

app.get('/story',story.storypage);

app.get('/menuhome.', (req, res) => {
  res.send('Menu')
});
app.get('/business', business.BusinessPage);

app.get('/articales', articales.articalesPage);

app.get('/comments', (req, res) => {
  res.send('Comments')
});
app.get('/contactus',contactUs.contactUsPage);

app.get('/management', (req, res) => {
  res.send('Mangement')
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
