var express = require('express');

//var morgan = require('morgan');
//var path = require('path');
var path = require('path');
var app = express();

app.set('port',process.env.PORT || 8080 );

app.get('/', function (req, res) {
  
res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});
app.listen(app.get('port'), function(){
	console.log('Express Started');
});
