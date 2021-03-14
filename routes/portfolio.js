var express = require('express');
var router = express.Router();
const {Portfolio} = require('../lib/models');
const yahooStockPrices = require('yahoo-stock-prices');

// CREATE - perform POST request on http://localhost:3000/api/v1/portfolio
router.post('/', async function(req, res, next) {
  console.log(req.body);
  let stock = await Portfolio.create(req.body);
  res.json({stock});
});


// READ - perform GET request on http://localhost:3000/api/v1/portfolio
router.get('/', async function(req, res, next) {
  let items = await Portfolio.findAll({})
  console.log(items);
  res.json(items);
});

// READ - perform GET request on http://localhost:3000/api/v1/portfolio/:symbol
router.get('/:symbol', async function(req, res, next) {
  let stock = await Portfolio.findAll({
    where: {
      symbol: req.params.symbol
    }
  })
  console.log(stock);
  res.json(stock);
});

// READ - perform GET request on http://localhost:3000/api/v1/portfolio/search/:symbol
router.get('/search/:symbol', async function(req, res, next) {
  console.log(req.query);
  console.log(req.params);
  
  try {
    const data = await yahooStockPrices.getCurrentData(req.params.symbol);
    res.json({success: true, data: data})
  } catch(error) {
    res.json({success: false, data: {}})
  }
});

// UPDATE - perform PUT request on http://localhost:3000/api/v1/portfolio/:id
router.put('/:id', async function(req, res, next) {
  console.log(req.body)
  console.log(req.params)

  let stock = await Portfolio.update(req.body, {
    where: {id: req.params.id}
  });
  res.json({stock})
});

// DELETE - perform DELETE request on http://localhost:3000/api/v1/portfolio/:id
router.delete('/:id', async function(req, res, next) {
  console.log(req.params)

  let stock = await Portfolio.destroy({where: {id: req.params.id}});
  res.json({stock});
});

module.exports = router;