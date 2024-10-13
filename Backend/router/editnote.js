const express = require('express');
const editnote = express.Router();
const db= require('../database/main')

editnote.put('/', (req, res) => {
    console.log(req.body)
    if(req.body.email && req.body.index && req.body.newnote)
    {
        db.getid("email",req.body.email).then((id)=>{
            db.editnote(id,req.body.index,req.body.newnote).then((result)=>{
                result.modifiedCount ?  res.send({status:"ok" }) :  res.send({error:"notes is not found !" }); 
            })
        })
    }
    else
    {
        res.send({
            error:"Invaalid json !"
        });
    }
});

module.exports = editnote;
