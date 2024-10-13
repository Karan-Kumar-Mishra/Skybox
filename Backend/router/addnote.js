const express = require('express');
const addnote = express.Router();
const db = require('../database/main')

addnote.put('/', (req, res) => {
  if(req.body.email && req.body.notedata)
  {
    db.getid("email",req.body.email).then((id)=>{
    db.addnote(id,req.body.notedata).then((result)=>{
      if(result.modifiedCount)
        {
          res.send({
            status :"ok"
          });
        }
        else
        {
          res.send({
            error :"notes is not found"
          });
        }
      })
    }).catch((err)=>{
      res.send({
        error:"This user is not found"
      })
    })
  }
  else
  {
    res.send({
      error :"Invaild json!"
    });
  }
    
});

module.exports = addnote;
