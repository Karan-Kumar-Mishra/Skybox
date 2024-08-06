const express = require('express');
const deletenote = express.Router();

deletenote.put('/', (req, res) => {
  res.send({
    status:"deletenote"
  });
});

module.exports = deletenote;
