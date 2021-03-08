var express = require('express');
var router = express.Router();
const {Cash} = require('../lib/models');

/* GET cash balance. */
router.get('/', function(req, res, next) {
  res.send('respond with cash');
});

// UPDATE - perform UPDATE request on http://localhost:3000/api/v1/cash/:id
router.put('/:id', function(req, res, next) {
  console.log(req.body)
  console.log(req.params)

  // let cash = await Cash.update(req.body, {
  //   where: req.params.id
  // });
  // res.json({cash});

  res.json({success: true});
});

module.exports = router;