var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('GETTING===============');
    knex('pirates')
    .then(pirates => {
        res.json(pirates)
    })
})

router.post('/', (req, res, next) => {
  console.log('POSTING===============');
  knex('pirates')
  .insert(req.body)
  .returning('*')
  .then(function(newPirate) {
    console.log(newPirate);
    res.json(newPirate)
  })
})

module.exports = router;
