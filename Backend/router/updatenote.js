const express = require("express");
const updatanote = express.Router();
const db = require("../database/main");

updatanote.put("/", (req, res) => {
  console.log(req.body);
  if (req.body.email && req.body.index && req.body.newnote) {
    db.getid("email", req.body.email).then((id) => {
       console.log("id=>",id);
       db.updatanote().then((result)=>{
        console.log("result",result)
       }).error((err)=>{
        console.log("error",err)
       })
    });
  } else {
    res.send({
      error: "Invaild json!",
    });
  }
});

module.exports = updatanote;
