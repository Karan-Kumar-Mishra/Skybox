const express = require('express');
const checkprime = express.Router();
const db = require('../database/main')

checkprime.post('/', (req, res) => {
    if (req.body.email) {
        
        db.isPrime(req.body.email).then((result) => {
            if (result) {
                res.send({
                    status: "ok",
                    ans: result
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

module.exports = checkprime;
