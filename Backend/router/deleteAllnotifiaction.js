const express = require('express');
const deleteAllnotifiaction = express.Router();
const db = require('../database/main')
deleteAllnotifiaction.post('/', (req, res) => {
    db.deleteAllNotification(req.body.name).then((ans)=>{
           res.send({
                status:"ok"
            })
    }).catch((err)=>{
        res.send({
            status:"error"
        })
    })
})
module.exports =deleteAllnotifiaction;