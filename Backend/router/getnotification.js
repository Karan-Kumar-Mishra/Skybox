const express = require("express");
const getnotification = express.Router();
const db = require("../database/main");
getnotification.post("/", (req, res) => {
    db.getNotifications(req.body.name).then((ans)=>{   
        res.send(ans.Notifications)
    }).catch((err)=>{
        res.send({
            error:"User not found !"
        })
    })
});

module.exports = getnotification;
