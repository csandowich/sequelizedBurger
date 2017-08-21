const express = require('express');
const router = express.Router();
const burgers = require('../models/')["burgers"];


router.get('/', function(req, res) {
  res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
  burgers.findAll({
      include: {
        burgers: data
      }
    })
    .then(function(data) {
      console.log(data);
      return res.render('index', {
        data
      });
    });
});
router.post('/burgers/create', function(req, res) {
  burgers.create({
      burger_name: req.body.burger_name
    })
    .then(function(newBurger) {
      console.log(newBurger);
      res.redirect('/');
    });
});
router.put("/burgers/update", function(req, res) {
  burgers.create({
      burger_name: req.body.burger_name
    })
    .then(function(newBurger) {
      console.log(newBurger);
      res.redirect('/');
    });
});

module.exports = router;
