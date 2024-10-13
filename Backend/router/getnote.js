const express = require("express");
const getnote = express.Router();
const db = require("../database/main");
getnote.post("/", (req, res) => {
  if (req.body.email && req.body.index) {
    db.getid("email", req.body.email).then((id) => {
      db.getnote(id, req.body.index).then((note) => {
        if (note) {
          res.send({ note });
        } else {
          res.send({ error: "note is found !" });
        }
      });
    });
  } else {
    res.send({
      error: "Invaild json !",
    });
  }
});

module.exports = getnote;
