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
router.put('/:id', async function(req, res, next) {
  console.log(req.body)
  console.log(req.params)

  let stock = await Stocks.update(req.body, {
    where: {id: req.params.id}
  });
  res.json({stock})
});

// DELETE - perform DELETE request on http://localhost:3000/api/v1/stocks/:id
router.delete('/:id', async function(req, res, next) {
  console.log(req.params)

  let stock = await Stocks.destroy({where: {id: req.params.id}});
  res.json({stock});
});

// READ - perform GET request on http://localhost:3000/api/v1/stocks
router.get('/', function(req, res, next) {
  res.send('respond with a stock');
});

module.exports = router;