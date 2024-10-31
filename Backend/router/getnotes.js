const express = require("express");
const getnotes = express.Router();
const db = require("../database/main");
getnotes.post("/", (req, res) => {
  console.log(req.body.email);
  if (req.body.email) {
    db.getid("email", req.body.email)
      .then((result) => {
        db.getnotes(result)
          .then((note) => {
            res.send(note);
          })
          .catch((err) => {
            res.send({
              status: "can not find the notes",
            });
          });
      })
      .catch((err) => {
        res.send({
          status: "User is not found !",
        });
      });
  } else {
    res.send({
      status: "Invaild json !",
    });
  }
});

module.exports = getnotes;
