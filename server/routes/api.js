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
            res.json(pirate)
        })
})

router.put(`/:id`, function(req, res, next) {
    knex(`pirates`)
        .where(`id`, req.params.id)
        .first()
        .update(req.body)
        .then(function(pirate) {
            res.json('pirate updated')
        })
})

router.delete(`/:id`, function(req, res, next) {
  console.log(`DELETING=========`);
    knex(`pirates`)
        .where(`id`, req.params.id)
        .first()
        .del()
        .then(function() {
            res.json('pirate deleted')
        })
})


module.exports = router;
