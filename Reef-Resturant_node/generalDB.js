const mysql = require('mysql');
const config = require('./config/config.json');
const util = require ('util');


// exports.module.dbTreatment=(DBquery)=>{
const connection = mysql.createConnection({
    host: config.DB_USER_CREDENTIALS.HOST,
    user: config.DB_USER_CREDENTIALS.USERNAME,
    password: config.DB_USER_CREDENTIALS.PASSWORD,
    database: config.DB_USER_CREDENTIALS.DBNAME,
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // connection.query(DBquery, function (err, result) {
  //   if (err) throw err;
  //   console.log("Results are: "+result);
  });
// });
// }
const query = util.promisify(connection.query).bind(connection);

module.exports = {query};
