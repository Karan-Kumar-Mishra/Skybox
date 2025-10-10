const express = require('express');
const checkDockerClient = express.Router();
const db = require('../database/main')

checkDockerClient.post('/', async (req, res) => {
    if (req.body.email) {
        db.getid("email", req.body.email).then((id) => {
            db.getuser("id", id).then((user) => {
                if (user) {
                    fetch(DOCKER_NODE).then(() => {
                        res.send({
                            status: "fs is running.. !"
                        }).status(200)
                    }).catch((err) => {
                        res.send({
                            error: "fs is not running.. !"
                        }).status(404)
                    })
                }
                else {
                    res.send({
                        error: "user is not found !"
                    })
                }
            })
        })
    }
    else {
        res.send({
            error: "Invaild json !"
        })
    }

});

module.exports = checkDockerClient;
