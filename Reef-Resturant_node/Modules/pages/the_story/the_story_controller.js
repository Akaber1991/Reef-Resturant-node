const express = require('express')
const router = express.Router();
const storyDb=require ('./the_story_db.js');



module.exports.StoryPage = (req,res) => {
    res.json(storyDb.StoryPageJson())
}
