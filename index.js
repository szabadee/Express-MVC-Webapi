const express = require('express');
const app = express();
const models = require('./models');
const flats = require('./controllers/flats');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded ( { extended: false } ));

app.use('/', (req, res) => {
  models.Flat.findAll().then(flats => {
    res.json(flats);
  });
});

app.use('/flats', flats);

app.listen(3000);
