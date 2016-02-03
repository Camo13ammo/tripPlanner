var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');
var routes = require('./routes');

var app = express();

var sassMiddleware = require('node-sass-middleware');
app.use(sassMiddleware({
   /* Options */
   src: __dirname + '/assets/',
   dest: __dirname + '/public/',
   debug: true
   // outputStyle: 'compressed'
}));

//swig set up
swig.setDefaults({cache: false});
app.engine('html', swig.renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

//logging and body-parsing
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//routing static files
app.use(express.static(__dirname + '/public'), function(req,res,next){
  next();
});
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));

app.use('/', routes);

//404 page not found
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//error handling
app.use(function(err, req, res, next){
	res.status(err.status || 500);
	//render some error html
	res.send(err.stack);
})

app.listen(3000, function(){
	console.log('listening on port 3000');
})