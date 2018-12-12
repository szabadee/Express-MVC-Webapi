const express = require('express');
const flats = express();
const models = require('../models');

// index 
flats.get('/', (req, res ) => { // get metódust meghívjuk a flats változóra, megadjuk a resource-t
  models.Flat.findAll()         // a Flat modelben lévő összes elem keresése
  .then(flats => {              // promise ág: ha találattal tér vissza a findAll függvény akkor a flats változónak adja át
		res.json(flats);            // a flats tartalmát adja vissza json formátumba
	});
});

// show by ID
flats.get('/:id', (req, res) => {       // get HTTP metódust meghívjuk a flats változóra, megadjuk a resource-t
  models.Flat.findById(req.params.id)   // a Flat modelben lévő rekordokat megkeres a megadott ID alapján
  .then(flat => {                       // promise ág: ha találattal tér vissza a findByID függvény akkor a flats változónak adja át
		res.json(flat);                     // a flats tartalmát adja vissza json formátumban
	});
});

// create
flats.post('/', (req, res) => {         // a post HTTP metódust meghívjuk a flats változóra, megadjuk a resource-t
	models.Flat.create({                  // a Flat modelben létrehoz a create függvénnyel egy új rekordot, az attribútumokban elmenti a body-ban megadott értékeket
	title: req.body.title,
  price: req.body.price,
  floorArea: req.body.floorArea,
  country: req.body.country,
  zip: req.body.zip,
  city: req.body.city,
  street: req.body.street })
  .then(flat => {                       // promise ág: ha találattal tér vissza a findByID függvény akkor a flats változónak adja át
    res.json(flat);                     // a flats tartalmát adja vissza json formátumban
  });
});

//  update
flats.put('/:id', (req, res) => {       // a put HTTP metódust meghívjuk a flats változóra, megadjuk a resource-t
	models.Flat.update(req.body,          // a Flat modelben felülírja a bodyban tárolt értékeket,create függvénnyel egy új rekordot, az attribútumokban elmenti a body-ban megadott értékeket
	{ where: { id: req.params.id } })     // ahol az ID a megadott érték
  .then(flat => {                       // promise ág: ha találattal tér vissza a findByID függvény akkor a flats változónak adja át
    res.json(flat);                     // a flats tartalmát adja vissza json formátumban
  });
});
			 
// delete
flats.delete('/:id', (req, res) => {    // a delete HTTP metódust meghívjuk a flats változóra, megadjuk a resource-t
	models.Flat.destroy(                  // a Flat modelből töröljük azt a rekordot,
	{ where: { id: req.params.id } })     // amelyiknek megadtuk az ID-ját
	.then(flat => {                       // promise ág: ha találattal tér vissza a findByID függvény akkor a flats változónak adja át
    res.json(flat);                     // a flats tartalmát adja vissza json formátumban
  });
});

module.exports = flats;
