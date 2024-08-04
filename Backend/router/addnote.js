const express = require('express');
const addnote = express.Router();

addnote.get('/', (req, res) => {
  res.send("add note router ..");
});

module.exports = addnote;
