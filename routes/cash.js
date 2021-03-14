var express = require('express');
var router = express.Router();
const {Cash} = require('../lib/models');

/* GET cash balance. */
router.get('/', async function(req, res, next) {
  let currentCash = await Cash.findOne({})
  console.log(currentCash);
  res.json(currentCash);
});

module.exports = router;