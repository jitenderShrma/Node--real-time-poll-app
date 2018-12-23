const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

// db require
const Vote = require('../models/Vote');
var pusher = new Pusher({
  appId: '629653',
  key: '79e2a27b714b5f6c2038',
  secret: '2582e137e87283155907',
  cluster: 'ap2',
  encrypted: true
});


router.get('/',(req,res)=>{
  Vote.find().then(votes => res.json({success:true,votes:votes}));
});

router.post('/',(req,res)=>{
  const newVote = {
    points:1,
    os:req.body.os
  }
  new Vote(newVote).save().then(vote => {
    pusher.trigger('os-poll', 'os-vote', {
      points:parseInt(vote.points),
      os:vote.os
    });
    return res.json({success:true, message:'Thanks for you vote'})
  })
});
module.exports = router;
