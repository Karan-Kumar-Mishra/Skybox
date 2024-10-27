const express = require("express");
const signup = express.Router();
const db = require("../database/main");

signup.post("/", (req, res) => {
  if (req.body.name && req.body.email) {
    db.adduser(req.body).then((ans) => {
      if (ans) {
        res.send({
          status: "ok",
        });
      }
    });
  } else {
    res.send({
      error: "Invaild json !",
    });
  }
});

module.exports = signup;
