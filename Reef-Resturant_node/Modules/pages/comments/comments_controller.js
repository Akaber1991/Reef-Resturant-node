const express = require('express')
const commentsDb= require('./comments_db.js');

module.exports.CommentsPage= async(req,res) => {
  res.json(await commentsDb.commentsPageJson(req))
}
