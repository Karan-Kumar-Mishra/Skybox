const express = require("express");
const updatanote = express.Router();
const db = require("../database/main");

updatanote.put("/", (req, res) => {
  console.log(req.body);
  if (req.body.email && req.body.index && req.body.newnote) {
    db.getid("email", req.body.email).then((id) => {
      db.updatanote(id, req.body.index, req.body.newnote)
        .then((result) => {
          res.send({
            status: "update notes",
          });
        })
        .catch((err) => {
          res.send({
            error: "note is not found !",
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
