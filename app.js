const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) { 
  res.status(200).sendFile('./html/index.html', { root: __dirname })
});

app.get('/js/us-map', function (req, res) { 
  res.status(200).sendFile('./js/maps/us.map.js', { root: __dirname })
});

app.get('/js/us-counties-map', function (req, res) { 
  res.status(200).sendFile('./js/maps/us-counties.map.js', { root: __dirname })
});

app.get('/js/highcharts-theme', function (req, res) { 
  res.status(200).sendFile('./js/themes/highcharts-theme.js', { root: __dirname })
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});
 
app.listen(port, function () {
  console.log('App started at http://localhost:' + port);
});

