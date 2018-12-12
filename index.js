const express = require('express');
const app = express();
const models = require('./models');
const flats = require('./controllers/flats');
const bodyParser = require('body-parser');

app.get('/', (req, res, next) => {
  models.Flat.findAll().then(flats => {
    res.json(flats);
  });
  next();
});

app.use(bodyParser.urlencoded ( { extended: false } ));
//app.use('/flats', flats);

app.listen(3000);
