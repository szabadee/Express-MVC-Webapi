const express = require('express');
const flats = express();
const models = require('../models');

// index 
flats.get('/', (req, res ) => { // 
  models.Flat.findAll()
  .then(flats => {
		res.json(flats);
	});
});

// show by ID
flats.get('/:id', (req, res) => {
  models.Flat.findById(req.params.id)
  .then(flat => {
		res.json(flat);
	});
});

// create
flats.post('/', (req, res) => {
	models.Flat.create({
	title: req.body.title,
  price: req.body.price,
  floorArea: req.body.floorArea,
  country: req.body.country,
  zip: req.body.zip,
  city: req.body.city,
  street: req.body.street })
  .then(flat => {
    res.json(flat);
  });
});

//  update
flats.put('/:id', (req, res) => {
	models.Flat.update(req.body,
	{ where: { id: req.params.id } })
  .then(flat => {
    res.json(flat);
  });
});
			 
// delete
flats.delete('/:id', (req, res) => {
	models.Flat.destroy(
	{ where: { id: req.params.id } })
	.then(flat => {
    res.json(flat);
  });
});

module.exports = flats;
