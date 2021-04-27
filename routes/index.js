const express = require('express');
const router = express.Router();
const mysql = require('../helper/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  mysql.query("SELECT * FROM user", (err, result) => {
    res.json(result);
  });
});

module.exports = router;
