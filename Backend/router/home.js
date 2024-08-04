const express = require('express');
const home = express.Router();

home.get('/', (req, res) => {
  res.send("Home router ..");
});

module.exports = home;
