const express = require('express');
const router = express.Router();
const Topics=require('../models/topics');

router.get('/', async (req,res) => {
    
    const topics = await Topics.find(); 
    res.json(topics);
    
})

router.get('/:id', async (req,res) => {
    
    const topic = await Topics.findById(req.params.id); 
    res.json(topic);
    
});

router.post('/', async (req, res)=>{
    const {title, description}= req.body;
    const topic=new Topics({title,description})
    await topic.save();
    res.json({status: "Topic saved"});
});

router.put('/:id', async (req,res)=>{
    const {title, description} = req.body;
    const newtopic = {title, description};
    await Topics.findByIdAndUpdate(req.params.id,newtopic)
    res.json("Topic updated");
});

router.delete('/:id', async (req,res)=>{
    await Topics.findByIdAndRemove(req.params.id)
    res.json("Topic removed");
});

module.exports = router;