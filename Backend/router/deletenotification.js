const express = require('express');
const deletenotifiaction = express.Router();
const db = require('../database/main')
deletenotifiaction.post('/', (req, res) => {
    db.deleteNotification(req.body.name,req.body.notification_id).then((ans)=>{
        if(ans.acknowledged && ans.modifiedCount)
        {
           res.send({
                status:"ok"
            })
        }
    }).catch((err)=>{
        res.send({
            status:"error"
        })
    })

})
module.exports =deletenotifiaction