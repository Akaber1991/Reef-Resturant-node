const express = require('express')
const app = express();
var login = require('./login')
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.get('/contactus', (req, res) => {
  res.send('Contact Us')
});
// app.get('/login', (req, res) => {
//   res.send('Hello World!')
// });

app.use('/auth', login)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
