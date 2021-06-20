const express = require('express')
const router = express.Router();
const managementDb=require ('./management_db.js');
const generalDB=require ('../../../generalDB.js');




module.exports.ManagementPage = async(req,res) => {
  if (req.session.userid && req.session.admin === 1) {
    return res.json(await managementDb.ManagemenPageJson(req));
  } else {
    return res.send("You can't access this page!");
  }
}



module.exports.managementUpdate = async (req, res) => {
  itemToUpdate = req.body.editObj;
  ids = req.body.ids;
  ids_string = ['('];
  ids_string.push(ids.join(','));
  ids_string.push(')')
  ids_string = ids_string.join('');
  result = await generalDB.query(`UPDATE \`management_items\` SET \`first_name\`='${itemToUpdate.first_name}', \`last_name\`='${itemToUpdate.last_name}', \`phone\`='${itemToUpdate.phone}' WHERE id IN ${ids_string}`);
  res.json(true);
}

module.exports.ManagementAdd = async (req, res) => {
  itemToAdd = req.body;
  result = await generalDB.query(`INSERT INTO \`management_items\` VALUES(NULL, '${itemToAdd.first_name}', '${itemToAdd.last_name}', '${itemToAdd.phone}')`);
  res.json({ "id": result.insertId });
}
