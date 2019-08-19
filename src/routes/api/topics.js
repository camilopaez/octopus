
const express = require('express');
const router = express.Router();
const Topics = require("../../models/topics");

router.get('/', async (req,res) => {
    
    const topics = await Topics.find(); 
    res.json(topics);
    
})
router.get('/:id', async (req, res) => {
    const topic = await Topics.findById(req.params.id);
    res.json(topic);
  });
  
  // ADD a new topic
  router.post('/', async (req, res) => {
    const {username, title, description,date } = req.body;
    const topic = new Task({username,title, description,date});
    await topic.save();
    res.json({status: 'Topic Saved'});
  });
  
  // UPDATE a new topic
  router.put('/:id', async (req, res) => {
    const { username, title, description,date } = req.body;
    const newTopic = {username,title, description,date};
    await Topics.findByIdAndUpdate(req.params.id, newTopic);
    res.json({status: 'Topic Updated'});
  });
  
  router.delete('/:id', async (req, res) => {
    await Topic.findByIdAndRemove(req.params.id);
    res.json({status: 'Topic Deleted'});
  });

  module.exports=router;