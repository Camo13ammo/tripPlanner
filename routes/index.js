var express = require('express');
var router = express.Router();
var Promise = require('bluebird');


var models = require('../models');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;


router.get('/', function(req, res, next){
	Promise.all([
		Hotel.find({}),
		Restaurant.find({}),
		Activity.find({})
	])
	.spread(function(hotels, restaurants, activities){
		res.render('index', {
			restaurants: restaurants,
			hotels: hotels,
			activities: activities
		})
	})
	.then(null, function (err) {
		console.log(err)
	});
})

module.exports = router;