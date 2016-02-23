'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

// If db doesn't exist, mongo will create it for you
var db;

if(process.env.ENV === 'Test') {
  db = mongoose.connect('mongodb://localhost/bookAPI_test');
} else {
  db = mongoose.connect('mongodb://localhost/bookAPI');
}

var Book = require('./models/bookModel');
var bookRouter = require('./routes/bookRoutes')(Book);

var app = express();

// Two ways you can get port. One uses environment...
var port = process.env.PORT || 3000;

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/books', bookRouter);

// This is a way of creating very simple routes in express
// but more complex ones use the express router...
app.get('/', function(req, res) {
  res.send('Welcome to my API');
});

app.listen(port, function() {
  console.log('Gulp is running on PORT: ' + port);
});

module.exports = app;
