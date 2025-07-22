const express = require('express');
const markprime = express.Router();
const db = require('../database/main')

markprime.post('/', (req, res) => {
    if (req.body.email) {
        db.makePrime(req.body.email).then((result) => {
            res.send({
                status: "ok",
            });
        })
    }
    else {
        res.send({
            error: "Invaild json!"
        });
    }

});

module.exports = markprime;
