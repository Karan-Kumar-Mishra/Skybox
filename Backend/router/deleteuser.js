const express = require('express');
const deleteuser = express.Router();
const db = require('../database/main')
const pwd =require('../passoword-service/main')
deleteuser.delete('/',(req,res)=>{
    if(req.body.email && req.body.password)
    {
        db.getid("email",req.body.email).then((ans)=>{
            db.getuser(ans).then((usr)=>{   
                 pwd.mainobj.passwordcheck(req.body.password,usr.password).then((ans2)=>{
                    if(ans2)
                    {
                        db.deleteuser(ans).then((result)=>{
                            if(result.deletedCount)
                            {
                                res.send({
                                    status :"ok"
                                }) 
                            }
                        })
                    }
                    else
                    {
                        res.send({
                            error:"Invaild password !"
                        })
                    }
                 })
            }).catch((err)=>{
                res.send({
                    error:"User is not found !"
                })
            })
        })
    }
    else
    {
        res.send({
            status:"Invaild json !"
        })
    }
})
module.exports= deleteuser;