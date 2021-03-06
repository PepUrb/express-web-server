var express = require('express');
var app = express();
var PORT = '3000';
var middleware = require('./middleware.js');


app.use(middleware.logger);

//app.use(middleware.requireAuthentication);     // Order is important!

// app.get('/', function (req, res) {
//   res.send('Hello Express!');
// });

app.get('/about', middleware.requireAuthentication, function (req, res) {
  res.send('<h1>About Us!</h1>');
});

app.use(express.static(__dirname + '/public'));

//console.log(__dirname);            //gives project path when run in console
app.listen(PORT, function () {
  console.log('Express server started at port ' + PORT + '!');
});
