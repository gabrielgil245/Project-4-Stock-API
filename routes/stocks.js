var express = require('express');
var router = express.Router();

/* GET stocks listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a stock');
});

module.exports = router;