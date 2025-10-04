const express = require("express");
const deleteuser = express.Router();
const db = require("../database/main");
const service = require('../services/main');

deleteuser.delete("/", (req, res) => {
  if (req.body.email) {

    service.delete_file_backend(req.body.email).then(() => {

      db.deleteuser(req.body.email)
        .then((dbRes) => {
          res.send({ status: "User deleted successfully", result: dbRes });
        })
        .catch((err) => {
          console.error("Error deleting user:", err);
          res.status(500).send({ error: "Failed to delete user" });
        });

    })
      .catch((err) => {
        console.error("Error deleting fs:", err);
        // res.status(500).send({ error: "Failed to delete user" });
      });


  } else {
    res.status(400).send({
      status: "Invalid JSON!",
    });
  }
});

module.exports = deleteuser;
