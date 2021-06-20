const express = require('express');
const app = express();
var mysql = require('mysql');

const home=require('./Modules/pages/home/home_controller.js');
const story=require('./Modules/pages/the_story/the_story_controller.js');
const menu=require('./Modules/pages/menu/menu_controller.js');
const business=require('./Modules/pages/business/business_controller.js');
const articales=require('./Modules/pages/articales/articales_controller.js');
const contactUs=require('./Modules/pages/contact_us/contact_us_controller.js');
const signUp=require('./Modules/pages/sign_up/sign_up_controller.js');
const logIn=require('./Modules/pages/log_in/log_in_controller.js');
const management=require('./Modules/pages/management/management_controller.js')
const session = require('express-session');
const comments=require('./Modules/pages/comments/comments_controller.js');
// const order=require('./Modules/pages/order/order_controller.js');
// const clubCard=require('./Modules/pages/club_card/club_card_controller.js');
const generalDB=require ('./generalDB.js');

const port = 8000;


// GET method route
const jsonParser = express.json()

// Init the session
app.use(session({ secret: 'keyboard reef', cookie: { maxAge: 6000000 } }))
app.use(express.static(__dirname + '/userid'));
app.use(express.static(__dirname + '/first_name'));
app.use(express.static(__dirname + '/last_name'));
app.use(express.static(__dirname + '/email'));
app.use(express.static(__dirname + '/phone'));
app.use(express.static(__dirname + '/admin'));
app.use(express.static(__dirname + '/picture_url'));

// Access the session as req.session
app.post('/logIn', jsonParser, async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    if (req.session.userid) {
      return res.send({ res: "You are already logged in please logout" });
    } else {
      result = await generalDB.query(`SELECT * FROM \`user\` WHERE \`email\`='${email}' and \`password\`='${password}'`);
      if (result.length !== 0) {
        req.session.userid = result[0]['iduser'];
        req.session.first_name = result[0]['fname'];
        req.session.last_name = result[0]['lname'];
        req.session.email = result[0]['email'];
        req.session.phone = result[0]['number'];
        req.session.admin = result[0]['admin'];
        req.session.picture_url = result[0]['picture_url'];
        return res.send({ res: true })
      }
      return res.send({ res: "Incorrect email or password" });
    }
  } else {
    return res.send({ res: "You need to enter the email and password" });
  }
});

app.get('/logout', (req, res) => {
  if (req.session.userid) {
    req.session.destroy((err) => {
      if (err) {
        return res.send(err);
      }
      return res.send({ res: true });
    });
  } else {
    return res.send({ res: false });
  }
});




app.get('/home', home.HomePage);
app.get('/story',story.StoryPage);
app.get('/menu',menu.MenuPage);
app.get('/business',business.BusinessPage);
app.get('/articales', articales.ArticalesPage);
app.get('/contactus',contactUs.ContactUsPage);
app.get('/signUp', signUp.SignUpPage);
app.get('/logIn', logIn.LogInPage);
app.get('/management', management.ManagementPage);
app.get('/comments', comments.CommentsPage);
// app.get('/order', order.);
// app.get('/clubCard', clubCard.);




app.delete('/management', jsonParser, async(req, res) => {
  ids = req.body.ids;
  ids.forEach(async (id) => {
    result = await generalDB.query('DELETE FROM `management_items` WHERE `id`=' + id);
  });
  res.send(true);
});

app.post('/management', jsonParser, management.ManagementAdd);
app.put('/management', jsonParser, management.managementUpdate);

app.post('/comments', jsonParser, async (req, res) => {
  if (!req.session || !req.session.userid) {
    res.json({"error": "Something went wrong"});
  }
  itemToAdd = req.body;
  result = await generalDB.query(`INSERT INTO \`comments\` VALUES('${itemToAdd.message}', NOW(), NULL, ${req.session.userid})`);
  res.json({ "id": result.insertId });
});

function isNumeric(str) {
  if (typeof str != "string") return false
  return !isNaN(str) &&
    !isNaN(parseFloat(str))
}

function checkStringForNumbers(input) {
  let str = String(input);
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str.charAt(i))) {
      return true;
    }
  }
}


app.post('/signUp', jsonParser, async (req, res) => {
  itemToAdd = req.body;
  if (!itemToAdd.fname || !itemToAdd.lname || !itemToAdd.email || !itemToAdd.phone || !itemToAdd.pwd) {
    return res.send({ res: "You need to fill in the whole form" });
  } else if (itemToAdd.phone.length != 10) {
    return res.send({ res: "Phone number should be length of 10" });
  } else if (!isNumeric(itemToAdd.phone)) {
    return res.send({ res: "Phone number should contains only number from 0-9" });
  } else if (checkStringForNumbers(itemToAdd.fname)) {
    return res.send({ res: "First name cant contain numbers!" });
  } else if (checkStringForNumbers(itemToAdd.lname)) {
    return res.send({ res: "Last name cant contain numbers!" });
  }
  checkEmail = await generalDB.query(`SELECT \`iduser\` FROM \`user\` WHERE \`email\`='${itemToAdd.email}'`);
  if (checkEmail.length !== 0) {
    return res.send({ res: "Email is already in use!" });
  }
  result = await generalDB.query(`INSERT INTO \`user\` VALUES(NULL, '${itemToAdd.fname}', '${itemToAdd.lname}', '${itemToAdd.phone}', '${itemToAdd.email}', '${itemToAdd.pwd}', 0, 'https://i.stack.imgur.com/l60Hf.png')`);
  return res.json({ "res": "Your account has been registered successfully" });
});






app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
