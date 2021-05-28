const express = require('express')
const router = express.Router();
const storyDb=require ('./the_story_db.js');



module.exports.StoryPage = async (req,res) => {
    res.json(await storyDb.StoryPageJson())
}
