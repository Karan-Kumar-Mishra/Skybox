const express = require("express");
const getFilsystemURL = express.Router();
const db = require("../database/main");
const Filsystem = require("../Filesystem/main")
getFilsystemURL.post("/", (req, res) => {
    if (req.body.email) {
        Filsystem.geturl().then((ans) => {
            return ans;
        })
        .catch((err) => {
                res.send({
                    error: "unable to create filesystem  !",
                });
        })
    } else {
        res.send({
            error: "Invaild json !",
        });
    }
});

module.exports = getFilsystemURL;
