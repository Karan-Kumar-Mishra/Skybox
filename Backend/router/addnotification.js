const express = require('express');
const addnotifiaction = express.Router();
const db = require('../database/main')
addnotifiaction.post('/', (req, res) => {
   db.addNotification("testing").then((ans)=>{
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
module.exports =addnotifiaction