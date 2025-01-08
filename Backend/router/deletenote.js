const express = require("express");
const deletenote = express.Router();
const db = require("../database/main");
deletenote.put("/", (req, res) => {
  if (req.body.email) {
    db.getid("email", req.body.email).then((id) => {
      db.deleteSingelnote(id, req.body.note_title).then((ans) => {
        console.log(ans);
        if (ans.acknowledged == true && ans.modifiedCount == 1) {
          res.send({
            status: "ok",
          });
        } else {
          res.send({
            error: "note is not found!",
          });
        }
      });
    });
  } else {
    res.send({
      error: "Invaild json !",
    });
  }
});

module.exports = deletenote;
