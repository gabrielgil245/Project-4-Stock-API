var express = require('express');
var router = express.Router();
const {Cash} = require('../lib/models');

/* GET cash balance. */
router.get('/', async function(req, res, next) {
  let currentCash = await Cash.findOne({})
  console.log(currentCash);
  res.json(currentCash);
});

// UPDATE - perform PUT request on http://localhost:3000/api/v1/cash/:id
router.put('/:id', async function(req, res, next) {
  console.log(req.body)
  console.log(req.params)

  let stock = await Cash.update(req.body, {
    where: {id: req.params.id}
  });
  res.json({stock})
});

module.exports = router;