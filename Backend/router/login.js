const express = require('express');
const login = express.Router();
const db = require('../database/main')

login.post('/', (req, res) => {
    if(req.body.email && req.body.password)
    {
        console.log(req.body.email)
        db.getuser("email",req.body.email).then((ans)=>{
          console.log("response=>",ans)//pending
    
        })
        res.send({
            status:"ok"
        });
    }
    else
    {
        res.send({
            error:"Invaild json !"
          }); 
    }
 
});

module.exports = login;
