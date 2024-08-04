const express = require('express');
const singup = express.Router();
const db = require('../database/main')


singup.post('/', (req, res) => {
  console.log(req.body)
    if(req.body.name && req.body.email && req.body.password)
    {
       db.getid(req.body).then((ans)=>{
        console.log("save the user =>",ans)
      })
      res.send({
        status:"ok"
      });
    }
    else
    {
      res.send({
        error:"Invaild json !"
      })
    }
 
});

module.exports = singup;
