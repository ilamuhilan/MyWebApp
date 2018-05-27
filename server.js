var express = require('express');

//var morgan = require('morgan');
//var path = require('path');
var path = require('path');
var app = express();

app.set('port',process.env.PORT || 8080 );

app.get('/', function (req, res) {
  
res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'pages', 'style.css'));
  });
  app.get('/styl.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'pages', 'styl.css'));
  });
  app.get('/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'pages', 'main.js'));
  });
  app.get('/coverpicCroped.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'Images', 'coverpicCroped.jpg'));
});
 app.get('/profilepiccroped.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'Images', 'profilepiccroped.jpg'));
});
  
  
  
app.listen(app.get('port'), function(){
	console.log('Express Started');
});
