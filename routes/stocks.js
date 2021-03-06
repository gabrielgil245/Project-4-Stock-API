var express = require('express');
var router = express.Router();
const {Stocks} = require('../lib/models');

// CREATE - perform POST request on http://localhost:3000/api/v1/stocks
router.post('/', async function(req, res, next) {
  console.log(req.body);
  let stock = await Stocks.create(req.body);
  res.json({stock});
});

// UPDATE - perform PUT request on http://localhost:3000/api/v1/stocks/:id
router.put('/:id', function(req, res, next) {
  console.log(req.body)
  console.log(req.params)
  res.json({success: true});
});

// DELETE - perform DELETE request on http://localhost:3000/api/v1/stocks/:id
router.delete('/:id', function(req, res, next) {
  console.log(req.params)
  res.json({success: true});
});

// READ - perform GET request on http://localhost:3000/api/v1/stocks
router.get('/', function(req, res, next) {
  res.send('respond with a stock');
});

module.exports = router;