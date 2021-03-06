var express = require('express');
var router = express.Router();

/* GET cash balance. */
router.get('/', function(req, res, next) {
  res.send('respond with cash');
});

module.exports = router;