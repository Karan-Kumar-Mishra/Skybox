const express = require("express");
const deleteuser = express.Router();
const db = require("../database/main");
const service = require('../services/main');

deleteuser.delete("/", async (req, res) => {
  if (req.body.email) {
    
    await service.delete_file_backend(req.body.email);

    db.deleteuser(req.body.email)
      .then((dbRes) => {
        res.send({ status: "User deleted successfully", result: dbRes });
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
        res.status(500).send({ error: "Failed to delete user" });
      });
  } else {
    res.status(400).send({
      status: "Invalid JSON!",
    });
  }
});

module.exports = deleteuser;
