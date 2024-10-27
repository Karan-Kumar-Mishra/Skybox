const express = require("express");
const deleteuser = express.Router();
const db = require("../database/main");
deleteuser.delete("/", (req, res) => {
  console.log("i got a delete request from",req.body);
  if (req.body.email) {
    db.deleteuser(req.body.email)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        return err;
      });
  } else {
    res.send({
      status: "Invaild json !",
    });
  }
});
module.exports = deleteuser;
