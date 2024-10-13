const express = require("express");
const deletenote = express.Router();
const db = require("../database/main");
deletenote.put("/", (req, res) => {
  if (req.body.email) {
    db.getid("email", req.body.email).then((id) => {
      db.deletenote(id, req.body.index).then((ans) => {
        //console.log(ans)
        if (ans.modifiedCount) {
          res.send({
            status: "ok",
          });
        } else {
          res.send({
            error: "notes is not found! ",
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
