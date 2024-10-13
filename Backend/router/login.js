const express = require("express");
const login = express.Router();
const db = require("../database/main");
const pwd = require("../passoword-service/main");

login.post("/", (req, res) => {
  if (req.body.email && req.body.password) {
    db.getid("email", req.body.email).then((ans) => {
      db.getuser(ans).then((usr) => {
        pwd.mainobj
          .passwordcheck(req.body.password, usr.password)
          .then((result) => {
            if (result) {
              res.send({
                status: "ok",
              });
            } else {
              res.send({
                error: "Invaild password !",
              });
            }
          });
      });
    });
  } else {
    res.send({
      error: "Invaild json !",
    });
  }
});

module.exports = login;
