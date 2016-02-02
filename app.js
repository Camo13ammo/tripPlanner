var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');
var routes = require('./routes');

var app = express();


//swig set up
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);


//logging and body-parsing
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



//routing static files
app.use('/', routes);


//404 page not found



//error handling
app.use(function(err, req, res, next){
	res. status(err.status || 500);
	//render some error html
})

app.listen(3000, function(){
	console.log('listening on port 3000');
})