const express = require('express');
const { Bike } = require('../models/bike');
const router = express.Router();

router.get('/', function(req, res, next) {
  Bike.find().then(bikes => {
    res.render('bikes', { bikes });
  });
});

router.get('/:id', function(req, res, next) {
  Bike.find({ _id: req.params.id }).then(bikes => {
    res.render('bikes', { bikes });
  });
});

router.get('/new', function(req, res, next) {
  res.render('new-bike', { bike });
});

router.get('/:id/update', function(req, res, next) {
  Bike.findOne({ _id: id }).then(bike => {
    res.render('update-bike', { bike });
  });
});

router.post('/', function(req, res, next) {
  Bike.find({ _id: req.params.id }).then(bikes => {
    res.render('bikes', { bikes });
  });
});

router.get('/:id', function(req, res, next) {
  Bike.find({ _id: req.params.id }).then(bikes => {
    res.render('bikes', { bikes });
  });
});

module.exports = router;
