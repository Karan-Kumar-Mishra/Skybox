const express = require("express");
const feedback = express.Router();
const db = require("../database/main");

feedback.post("/", (req, res) => {
  db.saveFeedback(req.body).then((ans) => {
    if (ans) {
      res.send({
        status: "ok",
      });
    }
    else{
      res.send({
        error: "Error can not save your feedback !",
      });
    }
  });
});

module.exports = feedback;
