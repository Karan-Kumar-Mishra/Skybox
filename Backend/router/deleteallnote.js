const express = require("express");
const deleteallnote = express.Router();
const db = require("../database/main");
deleteallnote.put("/", (req, res) => {
  if (req.body.email) {
    db.getid("email", req.body.email).then((id) => {
      db.deleteallnote(id).then((ans) => {
      
        if (ans.modifiedCount) {
          res.send({
            status: "ok",
          });
        } else {
          res.send({
            error: "note is not found !",
          });
        }
      });
    });
  } else {
    res.send({
      status: "Invaild json !",
    });
  }
});

module.exports = deleteallnote;
