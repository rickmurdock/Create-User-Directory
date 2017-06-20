const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const port = 3001;
const app = express();

var userData = require('./data.js');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
  res.render('index', {userBox: userData});
})

app.listen(port, function() {
  console.log('Express user directory Started on port', port);
});
