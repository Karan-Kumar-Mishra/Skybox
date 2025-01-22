const express = require('express');
const addnotifiaction = express.Router();
const db = require('../database/main')
addnotifiaction.post('/', (req, res) => {
   db.addNotification("testing").then((ans)=>{
    res.send(ans)
   }).catch((err)=>{
    res.send(err)
   })

})
module.exports =addnotifiaction