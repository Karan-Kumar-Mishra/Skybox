const express = require('express');
const feedback = express.Router();
const db = require('../database/main')

feedback.post('/', (req, res) => {
  console.log("we get request for feedback")
  console.log(req.body)
  res.send({
    status:"done"
  })
    
});

module.exports = feedback;
