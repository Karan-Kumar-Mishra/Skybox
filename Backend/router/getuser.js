const express = require("express");
const getuser = express.Router();
const db = require("../database/main");
getuser.post('/',(req,res)=>{
    if(req.body.email)
    {
        db.getid("email",req.body.email).then((id)=>{
            db.getuser(id).then((user)=>{
                if(user)
                {
                    res.send(user)
                }
                else{
                    res.send({
                        error:"user is not found !"
                    })
                }
            })
        })
    }
    else
    {
        res.send({
            error:"Invaild json !"
        })
    }
})
module.exports=getuser;