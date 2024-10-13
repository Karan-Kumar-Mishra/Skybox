const express = require("express");
const getnotes = express.Router();
const db = require("../database/main");
getnotes.post("/", (req, res) => {
  if (req.body.email) {
    db.getid("email",req.body.email).then((id) => {
      db.getnotes(id).then((note) => {
        res.send(note);
      }).catch((err)=>{
        res.send({
          error:"notes is not found"
        })
      })
    });
  } else {
    res.send({
      error: "Invaild json !",
    });
  }
});

module.exports = getnotes;
