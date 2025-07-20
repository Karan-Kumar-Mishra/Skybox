const express = require('express');
const markprime = express.Router();
const db = require('../database/main')

markprime.post('/', (req, res) => {
    if (req.body.email) {
        db.markprime(req.body.email).then((result) => {
            if (result) {
                res.send({
                    status: "ok",
                });
            }
            else {
                res.send({
                    error: "notes is not found"
                });
            }
        })
    }
    else {
        res.send({
            error: "Invaild json!"
        });
    }

});

module.exports = markprime;
