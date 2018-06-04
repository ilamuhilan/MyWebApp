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
 var counter = 0; 
app.get('/counter', function (req, res) {
    counter+=1;
    res.send(counter.toString());
    });

 var counter2 = 0; 
app.get('/counter2', function (req, res) {
    counter2+=1;
    res.send(counter2.toString());
    });

 var counter3 = 0; 
app.get('/counter3', function (req, res) {
    counter3+=1;
    res.send(counter3.toString());
    });

	
	//http://ranjithdss15.imad.hasura-app.io/submit-comment?comment=comment3
  var comments=[];
  var comments2=[];
var comments3=[];
app.get('/submit-comment/', function (req, res) {
    var comment= req.query.commentinput;
    comments.push(comment);
    res.send(JSON.stringify(comments));

  });
      app.get('/submit-comment2/', function (req, res) {
        var comment2= req.query.commentinput2;
    comments2.push(comment2);
    res.send(JSON.stringify(comments2));
  });
      app.get('/submit-comment3/', function (req, res) {
      var comment3= req.query.commentinput3;
    comments3.push(comment3);
    res.send(JSON.stringify(comments3));
    });

  
app.listen(app.get('port'), function(){
	console.log('Express Started');
});
