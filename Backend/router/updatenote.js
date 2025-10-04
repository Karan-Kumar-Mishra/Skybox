const express = require("express");
const updatanote = express.Router();
const db = require("../database/main");

updatanote.put("/", (req, res) => {


  if (req.body.email) {
    db.getid("email", req.body.email).then((id) => {
      db.updatanote(id, req.body.index, req.body.newnote)
        .then((ans) => {
          res.send({
            status: "ok",
          });
        })
        .catch((err) => {
          res.send({
            status: "error in updateing note" + err,
          });
        });
    });
  } else {
    res.send({
      error: "Invaild json!",
    });
  }
});

module.exports = updatanote;
