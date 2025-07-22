const express = require("express");
const getFilsystemURL = express.Router();
const db = require("../database/main");
const Filsystem =require("../Filesystem/main")
getFilsystemURL.post("/", (req, res) => {
    if (req.body.email) {
       Filsystem.getFilsystemURL()
    } else {
        res.send({
            error: "Invaild json !",
        });
    }
});

module.exports = getFilsystemURL;
