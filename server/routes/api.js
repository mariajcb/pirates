var express = require(`express`);
var router = express.Router();
var knex = require(`../db/knex`);

/* GET home page. */
router.get(`/`, (req, res, next) => {
  console.log(`GETTING ALL===============`);
    knex(`pirates`)
    .then(pirates => {
        res.json(pirates)
    })
})

router.post(`/`, (req, res, next) => {
  console.log(`POSTING===============`);
  knex(`pirates`)
  .insert(req.body)
  .returning(`*`)
  .then(function(newPirate) {
    console.log(newPirate);
    res.json(newPirate)
  })
})

router.get(`/:id`, function(req, res, next) {
    knex(`pirates`)
        .where(`id`, req.params.id)
        .first()
        .then(function(pirate) {
          console.log(pirate);
          res.json(pirate)
        })
})

module.exports = router;
